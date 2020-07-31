import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Switch, Route, HashRouter} from 'react-router-dom';
import {Home} from './pages/Home.jsx';
import {Profile} from "./pages/Profile";
import {About} from "./pages/About";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {GithubState} from "./context/github/GithubState";

const App = () => {
    return (
        <GithubState>
            <AlertState>
                <HashRouter basename={process.env.PUBLIC_URL}>
                    <Navbar/>
                    <div className="container pt-5">
                        <Alert alert={{text: 'test'}}/>
                        <Switch>
                            <Route path='/' exact component={Home}  />
                            <Route path='/about' component={About}/>
                            <Route path='/profile/:name' component={Profile}/>
                        </Switch>
                    </div>
                </HashRouter>
            </AlertState>
        </GithubState>
    )
}

export default App;
