/*
* <div id="parent"> 
    <div id="child">
        <h1>I am h1 tag which is nested</h1>
    </div>
    <div id="child2">
        <h1>I am h1 tag which is nested</h1>
    </div>

</div>
*
*
*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",
{
    id:"parent"
},
[React.createElement("div",
{
    id:"child"
},
[React.createElement("h1",{},"I am h1 tag which is nested !"),
React.createElement("h2",{},"I am h2 tag which is nested and sibling to h1!")
]),
React.createElement("div",
{
    id:"child2"
},
[React.createElement("h1",{},"I am h1 tag which is nested inside child2 div !"),
React.createElement("h2",{},"I am h2 tag which is nested and sibling to h1!")
])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
