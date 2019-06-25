import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Form, Input, Select, InputNumber, DatePicker, Button } from 'antd';
import styles from './index.scss';

const InputGroup = Input.Group;
const { Option } = Select;
const { RangePicker } = DatePicker;

function Addexam(props) {
  useEffect(() => {
    //获取考试类型
    props.getExamType();
    //获取所有的课程
    props.getSubjectType();
  }, [])
  // console.log(props);

  const { getFieldDecorator } = props.form;

  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  function onOk(value) {
    console.log('onOk: ', value);
  }

  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let obj = {
          subject_id: values.subject_id,
          exam_id: values.exam_id,
          title: values.namePaper,
          number: values.topicQuantity,
          start_time: values.time[0]._d * 1,
          end_time: values.time[1]._d * 1
        }
        //创建试卷
        props.createTesta(obj);
        props.history.push('/exam/addDetail');
        console.log(props)
      }
    });
  }

  return (
    <div className='content'>
      <h1 className='title'>添加考试</h1>
      <div className='main'>
        <Form onSubmit={handleSubmit} className="login-form box">
          <Form.Item>
            <div className={styles.p}>
              <li className={styles.lio}><span>* </span>试卷名称:</li>
              {getFieldDecorator('namePaper', {
                rules: [{ required: true, message: '请输入试卷名称' }],
              })(
                <Input placeholder="" className={styles.input} />,
              )}
            </div>
          </Form.Item>
          <InputGroup className={styles.ps}>
            <div className={styles.p}><li><span>*</span>选择考试类型:</li>
              <Form.Item>
                {getFieldDecorator('exam_id', {
                  rules: [{ required: true, message: '请选择考试类型' }],
                  initialValue: ''
                })(
                  <Select style={{ width: '40%' }} >
                    {
                      props.exam.examTypeData && props.exam.examTypeData.map((item) => {
                        return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                      }
                      )
                    }
                  </Select>
                  )}
              </Form.Item>
            </div>
            <div className={styles.p}><li><span>* </span>选择课程:</li>
              <Form.Item>
                {getFieldDecorator('subject_id', {
                  rules: [{ required: true, message: '请选择课程' }],
                  initialValue: ''
                })(
                  <Select style={{ width: '40%' }}>
                    {
                      props.exam.subjectData && props.exam.subjectData.map((item) => {
                        return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                      }
                      )
                    }
                  </Select>
                  )}
              </Form.Item>
            </div>
            <div className={styles.p}>
              <li><span>* </span>设置题量:</li>
              <Form.Item>
                {getFieldDecorator('topicQuantity', {
                  rules: [{ required: true, message: '请设置题量' }],
                  initialValue: ''
                })(
                  <InputNumber min={3} max={10} />
                  )}
              </Form.Item>
            </div>
          </InputGroup>
          <div className={styles.timer}>
            <li>考试时间:</li>
            <div className={styles.times}>
              <Form.Item>
                {getFieldDecorator('time', {
                  rules: [{ required: true, message: '请设置时间' }],
                  initialValue: ''
                })(
                  <RangePicker
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    placeholder={['Start Time', 'End Time']}
                    onChange={onChange}
                    onOk={onOk}
                  />
                  )}
              </Form.Item>
            </div>
          </div>
           <Button type="primary" htmlType="submit" className={styles.submit}>创建试卷</Button> 
           {/* <Link to="/exam/addDetail"><Button type="primary" htmlType="submit" className={styles.submit}>创建试卷</Button></Link>  */}
        </Form>
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
    createTesta(payload) {
      console.log(payload)
      dispatch({
        type: 'management/createTest',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Addexam));