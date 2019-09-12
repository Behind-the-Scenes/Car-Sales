import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// Our entire App has access to the reducer function bc of line 16 store={store}
const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, rootElement);
