import React, { useEffect } from 'react';
import { Button, Table } from 'antd';
import { connect } from 'dva';
import './index.scss';

const columns = [
  {
    title: '类型ID',
    dataIndex: 'questions_type_id',
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: '类型名称',
    dataIndex: 'questions_type_text',
  },
  {
    title: '操作',
    dataIndex: '',
  },
];


function classify(props) {
  useEffect(() => {
    props.getQuestionsType()
    // props.subjectType()
  },[])
  return (
    <div className="classify">
      <h1 className='h1'>试题分类</h1>
      <div className="main">
        <Button type="primary" icon="plus" className="btn btn_add">添加类型</Button>
        <Table columns={columns}  dataSource={props.exam.getQuestionsTypeData} />
      
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
    getQuestionsType(){
      dispatch({
        type:'exam/getQuestionsType'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(classify);