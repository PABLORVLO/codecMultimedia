/*
  # Add public access to blog posts

  1. Changes
    - Add policy to allow public access to blog posts for reading
  
  2. Security
    - Maintains existing RLS policies for authenticated users
    - Adds new policy for public read access
*/

CREATE POLICY "Allow public read access to blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (true);