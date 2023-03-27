const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h1",{},"I am another h1 tag")]
),
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h1",{},"I am another h1 tag")]
)
]);
//complicated???
//That's why we need JSX.
//const heading = React.createElement("h1", {id: "heading", xyz:"abc"}, "Hello World from React in another js!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//render method is converting this object to h1 tag and putting it over there.
