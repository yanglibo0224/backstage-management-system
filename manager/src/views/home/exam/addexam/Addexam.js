import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Input, Select, InputNumber, DatePicker, Button } from 'antd';
import styles from './index.scss';

const InputGroup = Input.Group;
const { Option } = Select;

function Addexam(props) {
  useEffect(() => {
    //获取考试类型
    props.getExamType();
    //获取所有的课程
    props.getSubjectType();
    //创建试卷
    // props.createTest();
  }, [])
  console.log(props);

  return (
    <div className='content'>
      <h1 className='title'>添加考试</h1>
      <div className='main'>
        <div className='box'>
          <p><li className={styles.lio}><span>* </span>试卷名称:</li><Input placeholder='' className='input' /></p>
          <InputGroup className={styles.ps}>
            <p><li><span>* </span>选择考试类型:</li>
              <Select style={{ width: '10%' }} >
                {
                  props.exam.examTypeData && props.exam.examTypeData.map((item) => {
                    return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                  }
                  )
                }
              </Select>
            </p>
            <p><li><span>* </span>选择课程:</li>
              <Select style={{ width: '10%' }}>
                {
                  props.exam.subjectData && props.exam.subjectData.map((item) => {
                    return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                  }
                  )
                }
              </Select>
            </p>
            <p>
              <li><span>* </span>设置题量:</li>
              <InputNumber min={3} max={10} />
            </p>
          </InputGroup>
          <div className={styles.timer}>
            <li>考试时间:</li>
            <DatePicker placeholder='开始时间' renderExtraFooter={() => 'extra footer'} showTime /> -
              <DatePicker placeholder='结束时间' renderExtraFooter={() => 'extra footer'} showTime />
          </div>
          <Button className={styles.submit} type="primary">创建试卷</Button>
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
    createTest() {
      dispatch({
        type: 'management/createTest'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addexam);