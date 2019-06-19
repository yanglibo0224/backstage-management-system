import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import IndexPage from './views/login/IndexPage';
import Products from './views/home/index';
//引入国际化
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zhCN from '../src/lang/zh-CN.js';
import enUS from '../src/lang/en-US.js';

const localMap = {
  en: enUS,
  zh: zhCN
}
const mapStateToProps = state => {
  return {
    locale: state.global.locale
  }
}
const RouterView = connect(mapStateToProps)(({ locale }) => {
  return <IntlProvider locale={locale} messages={localMap[locale]}>
    <Switch>
      <Route path="/login" component={IndexPage} />
      <Route path="/" component={Products} />
    </Switch>
  </IntlProvider>
})

addLocaleData([...en, ...zh]);

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterView />
    </Router>
  );
}

export default RouterConfig;