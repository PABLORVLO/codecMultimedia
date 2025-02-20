/*
  # Update blog posts table structure
  
  1. Changes
    - Remove NOT NULL constraints from image columns
    - Drop old image columns after data migration
  
  2. Security
    - Maintain existing RLS policies
*/

-- First, remove the NOT NULL constraints
ALTER TABLE blog_posts 
  ALTER COLUMN image1_url DROP NOT NULL,
  ALTER COLUMN image2_url DROP NOT NULL,
  ALTER COLUMN image3_url DROP NOT NULL;

-- After migrating data (which is done in the previous migration),
-- we can safely drop these columns
ALTER TABLE blog_posts 
  DROP COLUMN image1_url,
  DROP COLUMN image2_url,
  DROP COLUMN image3_url;