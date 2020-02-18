import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./Components/Home"
import Register from "./Components/Register"
import Characters from "./Components/Characters"
import Episodes from "./Components/Episodes"

const Routes = () =>(
    <Switch>
        <Route exact path={"/"} component= {Home}/>
        <Route exact path={"/register"} component={Register}/>
        <Route exact path={"/characters"} component={Characters}/>
        <Route exact path ={"/episodes"} component={Episodes}/>
    </Switch>
)

export default Routes