import React from 'react';
import { Button, Table } from 'antd';
import './index.scss';

const columns = [
  {
    title: '类型ID',
    dataIndex: 'ID',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '类型名称',
    dataIndex: 'Name',
  },
  {
    title: '操作',
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
      <h1 className='h1'>试题分类</h1>
      <div className="main">
        <Button type="primary" icon="plus" className="btn btn_add">添加类型</Button>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default classify;