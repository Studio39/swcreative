module.exports = function (app) {

  var posts = {
  	"name": "Joshua Holmes",
  	"profile_picture": "/img/profile_pic.jpg",
    "cover_picture": "/img/cover_pic.jpg",
  	"posts": [{
  		"network": "Twitter",
  		"title": "How I went from 100 followers to 100 million in just one week.",
  		"image": "",
  		"content": ""
  	}, {
  		"network": "Twitter",
  		"title": "Why I started commiting to git more frequently.",
  		"image": "/img/image_file.jpg",
  		"content": ""
  	}]
  };
    
app.get('/', function(req, res) {
    data = {};
    res.render('test', posts);
});
    
}