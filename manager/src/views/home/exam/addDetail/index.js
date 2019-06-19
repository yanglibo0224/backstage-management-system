import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './index.scss';

function AddDetail(props) {
    useEffect(() => {
        //获取试卷详情（教师端）
        props.getExamDetailList();
    }, [])
    console.log(props)

    return (
        <div className="content">
            <h1 className='title'>创建试卷</h1>
            <div className="main">
                <div><Button>添加新题</Button></div>
                <div className={styles.info}>
                    <b>1</b>
                    <p>考试时间: 1小时30分钟 监考人: 刘于 开始考试时间: 2018.9.10 10:00 阅卷人: 刘于</p>
                    <div className={styles.test}>

                    </div>
                    <Button type="primary">创建试卷</Button>
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
        getExamDetailList() {
            dispatch({
                type: 'management/getExamDetails'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDetail);