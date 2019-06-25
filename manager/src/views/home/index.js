import React from 'react';
import { Avatar } from 'antd';
import { Layout, Spin, Modal, Input } from 'antd';
import { Menu, Icon } from 'antd';
import { Link, Switch, Route, Redirect } from 'dva/router';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';
import listDetail from './exam/listDetail'
import AddDetail from './exam/addDetail/index'
import Detail from './questions/addques/detail'
import axios from 'axios';
import './IndexPage.css';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Products extends React.Component {
  state = {
    current: 'mail',
    collapsed: false,
    visible: false
  };

  handleCancel = e => {
    this.setState({
      visible: false
    })
  };
  handleOk = e => {
    this.setState({
      visible: false
    })
  };
  handleClick = e => {
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  Headmodal = () => {
    this.setState({
      visible: true
    })
  }
  
  handChange = (event) => {
    var eleImgUploadX = document.getElementById('imgUploadX');
    var imgs = document.querySelector('.imgs');
    var canvas=document.createElement('canvas')
    console.log(imgs)
    var size = 40;
    canvas.width = size;
    canvas.height = size;
    var context = canvas.getContext('2d');
    var eleImgCover = new Image();
    axios({
      method: 'post',
      url: 'http://123.206.55.50:11000/tobase64',
      data: { url:'https://pic.ibaotu.com/01/34/85/57k888piCYrI.jpg-1.jpg!ww700'}
      }).then(body => {
        eleImgCover.src=body.data.data.base64;
        eleImgCover.onload=function () {
          context.drawImage(eleImgCover, 0, 0, size, size, 0, 0, size, size);
          eleImgUploadX.innerHTML='<img src="' + eleImgCover.src + '" width="' + size + '" height="' + size + '">'
          }
      })
      var imgUpload = new Image();
      var files = event.target.files 
      for (let i=0,len=files.length;i<len;i++){
        var reader = new FileReader();
        reader.onload = function () {
          imgUpload.src=this.result;
          console.log(imgUpload.src)
          imgUpload.onload=function(){
          context.drawImage(imgUpload, 0, 0, 180,180, 0, 0, 40, 40);
          var result=canvas.toDataURL('jpg')
          imgs.src=result
          console.log(result)
        }
    }
    reader.readAsDataURL(files[i]);
  }
}
  //     reader.onload = function(){
  //       console.log('result...', this.result);
  //       // 使用canvas合成图片，并base64化
  //       var base64 = this.result;
  //     imgTogether(base64, function (url) {
  //         // 尺寸
  //         var size = 180 / (window.devicePixelRatio || 1);
  //         // 预览
  //         eleImgUploadX.innerHTML = '<img src="' + url + '" width="' + size + '" height="' + size + '">';
  //       });
  //     }
  //     reader.readAsDataURL(file);
      
  //   reader.readAsDataURL(file);
  //   var imgTogether = function (url, callback) {
      
      
  //     // 这是上传图像
  //     var imgUpload = new Image();
  //     imgUpload.src=url;
  //     imgUpload.onload = function () {
  //       // 绘制
  //       context.drawImage(eleImgCover, 0, 0, size, size, 0, 0, size, size);
  //       // 再次绘制
  //       context.drawImage(imgUpload, 0, 0, size, size, 0, 0, size, size);
  //       // 回调
  //       callback(canvas.toDataURL('jpeg'));
  //     };
      
  //   };
  // }

  render() {
    // console.log(this.props);
    if (!this.props.myView.length) {
      return null
    }
    return (
      <Layout style={{ width: '100%', height: '100%', overflow: "hidden" }} >
        <Header className="header" style={{ background: "#fff" }}>
          <div className='logo' style={{ width: "200px", float: 'left' }} ><img style={{ width: '100%' }} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" /> </div>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <SubMenu style={{ float: "right" }}
              title={
                <span className="submenu-title-wrapper">
                  <img style={{ marginRight: "15px",width:"40px",height:"40px",borderRadius:"50%" }} className='imgs'  />
                  chenmanjie

                </span>

              }
            >
              {/*  */}
              <Menu.ItemGroup style={{ borderBottom: "1px solid #ccc" }}  >
                <Menu.Item key="setting:1">个人中心</Menu.Item>
                <Menu.Item key="setting:2">我的班级</Menu.Item>
                <Menu.Item key="setting:6" onClick={() => this.Headmodal()} >图片上传</Menu.Item>
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
                          return <Menu.Item key={value.name}>
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
                  return item.children.map((value, index) => {
                    return <Route key={index} path={value.path} component={value.component} />
                  })
                }
              })}
              {/* 403路由 */}
              {this.props.forbiddenView.map((item, index) => {
                return <Redirect key={index} form={item} to="/403" />
              })}
              <Redirect to="/404" />
            </Switch>
            {this.props.loading ? <div style={{ width: '87%', height: '88%', position: 'absolute', left: '200px', top: '80px', background: 'rgba(0,0,0,.5)' }}>
              <Spin />
            </div> : null}
          </Content>
          <Modal
            title="图片上传"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div>
              <input type="file" id="uploadFile" onChange={(event) => this.handChange(event)} className="clip" accept="image/*"></input>
              {/* <label className="ui-button ui-button-primary" htmlFor="uploadFile">选择图片</label> */}
              {/* <img style={{ width: "180px", height: "180px", backgroundSize: '100% 100%', overflow: "hidden" }} id="imgCover" src="https://pic.ibaotu.com/01/34/85/57k888piCYrI.jpg-1.jpg!ww700" className="clip"></img> */}
              <p id="imgUploadX"></p>
            </div>
          </Modal>
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