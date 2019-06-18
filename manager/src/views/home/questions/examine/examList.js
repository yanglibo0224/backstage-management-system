import React, { useEffect } from 'react';
import { connect } from 'dva';

function examLists(props) {
  useEffect(() => {
    props.getQuestion({ question_id: `${props.history.location.state}` })
    console.log(props)
  })

  return (
    <div>
      list
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
    // 按条件获取试题
    getQuestion(payload) {
      dispatch({
        type: "exam/getQuestion",
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(examLists);
