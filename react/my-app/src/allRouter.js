import { Route ,Redirect ,BrowserRouter as Router ,Switch} from 'react-router-dom';
import React,{Component} from 'react';
import login from './component/login';
import home from './component/home';
import find from './component/find'
import talk from './component/talk'

class AllRouter extends Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={()=>(this.reRouter())}/>
                    <Route path="/login" component={login}/>
                    <Route path="/home" component={home}/>
                    <Route path="/chart" component={find}/>
                    <Route path="/system" component={talk}/>
                </Switch>
            </Router>
        )
    }
    reRouter(){
        console.log(1)
        if(true){ //ajax
            return (
                <Redirect to={'/login'} />
            )
        }else{}
    }
}
export default AllRouter