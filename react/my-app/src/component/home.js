import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import Header from './header'
import Tuijian from './homeComponent/Tuijian'
import UserCaozuo from './homeComponent/UserCaozuo'


class Home extends Component {
    state = {
        current: 'like',
        tuijian_num : Array.from({length:5}).map((val,ind)=>{return ind + 1}),
        guanzhu_num : Array.from({length:5}).map((val,ind)=>{return ind + 2}),
        rebang_num : Array.from({length:5}).map((val,ind)=>{return ind + 3}),
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    render(){
        let home_tab;
        let wi;
        if(this.state.current === 'like'){
            wi = this.state.tuijian_num;
        }else if(this.state.current === 'star'){
            wi = this.state.guanzhu_num;
        }else { //fire
            wi = this.state.rebang_num;
        }
        home_tab = wi.map(val=>{
            return <Tuijian ind={val} key={val}></Tuijian>
        })
        return (
            <div className={'home'}>
                <Header/>
                <div className={'main_box'}>
                    <div className={'left_box'}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal">
                            <Menu.Item key="like">
                                <Icon type="like" />推荐
                            </Menu.Item>
                            <Menu.Item key="star">
                                <Icon type="star" />关注
                            </Menu.Item>
                            <Menu.Item key="fire">
                                <Icon type="fire" />热榜
                            </Menu.Item>
                        </Menu>
                        {home_tab}
                    </div>
                    <UserCaozuo></UserCaozuo>
                </div>
            </div>
        )
    }

}

export default Home