import React from 'react';
import { Avatar } from 'antd';
import { Layout ,Spin } from 'antd';
import { Menu, Icon } from 'antd';
import { Link, Switch, Route ,Redirect } from 'dva/router';
import { connect } from 'dva';
import Addques from './questions/addques/Addques'
import Classify from './questions/classify/classify'
import Examine from './questions/examine/examine'
import Adduser from './user/adduser/Adduser'
import Usershow from './user/usershow/Usershow'
import Addexam from './exam/addexam/Addexam'
import Examlist from './exam/examlist/examList'
import Classgav from './class/classgav/classGav'
import Classroom from './class/classroom/classRoom'
import Student from './class/student/student'
import Awaiting from './papers/awaiting/Awaiting'
import Detail from './questions/addques/detail'


import './IndexPage.css';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Products extends React.Component {
  state = {
    current: 'mail',
    collapsed: false
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout style={{ width: '100%', height: '100%', overflow: "hidden" }} >
        <Header className="header" style={{ background: "#fff" }}>
          <div className='logo' style={{ width: "200px", float: 'left' }} ><img style={{ width: '100%' }} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" /> </div>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <SubMenu style={{ float: "right" }}
              title={
                <span className="submenu-title-wrapper">
                  <Avatar style={{ marginRight: "15px" }} src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" />
                  chenmanjie
                </span>
              }
            >
              <Menu.ItemGroup style={{ borderBottom: "1px solid #ccc" }}  >
                <Menu.Item key="setting:1">个人中心</Menu.Item>
                <Menu.Item key="setting:2">我的班级</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup>
                <Menu.Item key="setting:3">设置</Menu.Item>
                <Menu.Item key="setting:4">退出登录</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Header>
        <Layout  >
          <Sider width={200} style={{ background: '#232A41', color: 'rgba(255, 255, 255, 0.65)', overflowY: "auto", overflowX: "hidden" }} >
            <div style={{ width: 256 }}>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span  >
                      <Icon type="sliders" />
                      试题管理
                  </span>

                  }
                >
                  <Menu.Item key="1">
                    <Link to="/products/addques">添加试题</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/products/classify">试题分类</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/products/examine">查看试题</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="user" />
                      用户管理
              </span>
                  }
                >
                  <Menu.Item key="4">
                    <Link to="/user/adduser">添加用户</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/user/usershow">用户展示</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="schedule" />
                      考试管理
              </span>
                  }
                >
                  <Menu.Item key="6">
                    <Link to="/exam/addexam">添加考试</Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/exam/examlist">试卷列表</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span  >
                      <Icon type="project" />
                      班级管理
                  </span>
                  }

                >
                  <Menu.Item key="8">
                    <Link to="/class/classgav">班级管理</Link>
                  </Menu.Item>
                  <Menu.Item key="9">
                    <Link to="/class/classroom">教室管理</Link>
                  </Menu.Item>
                  <Menu.Item key="10">
                    <Link to="/class/student">学生管理</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span  >
                      <Icon type="sliders" />
                      阅卷管理
                  </span>
                  }

                >
                  <Menu.Item key="11">
                    <Link to='/papers/awaiting' >待批班级</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </Sider>

          <Content>
            <Switch>
              <Redirect exact from='/' to='/products/addques'></Redirect> 
              <Route path="/products/addques" component={Addques}></Route>
              <Route path="/products/classify" component={Classify}></Route>
              <Route path="/products/examine" component={Examine}></Route>
              <Route path="/products/detail" component={Detail}></Route>

              <Route path="/user/adduser" component={Adduser}></Route>
              <Route path="/user/usershow" component={Usershow}></Route>

              <Route path="/exam/addexam" component={Addexam}></Route>
              <Route path="/exam/examlist" component={Examlist}></Route>

              <Route path="/class/classgav" component={Classgav}></Route>
              <Route path="/class/classroom" component={Classroom}></Route>
              <Route path="/class/student" component={Student}></Route>

              <Route path="/papers/awaiting" component={Awaiting}></Route>
            </Switch>
            { this.props.loading ? <div style={{width:'87%',height:'88%',position:'absolute',left:'200px',top:'80px',background:'rgba(0,0,0,.5)'}}>
              <Spin />
            </div>:null }
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state =>{
  console.log('state',state);
  return {
    loading:state.loading.global
  }
}

export default connect(mapStateToProps)(Products);


//登陆(用户名,密码(一般都是加密后的)) => token(令牌) => redux(传递数据) 

//本地存储(硬盘里) cookie(时效性,)

