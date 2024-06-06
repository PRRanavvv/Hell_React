const heading = React.createElement(
    "h1",                           // goes under this 'h1'
    {id: "heading", xyz: "abc"},    // attributes
    "Hello World from React !"      // children
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);         // it's job is to take this object, create the h1 tag that the browswer understand and put that term inside the root element (above line wala root)



console.log("hey there");

