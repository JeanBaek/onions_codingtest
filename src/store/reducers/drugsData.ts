import { SETDRUGS } from "../actions";

const INITIAL_STATE: any = {
  drugList: [],
  userDrugsInfo: [],
};

const drugsDataReducer = (state = INITIAL_STATE, action: any): any => {
  switch (action.type) {
    case SETDRUGS.SET_DRUGLIST:
      return { ...state, drugList: action.payload };

    case SETDRUGS.SET_USERDRUGS:
      return { ...state, userDrugsInfo: action.payload };

    case SETDRUGS.SET_DRUGNAME:
      return {
        ...state,
        userDrugsInfo: state.userDrugsInfo?.map((oneInfo: any, idx: number) =>
          oneInfo.id === action.id && idx === action.idx
            ? { ...oneInfo, drug: { ...oneInfo.drug, name: action.payload } }
            : oneInfo
        ),
      };

    case SETDRUGS.SET_REIMBURSE:
      return {
        ...state,
        userDrugsInfo: state.userDrugsInfo?.map((oneInfo: any, idx: number) =>
          oneInfo.id === action.id && idx === action.idx
            ? {
                ...oneInfo,
                drug: { ...oneInfo.drug, reimburse: action.payload },
              }
            : oneInfo
        ),
      };

    case SETDRUGS.SET_DOSE:
      return {
        ...state,
        userDrugsInfo: state.userDrugsInfo?.map((oneInfo: any, idx: number) =>
          oneInfo.id === action.id && idx === action.idx
            ? { ...oneInfo, dose: action.payload }
            : oneInfo
        ),
      };

    case SETDRUGS.SET_DOSESNUM:
      return {
        ...state,
        userDrugsInfo: state.userDrugsInfo?.map((oneInfo: any, idx: number) =>
          oneInfo.id === action.id && idx === action.idx
            ? { ...oneInfo, doses_num: action.payload }
            : oneInfo
        ),
      };

    case SETDRUGS.SET_DOSINGDAYSNUM:
      return {
        ...state,
        userDrugsInfo: state.userDrugsInfo?.map((oneInfo: any, idx: number) =>
          oneInfo.id === action.id && idx === action.idx
            ? { ...oneInfo, dosing_days_num: action.payload }
            : oneInfo
        ),
      };

    case SETDRUGS.SET_PERDAYS:
      return {
        ...state,
        userDrugsInfo: state.userDrugsInfo?.map((oneInfo: any, idx: number) =>
          oneInfo.id === action.id && idx === action.idx
            ? { ...oneInfo, per_days: action.payload }
            : oneInfo
        ),
      };

    case SETDRUGS.SET_PRNBOOL:
      return {
        ...state,
        userDrugsInfo: state.userDrugsInfo?.map((oneInfo: any, idx: number) =>
          oneInfo.id === action.id && idx === action.idx && !oneInfo.prn
            ? { ...oneInfo, prn: action.payload }
            : oneInfo.id === action.id && oneInfo.prn
            ? { ...oneInfo, prn: !action.payload }
            : oneInfo
        ),
      };

    case SETDRUGS.SET_INFOROW:
      return {
        ...state,
        userDrugsInfo: [...state.userDrugsInfo, action.payload],
      };

    case SETDRUGS.SET_ADDINGDRUG:
      return {
        ...state,
        userDrugsInfo: state.userDrugsInfo?.map((oneInfo: any, idx: number) =>
          idx === action.idx ? action.payload : oneInfo
        ),
      };

    case SETDRUGS.SET_LISTNULL:
      return {
        ...state,
        userDrugsInfo: state.userDrugsInfo?.map((oneInfo: any, idx: number) =>
          oneInfo.id === action.id && idx === action.idx
            ? action.payload
            : oneInfo
        ),
      };

    default:
      return state;
  }
};

export default drugsDataReducer;
