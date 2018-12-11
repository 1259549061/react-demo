import React ,{Component} from 'react';
import { Button} from 'element-react';
// import {Link} from 'react-router-dom';
import { Input } from 'antd';
const Search = Input.Search;

class Header extends Component {
    render(){
        return (
                <div className="headerBox">
                    <div className="header">
                        <span className="mLeft20">my test for react</span>
                        <Button type="primary" size="small" className="mRight20" onClick={this.loginout.bind(this)}>login out</Button>
                        <div className='navBox'>
                            <a>首页</a>
                            <a>发现</a>
                            <a>话题</a>
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                enterButton
                                style={{ width: 300 }}
                            />
                        </div>
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