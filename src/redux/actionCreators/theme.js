import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes/theme';

export const doThemeSwitch = createAction(actionTypes.THEME_TOGGLE_REQUESTED);