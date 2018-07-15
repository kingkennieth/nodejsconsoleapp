// new jsdom

//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;

//const options = {
//    resources: "usable",
//    runScripts: "dangerously"
//};
//JSDOM.fromURL("http://localhost:9000/", options).then(dom => {
//    console.log(dom.window);
//});
//// jQuery.
//var $ = require("jquery")(dom.window);

//global.window = dom.window;
//global.document = dom.window.document;
//Object.keys(document.defaultView).forEach((property) => {
//    if (typeof global[property] === 'undefined') {
//        global[property] = document.defaultView[property];
//    }
//});

//global.navigator = {
//    userAgent: 'node.js'
//};

//global.URL = {
//    createObjectURL: function (input) { return input; }
//};

//var tiny = require("tinymce/tinymce");
//console.log(tiny);

//var tinyMCE = dom.window.tinyMCE;

//tinyMCE.init({
//    selector: "textarea",
//    theme: false
//});


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

roundTrip('<p><span style="font - family: Verdana; font - size: 13.3333px;">Also, we will have many customers installing and running the same software. So if the product goes out with bugs, we will have to handle a large number of support requests and issue a large amount of patches. Different customers will be running our software in different environments (different databases, different versions of office on the server etc.) so, although we do our best to test on all possible combinations, we must make sure the design is not a &lsquo;brittle&rsquo; one which is dependent on a specific operating environment, but one that is standards-based and likely to function correctly even in environments we hadn&rsquo;t foreseen.</span></p>Also, we will have many customers installing and running the same software. So if the product goes out with bugs, we will have to handle a large number of support requests and issue a large amount of patches. Different customers will be running our software in different environments (different databases, different versions of office on the server etc.) so, although we do our best to test on all possible combinations, we must make sure the design is not a ‘brittle’ one which is dependent on a specific operating environment, but one that is standards-based and likely to function correctly even in environments we hadn’t foreseen.');

console.log('Press any key to exit');
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));