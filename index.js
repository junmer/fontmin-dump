/**
 * @file dump fontmin plugin
 * @author junmer
 */

var fs = require('fs');
var path = require('path');
var through = require('through2');
var extend = require('xtend');
var replaceExt = require('replace-ext');
var b2ab = require('b3b').b2ab;
var _ = require('lodash');
var ttf2icon = require('fonteditor-core').ttf2icon;


/**
 * preview tpl
 *
 * @type {string}
 */
var tpl = fs.readFileSync(path.resolve(__dirname, 'preview.tpl'), 'utf-8');

/**
 * renderTpl
 *
 * @type {Function}
 */
var renderTpl = _.template(tpl);

/**
 * dump fontmin plugin
 *
 * @param {Object} opts opts
 * @return {Object} stream.Transform instance
 * @api public
 */
module.exports = function (opts) {

    opts = opts || {};

    return through.ctor({
        objectMode: true
    }, function (file, enc, cb) {

        // check null
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        // check stream
        if (file.isStream()) {
            cb(new Error('Streaming is not supported'));
            return;
        }

        // check ttf
        if (path.extname(file.path) !== '.ttf') {
            cb(null, file);
            return;
        }

        // clone
        this.push(file.clone());

        // font icon data
        var fontData = ttf2icon(b2ab(file.contents), opts);
        fontData = extend(fontData, opts);

        // json
        var json = file.clone();
        json.path = replaceExt(json.path, '.json');
        json.contents = new Buffer(JSON.stringify(fontData.glyfList, '', 4));
        this.push(json);

        // html
        file.path = replaceExt(file.path, '.html');
        var output = _.attempt(function (data) {
            return new Buffer(renderTpl(data));
        }, fontData);

        if (_.isError(output)) {
            cb(output, file);
        }
        else {
            file.contents = output;
            cb(null, file);
        }


    });

};
