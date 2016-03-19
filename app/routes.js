module.exports = function (app) {
    
https.get('https://www.behance.net/v2/users/joshdholmes?api_key=LRsUjtF1ZLMB84T7QF7zoS7Mn7jLPNwA', function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var response = JSON.parse(body);
        console.log("Got a response: ", response.picture);
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});

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
  		"github": true,
  		"title": "Studio39/Composit",
  		"image": "",
  		"content": "Creating an easier way to do stuff."
  	},
         {
  		"behance": true,
  		"title": "A New Type of Imprint Volume Six",
  		"image": "/img/behance-example.jpg",
  		"content": "Art Direction • Editorial Design • Photography"
  	}    ,
                  {
  		"bitbucket": true,
  		"title": "Studio39 Snapchat clone",
  		"image": "",
  		"content": "Making snapchat, exactly the same but with less features."
  	}
             ]
  };
    
app.get('/', function(req, res) {
    data = {};
    res.render('feed', posts);
});
    
}