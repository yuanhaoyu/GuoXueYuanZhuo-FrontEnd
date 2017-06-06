import { combineReducers } from 'redux';
import toLogin from './login';
import toRegister from './register';
import toPass from './pass';
import toPk from './pk';
import toUser from './user';
import toHome from './home';
import toGetRank from './rank';
import toArtice from './artice';




const rootReducer = combineReducers({
    toLogin,
    toHome,
    toRegister,
    toPass,
    toPk,
    toUser,
    toGetRank,
    toArtice
});

export default rootReducer;
