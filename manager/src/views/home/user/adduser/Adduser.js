import React, { useEffect } from 'react';
import { Form, Input, Button, Radio, Select, Tabs } from 'antd';
import './index.scss';
import { connect } from 'dva'

const { Option } = Select;
const { TabPane } = Tabs;
function Adduser(props) {

  useEffect(() => {
    // /user 添加用户
    //获取身份信息
    props.getUser();
    //用户数据
    props.userUse();
    //获取视图
    props.userelation();
    //获取api接口权限
    props.userauthority()
  }, [])
  // console.log(props)

  let handleSubmits = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        let user = {
          user_name: values.user_name,
          user_pwd: values.user_pwd,
          identity_id: values.identity_id
        }
        props.Adduser(user)
      }
    });
  }
  let handleSubmitadd = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let identity_text = { identity_text: values.identity_text }
        // console.log(identity_text)
        props.Addthea(identity_text)
      }
    });
  }
  let handleSubmitapi = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let api = {
          api_authority_text: values.api_authority_text,
          api_authority_url: values.api_authority_url,
          api_authority_method: values.api_authority_method
        }
        props.Addapii(api)
      }
    });
  }
  let handleSubmituserrelation = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let relation = {
          view_authority_text: values.view_authority_text,
          view_id: '234132'
        }
        props.Addedit(relation)
      }
    });
  }

  let handleSubmitauthority = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let authority = {
          api_authority_id: values.api_authority_id,
          identity_id: values.identity_id
        }
        props.usersetIdentityApi(authority)
      }
    });
  }

  let handleSubmitsetIdentityView = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let Identity = {
          view_authority_id: values.view_authority_id,
          identity_id: values.identity_id
        }
        props.usersetIdentityView(Identity)
      }
    });
  }
  const { getFieldDecorator } = props.form
  const { flag } = true
  return (
    <div className="content" style={{ padding: '15px' }}>
      <h1 className="title">添加用户</h1>
      <div style={{ display: 'flex', flexWrap: "wrap" }} >
        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmits} >
          <Tabs type="card" >
            <TabPane tab={`添加用户`} key='1'>
              <Form.Item>
                {getFieldDecorator('user_name', {
                  // rules: [{ required: true, message: 'Please input your note!' }],
                  initialValue: ''
                })(<Input placeholder="请输入用户名" />)}
              </Form.Item>
              <Form.Item >
                {getFieldDecorator('user_pwd', {
                  // rules: [{ required: true, message: 'Please input your note!' }],
                  initialValue: ''
                })(<Input placeholder="请输入密码" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('identity_id', {
                  // rules: [{ required: true, message: 'Please select your gender!' }],
                  initialValue: '请选择身份id'
                })(
                  <Select
                    placeholder="请选择身份id"
                  >
                    {
                      props.adduser.UserGetList && props.adduser.UserGetList.map(item => {
                        return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                      })
                    }
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
                {getFieldDecorator('user_name', {
                  // rules: [{ required: true, message: 'Please select your gender!' }],
                  initialValue: undefined
                })(
                  <Select
                    placeholder="请选择身份id"
                  >
                    {
                      props.userData.userdataList && props.userData.userdataList.map(item => {
                        return <Option key={item.user_id} value={item.user_id}>{item.user_name}</Option>
                      })
                    }
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('user_name', {
                  // rules: [{ required: true, message: 'Please input your note!' }],
                  initialValue: undefined
                })(<Input placeholder="请输入用户名" />)}
              </Form.Item>
              <Form.Item >
                {getFieldDecorator('user_pwd', {
                  // rules: [{ required: true, message: 'Please input your note!' }],
                  initialValue: undefined
                })(<Input placeholder="请输入密码" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('identity_id', {
                  // rules: [{ required: false, message: 'Please select your gender!' }],
                  initialValue: undefined
                })(
                  <Select
                    placeholder="请选择身份id"
                  >
                    {
                      props.adduser.UserGetList && props.adduser.UserGetList.map(item => {
                        return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                      })
                    }
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
        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmitadd} >
          <Form.Item >
            <Radio.Group defaultValue="identity_text" >
              <Radio.Button value="identity_text">添加身份</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('identity_text', {
              // rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: undefined
            })(<Input placeholder="请输入身份名称" />)}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >确定</Button>
            <Button >重置</Button>
          </Form.Item>
        </Form>

        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmitapi} >
          <Form.Item >
            <Radio.Group defaultValue="vertical" >
              <Radio.Button value="vertical">添加api接口</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('api_authority_text', {
              // rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: undefined
            })(<Input placeholder="请输入api接口权限名称" />)}
          </Form.Item>
          <Form.Item >
            {getFieldDecorator('api_authority_url', {
              // rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: undefined
            })(<Input placeholder="请输入api接口权限url" />)}
          </Form.Item>
          <Form.Item >
            {getFieldDecorator('api_authority_method', {
              // rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: undefined
            })(<Input placeholder="请输入api接口权限方法" />)}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >确定</Button>
            <Button >重置</Button>
          </Form.Item>
        </Form>

        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmituserrelation} >
          <Form.Item >
            <Radio.Group defaultValue="vertical" >
              <Radio.Button value="vertical">添加视图接口权限</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('view_authority_text', {
              // rules: [{ required: true, message: 'Please select your gender!' }],
              initialValue: undefined
            })(
              <Select
                placeholder="请选择已有视图"
              // onChange={this.handleSelectChange}
              >
                {
                  props.adduser.relationGetList && props.adduser.relationGetList.map(item => {
                    return <Option key={item.identity_view_authority_relation_id} value={item.identity_view_authority_relation_id}>{item.view_authority_text}</Option>
                  })
                }
              </Select>
            )}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >确定</Button>
            <Button >重置</Button>
          </Form.Item>
        </Form>

        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmitauthority} >
          <Form.Item >
            <Radio.Group defaultValue="vertical" >
              <Radio.Button value="vertical">给身份设置api接口权限</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('identity_id', {
              // rules: [{ required: true, message: 'Please select your gender!' }],
              initialValue: undefined
            })(
              <Select
                placeholder="请选择身份id"
              // onChange={this.handleSelectChange}
              >
                {
                  props.adduser.UserGetList && props.adduser.UserGetList.map(item => {
                    return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                  })
                }
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('api_authority_id', {
              // rules: [{ required: true, message: 'Please select your gender!' }],
              initialValue: undefined
            })(
              <Select
                placeholder="请选择api接口权限"
              // onChange={this.handleSelectChange}
              >
                {
                  props.adduser.authorityGetList && props.adduser.authorityGetList.map(item => {
                    return <Option key={item.api_authority_id} value={item.api_authority_id}>{item.api_authority_text}</Option>
                  })
                }
              </Select>
            )}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >确定</Button>
            <Button >重置</Button>
          </Form.Item>
        </Form>
        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmitsetIdentityView} >
          <Form.Item >
            <Radio.Group defaultValue="vertical" >
              <Radio.Button value="vertical">给身份设置视图权限</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('identity_id', {
              // rules: [{ required: true, message: 'Please select your gender!' }],
              initialValue: undefined
            })(
              <Select
                placeholder="请选择身份id"
              // onChange={this.handleSelectChange}
              >
                {
                  props.adduser.UserGetList && props.adduser.UserGetList.map(item => {
                    return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                  })
                }
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('view_authority_id', {
              // rules: [{ required: true, message: 'Please select your gender!' }],
              initialValue: undefined
            })(
              <Select
                placeholder="请选择视图权限id"
              // onChange={this.handleSelectChange}
              >
                 {
                  props.adduser.relationGetList && props.adduser.relationGetList.map(item => {
                    return <Option key={item.identity_view_authority_relation_id} value={item.identity_view_authority_relation_id}>{item.view_authority_text}</Option>
                  })
                }
              </Select>
            )}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >确定</Button>
            <Button >重置</Button>
          </Form.Item>
        </Form>
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
    // 获取身份信息/user/identity
    getUser(payload) {
      dispatch({
        type: "adduser/getUsera",
      })
    },
    //展示用户数据
    userUse(payload) {
      dispatch({
        type: "userData/getUserDatas",
      })
    },
    Addthea(payload) {
      console.log(payload)
      dispatch({
        type: "adduser/Addthe",
        payload
      })
    },//添加api
    Addapii(payload) {
      console.log(payload)
      dispatch({
        type: "adduser/Addapi",
        payload
      })
    },
    ///user/identity_view_authority_relation
    //获取视图
    userelation(payload) {
      dispatch({
        type: "adduser/relation",
      })
    },
    ///user/authorityView/edit 添加视图权限
    Addedit(payload) {
      console.log(payload)
      dispatch({
        type: "adduser/Addedita",
        payload
      })
    },
    ///user/api_authority获取api接口权限
    userauthority(payload) {
      dispatch({
        type: "adduser/authority",
      })
    },
    // /user/setIdentityApi 给身份添加接口权限
    usersetIdentityApi(payload) {
      dispatch({
        type: "adduser/setIdentityApi",
        payload
      })
    },
    ///user/setIdentityView 给身份设置视图权限
    usersetIdentityView(payload) {
      dispatch({
        type: "adduser/setIdentityView",
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Adduser))
