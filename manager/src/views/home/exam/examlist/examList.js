import React, { Component } from 'react';
import './index.scss'
import { Select ,Button } from 'antd';
const { Option } = Select;
const ButtonGroup = Button.Group;
class Examlist extends Component {
  constructor(props) {
    super(props);
      this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1 className='h1'>试卷列表</h1>
        <div className='wrap' style={{ padding: '20px' }} >
          <div className='top'  >

            <span>考试类型:
            <Select style={{ width: '65%', marginLeft: '20px' }} >
                <Option value="Option1">Option1</Option>
                <Option value="Option2">Option2</Option>
              </Select>
            </span>
            <span>课程:
            <Select style={{ width: '65%', marginLeft: '20px' }} >
                <Option value="Option1">Option1</Option>
                <Option value="Option2">Option2</Option>
              </Select>
            </span>
            <Button type="primary" ghost style={{ color: "#0139fd", textAlign: "center", padding: '0 45px' }} >
              查询
            </Button>
          </div>
          <div className='bottom' style={{background:'#fff',height:"300px",marginTop:'20px',borderRadius:"10px"}} >
            <li><span>试卷列表</span>
              <ButtonGroup className='btn' >
                <Button >全部</Button>
                <Button >进行中</Button>
                <Button >已结束</Button>
              </ButtonGroup>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Examlist;