import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';

import reducers from './reducers';
import './assets/stylesheets/index.scss';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

const Main = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

const Wrapper = hot(Main);

ReactDOM.render(<Wrapper />, document.getElementById('root'));
