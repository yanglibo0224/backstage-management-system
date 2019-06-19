import React, { Component } from 'react';
import { Button, Input, Table, Modal, Select, Form } from 'antd';
import { connect } from 'dva';
import typeStyle from './index.scss';



class classGav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      value1: '',
      value2: "",
      value3: ""
    }
  }
  handleCancel = e => {
    this.setState({
      visible: false,
     
    })
  };
  typeAdd = () => {
    this.setState({
      visible: true,
      value1: '',
      value2: "",
      value3: ""
    })
  };
  handleOk = e => {
    let { insertadd } = this.props
    insertadd({ grade_name: this.state.value1, room_id: this.state.value2, subject_id: this.state.value3 })
    this.setState({
      visible: false
    })
  };
  tade = e => {
    let value = e.target.value;
    this.setState({ value2: value })
  }
  tade2 = e => {
    let value = e.target.value;
    this.setState({ value3: value })
  }
  componentDidMount() {
    let { getmanger,subjectType,GetmangerGrade } = this.props
    getmanger()
    subjectType()
    GetmangerGrade()
    console.log(this.props)
  }

  render() {
    const columns = [
      {
        title: '班级名',
        dataIndex: 'room_text',
      },
      {
        title: '课程名',
        dataIndex: 'subject_text',
      },
      {
        title: '教室号',
        dataIndex: "grade_name",
      },
    ];


    const {mangerRoomList}= this.props.class
    const {subjectData} = this.props.exam
    return (
      <div className="content">
        <h2 className='title'>试题分类</h2>
        <div className='main'>
          <div>
            <Button type="primary" onClick={this.typeAdd} icon="plus" size="large">
              添加班级
            </Button>
            <Modal
              title="添加班级"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <li>
                <p>班级名:</p>
                <Input placeholder="班级名" value={this.state.value1}
                  onChange={(e) => { this.setState({ value1: e.target.value }) }}
                />
              </li>
              <li>
                <p>教室号:</p>
                <select value={this.state.value2} onChange={this.tade}>
                {
                  mangerRoomList&&mangerRoomList.map(item=>{
                   return  <option key={item.room_id} value={item.room_id}>{item.room_text}</option>
                  })
                }
                </select>
              </li>
              <li>
                <p>课程名:</p>
                <select value={this.state.value3} onChange={this.tade2}>
                {
                  subjectData&&subjectData.map(item=>{
                   return  <option key={item.subject_id} value={item.subject_id}>{item.subject_text}</option>
                  })
                }
                </select>
              </li>

            </Modal>
          </div>
          {
            console.log(this.props.class.mangerGradList)
          }
          <div className={typeStyle.list}>
            <Table columns={columns}  dataSource={this.props.class.mangerGradList&&this.props.class.mangerGradList} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('exam' + state)
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getmanger() {
      dispatch({
        type: 'class/mangerRoom'
      })
    }, 
    // /manger/room
    // /manger/grade 添加班级
    insertadd(payload) {
      console.log(payload)
      dispatch({
        type: 'class/mangerGrade', payload
      })
    },
    //获取所有的课程
    subjectType() {
      dispatch({
        type: 'exam/subjectTypea'
      })
    },
    // /manger/grade/ table内容
    GetmangerGrade() {
      dispatch({
        type: 'class/mangerGrad'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(classGav));