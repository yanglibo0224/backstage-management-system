import React, { useEffect } from 'react';
import { Tabs, Table } from 'antd';
import { connect } from 'dva';
import './index.scss';

const { TabPane } = Tabs;

function Adduser(props) {
  useEffect(() => {
    //用户数据
    props.getUserDataList();
    //身份数据
    props.getUseridentityList();
    //api接口权限
    props.getApiauthorityList();
    //身份和api权限关系
    props.getIdApiListList();
  }, [])
  console.log(props);

  function callback(key) {
    console.log(key);
  }
  const columns_user = [
    {
      title: 'Name',
      dataIndex: 'user_name',
    },
    {
      title: 'Age',
      dataIndex: 'user_id',
    },
    {
      title: 'Address',
      dataIndex: 'identity_text',
    }
  ];
  const columns_identity = [
    {
      title: 'Name',
      dataIndex: 'identity_text'
    }
  ]
  const columns_apiauthority = [
    {
      title: 'Name',
      dataIndex: 'api_authority_text',
    },
    {
      title: 'Age',
      dataIndex: 'api_authority_url',
    },
    {
      title: 'Address',
      dataIndex: 'api_authority_method'
    }
  ]

  const columns_idApi=[
     {
      title: 'Name',
      dataIndex: 'identity_text',
    },
    {
      title: 'Age',
      dataIndex: 'identity_api_authority_relation_id',
    },
    {
      title: 'Address',
      dataIndex: 'api_authority_url'
    },
    {
      title: 'email',
      dataIndex: 'api_authority_method'
    }
  ]

  return (
    <div className="content">
      <h1 className="title">用户展示</h1>
      <Tabs onChange={callback} type="card" className="main">
        <TabPane tab="用户数据" key="1">
          <h2>用户数据</h2>
          <Table columns={columns_user} dataSource={props.userData.userdataList} />
        </TabPane>
        <TabPane tab="身份数据" key="2">
          <h2>身份数据</h2>
          <Table columns={columns_identity} dataSource={props.userData.userIdentityList} />
        </TabPane>
        <TabPane tab="api接口权限" key="3">
          <h2>api接口权限</h2>
          <Table columns={columns_apiauthority} dataSource={props.userData.apiauthorityList} />
        </TabPane>
        <TabPane tab="身份和api接口权限" key="4">
          <h2>身份和api接口权限</h2>
          <Table columns={columns_idApi} dataSource={props.userData.idApiList} />
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
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getUserDataList() {
      dispatch({
        type: 'userData/getUserDatas'
      })
    },
    getUseridentityList() {
      dispatch({
        type: 'userData/getUseridentitys'
      })
    },
    getApiauthorityList() {
      dispatch({
        type: 'userData/getApiauthoritys'
      })
    },
    getIdApiListList() {
      dispatch({
        type: 'userData/getIdApis'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adduser);