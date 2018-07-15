// old jsdom
//var jsdom = require("jsdom/lib/old-api.js");
//var fs = require("fs");
//var jQuery = fs.readFileSync("./node_modules/jquery/dist/jquery.min.js", "utf-8");
//var tinyMCE = fs.readFileSync("./node_modules/tinymce/tinymce.min.js", "utf-8");
//var tinyMCETheme = fs.readFileSync("./node_modules/tinymce/themes/inlite/theme.min.js", "utf-8");
//jsdom.env({
//    html: '<!DOCTYPE html><body><textarea id="inputParagraph">Wht about now</textarea></body></html>',
//    scripts: ["http://localhost:9000/lib/jquery/dist/jquery.js", "http://localhost:9000/lib/tinymce/tinymce.min.js"],
//    src: [jQuery, tinyMCE, tinyMCETheme],
//    done: function (err, window) {
//        var $ = window.$;
//        var tinyMCE = window.tinyMCE;

//        //tinyMCE.init({
//        //    selector: "textarea",
//        //    height: 100,
//        //    theme: false,
//        //    setup: function (ed) {
//        //        ed.on('init', function () {
//        //            //console.log("what the heck ??? init");
//        //        });
//        //    }
//        //});
//        //console.log(tinyMCE.activeEditor.getContent());

//        console.log(window);
//    }
//});

var roundTrip = function (html) {
    var jsdom = require("jsdom/lib/old-api.js");
    jsdom.env({
        html: '<!DOCTYPE html><body><textarea></textarea></body></html>',
        scripts: ["http://localhost:9000/lib/jquery/dist/jquery.js", "http://localhost:9000/lib/tinymce/tinymce.min.js"],
        done: function (err, window) {

            var tinyMCE = window.tinyMCE;
            tinyMCE.init({
                selector: "textarea",
                theme: false
            });
            return console.log(tinyMCE.activeEditor.setContent(html));
        }
    });
}

roundTrip("Tell the world that we finally get it alright.");

console.log('Press any key to exit');
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));