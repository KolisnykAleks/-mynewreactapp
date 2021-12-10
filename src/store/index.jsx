import { configureStore } from '@reduxjs/toolkit'
import carSlice from '../pages/CarsPage/CarSlice';
// import fetchCarList from '../pages/CarsPage/CarSlice'
// import carSlice from '../pages/CarsPage/CarSlice';
// import { fetchCarList } from '../pages/DetailCarPage/DetailCarSlice';

// const stringMiddleware = () => (next) => (action) => {
//     if (typeof action === 'string') {
//         return next({
//             type: action
//         })
//     }
//     return next(action)
// };

export default configureStore({
    // reducer: fetchCarList,
reducer: {
    cars: carSlice
},
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    // reducer: {}
    // devTools: process.env.NODE_ENV !== 'production',
    // devTools: true,
})



// import {createStore} from 'redux'
// import reducer from '../reducers'
// const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;