// in Terminal : npm install jquery jsdom

let jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

let $ = jQuery = require('jquery')(window);

$(function() {
    console.log('hello jquery!');
});