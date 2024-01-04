let jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

let $ = jQuery = require('jquery')(window);

$(function() {
    for (ele in $) {
        console.log(ele);
    }
    let jsonObj = $.parseJSON(`{"name": "홍길동"}`);
    console.log(jsonObj.name);
});