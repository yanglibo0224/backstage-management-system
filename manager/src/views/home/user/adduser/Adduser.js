import React from 'react';
import { Form, Input, Button, Radio ,Select} from 'antd';
import './index.scss';

const { Option } = Select;

class FormLayoutDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'vertical'
    };
  }

  onChange=(value)=> {
    console.log(`selected ${value}`);
  }

  onBlur=()=> {
    console.log('blur');
  }

  onFocus=()=> {
    console.log('focus');
  }

  onSearch=(val)=> {
    console.log('search', val);
  }

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };

  render() {
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'vertical'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : null;
    return (
      <div>
        <Form layout={formLayout} className="form">
          <Form.Item {...formItemLayout}>
            <Radio.Group defaultValue="vertical" onChange={this.handleFormLayoutChange}>
              <Radio.Button value="vertical">添加用户</Radio.Button>
              <Radio.Button value="horizontal">更新用户</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item {...formItemLayout}>
            <Input placeholder="请输入用户名" style={{width: '350px'}} />
          </Form.Item>
          <Form.Item {...formItemLayout}>
            <Input placeholder="请输入密码" style={{width: '350px'}} />
          </Form.Item>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="周考1"
            optionFilterProp="children"
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="week1">周考1</Option>
            <Option value="week2">周考2</Option>
            <Option value="week3">周考3</Option>
            <Option value="month">月考</Option>
          </Select>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" style={{width: '100px',marginTop: '30px'}}>确定</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

function Adduser(props) {
  return (
    <div className="adduser">
      <h1 className="h1">添加用户</h1>
      <FormLayoutDemo />
    </div>
  );
}

export default Adduser;