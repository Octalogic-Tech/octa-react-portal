import { handleActions } from "redux-actions";

import * as actionCreators from "../actionCreators/theme";
import { selectCurrentThemeMinified } from "../selectors/theme";

const defaultState = {
	currentTheme: 'dark',
};

const portfolio = handleActions(
	{
		[actionCreators.doThemeSwitch]: state => {
            const currentTheme = selectCurrentThemeMinified(state);
            let newPaletteType = currentTheme === "light" ? "dark" : "light";
			return { ...state, currentTheme: newPaletteType };
		},
	},
	defaultState
);



export default portfolio;
