import React,{Component} from 'react'
class Login extends Component {
    render() {
        return (
            <div>
                <input type={'button'} onClick={this.login.bind(this)} value={'login'}/>
            </div>
        )
    }
    login(){
        this.props.history.push('/home');
    }
}
export default Login