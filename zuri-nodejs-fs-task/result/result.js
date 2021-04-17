// READING A JSON FILE ------------->
// const fs = require("fs");
// const data = require("./data");

// Read data.json file
// fs.readFile("data.json", function (err, data) {
//     if (err) throw err; // Check for errors
    
//     const posts = JSON.parse(data); // Converting to JSON
//     console.log(posts); // Print posts
// });

// WRITING INTO A JSON FILE
// Defining new data
// let newData = {
//     name: "New Entry",
//     desc: "Test",
//     language: "English"
// };
// data.push(newData); // Adding new data

// fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => { // null, 2 adds new lines to serialized json, making it easily readable
//     if (err) throw err;
//     console.log(data);
//     console.log("Done Writing!");
// });

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

// console.log(path.extname(postsDataPath)); // Path method: extension name
// console.log(path.basename(postsDataPath)); // Path method: base name

// <--------- Note: What 'utf8' encode does is what JSON.parse does.
// Without them, we get a raw hex data instead of json format. ------------>

// fs.readFile(postsDataPath, 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         let allPosts = JSON.parse(data);
//         console.log(data);
//     }
    // err ? console.log(err) : console.log(data); //ternary form
// });


const jsonPlaceholderUrl = "http://jsonplaceholder.typicode.com/posts";
let settings = { method: "Get" };

fetch(jsonPlaceholderUrl, settings)
    .then(res => res.json())
    .then((data, err) => {
        if (err) throw err;

        const postsPath = path.join(__dirname, "posts.json");
        fs.writeFile(postsPath, JSON.stringify(data, null, 2), function () {
            console.log(data);
        });

        //ternary form, comment out if (err) throw err; ------>
        // function runResult() {
        //     const postsPath = path.join(__dirname, "posts.json");
        //     fs.writeFile(postsPath, JSON.stringify(data, null, 2), function () {
        //         console.log(data);
        //     });
        // }
        // err ? console.log(err) : runResult();
    });
    // .then((data) => {
    //     let postsPath = path.join(__dirname, "posts.json");
    //     fs.writeFile(postsPath, JSON.stringify(data, null, 2), function () {
    //         console.log("Replaced!");
    //         console.log(data);
    //     });
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

