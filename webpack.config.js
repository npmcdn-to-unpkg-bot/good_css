var path = require('path');

module.exports = {
		context: __dirname,
    entry:  {
    	custom: './entrypoints/custom.js',
    	bootstrap: './entrypoints/bootstrap.js',
    	foundation: './entrypoints/foundation.js',
    	// Hack to have changing the html reload the page
    	hack: './projects/hacker_news/custom/index.html'
    },
    output: {
    	path: './builds',
			filename:  "[name].builds.js"
    },
    module: {
    	loaders: [
    		{
    			test:    /\.js/,
    			loader:  'babel',
				},
    		{
				    test:   /\.scss/,
				    loaders: ['style', 'css', 'sass'],
				},
				{
				    test:   /\.html/,
				    loader: 'html',
				}
    	]
    },
    // resolve: {
    //     modulesDirectories: [
				// 	path.resolve('./node_modules'),
    //     ],
    // },
};
