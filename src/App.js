import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom"
import './App.css';
import UseStateDemo from './00-UseStateDemo.js'
import UseStatePassPropsDemo from './01-UseStatePassPropsDemo.js'
import UseStateFunctionUpdaterDemo from './02-UseStateFunctionUpdaterDemo.js'
import UseReducerDemo from './03-UseReducerDemo.js'
import UseCounterDemo from './04-UseCounterDemo.js'
import UseReducerPlusDemo from './05-UseReducerPlusDemo.js'
import UseCounterPlusDemo from './06-UseCounterPlusDemo.js'
import UseCounterWithUseReducerDemo from './07-UseCounterWithUseReducerDemo.js'
import LiftingStatePropDrillingDemo from './08-LiftingStateAndPropDrillingDemo.js'
import UseReducerSharedDispatchDemo from './09-UseReducerSharedDispatchDemo.js'
import ContextDemo from './10-ContextDemo.js'

export default function App() {
    return (
        <Router>
            <div>
                <div id="links">
                    <NavLink to="/useState">0 useState</NavLink>&nbsp;&nbsp;
                    <NavLink to="/useStatePassProps">1 useState pass props</NavLink>&nbsp;&nbsp;
                    <NavLink to="/useStateFunctionUpdater">2 useState function updater</NavLink>&nbsp;&nbsp;
                    <NavLink to="/useReducer">3 useReducer</NavLink>&nbsp;&nbsp;
                    <NavLink to="/useCounter">4 useCounter (custom hook)</NavLink>&nbsp;&nbsp;
                    <NavLink to="/useReducerPlus">5 useReducer+</NavLink>&nbsp;&nbsp;
                    <NavLink to="/useCounterPlus">6 useCounter+</NavLink>&nbsp;&nbsp;
                    <NavLink to="/useCounterWithUseReducer">7 useCounter w/useReducer</NavLink>&nbsp;&nbsp;
                    <NavLink to="/liftingStatePropDrilling">8 lifting state & prop drilling</NavLink>&nbsp;&nbsp;
                    <NavLink to="/useReducerSharedDispatch">9 useReducer shared dispatch</NavLink>&nbsp;&nbsp;
                    <NavLink to="/context">10 context</NavLink>&nbsp;&nbsp;
                </div>
                
                <Switch>
                    <Route path="/useState">
                        <UseStateDemo />
                    </Route>
                    <Route path="/useStatePassProps">
                        <UseStatePassPropsDemo />
                    </Route>
                    <Route path="/useStateFunctionUpdater">
                        <UseStateFunctionUpdaterDemo />
                    </Route>
                    <Route path="/useReducer">
                        <UseReducerDemo />
                    </Route>
                    <Route path="/useCounter">
                        <UseCounterDemo />
                    </Route>
                    <Route path="/useReducerPlus">
                        <UseReducerPlusDemo />
                    </Route>
                    <Route path="/useCounterPlus">
                        <UseCounterPlusDemo />
                    </Route>
                    <Route path="/useCounterWithUseReducer">
                        <UseCounterWithUseReducerDemo />
                    </Route>
                    <Route path="/liftingStatePropDrilling">
                        <LiftingStatePropDrillingDemo />
                    </Route>
                    <Route path="/useReducerSharedDispatch">
                        <UseReducerSharedDispatchDemo />
                    </Route>
                    <Route path="/context">
                        <ContextDemo />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
