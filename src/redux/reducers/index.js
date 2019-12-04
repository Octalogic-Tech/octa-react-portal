import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import history from "../history";

import portfolio from "./portfolio";
import theme from "./theme";

const rootPersistConfig = {
	key: "root",
	storage: storage,
	stateReconciler: autoMergeLevel2,
	blacklist: ["router", "portfolio", "theme"]
};

// const authPersistConfig = {
// 	key: "auth",
// 	storage: storage,
// 	blacklist: []
// };

const rootReducer = combineReducers({
	router: connectRouter(history),
	portfolio: portfolio,
	theme: theme
});

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedRootReducer;
