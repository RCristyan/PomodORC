import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import createlist from "./pages/createlistpage";
import Home from "./pages/home";

const Routes = () =>{
    return(
        <Router>
            <Sidebar />
            <Header />
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/criarlista' exact component={createlist}/>
            </Switch>
        </Router>
    );
};
export default Routes;