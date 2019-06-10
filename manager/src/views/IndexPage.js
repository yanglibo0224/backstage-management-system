import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Input, Tooltip, Icon, Checkbox, Button } from 'antd';
import "antd/dist/antd.css";

function IndexPage() {
  return (
    <div className={styles.normal}>
      <div className={styles.login}>
        <Input
          placeholder="请输入用户名"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.65)' }} />}
        />
        <Input.Password
          placeholder="请输入用户密码"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,0.65)' }} />}
        />
        <div className={styles.select}>
          <Checkbox onChange={onChange}>记住密码</Checkbox>
          <a href="">忘记密码</a>
        </div>
        <Button type="primary" block>
          登陆
        </Button>
      </div>
    </div>
  )
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
