import React, {Component} from 'react';
import Header from "./components/Header/Header";
import './style.css';
import Home from "./components/HomeContainer/Home";
import {Route} from "react-router";
import Footer from "./components/Footer/Footer";
import JobContainer from "./components/JobListContainer/JobContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <>
                    <Header/>

                    <Route exact path='/' render={() => <Home/>}/>
                    <Route path='/job-list' render={() => <JobContainer/>}/>
                    <Route path="/home" render={() => <div>Home</div>} />

                    <Footer/>
                </>
            </div>
        );
    }

}

export default App;

