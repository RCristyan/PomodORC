//import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import createlist from "./pages/createlistpage";
import CreateActivityPage from "./pages/createactivitypage";
import Home from "./pages/home";
import SeeListPage from "./pages/seelistpage";

const Routes = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/:totaltime' exact component={Home} />
                <Route path='/criarlista' exact component={createlist} />
                <Route path='/criartarefa' exact component={CreateActivityPage} />
                <Route path='/verlista' exact component={SeeListPage} />
            </Switch>
            <Header />
        </Router>
    );
};
export default Routes;