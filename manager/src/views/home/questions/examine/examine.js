import React, { Component, useEffect } from 'react';
import { connect } from 'dva';
import { Button, Table } from 'antd';
import './index.scss';

function examine(props) {
  return (
    <div className="examine">
      <h1 className='h1'>查看试题</h1>
    </div>
  );
}

export default examine;