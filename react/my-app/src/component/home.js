import React, { Component } from 'react';
import { Table, Button, Input,Select} from 'element-react'
import Header from './header';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 150,
                    fixed: 'left'
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 160
                },
                {
                    label: "省份",
                    prop: "province",
                    width: 160
                },
                {
                    label: "地址",
                    prop: "address",
                    width: 400
                },
                {
                    label: "邮编",
                    prop: "zip",
                    width: 120
                },
                {
                    label: "操作",
                    prop: "zip",
                    fixed: 'right',
                    width: 100,
                    render: ()=>{
                        return <span><Button type="text" size="small">查看</Button><Button type="text" size="small">编辑</Button></span>
                    }
                }
            ],
            data: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }],
            value:2,
            lists:[
                {
                    index:1,
                    name:'name1'
                },
                {
                    index:2,
                    name:'name2'
                }
            ]
        }
        console.log('home')
    }
    render(){
        return (
            <div>
                <Header/>
                <div style={{width:'1000px',margin:'0 auto'}}>
                    {/*<div className="mTop20">当前组件：</div>*/}
                    <div className="mTop20">测试表格</div>
                    <Table
                        style={{width:'100%',marginTop:'20px'}}
                        columns={this.state.columns}
                        data={this.state.data}
                        border={true}
                    />
                    {/*<input type='text' ref="inputtest" value={this.state.value} onChange={(e)=>{this.textChange(e)}} />*/}
                    <div className="chart_input">
                        <Input placeholder="请输入内容" prepend="Http://" />
                        <Input placeholder="请输入内容" append=".com" value={this.state.value} onChange={(e)=>{this.textChange(e)}}/>
                        <Input placeholder="请输入内容" prepend={
                            <Select value="">
                                {
                                    ['餐厅名', '订单号', '用户电话'].map((item, index) => <Select.Option key={index} label={item} value={index} />)
                                }
                            </Select>
                        } append={<Button type="primary" icon="search">搜索</Button>} />
                    </div>
                    <Child list={this.state.lists} ha={this.hahaha}/>
                </div>
            </div>
        )
    }
    textChange(value){
        this.setState(
            {value},()=>{
                console.log(this.state.value)
            }
        )
    }
    hahaha(){
        var arr = [1,2,35,66]
        var test = new Map([[arr,1],['b',2]]);
        arr.unshift(2);
        console.log(test.get(arr))
        alert('子组件调用父组件成功')
    }
}
// function Child({list}) {
//     return (
//         <ul>
//             {
//                 list.map(val=><li key={val.index}>{val.name}</li>)
//             }
//         </ul>
//     )
// }
class Child extends Component {
    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.list.map(val=><li key={val.index}>{`${val.name}111`}</li>)
                    }
                </ul>
                <Button onClick={this.props.ha}>子-->父fun</Button>
            </div>
        )
    }
}

export default Home