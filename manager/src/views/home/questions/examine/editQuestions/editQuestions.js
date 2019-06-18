import React, { useEffect } from 'react';
import { connect } from 'dva';
import Editor from 'for-editor';
import styles from './index.scss';
import { Input, Select, Button, Form, message } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

function Addques(props) {
  useEffect(() => {
    props.userInfo();
    props.examTypea();
    props.subjectType();
    props.getQuestionsType()
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

  const { getFieldDecorator } = props.form;

  return <div className={styles.content}>
    <h2 className={styles.title}>编辑试题</h2>
    <div className={styles.main}>
      <Form onSubmit={handleSubmit} className="login-form">
        <div className={styles.markcont}>
          <p>题目信息</p>
          <p>题干</p>
          <Form.Item>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入题目标题!' }],
            })(
              <Input placeholder="请输入题目标题,不超过20个" />
            )}
          </Form.Item>
          <p>题目管理</p>
          <Form.Item>
            {getFieldDecorator('questions_stem', {
              initialValue: ''
            })(
              <Editor width="1000px" height="300px" />
            )}
          </Form.Item>
        </div>
        <div>
          <p>请选择课程类型：</p>
          <Form.Item>
            {getFieldDecorator('subject_id', {
              rules: [{ required: true, message: '请输入题目标题!' }],
              initialValue: '请选择课程类型'
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
              initialValue: '请选择题目类型'
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
              <Editor width="1000px" height="300px" />
            )}
          </Form.Item>
        </div>
        <Button type="primary" htmlType="submit" className={styles.submit_btn}>提交</Button>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Addques));