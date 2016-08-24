/**
 * Created by rujuraj on 8/23/16.
 */
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8888, function(){
    console.log('Server running...');
});