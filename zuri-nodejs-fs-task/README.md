# Zuri Nodejs File System Task
### To Create a script file that fetches data from JSON PLACEHOLDER POSTS and Write the JSON data gotten from the API to a posts.json file.

create a result.js, and a posts.json file.

result.js file fetches data from json placeholder post.
the json data gotten is written into posts.json file.

save json placeholder post url to jsonPlaceholderUrl variable.
install the fetch package using 'npm install fetch', allowing us fetch data in nodejs.
initialize the fs, path, and path modules.
set the method to get, since, get request is being performed.

convert response to json.
if error, catch and throw the error, else set path to write to as postsPath, using the path.join() method.

use the fs module's writeFile method to write data gotten to the posts.json file.

Note: the data gotten must be stringified
'null, 2' was used to add new lines to the serialized json, making it easily readable

Refs: 
https://dev.to/isalevine/three-ways-to-retrieve-json-from-the-web-using-node-js-3c88
https://www.w3schools.com/nodejs/nodejs_filesystem.asp
