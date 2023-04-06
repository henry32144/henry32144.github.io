exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
      type Mdx implements Node {
        frontmatter: MdxFrontmatter!
      }
      type MdxFrontmatter {
        hero_image: File @fileByRelativePath
      }
    `);
};
