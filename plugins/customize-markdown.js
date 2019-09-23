
module.exports =  function CustomizeMD() {

   // configure syntax highlighting
   let hljs = require('highlightjs'); 

   let highlight = function (str, lang) {
       let formatted = str
   
       // parse language if we got one - if we fail, just escape
       if (lang && hljs.getLanguage(lang)) {
           try {
               formatted = hljs.highlight(lang, str, true).value
           } catch (__) {
               formatted = md.utils.escapeHtml(str)
           }
       }
   
       return `<pre class="hljs"><code>${formatted}</code></pre>`;
   }

  // set markdown defaults (inline so we can extend)
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    highlight: highlight
  };
  
  let md = markdownIt(options)

  return md
}

  