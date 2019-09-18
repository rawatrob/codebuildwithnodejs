var http = require('http');
var AWS = require("aws-sdk");
AWS.config.region="us-east-2";
AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
    console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
  }
});


var codebuild = new AWS.CodeBuild({apiVersion: '2016-10-06'});



function getlist()
{
var params = {
 // sortOrder: ASCENDING | DESCENDING
};
codebuild.listBuilds(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

}



function pojectlist()
{

var params1 = {
projectName: 'project1', /* required */projectname
 reportBuildStatus: true
 // sortOrder: ASCENDING | DESCENDING
};

codebuild.listBuildsForProject(params1, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});


}


function buildstart()
{
var params = {
//Project Name
projectName: 'project1', /* required */
environmentVariablesOverride: [
    {
      name: 'APPID', /* required */
      value: '12345', /* required */
    },
    /* more items */
  ],
 // sortOrder: ASCENDING | DESCENDING
};

codebuild.startBuild(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});


}

function checkStatus(){
var params = {
ids:['project1:0587ea83-0b1c-4ea1-9533-4ef36bafd6ed','createapk:9ea86551-b437-4e74-a324-2c7b3f03c439']
};

codebuild.batchGetBuilds(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
}

console.log("-----start")
buildstart();


http.createServer(function (req, res) {
//awsconnect();
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8010); //the server object listens on port 8080