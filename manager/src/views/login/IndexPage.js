import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Form, Input, Icon, Checkbox, Button, message } from 'antd';
import './index.scss';

function IndexPage(props) {
  console.log(props.isLogin)
  //判断是否登陆
  useEffect(() => {
    if (props.isLogin === 1) {
      // 1.提示登陆成功
      message.success('登陆成功');
      // 2.存储cookie
      // 3.跳转主页面
      console.log('props.history', props.history);
      let pathName = decodeURIComponent(props.history.location.search.split('=')[1]);
      props.history.replace(pathName);
    } else if (props.isLogin === -1) {
      // 登陆失败
      message.error('用户名或密码错误')
    }
  }, [props.isLogin]);


  // 处理表单提交
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // 调登录接口
        props.login({
          user_name: values.username,
          user_pwd: values.password
        })
      }
    });
  };
  // 表单校验
  const { getFieldDecorator } = props.form;
  return <div style={{ background: "rgb(0,0,128)", height: '100%', overflow: "hidden" }} >
    <div style={{ width: '350px', background: "#fff", height: "250px", paddingTop: '20px', position: 'absolute', top: "50%", marginTop: '-150px', right: '120px' }} >
      <Form onSubmit={handleSubmit} className="login-form" style={{ margin: '0 auto' }} >
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


const mapStateToProps = state => {
  return {
    ...state.user
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(IndexPage));
