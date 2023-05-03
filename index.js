var express = require("express");
var app = express();
const fetch = require('node-fetch');
var MimeLookup = require('mime-lookup');
var mime = new MimeLookup(require('mime-db'));
var reqDdos = require('ddos')
var ddos = new reqDdos({burst:10, limit:15})

var port = process.env.PORT || 3000;

const approvedForHTML = [
  "/gh/3kh0/3kh0-Assets@main/",
  "/gh/username134567/username134567.github.io@main/"
];

app.use(ddos.express);

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Allgit listening on port ${port}`)
});

app.get('/te@:url/:user/:repo@:branch/*', (req, res) => {
  // Gets the file location
  req.params.file = req.originalUrl.replace(/\/[^\/]+\/[^\/]+\/[^\/]+@[^\/]+\/([\s\S]+)/,"$1");
  
  // adsadasd
  var url = `https://${req.params.url}/${req.params.user}/${req.params.repo}/raw/branch/${req.params.branch}/${req.params.file}`;
  
  console.log(url)
  // Let's fetch!
  fetch(url)
  .then(res2 => {
    if (res2.ok) {
      // Response was ok, read the response and send it through!
      res2.text().then(body => {
        // Cache for 1 hour
        res.setHeader('Cache-Control', "max-age=3600");
        // Get correct MIME type, replace old MIME types with new ones
        res.setHeader(
          'Content-Type', 
          (function() {
            if (req.originalUrl.endsWith(".html")) {
              return "text/plain";
            } else {
              return mime.lookup(url)
              .replace("application/javascript","text/javascript");
            }
          })()
        );
        res.end(body);
      });
    } else {
      console.log(res2.status);
      // Response was not ok, send an error status or message.
      if (res2.status == "404") {
        res.status(404).send("Sorry, we can't find that file.");
      } else if (res2.status == "403") {
        res.status(403).send("We couldn't get that file (repo doesn't exist?)");
      } else {
        res.status(500).send("There's been an error server-side and we couldn't fulfill your request.");
      }
    }
    
  })
  .catch(res2 => {
    if (res2.code == "ENOTFOUND") {
      res.status(404).send("Sorry, we can't find that file.");
    } else {
      res.status(500).send("There's been an error server-side and we couldn't fulfill your request.");
    }
    
  })
})

app.get('/:service/:user/:repo@:branch/*', (req, res) => {
  // Gets the file location
  req.params.file = req.originalUrl.replace(/\/[^\/]+\/[^\/]+\/[^\/]+@[^\/]+\/([\s\S]+)/,"$1");
  
  // Checks which service you're using, and changes the url fetched accordingly
  var url;
  if (req.params.service == "gh") {
    url = `https://raw.githubusercontent.com/${req.params.user}/${req.params.repo}/${req.params.branch}/${req.params.file}`;
  } else if (req.params.service == "gl") {
    url = `https://gitlab.com/${req.params.user}/${req.params.repo}/-/raw/${req.params.branch}/${req.params.file}`;
  }
  
  console.log(url)
  // Let's fetch!
  fetch(url)
  .then(res2 => {
    if (res2.ok) {
      // Response was ok, read the response and send it through!
      res2.text().then(body => {
        // Cache for 1 hour
        res.setHeader('Cache-Control', "max-age=3600");
        // Get correct MIME type, replace old MIME types with new ones
        res.setHeader(
          'Content-Type', 
          (function() {
            if (req.originalUrl.endsWith(".html")) {
              console.log(req.originalUrl.match(/\/[^\/]+\/[^\/]+\/[^\/]+@[^\/]+\//)[0])
              if (approvedForHTML.includes(req.originalUrl.match(/\/[^\/]+\/[^\/]+\/[^\/]+@[^\/]+\//)[0])) { 
                return mime.lookup(url);
              } else {
                return "text/plain";
              }
            } else {
              return mime.lookup(url)
              .replace("application/javascript","text/javascript");
            }
          })()
        );
        res.end(body);
      });
    } else {
      console.log(res2.status);
      // Response was not ok, send an error status or message.
      if (res2.status == "404") {
        res.status(404).send("Sorry, we can't find that file.");
      } else if (res2.status == "403") {
        res.status(403).send("We couldn't get that file (repo doesn't exist / is private?)");
      } else {
        res.status(500).send("There's been an error server-side and we couldn't fulfill your request.");
      }
    }
    
  }).catch(res2 => {
    if (res2.code == "ENOTFOUND") {
      res.status(404).send("Sorry, we can't find that file.");
    } else {
      res.status(500).send("There's been an error server-side and we couldn't fulfill your request.");
    }
    
  })
})