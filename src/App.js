import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home.jsx';
import Profile from "./pages/Profile";
import About from "./pages/About";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container pt-5">
                <Switch>
                    <Route path='/' exact render={() => <Home />} />
                    <Route path='/about' render={() => <About />} />
                    <Route path='/profile:name' render={() => <Profile />} />
                </Switch>
                </div>
        </BrowserRouter>
    )
}

export default App;
