const markdown = require( "markdown" ).markdown
const fs = require('fs')
const beautify = require('js-beautify').html_beautify

let mdFile = 'resume.md'
let templeteFile = 'templete.html'
let finalFile = 'index.html'

let mdText = fs.readFileSync(mdFile, 'utf8')

let parsedHTML = markdown.toHTML(mdText)

let templeteHTML = fs.readFileSync(templeteFile, 'utf8')

let finalHTML = templeteHTML.replace('{{ content }}', parsedHTML)

fs.writeFileSync(finalFile, beautify(finalHTML, { indent_size: 2 }), 'utf8')