import React, { Component, useEffect } from 'react';
import { connect } from 'dva';
import { Input, Select, Button } from 'antd';
import axios from 'axios';
import './index.scss';

const { TextArea } = Input;
const { Option } = Select;

function Addques(props) {
  console.log(props)
  useEffect(() => {
    props.add()
  })

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  return (
    <div className="addques">
      <h1 className='h1'>添加试题</h1>
      <div className="main">
        <div className="ipt_box">
          <p>题目信息</p>
          <p>题干</p>
          <Input placeholder="请输入题目标题，不超过20个字" />
        </div>
        <div>
          <p>题目主题</p>
          <TextArea rows={10} placeholder="请输入内容..." className="txt" /> 
          {/* <div id="div1">
            <p>请输入内容...</p>
          </div> */}
        </div>
        <div className="select">
          <p>请选择考试类型：</p>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="周考1"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="week1">周考1</Option>
            <Option value="week2">周考2</Option>
            <Option value="week3">周考3</Option>
            <Option value="month">月考</Option>
          </Select>
        </div>
        <div>
          <p>请选择课程类型：</p>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="javaScript上"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="javaScript上">javaScript上</Option>
            <Option value="javaScript下">javaScript下</Option>
            <Option value="模块化开发">模块化开发</Option>
            <Option value="移动端开发">移动端开发</Option>
            <Option value="node基础">node基础</Option>
            <Option value="组件化开发(vue)">组件化开发(vue)</Option>
            <Option value="渐进式开发(react)">渐进式开发(react)</Option>
            <Option value="项目实战">项目实战</Option>
          </Select>
        </div>
        <div>
          <p>请选择考试类型：</p>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="简答题"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="简答题">简答题</Option>
            <Option value="代码阅读题">代码阅读题</Option>
            <Option value="代码补全">代码补全</Option>
            <Option value="修改bug">修改bug</Option>
            <Option value="手写代码">手写代码</Option>
          </Select>
        </div>
        <div>
          <p>答案信息</p>
          <TextArea rows={10} placeholder="请输入内容..." className="txt" />
        </div>
        <Button type="primary" className="btn">提交</Button>
      </div>
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