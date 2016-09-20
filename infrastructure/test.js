var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);

var prod = { 
	name: 'pano-book-test',
	organization: undefined,
	region: 'eu',
	maintenance: false,
	stack: 'cedar-14',
	config_vars: {
		NODE_ENV: 'production',
		MONGODB_URI: process.env.MONGODB_URI
	},
	collaborators: [ 
		'kamil.wojciechowski@contractors.roche.com',
		'paaweel01@gmail.com',
		'weglinski.tomasz@gmail.com'
	],
  	features: { 
  		'runtime-dyno-metadata': { enabled: false },
	    'log-runtime-metrics': { enabled: false },
	    'http-session-affinity': { enabled: false },
     	preboot: { enabled: false },
		'http-shard-header': { enabled: false },
		'http-end-to-end-continue': { enabled: false },
		'http-sni': { enabled: false },
		'app-alerting': { enabled: false }
	},
	formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
	log_drains: []
}

configurator(prod);