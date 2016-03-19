module.exports = function (app) {

    
app.get('/', function(req, res) {
    data = {};
    res.render('test', data);
});
    
}