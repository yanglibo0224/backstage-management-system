import React from 'react';
import { Tabs, Table } from 'antd';
import { connect } from 'dva';
import './index.scss';

const { TabPane } = Tabs;

function Adduser(props) {
  function callback(key) {
    console.log(key);
  }
  const columns_user = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data_user = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const columns_identity = [
    {
      title: 'Name',
      dataIndex: 'name',
    }
  ]
  const data_identity = [
    {
      key: '1',
      name: 'John Brown'
    },
    {
      key: '2',
      name: 'Jim Green'
    },
    {
      key: '3',
      name: 'Joe Black'
    },
  ];
  return (
    <div className="content">
      <h1 className="title">用户展示</h1>
      <Tabs onChange={callback} type="card" className="main">
        <TabPane tab="用户数据" key="1">
          <h2>用户数据</h2>
          <Table columns={columns_user} dataSource={data_user} size="middle" />
        </TabPane>
        <TabPane tab="身份数据" key="2">
          <h2>身份数据</h2>
          <Table columns={columns_identity} dataSource={data_identity} size="middle" />
        </TabPane>
        <TabPane tab="api接口权限" key="3">
          <h2>api接口权限</h2>
        </TabPane>
        <TabPane tab="身份和api接口权限" key="4">
          <h2>身份和api接口权限</h2>
        </TabPane>
        <TabPane tab="视图接口权限" key="5">
          <h2>视图接口权限</h2>
        </TabPane>
        <TabPane tab="身份和视图权限关系" key="6">
          <h2>身份和视图权限关系</h2>
        </TabPane>
      </Tabs>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('userData' + state)
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getUserData() {
      dispatch({
        type: 'userData/getUserData'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adduser);