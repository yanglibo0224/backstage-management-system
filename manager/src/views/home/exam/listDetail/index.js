import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';

function listDetail(props) {
  useEffect(() => {
    props.getQuestion(window.location.hash.split('=')[1])
  }, [])
  console.log(props.management.examDetailList.questions)

  return <div className="content">
    <h1 className="title">试卷详情</h1>
    <div className={styles.info}>
      <div className={styles.left}>
         {
          props.management.examDetailList.questions&&props.management.examDetailList.questions.map((item,index) => {
            return (
              <div className={styles.list}>
                <h5><b>{index+1}:</b>{item.title}</h5>
                <p>{item.questions_stem}</p>
                <p>{item.questions_answer}</p>
              </div>
            )
          }
          )
        } 
      </div>
      <div className={styles.right}>

      </div>
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
    // 按条件获取试题
    getQuestion(payload) {
      dispatch({
        type: "management/getExamDetails",
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(listDetail);