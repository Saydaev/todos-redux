import ReactDOM from 'react-dom';
import './styles.css';
import {Provider} from "react-redux";
import App from "./App";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {
    todos: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'start':
            return {
                ...state,
                loading: true
            }

        case 'load':
            return {
                ...state,
                todos: action.payload,
                loading: false
            }

        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)