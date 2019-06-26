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

  // 计算考试时间
  function computTime(obj) {
    let startTime = obj.start_time*1;
    let endTime = obj.end_time*1;
    let newTime = endTime - startTime;
    //计算出小时数
    var leave1 = newTime % (24 * 3600 * 1000);   
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);     
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000);    
    var seconds = Math.round(leave3 / 1000);
    return hours + ":" + minutes + ":" + seconds;
  }

  const columns = [
    { title: '试卷信息', 
      dataIndex: 'title', 
      key: 0,
      render: (tags,obj) => {
        return <div>
                  <h4>{tags}</h4>
                  <p><span style={{marginRight:'10px'}}>考试时间：{computTime(obj)}</span><span>{obj.number}道题作弊{obj.status}分</span></p>
            </div>
        },
    },
    { title: '班级', 
      dataIndex: 'grade_name', 
      key: 1 ,
      render: tags => (
              <div>
                  <h4>考试班级</h4>
                    {tags.map((tag,index) => {
                        return (
                          <p key={index} style={{margin:0}}>{tag}</p>
                    );
                })}
              </div>
          ),
    },
    { title: '创建人', dataIndex: 'user_name', key: 2 },
    { title: '开始时间', 
      dataIndex: 'start_time',
      key: 3 ,
      render: (item) => {
                return <div>
                    <p>{new Date(item*1).toLocaleDateString()}&nbsp;&nbsp;{new Date(item*1).toLocaleTimeString()}</p>            
                </div>
            }  
    },
    { title: '结束时间',
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