

module.exports = function(eleventyConfig) {

    // add static passthrough
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("reveal");
    eleventyConfig.addPassthroughCopy("slides");

    eleventyConfig.addPassthroughCopy("favicon.ico");

    // add filters
    eleventyConfig.addFilter("cssmin", require("./plugins/clean-css.js") );
    eleventyConfig.addNunjucksAsyncFilter("jsmin", require("./plugins/clean-js.js"))

    // configure markdown engine
    let md = require("./plugins/customize-markdown.js")()
    eleventyConfig.setLibrary("md", md);
   
    // split master slide into collection
    eleventyConfig.addCollection("slides", col => {
        let slideCol = col.getFilteredByGlob("slides/index.md");
        let master = slideCol[0]
        let index = master.template.frontMatter.content.split(/\r?\n---\r?\n/)
        let slides = index.map(s => md.render(s))
        return slides
    });
    
 
    return {
        dir: {
            includes: "assets",
            layouts: "layouts"
        }

    };
};

