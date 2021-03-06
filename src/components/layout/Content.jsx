import './Content.css'
import React from "react"
import {Switch, Route} from 'react-router-dom'

import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import About from '../../views/examples/About';

const Content = props => (
    <main className="Content">
       <Switch>
           
       <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/about">
                <About/>
            </Route>

            <Route path="/param/:id">
                <Param/>
            </Route>
            <Route path="*">
                <Home/>
            </Route>

       </Switch>
    </main>
)

export default Content