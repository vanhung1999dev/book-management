import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'

const MainRouter = () => (
    <div>
        <Switch>
            <Route path="/login" component={Login}></Route>
        </Switch>
    </div>
);
export default MainRouter
