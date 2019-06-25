import React, { Component } from 'react';
import { Button, Input, Table, Modal, Select, Form, Divider } from 'antd';
import { connect } from 'dva';
import typeStyle from './index.scss';

class classGav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      value1: '',
      value2: "",
      value3: "",
      visibles: false,
      list: [],
    }
  }

  handleCancel = e => {
    this.setState({
      visible: false
    })
  };
  typeAdd = () => {
    this.setState({
      visible: true
    })
  };
  handleOk = e => {
    let { insertadd } = this.props
    insertadd({ grade_name: this.state.value1, room_id: this.state.value2, subject_id: this.state.value3 })
    this.setState({
      visible: false,
      visibles: false
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

  recompose = (list) => {
    this.setState({
      visibles: true,
      list: list
    })
    // console.log(list)
    this.handleOks = e => {///manger/grade/update
      let { mangerGrade,GetmangerGrade } = this.props
      mangerGrade({ grade_id: list.grade_id,  room_id: this.state.value2, subject_id: this.state.value3 })
      this.setState({
        visible: false,
        visibles: false
      })
      GetmangerGrade()
    };
  }

  delete=(id)=>{
  
    let {Getmangerdelete,GetmangerGrade} =this.props
    Getmangerdelete({grade_id:id})
    GetmangerGrade()
    // /manger/grade/delete
  }
  componentDidMount() {
    let { getmanger, subjectType, GetmangerGrade } = this.props
    getmanger()
    subjectType()
    GetmangerGrade()
    // console.log(this.props)
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
      {
        title: '操作',
        key: 'grade_id',
        render: (text, record) => (
          <span>
            <Button type="primary" onClick={() => this.recompose({ grade_id: record.grade_id, grade_name: record.grade_name, subject_id: record.subject_id, room_id: record.room_id })} > 修改  </Button>
            <Divider type="vertical" />
            <Button type="primary" onClick={()=>this.delete(record.grade_id)} > 删除</Button>
          </span>
        ),
      }
    ];

    const { mangerRoomList } = this.props.class
    const { subjectData } = this.props.exam
    const { list } = this.state

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
                    mangerRoomList && mangerRoomList.map(item => {
                      return <option key={item.room_id} value={item.room_id}>{item.room_text}</option>
                    })
                  }
                </select>
              </li>
              <li>
                <p>课程名:</p>
                <select value={this.state.value3} onChange={this.tade2}>
                  {
                    subjectData && subjectData.map(item => {
                      return <option key={item.subject_id} value={item.subject_id}>{item.subject_text}</option>
                    })
                  }
                </select>
              </li>

            </Modal>


            <Modal
              title="更改班级"
              visible={this.state.visibles}
              onOk={this.handleOks}
              onCancel={this.handleCancel}
            >
              <li>
                <p>班级名:</p>
                <Input placeholder="班级名" value={list.grade_name}
                  onChange={(e) => { this.setState({ value1: e.target.value }) }}
                />
              </li>
              <li>
                <p>教室号:</p>
                <select value={list.room_id} onChange={this.tade}>
                  {
                    mangerRoomList && mangerRoomList.map(item => {
                      return <option key={item.room_id} value={item.room_id}>{item.room_text}</option>
                    })
                  }
                </select>
              </li>
              <li>
                <p>课程名:</p>
                <select value={list.subject_id} onChange={this.tade2}>
                  {
                    subjectData && subjectData.map(item => {
                      return <option key={item.subject_id} value={item.subject_id}>{item.subject_text}</option>
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
            <Table columns={columns} dataSource={this.props.class.mangerGradList && this.props.class.mangerGradList}

            />

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
      dispatch({
        type: 'class/mangerGrade', payload
      })
    },
    // mangerGrademanger/grade/update
    mangerGrade(payload) {
      console.log(payload)
      dispatch({
        type: 'class/mangerGradeupdate',
        payload
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
    },
    // /manger/grade/delete
    Getmangerdelete(payload) {
      console.log(payload)
      dispatch({
        type: 'class/mangerdelete',
        payload
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(classGav));