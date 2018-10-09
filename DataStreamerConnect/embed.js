(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "./",
    "verprefix": "",
    "workerjs": "./worker.js",
    "monacoworkerjs": "./monacoworker.js",
    "pxtVersion": "3.22.18",
    "pxtRelId": "",
    "pxtCdnUrl": "./",
    "commitCdnUrl": "./",
    "blobCdnUrl": "./",
    "cdnUrl": "./",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "DataStreamerConnect",
    "simUrl": "./simulator.html",
    "partsUrl": "./siminstructions.html",
    "runUrl": "./run.html",
    "docsUrl": "./docs.html",
    "isStatic": true
};

    var scripts = [
        "./highlight.js/highlight.pack.js",
        "./bluebird.min.js",
        "./semantic.js",
        "./marked/marked.min.js",
        "./target.js",
        "./pxtembed.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("./jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
