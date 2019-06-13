import React, { Component,useEffect } from 'react';
import { connect } from 'dva';
import axios from 'axios'
import './index.scss'
function Addques(props)  {
    console.log(props)
    useEffect(()=>{
      props.add()
    })
    return (
        <div>
          <h1 className='h1' >添加试题</h1>
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
    add(payload) {
      dispatch({
        type: 'exam/questions',
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Addques);