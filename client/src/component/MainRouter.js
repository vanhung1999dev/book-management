import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import MainPage from './MainPage'
// import Login from './Login'
import OtherLogin from './otherLogin'

function MainRouter() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/login' component={OtherLogin} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
