import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  return (
    <div>
      log in
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
