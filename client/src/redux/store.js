import { createStore, applyMiddleware} from 'redux';
import {composeWithDevTools}  from 'redux-devtools-extension';
import thunk from 'redux-thunk'; //es un middleware que nos permite utilizar axios
import rootReducer from './reducer'; //va a recibir todo lo que traiga el dispach y lo vuelve a mandar


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;