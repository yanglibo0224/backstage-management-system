
import React, { Component, useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';

import { Form, Input, Icon, Checkbox, Button } from 'antd';
import "antd/dist/antd.css";


function IndexPage(props) {
  //获取login
  // let { login } = props;
  // useEffect(() => {
  //   login({
  //     user_name: "chenmanjie",
  //     user_pwd: "Chenmanjie123!"
  //   })
  // }, []);
  const {login,user} = props;
    useEffect(()=>{
        console.log(props);
    }, []);
    useState(()=>{
        console.log('useState....',props);
    })

  // 处理表单提交
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // 调登录接口
        login({
          user_name: values.username,
          user_pwd: values.password
        })
      }
    });
  };
  // 表单校验
  const { getFieldDecorator } = props.form;
  return <div style={{ background: "rgb(0,0,128)", height: '100%', overflow: "hidden" }} >
    <div style={{width:'350px',background:"#fff",height:"250px",paddingTop:'20px',position:'absolute',top:"50%",marginTop:'-150px',right:'120px'}} >
      <Form onSubmit={handleSubmit} className="login-form" style={{margin:'0 auto'}} >
        <Form.Item >
          {getFieldDecorator('username', {
            validateTrigger: 'onBlur',
            rules: [{ required: true, message: '请输入正确的用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item  >
          {getFieldDecorator('password', {
            rules: [{ pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/, message: '请输入正确的密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <Form.Item  >
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住密码</Checkbox>)}
          <a className="login-form-forgot" href="">
            忘记密码
        </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>

}






// class IndexPage extends Component {
//   componentDidMount(){
//     //调登陆接口
//     let {login}=this.props;
//     login({
//       user_name:"chenmanjie",
//       user_pwd:"Chenmanjie123!"
//     })
//   }

//   render() {
//     return <div className={styles.normal}>
//       <div className={styles.login}>
//         <Input
//           placeholder="请输入用户名"
//           prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.65)' }} />}
//         />
//         <Input.Password
//           placeholder="请输入用户密码"
//           prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,0.65)' }} />}
//         />
//         <div className={styles.select}>
//           {/* <Checkbox onChange={onChange}>记住密码</Checkbox> */}
//           <a href="">忘记密码</a>
//         </div>
//         <Button type="primary" block onClick={herf => window.location.href = "http://localhost:8000/#/Products"}>
//           登陆
//         </Button>
//       </div>
//     </div>
//   }

// }

const mapStateToProps = state => {
  console.log('state...', state);
  return state
}
const mapDispatchToProps = dispatch => {
  return {
    login(payload) {
      dispatch({
        type: 'user/login',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'normal_login' })(IndexPage));
