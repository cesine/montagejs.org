montageDefine("30d32dc","apps/index.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Montage Apps</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body>\n\n    <header class=header-pages>\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class="nav-item active" href="/apps">Apps</a>\n                <a class=nav-item href="/docs">Docs</a>\n            </nav>\n        </div>\n    </header>\n\n	<section id=apps class="apps pushed">\n	    <article>\n	        <h3 class=title>Made with Montage</h3>\n	        <p>A gallery of Apps and demos built with Montage.</p>\n	        <ul class=gallery>\n	            <li class=gallery-item>\n	                <a href="https://chrome.google.com/webstore/detail/kjebfhglflhjjjiceimfkgicifkhjlnm" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/scratchpad.jpg" alt=Scratchpad></figure>\n	                    <figcaption class=gallery-description>Scratchpad (Chrome)</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="http://montagejs.github.com/montage/samples/paparazzi/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/paparazzi.jpg" alt=Paparazzi></figure>\n	                    <figcaption class=gallery-description>Paparazzi (Desktop)</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="http://montagejs.github.com/montage/samples/calculator/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/calculator.jpg" alt=Calculator></figure>\n	                    <figcaption class=gallery-description>Calculator (Phones + Tablets)</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="popcorn/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/popcorn.jpg" alt=Popcorn></figure>\n	                    <figcaption class=gallery-description>Popcorn (Tablets)</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="http://montagejs.github.com/montage/samples/carconfigurator/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/carconfigurator.jpg" alt="Car Configurator"></figure>\n	                    <figcaption class=gallery-description>Car Configurator</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="http://gweb-gettingstartedguide.appspot.com/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/TipsTricks.jpg" alt="Tips&amp;Tricks"></figure>\n	                    <figcaption class=gallery-description>Tips&amp;Tricks (Chrome OS)</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="http://montagejs.github.com/montage/samples/photofx/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/photoFX.jpg" alt=photoFX></figure>\n	                    <figcaption class=gallery-description>photoFX (Desktop)</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="http://todomvc.com/labs/architecture-examples/montage/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/ToDoMVC.jpg" alt=TodoMVC></figure>\n	                    <figcaption class=gallery-description>TodoMVC</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="http://montagejs.github.com/montage/samples/book-demo/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/book-demo.jpg" alt=FlipBook></figure>\n	                    <figcaption class=gallery-description>FlipBook (Tablets)</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="http://montagejs.github.com/mfiddle/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/mfiddle.jpg" alt=Mfiddle></figure>\n	                    <figcaption class=gallery-description>Mfiddle (Desktop)</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="http://montagejs.github.com/montage/samples/temp-converter/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/temp-converter.jpg" alt="Temp Converter"></figure>\n	                    <figcaption class=gallery-description>Temp Converter (WebKit)</figcaption>\n	                </a>\n	            </li>\n	        </ul>\n	        <p class=note><strong>Note:</strong> Most of these applications are running in development mode so you can view their source. These applications can be made ready for production with <a href="https://github.com/montagejs/mop" target=_blank>Mop, the Montage optimizer</a> which will bundle and minimize the resources into shards.</p>\n	    </article>\n	</section>\n\n\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>Create Montage Apps</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>For more infos how to create your own Montage Apps, head over to the <a href="https://github.com/montagejs/montage/wiki">Montage Docs</a>. With the <a href="https://github.com/montagejs/minit">Minit tool</a> you can kickstart your application by generating all files and basic structure. Or to start from scratch have a look at this <a href="https://github.com/montagejs/montage/wiki/Hello-Montage">Hello World</a> tutorial.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})