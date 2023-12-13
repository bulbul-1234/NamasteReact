//const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from react");
//{} this blank object is the place where we are giving attributes to our class.
//const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(heading);
//heading is an object here.
//root.render(heading);
//render method is responsible to covert this heading object into h1 tag and puting it over here.


{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
         <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
         <h2>I'm h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div", {id: "parent"}, [
               React.createElement("div", {id: "child"},
               [React.createElement("h1", {}, "I'm h1 tag"),
               React.createElement("h2", {}, "I'm h2 tag")]),
               React.createElement("div", {id: "child"},
               [React.createElement("h1", {}, "I'm h1 tag"),
               React.createElement("h2", {}, "I'm h2 tag")])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//for siblings element make an array and then use it, but it can be done without array as well. tried that.


