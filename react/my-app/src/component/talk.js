import React, { Component } from 'react';
import Header from './header';
import UserCaozuo from './homeComponent/UserCaozuo';

class Talk extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={'talk'}>
                {/*子组件路由跳转用到history需要继承父组件的*/}
                <Header history={this.props.history}/>
                <div className={'main_box'}>
                    <div className={'left_box'}>
                        <div>talk page</div>
                        <TalkMod></TalkMod>
                    </div>
                    <UserCaozuo></UserCaozuo>
                </div>
            </div>
        )
    }
}
/*函数组件适用于不需要组件之前通信的时候，只负责数据渲染*/
function TalkMod() {
    let a = [1,2,3];
    return (
        <div>
            {
                a.map(val=>{
                    return <div key={val}>函数形式组件测试{val}</div>
                })
            }
        </div>
    )
}

export default Talk