import React ,{Component} from 'react';
// import {Link} from 'react-router-dom';
import { Input,Icon,Avatar,message} from 'antd';
const Search = Input.Search;

class Header extends Component {
    constructor(props){
        super();
        this.props = props;
        this.state = {
            outShow:0
        }
    }
    render(){
        let outNav = '';
        if(this.state.outShow === 1){
            outNav = (
                <div className={'out'}>
                    <span className={'sanjiao'}></span>
                    <a onClick={this.zhuye.bind(this)}>我的主页</a>
                    <a onClick={this.mySet.bind(this)}>设置</a>
                    <a onClick={this.loginout.bind(this)}>退出</a>
                </div>
            )
        }
        return (
                <div className="headerBox">
                    <div className="header">
                        <div style={{width:'100px',fontWeight:'bolder'}}>React Test</div>
                        <div className={'flex w100'}>
                            <div className='navBox'>
                                <a className={'nava'} onClick={this.jump.bind(this,'/home')}>首页</a>
                                <a className={'nava'} onClick={this.jump.bind(this,'/find')}>发现</a>
                                <a className={'nava'} onClick={this.jump.bind(this,'/talk')}>话题</a>
                                <Search
                                    placeholder="input search text"
                                    onSearch={value => console.log(value)}
                                    enterButton
                                    style={{ width: 300 }}
                                />
                            </div>
                            <div className={'flex1 aic flex jce'} style={{position:'relative'}}>
                                <Icon type="bell" className={"fontSize mRight40"}/>
                                <Icon type="switcher" className={"fontSize mRight40"}/>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{cursor:'pointer'}} onClick={this.avatar.bind(this)} />
                                {outNav}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
    outShowValue(val){
        this.setState({
            outShow:val
        })
    }
    jump(val){
        if(this.props.history.location.pathname === val) return;
        this.props.history.push(val);
    }
    avatar(){
        this.outShowValue(1);
    }
    loginout(){
        this.outShowValue(0);
        //ajax
        this.props.history.push('/login');
    }
    zhuye(){
        this.outShowValue(0);
        message.success('主页'); // success error warning info
    }
    mySet(){
        this.outShowValue(0);
        message.success('设置');
    }
}
export default Header