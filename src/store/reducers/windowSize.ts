import { SETSIZE } from "../actions";

const INITIAL_STATE: any = {
  windowWidth: 0,
  windowHeight: 0,
};

const windowSizeReducer = (state = INITIAL_STATE, action: any): any => {
  switch (action.type) {
    case SETSIZE.SET_WIDTH:
      return { ...state, windowWidth: action.payload };

    case SETSIZE.SET_HEIGHT:
      return { ...state, windowHeight: action.payload };

    default:
      return state;
  }
};

export default windowSizeReducer;
