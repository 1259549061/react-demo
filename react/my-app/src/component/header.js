import React ,{Component} from 'react';
// import {Link} from 'react-router-dom';
import { Input,Icon } from 'antd';
const Search = Input.Search;

class Header extends Component {
    render(){
        return (
                <div className="headerBox">
                    <div className="header">
                        <div style={{width:'100px',fontWeight:'bolder'}}>React Test</div>
                        <div className={'flex w100'}>
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
                            <div className={'flex1 aic flex jce'}>
                                <Icon type="bell" className={"fontSize mRight40"}/>
                                <Icon type="switcher" className={"fontSize mRight40"}/>
                                <Icon type="user" className={"fontSize"}/>
                            </div>
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