/* javascript test bed */

const {JSDOM} = require("jsdom");
const {window} = new JSDOM();
const {document} = new JSDOM("").window;
global.document = document;
const $ = require("jquery")(window);

$.get({
    url: 'http://172.30.1.34:9999/ajaxTest/members.json',
    success: function(data) {
        console.log(data);
    }
});