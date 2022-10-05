// import { createStore } from "redux";
// import {initialState, openDrawer, OPEN_WATCHLIST} from "./actionsCreators";

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case OPEN_WATCHLIST: return {
//             ...state,
//             isOpen: !state.isOpen
//         }

//         default: return state
//     }
// }

// const store = createStore(reducer);
// console.log('initial state', store.getState());
// const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));
// store.dispatch(openDrawer());
// store.dispatch(openDrawer());
// store.dispatch(openDrawer());
// unsubscribe();