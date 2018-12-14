import React, { Component } from 'react';
import Header from './header';
import UserCaozuo from './homeComponent/UserCaozuo';

class Find extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={'find'}>
                {/*子组件路由跳转用到history需要继承父组件的*/}
                <Header history={this.props.history}/>
                <div className={'main_box'}>
                    <div className={'left_box'}>find page</div>
                    <UserCaozuo></UserCaozuo>
                </div>
            </div>
        )
    }

}


export default Find