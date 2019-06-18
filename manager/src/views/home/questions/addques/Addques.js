import React, { useEffect } from 'react';
import { connect } from 'dva';
import Editor from 'for-editor';
import styles from './index.scss';
import { Input, Select, Button, Form, message, Modal } from 'antd';

const { Option } = Select;

function Addques(props) {
  useEffect(() => {
    props.userInfo();
    props.examTypea();
    props.subjectType();
    props.getQuestionsType();
    // props.getQuestion({question_id:`${props.history.location.state}`});
    if (props.addQuestionsFlag === 1) {
      // 添加成功
      message.success('添加成功！')
    } else if (props.addQuestionsFlag === -1) {
      // 添加失败
      message.error('添加失败！')
    }
  }, [props.addQuestionsFlag])

  // 表单提交
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let params = values;
        params.user_id = props.user.userInfoData.user_id;
        console.log(params);
        props.add(params)
      }
    });
  }

  function confirm() {
    Modal.confirm({
      title: '你确定要添加这道试题吗?',
      content: '真的要添加吗?',
      cancelText: '取消',
      okText: '确认'
    });
  }

  const { getFieldDecorator } = props.form;

  return <div className='content'>
    <h2 className='title'>添加试题</h2>
    <div className='main'>
      <Form onSubmit={handleSubmit} className="login-form">
        <div className={styles.markcont}>
          <p>题目信息</p>
          <p>题干</p>
          <Form.Item>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入题目标题!' }],
            })(
              <Input placeholder="请输入题目标题,不超过20个" style={{ width: '400px', height: '44px' }} />
              )}
          </Form.Item>
          <p>题目管理</p>
          <Form.Item>
            {getFieldDecorator('questions_stem', {
              initialValue: ''
            })(
              <Editor />
              )}
          </Form.Item>
        </div>
        <div>
          <p>请选择考试类型：</p>
          <Form.Item>
            {getFieldDecorator('exam_id', {
              rules: [{ required: true, message: '请输入题目标题!' }],
              initialValue: '周考1'
            })(
              <Select style={{ width: 160 }}>
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
        <div>
          <p>请选择课程类型：</p>
          <Form.Item>
            {getFieldDecorator('subject_id', {
              rules: [{ required: true, message: '请输入题目标题!' }],
              initialValue: 'javaScript上'
            })(
              <Select style={{ width: 160 }}>
                {
                  props.exam.subjectData && props.exam.subjectData.map((item) => {
                    return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                  })
                }
              </Select>
              )}
          </Form.Item>
        </div>
        <div>
          <p>请选择题目类型：</p>
          <Form.Item>
            {getFieldDecorator('questions_type_id', {
              rules: [{ required: true, message: '请输入题目标题!' }],
              initialValue: '简答题'
            })(
              <Select style={{ width: 160 }}>
                {
                  props.exam.getQuestionsTypeData && props.exam.getQuestionsTypeData.map((item) => {
                    return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                  })
                }
              </Select>
              )}
          </Form.Item>
        </div>
        <div className={styles.markcont}>
          <h2 className={styles.daanTit}>答案信息</h2>
          <Form.Item>
            {getFieldDecorator('questions_answer', {
              initialValue: ''
            })(
              <Editor />
              )}
          </Form.Item>
        </div>
        <Button onClick={confirm} type="primary" htmlType="submit" className={styles.submit_btn}>提交</Button>
      </Form>
    </div>
  </div>
}

const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // 添加试题
    add(payload) {
      console.log(payload)
      dispatch({
        type: "exam/add",
        payload
      })
    },
    //获取所有的考试类型
    examTypea() {
      dispatch({
        type: 'exam/examTypea'
      })
    },
    //获取所有的课程
    subjectType() {
      dispatch({
        type: 'exam/subjectTypea'
      })
    },
    //获取所有的试题类型
    getQuestionsType() {
      dispatch({
        type: 'exam/getQuestionsType'
      })
    },
    // 获取用户信息
    userInfo() {
      dispatch({
        type: "user/userInfo"
      })
    },
    // 按条件获取试题
    getQuestion(payload) {
      dispatch({
        type: "exam/getQuestion",
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Addques));