

Reveal.initialize({

	// width: '1500',
	// height: '900',

	width: '1000',
	height: '700',
	margin: '0.2',

	progress: true,
	overview: true,
	transition: 'cube',
	hideAddressBar: true,

	dependencies: [
		{ src: 'plugin/markdown/marked.js' },
		{ src: 'plugin/markdown/markdown.js' },
		{ src: 'plugin/notes/notes.js', async: true },
		{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
	]
});


