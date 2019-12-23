const withDefauilts = require('./utils/default-options');

module.exports = options => {
  const { contentPath, useExternalMDX } = withDefauilts(options);

  return {
    plugins: [
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'gatsby-theme-docs',
          path: contentPath,
        },
      },
      !useExternalMDX && {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve('./src/components/layout.js'),
          },
        },
      },
    ].filter(Boolean),
  };
};
