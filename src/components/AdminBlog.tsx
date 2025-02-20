import React, { useEffect, useState } from 'react';
import { supabase, signOut } from '../lib/supabase';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, Trash2, Image as ImageIcon } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
}

const AdminBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<string[]>(['']);
  const [isAdding, setIsAdding] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchPosts();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/login');
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  const fetchPosts = async () => {
    try {
      // Fetch posts
      const { data: postsData, error: postsError } = await supabase
        .from('blog_posts')
        .select('id, title, description, date')
        .order('date', { ascending: false });

      if (postsError) throw postsError;

      // Fetch images for each post
      const postsWithImages = await Promise.all(
        (postsData || []).map(async (post) => {
          const { data: imagesData } = await supabase
            .from('blog_images')
            .select('url')
            .eq('post_id', post.id)
            .order('created_at', { ascending: true });

          return {
            ...post,
            images: (imagesData || []).map(img => img.url)
          };
        })
      );

      setPosts(postsWithImages);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { data: { session } } = await supabase.auth.getSession();
    
    try {
      // Insert post
      const { data: postData, error: postError } = await supabase
        .from('blog_posts')
        .insert([
          {
            title,
            description,
            date: new Date().toISOString(),
            user_id: session?.user.id,
          },
        ])
        .select()
        .single();

      if (postError) throw postError;

      // Insert images
      const validImages = images.filter(url => url.trim() !== '');
      if (validImages.length > 0) {
        const { error: imagesError } = await supabase
          .from('blog_images')
          .insert(
            validImages.map(url => ({
              post_id: postData.id,
              url: url.trim()
            }))
          );

        if (imagesError) throw imagesError;
      }

      setTitle('');
      setDescription('');
      setImages(['']);
      setIsAdding(false);
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleDelete = async (id: string) => {
    // The blog_images will be automatically deleted due to ON DELETE CASCADE
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting post:', error);
    } else {
      fetchPosts();
    }
  };

  const handleAddImageField = () => {
    setImages([...images, '']);
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const handleRemoveImageField = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages.length ? newImages : ['']);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isAdding ? (
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center mb-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Nueva Actividad
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Nueva Actividad</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded"
                rows={4}
                required
              />
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">Imágenes</label>
                  <button
                    type="button"
                    onClick={handleAddImageField}
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Agregar imagen
                  </button>
                </div>
                {images.map((url, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="flex-1">
                      <input
                        type="url"
                        placeholder="URL de la imagen"
                        value={url}
                        onChange={(e) => handleImageChange(index, e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    {url && (
                      <img
                        src={url}
                        alt="Preview"
                        className="h-10 w-10 object-cover rounded"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
                        }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => handleRemoveImageField(index)}
                      className="text-red-600 hover:text-red-800 p-2"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsAdding(false);
                    setTitle('');
                    setDescription('');
                    setImages(['']);
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Publicar
                </button>
              </div>
            </div>
          </form>
        )}

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900">Actividades Publicadas</h3>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {posts.map((post) => (
                <li key={post.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-gray-900 truncate">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="ml-4 text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {post.images.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt={`Imagen ${index + 1}`}
                        className="h-24 w-full object-cover rounded"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
                        }}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBlog;