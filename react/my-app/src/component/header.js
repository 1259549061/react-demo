import React ,{Component} from 'react';
import { Button,Menu} from 'element-react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return (
                <div>
                    <div className="header">
                        <span className="mLeft20">my test for react</span>
                        <Button type="primary" size="small" className="mRight20" onClick={this.loginout.bind(this)}>login out</Button>
                    </div>
                    <div style={{width:'100%'}}>
                        <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this,[1])}>
                            <Menu.Item index="1">
                                <Link to="/home">home</Link>
                            </Menu.Item>
                            <Menu.Item index="2">
                                <Link to="/chart">chart</Link>
                            </Menu.Item>
                            <Menu.Item index="3">
                                <Link to="/system">system</Link>
                            </Menu.Item>
                        </Menu>
                        <div className="line" />
                    </div>
                </div>
        )
    }
    loginout(){
        this.props.history.push('/home');
    }
    onSelect(){

    }
}
export default Header