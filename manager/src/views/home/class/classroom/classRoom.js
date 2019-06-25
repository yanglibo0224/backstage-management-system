import React, { Component } from 'react';
import { Button, Input, Table, Modal, Form, Divider } from 'antd';
import { connect } from 'dva';
import typeStyle from './index.scss';



class Classroom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      value:''
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
    })
  };
  handleOk = e => {
    ///mangeRoom
    let { mangeRoomadd ,mangeroom} = this.props;
    // console.log(this.state.value)
    mangeRoomadd({room_text:`${this.state.value}`})
    this.setState({
      visible: false,
    })
    mangeroom()
  };
  delete=(id)=>{
    let {mangeroom,mangeroomDelete} =this.props
    mangeroomDelete({room_id:id})
    mangeroom()
    // /manger/grade/delete
  }

  componentDidMount() {
    let { mangeroom } = this.props
    mangeroom()
    console.log(this.props)
  }

  render() {
    const columns = [
      {
        title: '教室号',
        dataIndex: "room_text",
      },
      {
        title: '操作',
        key: 'room_id',
        render: (text, record) => (
          <span>
            {/* <Button type="primary" onClick={() => this.recompose({ grade_id: record.grade_id, grade_name: record.grade_name, subject_id: record.subject_id, room_id: record.room_id })} > 修改  </Button> */}
            <Divider type="vertical" />
            <Button type="primary" onClick={()=>this.delete(record.room_id)} > 删除</Button>
          </span>
        ),
      }
    ];
    
    return (
      
      <div className="content">
        <h2 className='title'>教室管理</h2>
        <div className='main'>
          <div>
            <Button type="primary" onClick={this.typeAdd} icon="plus" size="large">
              添加教室
            </Button>
            <Modal
              title="添加班级"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <li>
                <p>教室号:</p>
                <Input placeholder="班级名" value={this.state.value}
                  onChange={(e) => { this.setState({ value: e.target.value }) }}
                />
              </li>
             
            </Modal>
          </div>
          <div className={typeStyle.list}>
            <Table columns={columns} dataSource={this.props.class.mangerRoomList && this.props.class.mangerRoomList}
            ></Table>
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
    ///mangerroom
    mangeroom() {
      dispatch({
        type: 'class/mangerRoom'
      })
    },
    mangeRoomadd(payload) {
      dispatch({
        type: 'class/Roomadd',
        payload
      })
    },
    mangeroomDelete(payload) {
      console.log(payload)
      dispatch({
        type: 'class/roomDelete',
        payload
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Classroom));