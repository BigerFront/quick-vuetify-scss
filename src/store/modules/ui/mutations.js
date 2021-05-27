import * as types from './mutation-types';

export default {
  [types.UPD_THEME](state, theme) {
    if (theme) state.theme = theme;
  },
};
