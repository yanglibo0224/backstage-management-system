import React, { useEffect } from 'react';
import { Radio, Select, Button, Form, List } from 'antd';
import { Link } from 'dva/router'
import styleSee from './index.scss';
import './style.scss'
import { connect } from 'dva';

const { Option } = Select;
function examine(props) {
  useEffect(() => {
    // 获取考试类型
    props.examTypea();
    // 获取课程类型
    props.subjectType();
    // 获取题目类型
    props.getQuestionsType();
    props.questions()
  }, [])

  // 查询
  let handleSearch = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // 按条件获取试题
        props.getQuestion(values)
      }
    });
  }

  const { getFieldDecorator } = props.form;

  return (
    <div className={styleSee.wrap} style={{width:'100%'}}>
      <Form onSubmit={handleSearch} className="login-form" style={{maxWidth:'1200px'}} >
        <h2 className={styleSee.title}>查看试题</h2>
        <div className={styleSee.bottom}>
          <div className={styleSee.Bottom_top}>
            <div className={styleSee.Bottom_tit}>课程类型:</div>
            {getFieldDecorator('subject_id', {
              valuePropName: 'checked',
              initialValue: undefined,
            })(
              <Radio.Group defaultValue="a" buttonStyle="solid" className={styleSee.radio_list}>
                <Radio.Button value={undefined} className={styleSee.radio_item}>All</Radio.Button>
                {
                  props.exam.subjectData && props.exam.subjectData.map((item) => {
                    return <Radio.Button value={item.subject_id} key={item.subject_id} className={styleSee.radio_item}>{item.subject_text}</Radio.Button>
                  })
                }
              </Radio.Group>
            )}

          </div>
          <div className={styleSee.top_search}>
            <div className={styleSee.Bottom_babel}>
              <div className={styleSee.Bottom_tit}>考试类型:</div>
              <Form.Item>
                {getFieldDecorator('exam_id', {
                  initialValue: undefined
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
            <div className={styleSee.Bottom_babel}>
              <div className={styleSee.Bottom_tit}>题目类型:</div>
              <Form.Item>
                {getFieldDecorator('questions_type_id', {
                  initialValue: undefined
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
            <Button type="primary" htmlType="submit" icon="search">查 询</Button>
          </div>
        </div>
        <div className={styleSee.see_context}>
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            style={{ padding: 20 }}
            dataSource={props.exam.getQuestionsData && props.exam.getQuestionsData}
            renderItem={item => (
              <List.Item actions={[<Link to={{ pathname: '/products/addques', state: item.questions_id }}>编辑</Link>]} style={{ display: 'flex', justifyContent: 'space-between' }} className="table-list">
                <Link to={{ pathname: '/products/detail', state: item.questions_id }} className="table-href">
                  <div>
                    <p>{item.title}</p>
                    <div className="color">
                      <p className="content_every_cont_left_left_y">{item.questions_type_text}</p>
                      <p className="content_every_cont_left_center_y">{item.subject_text}</p>
                      <p className="content_every_cont_left_right_y">{item.exam_name}</p>
                    </div>
                    <p>{item.user_name} 发布</p>
                  </div>
                </Link>
              </List.Item>
            )}
          />
          {/* <List
            renderItem={item => (                
                <List.Item actions={[<Link to={{pathname:'/questions/add', state:item.questions_id}}>编辑</Link>]} style={{display:'flex',justifyContent:'space-between'}} className="table-list">
                    <Link to={{pathname:'/questions/detail', state:item.questions_id}} className="table-href"> 
                    <div>
                        <p>{item.title}</p>
                        <div className="color">
                            <p className="content_every_cont_left_left_y">{item.questions_type_text}</p>
                            <p className="content_every_cont_left_center_y">{item.subject_text}</p>
                            <p className="content_every_cont_left_right_y">{item.exam_name}</p>
                        </div>
                        <p style={{color:'blue'}}>{item.user_name} 发布</p>
                    </div>
                    </Link>
                </List.Item>
            )}
        /> */}
        </div>
      </Form>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    examTypea() {
      dispatch({
        type: 'exam/examTypea'
      })
    },
    subjectType() {
      dispatch({
        type: 'exam/subjectTypea'
      })
    },
    getQuestionsType() {
      dispatch({
        type: 'exam/getQuestionsType'
      })
    },
    // 获取所有试题
    questions() {
      dispatch({ type: 'exam/getQuestions' })
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(examine))

