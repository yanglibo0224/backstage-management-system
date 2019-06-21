import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Drawer, Button, List } from 'antd';
import styles from './index.scss';

class App extends React.Component {
    state = { visible: false, childrenDrawer: false ,arr:[]};

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };

    add = (item) => {
        console.log(item)
        this.setState({
            visible: false,
        });
        // console.log(this.props.props.management.createTestList.push(item));
        // console.log(this.props.props.management.createTestList);
        this.state.arr.push(item)
        this.setState({
            arr:this.state.arr
        })
        window.localStorage.setItem('detail',JSON.stringify(this.state.arr));
        console.log('1..',this.state.arr);
    }

    render() {
        // console.log(this.props.props.exam.getQuestionsData)
        return (
            <div>
                <Button type="primary" onClick={this.showDrawer}>添加新题</Button>
                <Drawer
                    title="所有题目"
                    width={520}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div className={styles.see_context}>
                        <List
                            className="demo-loadmore-list"
                            itemLayout="horizontal"
                            style={{ padding: 20 }}
                            dataSource={this.props.props.exam.getQuestionsData}
                            renderItem={item => (
                                <List.Item className="table-list">
                                    <div className={styles.lis}>
                                        <p>{item.title}</p>
                                        <div className="color">
                                            <p className="content_every_cont_left_left_y">{item.questions_type_text}</p>
                                            <p className="content_every_cont_left_center_y">{item.subject_text}</p>
                                            <p className="content_every_cont_left_right_y">{item.exam_name}</p>
                                        </div>
                                        <p>{item.user_name} 发布</p>
                                        <div className={styles.event}>
                                            <span className={styles.add} onClick={() => this.add(item)}>添加</span>
                                            <span className={styles.detail}>详情</span>
                                        </div>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, width: '100%', borderTop: '1px solid #e8e8e8', padding: '10px 16px', textAlign: 'right', left: 0, background: '#fff', borderRadius: '0 0 4px 4px', }}>
                        <Button style={{ marginRight: 8, }} onClick={this.onClose}>Cancel</Button>
                        <Button onClick={this.onClose} type="primary">Submit</Button>
                    </div>
                </Drawer>
            </div>
        );
    }
}

function AddDetail(props) {
    useEffect(() => {     
        props.questions();
        // props.createTesta();
    }, [])
    let arr=JSON.parse(window.localStorage.getItem('detail'))||[];
    console.log(arr)

    let del = (id) => {
        console.log(id)
        //删除试卷
        props.delTestList(id);
    }
    // console.log(del)

    return (
        <div className="content">
            <h1 className='title'>创建试卷</h1>
            <div className="main">
                <App props={props} />
                <div className={styles.info}>
                    <b>{props.management.createTestList.title}</b>
                    <p>考试时间: 1小时30分钟 监考人: 刘于 开始考试时间: 2018.9.10 10:00 阅卷人: 刘于</p>
                    <div className={styles.test}>
                        {
                            props.management.createTestList.questions && props.management.createTestList.questions.map((item, index) => {
                                return (
                                    <div className={styles.list} key={index}>
                                        <span className={styles.del} onClick={() => del(item.questions_id)}>删除</span>
                                        <h5><b>{index + 1}:</b>{item.title}</h5>
                                        <p>{item.questions_stem}</p>
                                    </div>
                                )
                            }
                            )
                        }
                         {
                            arr && arr.map((item, index) => {
                                return (
                                    <div className={styles.list} key={index}>
                                        <span className={styles.del} onClick={() => del(item.questions_id)}>删除</span>
                                        <h5><b>{index + 1}:</b>{item.title}</h5>
                                        <p>{item.questions_stem}</p>
                                    </div>
                                )
                            }
                            )
                        } 
                    </div>
                    <Link to="/exam/examlist"><Button type="primary">创建试卷</Button></Link>
                </div>
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
        delTestList(payload) {
            console.log(payload)
            dispatch({
                type: 'management/delTestList',
                payload
            })
        },
        questions() {
            dispatch({
                type: 'exam/getQuestions'
            })
        },
        createTesta(payload) {
            console.log(payload)
            dispatch({
                type: 'management/createTest',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDetail);