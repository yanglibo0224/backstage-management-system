import React, { useEffect } from 'react';
import { connect } from 'dva';
import detailStyle from './detail.scss';

function detail(props) {
  useEffect(() => {
    props.getQuestion({ questions_id: props.history.location.state });

  }, [])
  console.log(props.exam.getQuestionsData);

  return (
    <div className="content">
      <h1 className="title">试题详情</h1>
      <div className={detailStyle.main}>
         {
            props.exam.getQuestionsData.map((item,index)=>{
                return <div key={index} className={detailStyle.bottom}>
                            <div className={detailStyle.left}>
                              <p>出题人：{item.user_name}</p>
                              <p>题目信息</p>
                              <div className="color">
                                <p className={detailStyle.content_every_cont_left_left_y}>{item.questions_type_text}</p>
                                <p className={detailStyle.content_every_cont_left_center_y}>{item.subject_text}</p>
                                <p className={detailStyle.content_every_cont_left_right_y}>{item.exam_name}</p>
                              </div>
                              <div className={detailStyle.titleBox}>
                                <p>{item.title}</p>
                                <p>{item.questions_stem}</p>
                              </div>
                                <p>{item.questions_answer}</p>
                              <div>
                                <p>请根据题意在横线处填写合适的代码</p>
                              </div>    
                              </div>
                            <div className={detailStyle.right}>
                              <p>答案信息</p>
                              <p>{item.questions_answer}</p>
                            </div>
                        </div>
                    })
                }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getQuestion(payload) {
      dispatch({
        type: "exam/getQuestion",
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(detail);