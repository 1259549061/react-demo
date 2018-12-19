import React, { Component } from 'react';
import { Menu, Icon,Select,Button ,message} from 'antd';
import Header from './header'
import Tuijian from './homeComponent/Tuijian'
import UserCaozuo from './homeComponent/UserCaozuo'
import {testAdd1} from "../actions/index";

const Option = Select.Option;

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            current: 'like',
            tuijian_num : Array.from({length:5}).map((val,ind)=>{return ind + 1}),
            guanzhu_num : Array.from({length:5}).map((val,ind)=>{return ind + 2}),
            rebang_num : Array.from({length:5}).map((val,ind)=>{return ind + 3}),
            selected:'lucy',
            value:'lucy',
            firstValue:0
        }
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    handleChange(val){
        this.setState({
            selected:val
        });
    }
    testClick(val){ //
        this.setState({
            value:this.state.selected
        });
    }
    zitofu(value){
        message.info('子->父 jack');
        this.setState({
            selected:value
        });
    }
    writeTest(val){
        console.log(val)
        message.info('同级组件传值 -- usercaozuo-->tuijian');
        this.setState({
            value:val
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
            return <Tuijian ind={val} key={val}  mySel={this.state.value} zitofu={(val)=>{this.zitofu(val)}}></Tuijian>
        })
        return (
            <div className={'home'}>
                {/*子组件路由跳转用到history需要继承父组件的*/}
                <Header history={this.props.history}/>
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
                        <Select value={this.state.selected} className={'mTop20'} style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>Disabled</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <Button type="primary" className={'mLeft10'} onClick={this.testClick.bind(this)}>父->子</Button>
                        <Button type="primary" className={'mLeft10'} onClick={this.reduxTest.bind(this)}>redux test</Button>
                        <span> First value：{this.state.firstValue} </span>
                        {home_tab}
                    </div>
                    <UserCaozuo writeTest={(val)=>{this.writeTest(val)}}/>
                </div>
            </div>
        )
    }
    reduxTest(){ //依赖 redux 创建全局变量
        // 在reducer中处理dispatch的事件
        window.store.dispatch(testAdd1('First'));
        this.setState(
            {
                firstValue:window.store.getState().First
            }
        );
        // 只是作为订阅者、监听者，类似于vue的$emit，$on
        window.store.dispatch({
            type:'msg',
            data:'111'
        });
    }
}

export default Home