import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form, Input } from 'antd';
import { connect } from 'dva';
import './index.scss';

const columns = [
  {
    title: '类型ID',
    dataIndex: 'ID',
    // render: text => <a href="javascript:;">{text}</a>
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
  }, {
    key: '5',
    ID: 'v8i73-r8oai',
    Name: '手写代码',
    operation: '',
  }
];

function classify(props) {
  //添加类型弹框
  let [showDialog, updateDialog] = useState(false);

  useEffect(() => {
    props.subjectType()
  }, [])

  // 提交试题类型
  let handleSubmit = e=>{

  };

  const { getFieldDecorator } = props.form;
  return (
    <div className="classify">
      <h1 className='h1'>试题分类</h1>
      <div className="main">
        <Button type="primary" icon="plus" className="btn btn_add" onClick={()=>updateDialog(true)}>添加类型</Button>
        <Modal visible={showDialog} onCancel={() => updateDialog(false)}>
          <Form onSubmit={handleSubmit} >
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '创建新类型' }],
              })(
                <Input
                  placeholder="请输入类型名称"
                />,
              )}
            </Form.Item>
          </Form>
        </Modal>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('exam' + state)
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    subjectType() {
      dispatch({
        type: 'exam/subjectType'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(classify));