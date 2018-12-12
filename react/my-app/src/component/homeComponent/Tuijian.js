import React, { Component } from 'react';
import { Icon } from 'antd';
class Tuijian extends Component {
    constructor(props){
        super();
        this.props = props;
        console.log(props)
    }
    render(){
        return(
            <div className={'tuijian'}>
                <div className={'tj_title'}>推荐{this.props.ind}</div>
                <div className={'tj_p'}>p{this.props.ind}</div>
                <div className={'tj_do'}>
                    <a><Icon type='message' style={{fontSize:'20px'}}/><span>xxx条评论</span></a>
                    <a><Icon type='share-alt' style={{fontSize:'20px'}}/><span>分享</span></a>
                    <a><Icon type='heart' style={{fontSize:'20px'}}/><span>收藏</span></a>
                    <a><Icon type='crown' style={{fontSize:'20px'}}/><span>感谢</span></a>
                </div>
            </div>
        )
    }
}
export default  Tuijian