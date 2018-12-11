import React,{Component} from 'react'
import { Select  ,Button} from 'antd'
const Option = Select.Option;
class Login extends Component {
    constructor(){
        super();
        this.state = {
            iszhuce : 1,
            test:0
        };
    }
    render() {
        let main_render;
        if(this.state.iszhuce === 1) {
            main_render =
                <div className={'w100'}>
                    <div className={'txnr'}>
                        <div className={'w100 shouji'}>
                            <Select defaultValue={'中国大陆'}>
                                <Option value={'中国大陆'}>中国大陆</Option>
                                <Option value={'美国'}>美国</Option>
                                <Option value={'韩国'}>韩国</Option>
                                <Option value={'土耳其'}>土耳其</Option>
                                <Option value={'加拿大'}>加拿大</Option>
                            </Select>
                            <i className={'iconfont icon-shouji'}></i>
                            <input placeholder={'请输入手机号'}/>
                        </div>
                        <div className={'w100 yanzhengma'}>
                            <input placeholder={'请输入验证码'}/>
                            <a className={'huoquyzm'}>获取短信验证码</a>
                        </div>
                        <Button type={'primary'} className={'zhuceBut w100 mTop50'} style={{height:'32px'}}>注册</Button>
                        <div className={'xieyi mTop20'}>注册即代表同意《xx协议》《隐私保护指引》</div>
                    </div>
                    <div className={'yiyou'}>已有账号？<a className={'tologin'} onClick={this.toLogin.bind(this,'tologin')}>登录</a></div>
                </div>
        }else{
            main_render = <div className={'w100'}>
                <div className={'txnr'}>
                    <div className={'w100 shouji'}>
                        <i className={'iconfont icon-shouji'} style={{'marginLeft':0}}></i>
                        <input placeholder={'请输入手机号'}/>
                    </div>
                    <div className={'w100 shouji'}>
                        <i className={'iconfont icon-mima'} style={{'marginLeft':0}}></i>
                        <input placeholder={'请输入密码'}/>
                    </div>
                    <div className={'w100 flex jcb'}>
                        <a style={{'padding':'0 14px 20px 14px'}}>手机验证码登录</a>
                        <a style={{'padding':'0 14px 20px 14px'}}>忘记密码？</a>
                    </div>
                    <Button type={'primary'} className={'zhuceBut w100 mTop50'} style={{height:'32px','marginTop':'9px'}} onClick={this.login.bind(this)}>登录</Button>
                </div>
                <div className={'yiyou'}>没有账号？<a className={'tologin'} onClick={this.toLogin.bind(this,'tozhuce')}>注册</a></div>
            </div>
        }
        return (
            <div className={'_login'}>
                <div className={'login_back minHeight'}>
                    <div className={'w100 h100 flex aic jcc'}>
                        <div className={'login_main_box'}>
                            <div className={'usermain'}>
                                <div className={'w100 font1'}>XX</div>
                                <div className={'w100 font2'}>{this.state.iszhuce===1?'注册':'登录'}xx,发现更大的世界</div>
                                { main_render }
                            </div>
                            <div className={'down_box mTop20'} onClick={this.download}>下载xx App</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    toLogin(value){
        this.setState({
            iszhuce : value === 'tologin'? 0:1
        });
    }
    login(){
        this.props.history.push('/home');
    }
    download(){
        console.log('download');
    }
}
export default Login