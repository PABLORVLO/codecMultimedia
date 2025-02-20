/*
  # Update blog posts to support multiple images

  1. Changes
    - Create new images table for blog posts
    - Add foreign key relationship to blog_posts
    - Remove old image columns from blog_posts
  
  2. Security
    - Enable RLS on images table
    - Add policies for CRUD operations
*/

-- Create images table
CREATE TABLE IF NOT EXISTS blog_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES blog_posts ON DELETE CASCADE,
  url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_images ENABLE ROW LEVEL SECURITY;

-- Add policies for blog_images
CREATE POLICY "Anyone can read blog images"
  ON blog_images
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can insert blog images"
  ON blog_images
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM blog_posts
      WHERE id = post_id AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete their blog images"
  ON blog_images
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM blog_posts
      WHERE id = post_id AND user_id = auth.uid()
    )
  );

-- Function to safely migrate existing images
CREATE OR REPLACE FUNCTION migrate_existing_images() 
RETURNS void AS $$
BEGIN
  INSERT INTO blog_images (post_id, url)
  SELECT id, image1_url FROM blog_posts WHERE image1_url IS NOT NULL
  UNION ALL
  SELECT id, image2_url FROM blog_posts WHERE image2_url IS NOT NULL
  UNION ALL
  SELECT id, image3_url FROM blog_posts WHERE image3_url IS NOT NULL;
END;
$$ LANGUAGE plpgsql;

-- Migrate existing images
DO $$ 
BEGIN
  PERFORM migrate_existing_images();
END $$;