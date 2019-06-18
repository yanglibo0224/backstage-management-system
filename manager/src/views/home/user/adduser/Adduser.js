import React,{useEffect} from 'react';
import { Form, Input, Button, Radio, Select, Tabs } from 'antd';
import './index.scss';
import { connect } from 'dva'

const { Option } = Select;
const { TabPane } = Tabs;
function Adduser(props) {

  useEffect(()=>{
    // /user 添加用户
    
    //获取身份信息
    // props.getUser();
  })

  let handleSubmits = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        props.Adduser(values)
      }
    });
  }
  let handleSubmit = e => {}
  const { getFieldDecorator } = props.form

  return (
    <div className="adduser" style={{ padding: '15px' }}>
      <h1 className="h1">添加用户</h1>
      <div style={{ display: 'flex', flexWrap: "wrap" }} >
        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmits} >
          <Tabs type="card" >
            <TabPane tab={`添加用户`} key='1'>
              <Form.Item>
                {getFieldDecorator('user_name', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                  initialValue: ''
                })(<Input placeholder="请输入用户名" />)}
              </Form.Item>
              <Form.Item >
                {getFieldDecorator('user_pwd', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                  initialValue: ''
                })(<Input placeholder="请输入密码" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('identity1', {
                  rules: [{ required: true, message: 'Please select your gender!' }],
                  initialValue: '请选择身份id'
                })(
                  <Select
                    placeholder="请选择身份id"
                  >
                    <Option value="出题者">出题者</Option>
                    <Option value="管理员">管理员</Option>
                    <Option value="浏览者">浏览者</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item >
                <Button type="primary" htmlType="submit" >确定</Button>
                <Button >重置</Button>
              </Form.Item>
            </TabPane>
            <TabPane tab={`更新用户`} key='2'>
              <Form.Item>
                {getFieldDecorator('identity2', {
                  rules: [{ required: true, message: 'Please select your gender!' }],
                  initialValue: undefined
                })(
                  <Select
                    placeholder="请选择身份id"
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('user_name1', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                  initialValue: undefined
                })(<Input placeholder="请输入用户名" />)}
              </Form.Item>
              <Form.Item >
                {getFieldDecorator('user_pwd2', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                  initialValue: undefined
                })(<Input placeholder="请输入密码" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('identity', {
                  rules: [{ required: true, message: 'Please select your gender!' }],
                  initialValue: undefined
                })(
                  <Select
                    placeholder="请选择身份id"
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item >
                <Button type="primary" htmlType="submit" >确定</Button>
                <Button >重置</Button>
              </Form.Item>
            </TabPane>
          </Tabs>
        </Form>
        {/* <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit} >
          <Form.Item >
            <Radio.Group defaultValue="vertical" >
              <Radio.Button value="vertical">添加身份</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('exam_id', {
              rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: undefined
            })(<Input placeholder="请输入身份名称" />)}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >确定</Button>
            <Button >重置</Button>
          </Form.Item>
        </Form>
        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit} >
          <Form.Item >
            <Radio.Group defaultValue="vertical" >
              <Radio.Button value="vertical">添加api接口</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('exam_id', {
              rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: undefined
            })(<Input placeholder="请输入api接口权限名称" />)}
          </Form.Item>
          <Form.Item >
            {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: undefined
            })(<Input placeholder="请输入api接口权限url" />)}
          </Form.Item>
          <Form.Item >
            {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: undefined
            })(<Input placeholder="请输入api接口权限方法" />)}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >确定</Button>
            <Button >重置</Button>
          </Form.Item>
        </Form>
        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit} >
          <Form.Item >
            <Radio.Group defaultValue="vertical" >
              <Radio.Button value="vertical">添加视图接口权限</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please select your gender!' }],
              initialValue: undefined
            })(
              <Select
                placeholder="请选择已有视图"
              // onChange={this.handleSelectChange}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >确定</Button>
            <Button >重置</Button>
          </Form.Item>
        </Form>
        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit} >
          <Form.Item >
            <Radio.Group defaultValue="vertical" >
              <Radio.Button value="vertical">给身份设置api接口权限</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please select your gender!' }],
              initialValue: undefined
            })(
              <Select
                placeholder="请选择身份id"
              // onChange={this.handleSelectChange}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please select your gender!' }],
              initialValue: undefined
            })(
              <Select
                placeholder="请选择api接口权限"
              // onChange={this.handleSelectChange}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >确定</Button>
            <Button >重置</Button>
          </Form.Item>
        </Form>
        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit} > */}
          {/* <Form.Item >
            <Radio.Group defaultValue="vertical" >
              <Radio.Button value="vertical">给身份设置视图权限</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please select your gender!' }],
              initialValue: undefined
            })(
              <Select
                placeholder="请选择身份id"
              // onChange={this.handleSelectChange}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please select your gender!' }],
              initialValue: undefined
            })(
              <Select
                placeholder="请选择视图权限id"
              // onChange={this.handleSelectChange}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >确定</Button>
            <Button >重置</Button>
          </Form.Item>
        </Form> */}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    //添加用户
    Adduser(payload) {
      console.log(payload)
      dispatch({
        type: "adduser/Adduser",
        payload
      })
    },
    //获取身份信息/user/identity
    // getUser(payload) {
    //   dispatch({
    //     type: "adduser/getUsera",
    //   })
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Adduser))
