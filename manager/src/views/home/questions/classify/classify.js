import React, { Component, useEffect } from 'react';
import { Button, Input, Table, Modal } from 'antd'
import { connect } from 'dva';
import typeStyle from './index.scss';

class classify extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      value: ''
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
    insertadd({ text: this.state.value, sort: 'chenmanjie' })
    this.setState({
      visible: false
    })
  };
  componentDidMount() {
    let { getQuestionsType } = this.props
    getQuestionsType()
  }
  render() {
    const columns = [
      {
        title: '类型ID',
        dataIndex: 'questions_type_id',
      },
      {
        title: '类型名称',
        dataIndex: 'questions_type_text',
      },
      {
        title: '操作',
        dataIndex: "",
      },
    ];
    return (
      <div className={typeStyle.wrap}>
        <p className={typeStyle.title}>试题分类</p>
        <div className={typeStyle.bottom}>
          <div>
            <Button type="primary" onClick={this.typeAdd} icon="plus" size="large">
              添加类型
                      </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Input placeholder="请输入类型名称" value={this.state.value}
                onChange={(e) => { this.setState({ value: e.target.value }) }}
              />
            </Modal>
          </div>
          <div className={typeStyle.list}>
            <Table columns={columns} dataSource={this.props.exam.getQuestionsTypeData} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getQuestionsType() {
      dispatch({
        type: 'exam/getQuestionsType'
      })
    }, insertadd(payload) {
      console.log(payload)
      dispatch({ type: 'exam/insertQuestionsType', payload })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(classify);