import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva(createLoading());

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/user').default);
app.model(require('./models/addques').default);
app.model(require('./models/userData').default);
app.model(require('./models/adduser').default);
app.model(require('./models/global').default);
app.model(require('./models/management').default);
app.model(require('./models/classRoom').default);

// 4. Router
app.router(require('./router').default);
// 5. Start
app.start('#root');