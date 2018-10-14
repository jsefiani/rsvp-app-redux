import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import Redux store
import configureStore from './store/configureStore';

// Configure state
const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
})


const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
