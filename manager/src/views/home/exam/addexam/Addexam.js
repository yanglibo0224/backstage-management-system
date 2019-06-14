import React, { Component } from 'react';
import { Input, Select, InputNumber, DatePicker, Button } from 'antd';
import './index.scss';

const InputGroup = Input.Group;
const { Option } = Select;

class Addexam extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className='h1'>添加考试</h1>
        <div className='wrap'>
          <div className='box'>
            <p><li><span>*</span>试卷名称:</li><Input placeholder='' className='input' /></p>
            <InputGroup>
              <p><li><span>*</span>选择考试类型:</li>
                <Select defaultValue="Option1" style={{ width: '10%' }} >
                  <Option value="Option1">Option1</Option>
                  <Option value="Option2">Option2</Option>
                </Select>
              </p>
              <p><li><span>*</span>选择课程:</li>
                <Select defaultValue="Option1" style={{ width: '10%' }}>
                  <Option value="Option1">Option1</Option>
                  <Option value="Option2">Option2</Option>
                </Select>
              </p>
              <p>
                <li><span>*</span>设置题量:</li>
                <InputNumber />
              </p>
            </InputGroup>
            <div className='timer' >
              <li>考试时间:</li>
              <DatePicker placeholder='开始时间' renderExtraFooter={() => 'extra footer'} showTime /> -
              <DatePicker placeholder='结束时间' renderExtraFooter={() => 'extra footer'} showTime />
            </div>
            <Button className='submit' type="primary">创建试卷</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Addexam;