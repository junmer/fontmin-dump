/**
 * @file test
 * @author junmer
 */

/* eslint-env node */

'use strict';

var assert = require('assert');
var fs =  require('fs');
var path = require('path');
var vfs = require('vinyl-fs');
var del = require('del');

var dump = require('../');

var outputPath = path.resolve(__dirname, 'output');
var fontName = 'SentyBrush';

before(function () {
    del(outputPath);
});

it('output shoud have `.html` and `.json`', function (done) {

    var fsOpt = {cwd: __dirname};

    var stream = vfs.src('fixtures/' + fontName + '.ttf', fsOpt)
        .pipe(dump({fontFamily: fontName})())
        .pipe(vfs.dest('output', fsOpt));


    stream.on('end', function () {

        var html = path.resolve(outputPath, fontName + '.html');
        assert(fs.existsSync(html));

        var json = path.resolve(outputPath, fontName + '.json');
        assert(fs.existsSync(json));

        done();
    });

});
