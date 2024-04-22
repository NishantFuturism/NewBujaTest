import produce from 'immer';
import { CONTACT_S_DATA, SEND_MESSAGE_LOADING, SHOW_CONTACT_POPUP } from "./constants";
export const initialState = {
  IsMsgbar: false,
  contactusinfo: '',
  savecpopup: '',
  isLoading: false,
};
/* eslint-disable default-case, no-param-reassign */
const contactdeatailsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CONTACT_S_DATA:
        draft.IsMsgbar = true
        draft.contactusinfo = action.contactinfo
        break;
      case SHOW_CONTACT_POPUP:
        draft.savecpopup = action.popupsave
        break;
      case SEND_MESSAGE_LOADING:
        draft.isLoading = action.loading
        break;
    }
  });
export default contactdeatailsReducer;