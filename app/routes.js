module.exports = function (app) {

  var posts = {
  	"name": "Joshua Holmes",
  	"profile_picture": "/img/profile_pic.jpg",
    "cover_picture": "/img/cover_pic.jpg",
  	"posts": [{
  		"twitter": true,
  		"title": "How I went from 100 followers to 100 million in just one week.",
  		"image": "",
  		"content": ""
  	}, {
  		"twitter": true,
  		"title": "Why I started commiting to git more frequently.",
  		"image": "/img/image_file.jpg",
  		"content": ""
  	},
         {
  		"behance": true,
  		"title": "A New Type of Imprint Volume Six",
  		"image": "/img/behance-example.jpg",
  		"content": "Art Direction • Editorial Design • Photography"
  	}    
             ]
  };
    
app.get('/', function(req, res) {
    data = {};
    res.render('feed', posts);
});
    
}