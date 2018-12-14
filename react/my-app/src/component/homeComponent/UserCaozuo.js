import React ,{PureComponent} from 'react';
import { Icon } from 'antd';

class UserCaozuo extends PureComponent {
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div className={'right_box'}>
                <div className={'write'}>
                    <div className={'write_content'} onClick={()=>{this.props.writeTest('write')}}>
                        <Icon type='bars' style={{fontSize:'20px'}} />
                        <span>写回答</span>
                    </div>
                    <div className={'write_content'}>
                        <Icon type='form' style={{fontSize:'20px'}}/>
                        <span>写问题</span>
                    </div>
                    <div className={'write_content'}>
                        <Icon type='file-text' style={{fontSize:'20px'}}/>
                        <span>写文章</span>
                    </div>
                </div>
                <div className={'live'}>
                    <div className={'write'}>
                        <div className={'write_content'}>
                            <Icon type='smile' theme="twoTone" style={{fontSize:'20px'}} />
                            <span>live</span>
                        </div>
                        <div className={'write_content'}>
                            <Icon type='book' theme="twoTone" style={{fontSize:'20px'}}/>
                            <span>书店</span>
                        </div>
                        <div className={'write_content'}>
                            <Icon type='wallet' theme="twoTone" style={{fontSize:'20px'}}/>
                            <span>圆桌</span>
                        </div>
                    </div>
                    <div className={'write'}>
                        <div className={'write_content'}>
                            <Icon type='copy' theme="twoTone" style={{fontSize:'20px'}} />
                            <span>专栏</span>
                        </div>
                        <div className={'write_content'}>
                            <Icon type='dollar' theme="twoTone" style={{fontSize:'20px'}}/>
                            <span>付费资讯</span>
                        </div>
                    </div>
                </div>
                <div className={'Mylist'}>
                    <div className={'lineBox'}>
                        <Icon type={'star'}/>
                        <span className={'text'}>我的收藏</span>
                        <span className={'tip'}>5</span>
                    </div>
                    <div className={'lineBox'}>
                        <Icon type={'bell'}/>
                        <span className={'text'}>我关注的问题</span>
                        <span className={'tip'}>12</span>
                    </div>
                    <div className={'lineBox'}>
                        <Icon type={'robot'}/>
                        <span className={'text'}>我的邀请</span>
                        <span className={'tip'}>1</span>
                    </div>
                    <div className={'lineBox'}>
                        <Icon type={'gold'}/>
                        <span className={'text'}>我的礼券</span>
                        <span className={'tip'}>2</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default  UserCaozuo;
