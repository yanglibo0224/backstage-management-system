import React, { useEffect } from 'react';
import { Button, Select, List, Skeleton } from 'antd';
import './index.scss';
import { connect } from 'dva';

import reqwest from 'reqwest';

const { Option } = Select;
const count = 3;

// /exam/questions/new
const fakeDataUrl =[]
//  `https://http://169.254.12.77:7001/exam/questions/new/?data=1&inc=name,gender,email,nat&noinfo`;

class LoadMoreList extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item actions={[<a>编辑</a>]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.name.last}</a>}
                description="dingshaoshan发布"
              />
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}

function examine(props) {
  useEffect(() => {
    props.examTypea();
    props.subjectType();
    props.getQuestionsType()
  }, [])
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
    <div className="examine">
      <h1 className='h1'>查看试题</h1>
      <div className="main">
        <header>
          <nav>
            <span>课程类型：</span>
            <Button type="link">all</Button>
            {
            props.exam.subjectData && props.exam.subjectData.map((item)=>{
              return  <Button key={item.subject_id} value={item.subject_id} type="link">{item.subject_text}</Button>  
            })
          }

            
          </nav>
          <div className="search">
            <div className="select_opt">
              <p>考试类型：</p>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder=""
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
               {
              props.exam.examTypeData && props.exam.examTypeData.map((item) => {
                return <Option key={item.exam_id} value={item.exam_id} value="week1">{item.exam_name}</Option>

              }
              )
            }
                
                {/* <Option value="week2">周考2</Option>
                <Option value="week3">周考3</Option>
                <Option value="month">月考</Option> */}
              </Select>
            </div>
            <div className="select_opt">
              <p>题目类型：</p>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder=""
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
               {
             props.exam.getQuestionsTypeData && props.exam.getQuestionsTypeData.map((item)=>{
              return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
              })
          }
              </Select>
            </div>
            <Button type="primary" icon="search" className="btn btn_add_type">查询</Button>
          </div>
          <LoadMoreList />
        </header>
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
    examTypea() {
      dispatch({
        type: 'exam/examTypea'
      })
    },
    subjectType() {
      dispatch({
        type: 'exam/subjectTypea'
      })
    },
    getQuestionsType() {
      dispatch({
        type: 'exam/getQuestionsType'
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(examine);
