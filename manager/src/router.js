import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import IndexPage from './views/login/IndexPage';
import Products from './views/home/index';
import AccessForbiddenPage from './views/Other/403';
import NotFoundPage from './views/Other/404';
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
const RouterView = connect(mapStateToProps)(({ locale, history }) => {
  return <IntlProvider locale={locale} messages={localMap[locale]}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={IndexPage} />
        <Route path="/403" component={AccessForbiddenPage} />
        <Route path="/404" component={NotFoundPage} />
        <Route path="/" component={Products} />
      </Switch>
    </Router>
  </IntlProvider>
})

addLocaleData([...en, ...zh]);

function RouterConfig({ history }) {
  return (
    <RouterView history={history} />
  );
}

export default RouterConfig;