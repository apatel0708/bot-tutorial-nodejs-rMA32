var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),botHugs = /^\/hugs/;
      botStream = /^\/st/i;botRegex = /^\/cool guy/; botRegexDLRecAvg = /^\/rec avg/;  botRegexDL = /^\/DDL/i;botCga = /^\/cga/;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/; botDoc = /^\/doc/; botSf = /^\/sf/;  botSd = /^\/sd/;  botBaseball = /^\/baseball/; botSteve = /^\/steve/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    if(!request.text.substring(5,8)) {
      postMessage("https://www.daddyleagues.com/FBOS53/schedules");
    } else {
      postMessage("http://daddyleagues.com/FBOS53/team/"+request.text.substring(5,8)+"/schedule");
    }
    this.res.end();
  }
    else if (request.text && botBaseball.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://24.media.tumblr.com/tumblr_l1vkvxS0zo1qa9armo1_500.jpg");
    this.res.end();
  }
  else if (request.text && botSd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/buNql4M.png");
    this.res.end();
  }
  else if (request.text && botSf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://viralicious.co/wp-content/uploads/2015/10/short-funny-lawyer-jokes.png");
    this.res.end();
  }
  else if (request.text && botDoc.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://cdn.meme.am/instances/500x/53038790.jpg");
    this.res.end();
    
  }
  else if (request.text && botRegexDLRecAvg.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/FBOS53/stats/player/receiving?sortby=avg");
    this.res.end();
  }
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/FBOS53/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botCga.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://hawkshoop.com/wp-content/uploads/2013/01/siren.gif");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/fbos53#advance");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/FBOS53/rules");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/FBOS53/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  else if(request.text && botHugs.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/377x210.gif.763efc977cec43ca89a14158953e923a");
    this.res.end();
  }
  else if(request.text && botSteve.test(request.text)) {
    this.res.writeHead(200);
    postMessage("You Disgusting Fuck");
    this.res.end();
  }
    else if(request.text && botStream.test(request.text)) {
    this.res.writeHead(200);
    var team = request.text.substring(4,7);
    if(team) {
      if (team == "ari") {
        
      }
      else if (team == "atl") {
        
      }
      else if (team == "bal") {
        
      }
      else if (team == "buf") {
        
      }
      else if (team == "car") {
        postMessage("https://www.twitch.tv/newtonless_panthers");
      }
      else if (team == "chi") {
        
      }
      else if (team == "cin") {
        
      }
      else if (team == "cle") {
        
      }
      else if (team == "dal") {
        
      }
      else if (team == "den") {
        
      }
      else if (team == "det") {
        postMessage("https://www.youtube.com/channel/UCh4--hcRHxKmOn5BHIy3GyA");
      }
      else if (team == "gb") {
        
      }
      else if (team == "hou") {
        
      }
      else if (team == "ind") {
        postMessage("https://www.twitch.tv/pugnok");
      }
      else if (team == "jac") {
        postMessage("https://www.twitch.tv/KMac44");
      }
      else if (team == "kc") {
        
      }
      else if (team == "mia") {
        
      }
      else if (team == "min") {
        
      }
      else if (team == "ne") {
        postMessage("https://www.twitch.tv/AdmiralRunBad");
      }
      else if (team == "no") {
        
      }
      else if (team == "nyg") {
        
      }
      else if (team == "nyj") {
        
      }
      else if (team == "oak") {
        
      }
      else if (team == "phi") {
        
      }
      else if (team == "pit") {
        postMessage("https://www.twitch.tv/kingofkings412");
      }
      else if (team == "sd") {
        postMessage("https://www.youtube.com/user/SteVenSD420420");
      }
      else if (team == "sf") {
        postMessage("https://www.twitch.tv/aureateone");
      }
      else if (team == "sea") {
        
      }
      else if (team == "stl") {
        
      }
      else if (team == "tb") {
        postMessage("https://www.twitch.tv/nish_the_nub");
      }
      else if (team == "ten") {
        
      }
      else if (team == "was") {
        postMessage("http://twitch.tv/aye_yo_b_");
      }
    }
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
