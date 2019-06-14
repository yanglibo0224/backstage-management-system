import React from 'react';
import { Table } from 'antd';
import './index.scss';

const columns = [
  {
    title: '用户数据',
    dataIndex: 'ID',
    // render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '密码',
    dataIndex: 'Name',
  },
  {
    title: '身份',
    dataIndex: 'operation',
  },
];
const data = [
  {
    key: '1',
    ID: '774318-730z8m',
    Name: '简答题',
    operation: '',
  },
  {
    key: '2',
    ID: 'br9d6s-wh46i',
    Name: '代码阅读题',
    operation: '',
  },
  {
    key: '3',
    ID: 'fwf0t-wla1q',
    Name: '代码补全',
    operation: '',
  },
  {
    key: '4',
    ID: 'n66k4n-i9zpen',
    Name: '修改bug',
    operation: '',
  },{
    key: '5',
    ID: 'v8i73-r8oai',
    Name: '手写代码',
    operation: '',
  }
];

function classify(props) {
  return (
    <div className="classify">
      <h1 className='h1'>用户展示</h1>
      <div className="wrapper">
        <h2>用户数据</h2>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default classify;