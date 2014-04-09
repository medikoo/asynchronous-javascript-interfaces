# Asynchronous JavaScript Interfaces
## March 2014, [meet.js](http://www.meetjs.pl) presentation slides & notes
Viewable at [medikoo.com/asynchronous-javascript-interfaces](http://medikoo.com/asynchronous-javascript-interfaces/?notes)

Made with [Bespoke.js](https://github.com/markdalgleish/bespoke.js) presentation engine and following plugins: [history](https://github.com/medikoo/bespoke-history#bespoke-history), [keys](https://github.com/markdalgleish/bespoke-keys#bespoke-keys), [notes](https://github.com/medikoo/bespoke-notes#bespoke-notes), [progress](https://github.com/markdalgleish/bespoke-progress#bespoke-progress), [substeps](https://github.com/medikoo/bespoke-substeps#bespoke-substeps), [sync](https://github.com/medikoo/bespoke-substeps#bespoke-sync), [touch](https://github.com/markdalgleish/bespoke-touch#bespoke-touch)

See also [plain-promise](https://github.com/medikoo/plain-promise) simplified (educational) implementation of promises made for this presentation to explain promises to newcomers

### To view presentation locally

	$ npm install
	$ npm start

By default slideshow would be served at port 8000. You can customize it and few other settings by providing `env.json` configuration file in main folder, following settings are supported:
* __dev__: (default: false), if true client file will be generated dynamically on each request (any changes made to client modules will be visible after page reload)
* __port__: (default: 8000), port at which slideshow would be served
* __sync__: (default: false), whether to sync slideshow among different browsers or tabs
* __root__: (default: "/") root url path of presentation
