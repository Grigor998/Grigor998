import React from "react";
import './App.css';
import Header from "./Compoments/Header/Header";
import NavBar from "./Compoments/Navbar/NavBar";
import Profile from "./Compoments/Profile/Profile";
import Dialogs from "./Compoments/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"

function Router(props) {
    return null;
}

function App(props) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path={"/dialogs"} render={() => <Dialogs dialogsData={props.dialogsData} massageData={props.messageData}/>}/>
                <Route path={"/profile"} render={() => <Profile posts={props.posts}/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
