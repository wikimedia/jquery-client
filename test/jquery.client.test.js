( function () {
	// Object keyed by userAgent.
	const userAgents = {
		// Internet Explorer 6
		'Internet Explorer 7': {
			userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
			platform: 'Win32',
			profile: {
				name: 'msie',
				layout: 'trident',
				layoutVersion: 'unknown',
				platform: 'win',
				version: '7.0',
				versionBase: '7',
				versionNumber: 7
			}
		},
		// Internet Explorer 8
		// Internet Explorer 9
		'Internet Explorer 10': {
			userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
			platform: 'Win32',
			profile: {
				name: 'msie',
				layout: 'trident',
				layoutVersion: 6,
				platform: 'win',
				version: '10.0',
				versionBase: '10',
				versionNumber: 10
			}
		},
		'Internet Explorer 11': {
			userAgent: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv 11.0) like Gecko',
			platform: 'Win32',
			profile: {
				name: 'msie',
				layout: 'trident',
				layoutVersion: 7,
				platform: 'win',
				version: '11.0',
				versionBase: '11',
				versionNumber: 11
			}
		},
		'Internet Explorer 11 on Win 8.1 (Modern UI)': {
			userAgent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; rv:11.0) like Gecko',
			platform: 'Win64',
			profile: {
				name: 'msie',
				layout: 'trident',
				layoutVersion: 7,
				platform: 'win',
				version: '11.0',
				versionBase: '11',
				versionNumber: 11
			}
		},
		'Internet Explorer 11 on Win 8.1 (Classic UI)': {
			userAgent: 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko',
			platform: 'WOW64',
			profile: {
				name: 'msie',
				layout: 'trident',
				layoutVersion: 7,
				platform: 'win',
				version: '11.0',
				versionBase: '11',
				versionNumber: 11
			}
		},
		'Microsoft Edge 12 on Win 10 x64': {
			userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0',
			platform: 'Win64',
			profile: {
				name: 'edge',
				layout: 'edge',
				layoutVersion: 12,
				platform: 'win',
				version: '12.0',
				versionBase: '12',
				versionNumber: 12
			}
		},
		'Microsoft Edge 12 on Win 10 x86': {
			userAgent: 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0',
			platform: 'Win32',
			profile: {
				name: 'edge',
				layout: 'edge',
				layoutVersion: 12,
				platform: 'win',
				version: '12.0',
				versionBase: '12',
				versionNumber: 12
			}
		},
		'Microsoft Edge 85 (Chromuim) on Win 10 x86': {
			userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.44',
			platform: 'Win32',
			profile: {
				name: 'chrome',
				layout: 'webkit',
				layoutVersion: 537,
				platform: 'win',
				version: '85.0.4183.83',
				versionBase: '85',
				versionNumber: 85
			}
		},
		// Firefox 2
		'Firefox 3.5': {
			userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1.19) Gecko/20110420 Firefox/3.5.19',
			platform: 'MacIntel',
			profile: {
				name: 'firefox',
				layout: 'gecko',
				layoutVersion: 20110420,
				platform: 'mac',
				version: '3.5.19',
				versionBase: '3',
				versionNumber: 3.5
			}
		},
		'Firefox 3.6': {
			userAgent: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.17) Gecko/20110422 Ubuntu/10.10 (maverick) Firefox/3.6.17',
			platform: 'Linux i686',
			profile: {
				name: 'firefox',
				layout: 'gecko',
				layoutVersion: 20110422,
				platform: 'linux',
				version: '3.6.17',
				versionBase: '3',
				versionNumber: 3.6
			}
		},
		'Firefox 4': {
			userAgent: 'Mozilla/5.0 (Windows NT 6.0; rv:2.0.1) Gecko/20100101 Firefox/4.0.1',
			platform: 'Win32',
			profile: {
				name: 'firefox',
				layout: 'gecko',
				layoutVersion: 20100101,
				platform: 'win',
				version: '4.0.1',
				versionBase: '4',
				versionNumber: 4
			}
		},
		'Firefox 10 nightly': {
			userAgent: 'Mozilla/5.0 (X11; Linux x86_64; rv:10.0a1) Gecko/20111103 Firefox/10.0a1',
			platform: 'Linux',
			profile: {
				name: 'firefox',
				layout: 'gecko',
				layoutVersion: 20111103,
				platform: 'linux',
				version: '10.0a1',
				versionBase: '10',
				versionNumber: 10
			}
		},
		'Firefox 100': {
			userAgent: 'Firefox: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0',
			platform: 'MacIntel',
			profile: {
				name: 'firefox',
				layout: 'gecko',
				layoutVersion: 20100101,
				platform: 'mac',
				version: '100.0',
				versionBase: '100',
				versionNumber: 100
			}
		},
		'Iceweasel 10.0.6': {
			userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:10.0.6) Gecko/20100101 Iceweasel/10.0.6',
			platform: 'Linux',
			profile: {
				name: 'unknown',
				layout: 'gecko',
				layoutVersion: 20100101,
				platform: 'linux',
				version: 'x',
				versionBase: 'x',
				versionNumber: 0
			}
		},
		'Iceweasel 15.0.1': {
			userAgent: 'Mozilla/5.0 (X11; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1 Iceweasel/15.0.1',
			platform: 'Linux',
			profile: {
				name: 'firefox',
				layout: 'gecko',
				layoutVersion: 20100101,
				platform: 'linux',
				version: '15.0.1',
				versionBase: '15',
				versionNumber: 15
			}
		},
		'KaiOS 2.5': {
			userAgent: 'Mozilla/5.0 (Mobile; Nokia_8110_4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5',
			// Yes, this property is actually the empty string.
			// KaiOS inherits this from Boot2Gecko and Firefox OS (intentional)
			// https://bugzilla.mozilla.org/show_bug.cgi?id=801614
			platform: '',
			profile: {
				name: 'firefox',
				layout: 'gecko',
				layoutVersion: 48,
				platform: 'unknown',
				version: '48.0',
				versionBase: '48',
				versionNumber: 48
			}
		},
		'Safari 2': {
			userAgent: 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/419 (KHTML, like Gecko) Safari/419.3',
			platform: 'MacPPC',
			profile: {
				name: 'safari',
				layout: 'webkit',
				layoutVersion: 419,
				platform: 'mac',
				version: '2.0',
				versionBase: '2',
				versionNumber: 2
			}
		},
		// Safari 3
		'Safari 4 on macOS': {
			userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; nl-nl) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7',
			platform: 'MacIntel',
			profile: {
				name: 'safari',
				layout: 'webkit',
				layoutVersion: 531,
				platform: 'mac',
				version: '4.0.5',
				versionBase: '4',
				versionNumber: 4
			}
		},
		'Safari 4 on Windows': {
			userAgent: 'Mozilla/5.0 (Windows; U; Windows NT 6.0; cs-CZ) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7',
			platform: 'Win32',
			profile: {
				name: 'safari',
				layout: 'webkit',
				layoutVersion: 533,
				platform: 'win',
				version: '4.0.5',
				versionBase: '4',
				versionNumber: 4
			}
		},
		'Safari 6.0.4': {
			userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/536.29.13 (KHTML, like Gecko) Version/6.0.4 Safari/536.29.13',
			platform: 'MacIntel',
			profile: {
				name: 'safari',
				layout: 'webkit',
				layoutVersion: 536,
				platform: 'mac',
				version: '6.0.4',
				versionBase: '6',
				versionNumber: 6
			}
		},
		// Safari 6.0.5+ (Note: No longer has a comma in "KHTML, like Gecko")
		'Safari 6.0.5': {
			userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 1084) AppleWebKit/536.30.1 (KHTML like Gecko) Version/6.0.5 Safari/536.30.1',
			platform: 'MacIntel',
			profile: {
				name: 'safari',
				layout: 'webkit',
				layoutVersion: 536,
				platform: 'mac',
				version: '6.0.5',
				versionBase: '6',
				versionNumber: 6
			}
		},
		'iOS 12.4.1 (iPad)': {
			userAgent: 'Mozilla/5.0 (iPad; CPU OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1',
			platform: 'iPad',
			profile: {
				name: 'safari',
				layout: 'webkit',
				layoutVersion: 605,
				platform: 'ipad',
				version: '12.1.2',
				versionBase: '12',
				versionNumber: 12.1
			}
		},
		'iOS 13.5.1 (iPhone)': {
			userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1',
			platform: 'iPhone',
			profile: {
				name: 'safari',
				layout: 'webkit',
				layoutVersion: 605,
				platform: 'iphone',
				version: '13.1.1',
				versionBase: '13',
				versionNumber: 13.1
			}
		},
		'Chrome for iOS': {
			userAgent: 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/84.0.4147.122 Mobile/15E148 Safari/604.1',
			platform: 'iPhone',
			profile: {
				name: 'crios',
				layout: 'webkit',
				layoutVersion: 605,
				platform: 'iphone',
				version: '84.0.4147.122',
				versionBase: '84',
				versionNumber: 84
			}
		},
		'Firefox for iOS': {
			userAgent: 'Mozilla/5.0 (iPhone; CPU OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/28.1 Mobile/15E148 Safari/605.1.15',
			platform: 'iPhone',
			profile: {
				name: 'fxios',
				layout: 'webkit',
				layoutVersion: 605,
				platform: 'iphone',
				version: '28.1',
				versionBase: '28',
				versionNumber: 28.1
			}
		},
		'BlackBerry 6': {
			userAgent: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+',
			platform: '',
			profile: {
				name: 'safari',
				layout: 'webkit',
				layoutVersion: 534,
				platform: 'unknown',
				version: '7.1.0.346',
				versionBase: '7',
				versionNumber: 7.1
			}
		},
		'PlayStation 3': {
			userAgent: 'Mozilla/5.0 (PLAYSTATION 3 4.21) AppleWebKit/531.22.8 (KHTML, like Gecko)',
			platform: '',
			profile: {
				layout: 'webkit',
				layoutVersion: 531,
				name: 'unknown',
				platform: 'unknown',
				version: 'x',
				versionBase: 'x',
				versionNumber: 0
			}
		},
		'PlayStation 4': {
			userAgent: 'Mozilla/5.0 (PlayStation 4 1.70) AppleWebKit/536.26 (KHTML, like Gecko)',
			platform: '',
			profile: {
				layout: 'webkit',
				layoutVersion: 536,
				name: 'unknown',
				platform: 'unknown',
				version: 'x',
				versionBase: 'x',
				versionNumber: 0
			}
		},
		'Opera 10+ (exact version unspecified)': {
			userAgent: 'Opera/9.80 (Windows NT 5.1)',
			platform: 'Win32',
			profile: {
				name: 'opera',
				layout: 'presto',
				layoutVersion: 'unknown',
				platform: 'win',
				version: '10',
				versionBase: '10',
				versionNumber: 10
			}
		},
		'Opera 12': {
			userAgent: 'Opera/9.80 (Windows NT 5.1) Presto/2.12.388 Version/12.11',
			platform: 'Win32',
			profile: {
				name: 'opera',
				layout: 'presto',
				layoutVersion: 'unknown',
				platform: 'win',
				version: '12.11',
				versionBase: '12',
				versionNumber: 12.11
			}
		},
		// Opera 15 (now Chromium-based)
		'Opera 15': {
			userAgent: 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/15.0.1147.130',
			platform: 'Win32',
			profile: {
				name: 'chrome',
				layout: 'webkit',
				layoutVersion: 537,
				platform: 'win',
				version: '28.0.1500.52',
				versionBase: '28',
				versionNumber: 28
			}
		},
		'Opera 70': {
			userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36 OPR/70.0.3728.154',
			platform: 'Linux x86_64',
			profile: {
				name: 'chrome',
				layout: 'webkit',
				layoutVersion: 537,
				platform: 'linux',
				version: '85.0.4183.102',
				versionBase: '85',
				versionNumber: 85
			}
		},
		// Chrome 5
		// Chrome 6
		// Chrome 7
		// Chrome 8
		// Chrome 9
		// Chrome 10
		// Chrome 11
		'Chrome 12 on macOS': {
			userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_5_8) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.112 Safari/534.30',
			platform: 'MacIntel',
			profile: {
				name: 'chrome',
				layout: 'webkit',
				layoutVersion: 534,
				platform: 'mac',
				version: '12.0.742.112',
				versionBase: '12',
				versionNumber: 12
			}
		},
		'Chrome 12 on Linux': {
			userAgent: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.68 Safari/534.30',
			platform: 'Linux i686',
			profile: {
				name: 'chrome',
				layout: 'webkit',
				layoutVersion: 534,
				platform: 'linux',
				version: '12.0.742.68',
				versionBase: '12',
				versionNumber: 12
			}
		},
		'Chrome 100 on Windows': {
			userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4606.54 Safari/537.36',
			platform: 'Win64',
			profile: {
				name: 'chrome',
				layout: 'webkit',
				layoutVersion: 537,
				platform: 'win',
				version: '100.0.4606.54',
				versionBase: '100',
				versionNumber: 100
			}
		},
		'Android WebKit Browser 2.3': {
			userAgent: 'Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
			platform: 'Linux armv7l',
			profile: {
				name: 'android',
				layout: 'webkit',
				layoutVersion: 533,
				platform: 'linux',
				version: '2.3.5',
				versionBase: '2',
				versionNumber: 2.3
			}
		},
		'Rekonq 0.8.1': {
			// https://phabricator.wikimedia.org/T36924
			userAgent: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) rekonq Safari/534.34',
			platform: 'Linux i686',
			profile: {
				name: 'rekonq',
				layout: 'webkit',
				layoutVersion: 534,
				platform: 'linux',
				version: '534.34',
				versionBase: '534',
				versionNumber: 534.34
			}
		},
		'Konqueror 4.9': {
			userAgent: 'Mozilla/5.0 (X11; Linux i686) KHTML/4.9.1 (like Gecko) Konqueror/4.9',
			platform: 'Linux i686',
			profile: {
				name: 'konqueror',
				layout: 'khtml',
				layoutVersion: 'unknown',
				platform: 'linux',
				version: '4.9.1',
				versionBase: '4',
				versionNumber: 4.9
			}
		},
		'Konqueror 18.12.0': {
			userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) QtWebEngine/5.11.3 Chrome/65.0.3325.230 Safari/537.36 Konqueror (WebEnginePart)',
			platform: 'Linux x86_64',
			profile: {
				name: 'chrome',
				layout: 'webkit',
				layoutVersion: 537,
				platform: 'linux',
				version: '65.0.3325.230',
				versionBase: '65',
				versionNumber: 65
			}
		},
		'Konqueror 18.12.0 (KHTML Legacy Mode)': {
			userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.34 (KHTML, like Gecko) konqueror/5.0.97 Safari/534.34',
			platform: 'linux x86_64',
			profile: {
				name: 'konqueror',
				layout: 'webkit',
				layoutVersion: 534,
				platform: 'linux',
				version: '5.0.97',
				versionBase: '5',
				versionNumber: 5
			}
		},
		'Amazon Silk 1': {
			userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.13.81_10003810) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true',
			platform: 'Desktop',
			profile: {
				name: 'silk',
				layout: 'webkit',
				layoutVersion: 533,
				platform: 'unknown',
				version: '1.0.13.81_10003810',
				versionBase: '1',
				versionNumber: 1
			}
		},
		'Amazon Silk 2': {
			userAgent: 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/2.1 Mobile Safari/535.19 Silk-Accelerated=true',
			platform: 'Mobile',
			profile: {
				name: 'silk',
				layout: 'webkit',
				layoutVersion: 535,
				platform: 'unknown',
				version: '2.1',
				versionBase: '2',
				versionNumber: 2.1
			}
		},
		'Firefox mobile 13': {
			userAgent: 'Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0',
			platform: 'Mobile',
			profile: {
				name: 'firefox',
				layout: 'gecko',
				layoutVersion: 13,
				platform: 'unknown',
				version: '13.0',
				versionBase: '13',
				versionNumber: 13
			}
		},
		'Firefox mobile 65': {
			userAgent: 'Mozilla/5.0 (Android 8.0.0; Mobile; rv:65.0) Gecko/65.0 Firefox/65.0',
			platform: 'Mobile',
			profile: {
				name: 'firefox',
				layout: 'gecko',
				layoutVersion: 65,
				platform: 'unknown',
				version: '65.0',
				versionBase: '65',
				versionNumber: 65
			}
		}
	};

	QUnit.module( 'jquery.client' );

	QUnit.test( 'profile()', ( assert ) => {
		const p = $.client.profile();

		function unknownOrType( val, type, summary ) {
			assert.true( typeof val === type || val === 'unknown', summary );
		}

		assert.strictEqual( typeof p, 'object', 'profile returns an object' );
		unknownOrType( p.layout, 'string', 'p.layout is a string (or "unknown")' );
		unknownOrType( p.layoutVersion, 'number', 'p.layoutVersion is a number (or "unknown")' );
		unknownOrType( p.platform, 'string', 'p.platform is a string (or "unknown")' );
		unknownOrType( p.version, 'string', 'p.version is a string (or "unknown")' );
		unknownOrType( p.versionBase, 'string', 'p.versionBase is a string (or "unknown")' );
		assert.strictEqual( typeof p.versionNumber, 'number', 'p.versionNumber is a number' );
	} );

	QUnit.test.each( 'profile( Object )', userAgents, ( assert, data ) => {
		// Generate a client profile object and compare recursively
		const ret = $.client.profile( {
			userAgent: data.userAgent,
			platform: data.platform
		} );
		assert.deepEqual(
			ret,
			data.profile,
			'Profile for ' + data.userAgent
		);
	} );

	QUnit.test( 'test( testMap )', ( assert ) => {
		// Example from WikiEditor
		const testMap = {
			ltr: {
				msie: [ [ '>=', '7.0' ] ],
				firefox: [ [ '>=', '2' ] ],
				opera: [ [ '>=', '9.6' ] ],
				safari: [ [ '>=', '3' ] ],
				chrome: [ [ '>=', '3' ] ],
				konqueror: [ [ '>=', '4.11' ] ]
			},
			rtl: {
				msie: [ [ '>=', '8' ] ],
				firefox: [ [ '>=', '2' ] ],
				opera: [ [ '>=', '9.6' ] ],
				safari: [ [ '>=', '3' ] ],
				chrome: [ [ '>=', '3' ] ],
				konqueror: [ [ '>=', '4.11' ] ]
			}
		};
		// `test` uses eval, make sure no exceptions are thrown
		// then do a basic return value type check
		let testMatch = $.client.test( testMap );
		assert.strictEqual( typeof testMatch, 'boolean', 'return for map with ltr/rtl split' );

		testMatch = $.client.test( testMap.ltr );
		assert.strictEqual( typeof testMatch, 'boolean', 'return for simple map without ltr/rtl split' );

		const ie7Profile = $.client.profile( {
			userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
			platform: ''
		} );
		assert.strictEqual( $.client.test( {
			msie: null
		}, ie7Profile ), true, 'version=null accepts any version' );

		assert.strictEqual( $.client.test( {
			msie: false
		}, ie7Profile ), false, 'version=false rejects all versions' );
	} );

	QUnit.test( 'test( testMap, exactMatchOnly )', ( assert ) => {
		const ie7Profile = $.client.profile( {
			userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
			platform: ''
		} );

		assert.strictEqual( $.client.test( {
			firefox: [ [ '>=', 2 ] ]
		}, ie7Profile, false ), true, 'accept unknown browser if exactMatchOnly=false' );

		assert.strictEqual( $.client.test( {
			firefox: [ [ '>=', 2 ] ]
		}, ie7Profile, true ), false, 'reject unkonwn browser if exactMatchOnly=true' );
	} );

	QUnit.test( 'test( testMap ) - LTR/RTL integration test', ( assert ) => {
		const ie7Profile = $.client.profile( {
			userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
			platform: ''
		} );
		const original = document.body.className;
		const testMap = {
			ltr: {
				msie: [ [ '>=', '6.0' ] ]
			},
			rtl: {
				msie: [ [ '>=', '8.0' ] ]
			}
		};

		document.body.className = 'ltr';
		let testMatch = $.client.test( testMap, ie7Profile );
		assert.strictEqual(
			testMatch,
			true,
			'Accepted by LTR requirement'
		);
		document.body.className = 'rtl';
		testMatch = $.client.test( testMap, ie7Profile );
		assert.strictEqual(
			testMatch,
			false,
			'Rejected by LTR requirement'
		);

		// Restore
		document.body.className = original;
	} );
}() );
