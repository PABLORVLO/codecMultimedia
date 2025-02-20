import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { X, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data: postsData, error: postsError } = await supabase
        .from('blog_posts')
        .select('id, title, description, date')
        .order('date', { ascending: false });

      if (postsError) throw postsError;

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
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('No se pudieron cargar las actividades. Por favor, intente más tarde.');
    }
  };

  const handleImageClick = (imageUrl: string, post: BlogPost, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
    setCurrentPost(post);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
    setCurrentPost(null);
    document.body.style.overflow = 'unset';
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPost && currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
      setSelectedImage(currentPost.images[currentImageIndex - 1]);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPost && currentImageIndex < currentPost.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
      setSelectedImage(currentPost.images[currentImageIndex + 1]);
    }
  };

  const openPostModal = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePostModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4 hover-glow">Blog de Actividades</h1>
            <p className="text-lg text-gray-300">Descubre nuestras últimas actividades y eventos</p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center text-gray-300 py-16 bg-black border border-red-600 rounded-lg">
              <p className="text-xl">No hay actividades publicadas aún.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-black border border-red-600 rounded-xl overflow-hidden card-hover"
                >
                  {post.images.length > 0 && (
                    <div 
                      className="relative h-64 cursor-pointer group"
                      onClick={() => handleImageClick(post.images[0], post, 0)}
                    >
                      <img
                        src={post.images[0]}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-2 text-red-500" />
                      {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <button
                      onClick={() => openPostModal(post)}
                      className="text-red-500 hover:text-red-400 font-medium transition-colors duration-300 flex items-center"
                    >
                      Leer más →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closePostModal}
        >
          <div 
            className="bg-black border border-red-600 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-animation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {selectedPost.images.length > 0 && (
                <img
                  src={selectedPost.images[0]}
                  alt={selectedPost.title}
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
                  }}
                />
              )}
              <button
                onClick={closePostModal}
                className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Calendar className="h-5 w-5 mr-2 text-red-500" />
                {format(new Date(selectedPost.date), "d 'de' MMMM, yyyy", { locale: es })}
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">{selectedPost.title}</h2>
              
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-gray-300 leading-relaxed">{selectedPost.description}</p>
              </div>

              {selectedPost.images.length > 1 && (
                <div>
                  <h3 className="text-xl font-semibold text-red-500 mb-4">Galería de Imágenes</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedPost.images.map((url, index) => (
                      <div
                        key={index}
                        className="relative cursor-pointer group"
                        onClick={() => handleImageClick(url, selectedPost, index)}
                      >
                        <img
                          src={url}
                          alt={`Imagen ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-end">
                <button
                  onClick={closePostModal}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Viewer Modal */}
      {selectedImage && currentPost && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseImage}
        >
          <div className="relative max-w-6xl w-full mx-auto">
            <button
              onClick={handleCloseImage}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-300 z-50"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="relative">
              {currentImageIndex > 0 && (
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors duration-300 z-50"
                >
                  <ChevronLeft className="h-10 w-10" />
                </button>
              )}

              <img
                src={selectedImage}
                alt={currentPost.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
                }}
              />

              {currentImageIndex < currentPost.images.length - 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors duration-300 z-50"
                >
                  <ChevronRight className="h-10 w-10" />
                </button>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-white text-xl font-bold mb-2">{currentPost.title}</h3>
              <p className="text-gray-300 text-sm">
                {format(new Date(currentPost.date), "d 'de' MMMM, yyyy", { locale: es })}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Blog;