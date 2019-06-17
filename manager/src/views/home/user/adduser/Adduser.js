import React from 'react';
import { Form, Input, Button, Radio, Select } from 'antd';
import './index.scss';
import { connect } from 'dva'

const { Option } = Select;

function Adduser(props) {

  let handleSubmit = e => {
    e.preventDefault();
    props.from.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  const { getFieldDecorator } = props.form

  return (
    <div className="adduser">
      <h1 className="h1">添加用户</h1>
      <div style={{display:'flex',flexWrap:"wrap"}} >
        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit} >
          <Form.Item >
            <Radio.Group defaultValue="vertical" >
              <Radio.Button value="vertical">添加用户</Radio.Button>
              <Radio.Button value="horizontal">更新用户</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('exam_id', {
              rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: undefined
            })(<Input placeholder="请输入用户名" />)}
          </Form.Item>
          <Form.Item >
            {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: undefined
            })(<Input placeholder="请输入密码" />)}
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
        </Form>
        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit} >
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
        <Form className="form" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit} >
          <Form.Item >
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
const mapDispatchToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Adduser))
