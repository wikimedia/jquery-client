/* eslint-env node */
module.exports = function ( config ) {
	config.set( {
		frameworks: [ 'qunit' ],
		files: [
			'node_modules/jquery/dist/jquery.js',
			'jquery.client.js',
			'test/jquery.client.test.js'
		],
		preprocessors: {
			'*.js': [ 'coverage' ]
		},
		reporters: [ 'dots', 'coverage' ],
		coverageReporter: { reporters: [
			{ type: 'html', dir: 'coverage/' },
			{ type: 'text-summary', dir: 'coverage/' }
		] },
		browsers: [ 'FirefoxHeadless' ],
		singleRun: true,
		autoWatch: false
	} );
};
