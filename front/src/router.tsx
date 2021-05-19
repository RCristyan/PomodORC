<<<<<<< HEAD
=======
//import React, { Component } from "react"
>>>>>>> e3df1d4dd6ddeefc5ef414b4680be7a22522a603
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
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/criarlista' exact component={createlist} />
                <Route path='/criartarefa' exact component={CreateActivityPage} />
                <Route path='/verlista' exact component={SeeListPage} />
            </Switch>
        </Router>
    );
};
export default Routes;