import React from 'react';
import { Avatar } from 'antd';
import { Layout, Spin } from 'antd';
import { Menu, Icon } from 'antd';
import { Link, Switch, Route, Redirect } from 'dva/router';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';
import listDetail from './exam/listDetail'
import AddDetail from './exam/addDetail/index'
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
    console.log(this.props);
    if (!this.props.myView.length) {
      return null;
    }
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
                <Menu.Item key="setting:4" onClick={() => this.props.changeLocal(this.props.locale === 'zh' ? 'en' : 'zh')}>{this.props.locale === 'zh' ? '中文' : '英文'}</Menu.Item>
                <Menu.Item key="setting:5">退出登录</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Header>
        <Layout  >
          <Sider width={200} style={{ background: '#232A41', color: 'rgba(255, 255, 255, 0.65)', overflowY: "auto", overflowX: "hidden" }} >
            <div style={{ width: 256 }}>
              <Menu
                defaultSelectedKeys={['0']}
                defaultOpenKeys={['router.questions']}
                mode="inline"
                theme="dark"
              >
                {
                  this.props.myView.map((item, index) => {
                    return <SubMenu
                      key={item.name}
                      title={
                        <span>
                          <Icon type={item.icon} />
                          {this.props.intl.formatMessage({ id: item.name })}
                        </span>
                      }
                    >{
                        item.children.map((value, key) => {
                          return <Menu.Item key={key}>
                            <Link to={value.path}>{this.props.intl.formatMessage({ id: value.name })}</Link>
                          </Menu.Item>
                        })
                      }
                    </SubMenu>
                  })
                }
              </Menu>
            </div>
          </Sider>

          <Content>
            <Switch>
              <Redirect exact from='/' to='/products/addques'></Redirect>
              <Route path="/products/detail" component={Detail}></Route>
              <Route path="/exam/listDetail" component={listDetail}></Route>
              
              {/* 渲染该用户拥有的路由 */}
              {this.props.myView.map(item => {
                if (item.children) {
                  return item.children.map((value,index) => {
                    return <Route key={index} path={value.path} component={value.component} />
                  })
                }
              })}
              {/* 403路由 */}
              {this.props.forbiddenView.map((item,index) => {
                return <Redirect key={index} form={item} to="/403" />
              })}
              <Redirect to="/404" />
            </Switch>
            {this.props.loading ? <div style={{ width: '87%', height: '88%', position: 'absolute', left: '200px', top: '80px', background: 'rgba(0,0,0,.5)' }}>
              <Spin />
            </div> : null}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state',state);
  return {
    loading: state.loading.global,
    locale: state.global.locale,
    myView: state.user.myView,
    forbiddenView: state.user.forbiddenView
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeLocal: payload => {
      dispatch({
        type: 'global/changeLocale',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Products));

//登陆(用户名,密码(一般都是加密后的)) => token(令牌) => redux(传递数据) 

//本地存储(硬盘里) cookie(时效性,)