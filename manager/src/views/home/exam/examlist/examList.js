import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss'
import { Select, Button, Table } from 'antd';

const { Option } = Select;
const ButtonGroup = Button.Group;

function Examlist(props) {
  useEffect(() => {
    //获取考试类型
    props.getExamType();
    //获取所有的课程
    props.getSubjectType();
  }, [])
  console.log(props)

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a href="javascript:;">Delete</a>,
    },
  ];

  const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
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
              expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
              dataSource={data}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Examlist);