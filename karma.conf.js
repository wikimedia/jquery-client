/* eslint-env node */
module.exports = function ( config ) {
	config.set( {
		frameworks: [ 'qunit' ],
		files: [
			'node_modules/jquery/dist/jquery.js',
			'src/jquery.client.js',
			'test/jquery.client.test.js'
		],
		preprocessors: {
			'*.js': [ 'coverage' ]
		},
		reporters: [ 'dots', 'coverage' ],
		coverageReporter: {
			dir: 'coverage/',
			subdir: '.',
			reporters: [
				{ type: 'html' },
				{ type: 'text-summary' },
				{ type: 'clover' }
			]
		},
		browsers: [ 'FirefoxHeadless' ],
		singleRun: true,
		autoWatch: false
	} );
};
