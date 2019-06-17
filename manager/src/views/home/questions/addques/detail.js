import React, {useEffect}from 'react';
import {connect} from 'dva'

function detail(props){
    
    useEffect(()=>{
    props.getQuestion({questions_id:props.history.location.state});

    },[])
    console.log(props.exam.getQuestionsData)
    return (
        <div >
          {
            props.exam.getQuestionsData&&props.exam.getQuestionsData.map(item=>{
              
            })
          }
          
        </div>        
    )
}
const mapStateToProps=(state)=>{
    return {
        ...state
    }
}   
const mapDispatchToProps=(dispatch)=>{
    return{
      getQuestion(payload) {
        dispatch({
          type: "exam/getQuestion",
          payload
        })
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(detail)