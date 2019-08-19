import React, {Component} from "react";
import { BrowserRouter , Route } from 'react-router-dom';
import Country from './Country';
import Countries from './Countries';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Route path="/" exact component={Countries} />
                <Route path="/country" exact component={Country} />
            </BrowserRouter>
        )
    }
}

export default App