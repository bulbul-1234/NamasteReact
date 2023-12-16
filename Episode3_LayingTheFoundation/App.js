import React from "react";
import ReactDOM from "react-dom/client";
import { AiOutlineUserAdd } from 'react-icons/ai';
const icon = "data:image/png;base64,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";


//JSX is not HTML inside JS
//It's a html like syntax or XML-like syntax
//JSX- Babel transpiles it to React.CreateElement => ReactElement-JS Object => HTMLElement Render
//React Element

const TitleComponent = () => <h1 className="head" tabIndex="5">Title Component 🚀</h1>

const data=1000;
//React Component
//everything is a component in react. ex- inputbox, button
//Functional Component- is a normal function that returns a JSX.
const Heading= () => (
    <div id="container">
        <h2>{data}</h2>
        <h2>{console.log("I love myself")}</h2>
        <TitleComponent />
        {/* 2nd way of calling component */}
        <TitleComponent > </TitleComponent> 
         {/* 3rd way of calling component, as functional component is function at the end of the day */}
        {TitleComponent()}
        <h1 className="headingComponent">Namaste React Functional Component</h1>
    </div>
)

const HeaderComponent = () => (
   <div className="container">
    <div className="icon">
        <img src={icon} alt="logo"></img>
    </div>
    <div className="search"> 
    <input type="search" placeholder="search here"    />
    </div>
    <div className="user">
    <AiOutlineUserAdd className="usericon"/> 
    </div>
   </div>
);
const ParentComponent = () => (
    <div className="container">
        <HeaderComponent />
    </div>
)

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<ParentComponent/>);

