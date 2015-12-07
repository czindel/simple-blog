var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var uuid = require('node-uuid');
var fs = require('fs');
var path = require('path');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/views', express.static(path.join(__dirname, 'app/views')));


app.use('/', require('./routes/index'));

var blogPostData = path.resolve('blogPostData.json');

app.post('/rest_api/blogposts', function (req, res, next) {

    req.body.created_timestamp = new Date().toISOString();
    req.body.id = uuid.v4();

    fs.readFile(blogPostData, function (err, data) {

        if (err) {
            res.status(500).send('fs read error');
        }
        else{

            var jsonData = JSON.parse(data);
            jsonData.push(req.body);

            fs.writeFile(blogPostData, JSON.stringify(jsonData, null, '    '), function (err) {
                if (err) {
                    res.status(500).send('fs write error');
                }
                else{
                    res.send(req.body)
                }
            });
        }
    });
});
app.get('/rest_api/blogposts', function (req, res, next) {
    res.sendFile(blogPostData);
});
app.get('/rest_api/blogposts/:id', function (req, res, next) {

});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
