import React from "react";
import './App.css';
import Header from "./Compoments/Header/Header";
import NavBar from "./Compoments/Navbar/NavBar";
import Profile from "./Compoments/Profile/Profile";
import Dialogs from "./Compoments/Dialogs/Dialogs";
import {Route} from "react-router-dom"



function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path={"/dialogs"}
                       render={() => <Dialogs
                           dialogs={props.state.dialogsPage.dialogs}
                           massages={props.state.dialogsPage.messages}
                       />}/>
                <Route path={"/profile"}
                       render={() => <Profile posts={props.state.profilePage.posts}
                                              newPost={props.state.profilePage.newPostText}
                                              addPost={props.addPost}
                                              updateNewPostText ={props.updateNewPostText}
                       />}/>
            </div>
        </div>

    );
}


export default App;
