module.exports = function (app, Twitter, fs) {

var client = new Twitter({
  consumer_key: 'KEY_OMITTED',
  consumer_secret: 'KEY_OMITTED',
  access_token_key: 'KEY_OMITTED',
  access_token_secret: 'KEY_OMITTED'
});
 
function update(posts) {
    try {
    fs.writeFile('profile.json', JSON.stringify(posts, null, 2) , 'utf-8');
    } catch (e) {
        //handle error
        console.log(e)
    }
}

function getPosts() {
     var raw = fs.readFileSync("profile.json");   
     return JSON.parse(raw);
}
    
function tw_followers() {
    //Get Twitter Follower Count
    var posts = getPosts();
    var params = {screen_name: posts.twitter_handle};
    client.get('followers/ids', params, function(error, data, response){
      if (!error) {
        posts.twitter_followers = data.ids.length;
        update(posts);
      } else {
          console.log(error);
      }
        
    });
}
    
//tw_followers();
    
function ref() {
    
    var posts = getPosts();
    var params = {screen_name: posts.twitter_handle};
    client.get('statuses/user_timeline', params, function(error, data, response){
      if (!error) {
//          console.log(data[0].text);
//          console.log(data[0].retweeted_status.text);
// fs.writeFile('dwight.json', JSON.stringify(data, null, 2) , 'utf-8');
          for(var i = 0;i < data.length;i++) {
              tweet = {
                  "url": data[i].user.id,
                  "tweet": data[i].text,
                  "user": posts.twitter_handle,
                  "timestamp": data[i].created_at.substr(0, 10)
              }
              
              try {
                tweet.image = data[i].entities.media.media_url;
                console.log(data[i].entities.media.media_url);
              } catch(e) {
                  console.log(e);
              }
                
              posts.posts.push(tweet);
            }
          update(posts);
      } else {
          console.log(error);
      }
    });
       
}
    
    
function getBehanceData(callbackData){
  var body = '';

  callback = function(response) {
      
        response.on('data', function (chunk) {
              body += chunk;
        });

        response.on('end', function () {
          var response = JSON.parse(body);
          callbackData(response);
        });
  }

  var res = https.get('https://www.behance.net/v2/users/joshdholmes?api_key=KEY_OMITTED',     callback).end();

}
    
getBehanceData(function(data){
    console.log(data);
    posts.posts[3].title = data.user.username;
    posts.posts[3].images = data.user.username;
    posts.posts[3].content = data.user.fields;
});

    
    
app.get('/', function(req, res) {
    var data = getPosts();
    res.render('feed', data);
});
    
}