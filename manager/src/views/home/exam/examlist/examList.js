import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.scss';
import { Select, Button, Table } from 'antd';

const { Option } = Select;
const ButtonGroup = Button.Group;

function Examlist(props) {
  console.log(props)

  useEffect(() => {
    //获取考试类型
    props.getExamType();
    //获取所有的课程
    props.getSubjectType();
    //获取试卷列表
    props.getTestList();
  }, [])

  const columns = [
    { title: 'Name', dataIndex: 'title', key: 0 },
    { title: 'Age', dataIndex: 'grade_name', key: 1 },
    { title: 'Address', dataIndex: 'user_name', key: 2 },
    { title: 'Address', 
      dataIndex: 'start_time',
      key: 3 ,
      render: (item) => {return <div><span>{new Date(item*1).toLocaleString()}</span></div> }
    },
    { title: 'Address',
      dataIndex: 'end_time',
      key: 4, 
      render: (item) => {return <div><span>{new Date(item*1).toLocaleString()}</span></div> }
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 5,
      render: (item) =>  <Link to={{ pathname: `/exam/listDetail`, search: `id=${item.exam_exam_id}` }}>详情</Link>
    },
  ];

  return (
    <div className="content">
      <h1 className='title'>试卷列表</h1>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div>
            <span>考试类型:</span>
            <Select style={{ width: '60%', marginLeft: '20px' }} >
              {
                props.exam.examTypeData && props.exam.examTypeData.map((item) => {
                  return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                }
                )
              }
            </Select>
          </div>
          <div>
            <span>课程:</span>
            <Select style={{ width: '60%', marginLeft: '20px' }}>
              {
                props.exam.subjectData && props.exam.subjectData.map((item) => {
                  return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                }
                )
              }
            </Select>
          </div>
          <Button className={styles.btns} type="primary" ghost>
            查询
          </Button>
        </div>
        <div className={styles.list}>
          <div className={styles.head}>
            <span>试卷列表</span>
            <ButtonGroup className='btn'>
              <Button >全部</Button>
              <Button >进行中</Button>
              <Button >已结束</Button>
            </ButtonGroup>
          </div>
          <div>
            <Table
              columns={columns}
              dataSource={props.management.testList}
            />
          </div>
        </div>
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
    getExamType() {
      dispatch({
        type: 'exam/examTypea'
      })
    },
    getSubjectType() {
      dispatch({
        type: 'exam/subjectTypea'
      })
    },
    getTestList() {
      dispatch({
        type: 'management/getTestLists'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Examlist);