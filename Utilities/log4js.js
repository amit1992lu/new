const log4js = require('log4js');
log4js.configure({
    appenders: { univar: { type: 'file', filename: 'reports/logs/Log4j.log' },console: { type: 'console' } },
    categories: { default: { appenders: ['univar', 'console'], level: 'trace' } }
});
