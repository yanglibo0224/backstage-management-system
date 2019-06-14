import React, { useEffect } from 'react';

import { Button, Select, List, Skeleton,Form } from 'antd';
import { connect } from 'dva';
import styles from './index.scss';
import reqwest from 'reqwest';

const { Option } = Select;
const count = 3;
const fakeDataUrl = [];

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
    // 获取考试类型
    props.examTypea();
    // 获取课程类型
    props.subjectType();
    // 获取题目类型
    props.getQuestionsType();
    props.questions()
  }, [])

  // 查询
  let handleSearch = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // 按条件获取试题
        props.getQuestion(values)
      }
    });
  }

  const { getFieldDecorator } = props.form;

  return (

    <div className="content">
      <h2 className='title'>查看试题</h2>
      <div>
        <header className={styles.header}>
          <nav>
            <span>课程类型：</span>
            <Button className={styles.btns} type="link">All</Button>
            {
              props.exam.subjectData && props.exam.subjectData.map((item) => {
                return <Button className={styles.btns} key={item.subject_id} value={item.subject_id} type="link">{item.subject_text}</Button>
              })
            }
          </nav>
          <div className="search">
            <div className="select_opt">
              <p className={styles.p}>考试类型：</p>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder=""
                optionFilterProp="children"
               
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {
                  props.exam.examTypeData && props.exam.examTypeData.map((item) => {
                    return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                  }
                  )
                }
              </Select>
            </div>
            <div className="select_opt">
              <p className={styles.p}>题目类型：</p>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder=""
                optionFilterProp="children"
               
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {
                  props.exam.getQuestionsTypeData && props.exam.getQuestionsTypeData.map((item) => {
                    return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                  })
                }
              </Select>
            </div>
            <Button type="primary" htmlType="submit" icon="search">查 询</Button>
          </div>

        </header>
        <LoadMoreList />
      </div>
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
    },
    // 获取所有试题
    questions() {
      dispatch({ type: 'exam/getQuestions' })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(examine))

