/* global describe, it, before, after, beforeEach, afterEach */

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config')();

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, webpackConfig.devServer || {});
const Browser = require('zombie');

describe('JDOM Headless Browser Testing\n', function() {
    Browser.localhost('localhost', 8080);
    const browser = new Browser();

    before(function(done) {
        this.timeout(10000);
        compiler.hooks.done.tap('done', () => {
            server.listen(8080, 'localhost', () => {
                console.log('\n');
                browser.visit('/index.html', done);
            });
        });
    });

    describe('Demo Page', function() {
        it('should load', function() {
            browser.assert.success();
        });
    });

    describe('Create / Update Element', function() {
        it('should create elements', function() {
            browser.assert.evaluate('createElements()');
        });

        it('should create svg elements', function() {
            browser.assert.evaluate('createSvgElements()');
        });

        it('should update an elements style', function() {
            browser.assert.evaluate('setStyle()');
        });
    });

    describe('Create / Manipulate SVG', function() {
        beforeEach(function() {
            browser.assert.evaluate('createSvgDocument()');
        });

        afterEach(function() {
            browser.assert.evaluate('removeSvgDocument()');
        });

        it('should manipulate SVG document', function() {
            browser.assert.evaluate('updateSvgDocument()');
        });
    });

    describe('Selector', function() {
        it('should select an element', function() {
            browser.assert.evaluate('selector()');
        });

        it('should add a class name to an element', function() {
            browser.assert.evaluate('addClass()');
        });

        it('should remove a class name from an element', function() {
            browser.assert.evaluate('removeClass()');
        });
    });

    after(function() {
        server.close();
    });
});
