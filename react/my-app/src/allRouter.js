import { Route} from 'react-router-dom';
import React,{Component} from 'react';
import login from './component/login';
import home from './component/home';
import chart from './component/chart'
import system from './component/system'

class AllRouter extends Component{
    render(){
        return (
            <div>
                <Route path="/login" component={login}/>
                <Route path="/home" component={home}/>
                <Route path="/chart" component={chart}/>
                <Route path="/system" component={system}/>
            </div>
        )
    }
}
export default AllRouter