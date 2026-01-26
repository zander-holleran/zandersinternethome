module.exports = function(eleventyConfig) {
  // Pass through assets folder
  eleventyConfig.addPassthroughCopy("src/assets");

  // Pass through CNAME for GitHub Pages custom domain
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // YouTube embed shortcode
  eleventyConfig.addShortcode("youtube", function(videoId) {
    return `<div class="video-embed">
      <iframe src="https://www.youtube.com/embed/${videoId}"
              frameborder="0" allowfullscreen loading="lazy"></iframe>
    </div>`;
  });

  // Date formatting filter
  eleventyConfig.addFilter("dateFormat", function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Collection of ALL articles sorted by date (newest first)
  eleventyConfig.addCollection("allArticles", function(collection) {
    return collection.getFilteredByGlob("src/articles/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Note: 11ty automatically creates collections for each tag
  // collections.mind = all articles with "mind" in tags
  // collections.body = all articles with "body" in tags

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
