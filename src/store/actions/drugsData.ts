export const setDrugList = (drugList: any) => ({
  type: SETDRUGS.SET_DRUGLIST,
  payload: drugList,
});

export const setUserDrugs = (userDrugsInfo: any) => ({
  type: SETDRUGS.SET_USERDRUGS,
  payload: userDrugsInfo,
});

export const setDrugName = (name: string, id: number, idx: number) => ({
  type: SETDRUGS.SET_DRUGNAME,
  payload: name,
  id,
  idx,
});

export const setReimburse = (reimburse: string, id: number, idx: number) => ({
  type: SETDRUGS.SET_REIMBURSE,
  payload: reimburse,
  id,
  idx,
});

export const setDose = (num: number, id: number, idx: number) => ({
  type: SETDRUGS.SET_DOSE,
  payload: num,
  id,
  idx,
});

export const setDosesNum = (num: number, id: number, idx: number) => ({
  type: SETDRUGS.SET_DOSESNUM,
  payload: num,
  id,
  idx,
});

export const setDosingDaysNum = (num: number, id: number, idx: number) => ({
  type: SETDRUGS.SET_DOSINGDAYSNUM,
  payload: num,
  id,
  idx,
});

export const setPerDays = (num: number, id: number, idx: number) => ({
  type: SETDRUGS.SET_PERDAYS,
  payload: num,
  id,
  idx,
});

export const setPrnBool = (bool: boolean, id: number, idx: number) => ({
  type: SETDRUGS.SET_PRNBOOL,
  payload: bool,
  id,
  idx,
});

export const setInfoRow = (param: any) => ({
  type: SETDRUGS.SET_INFOROW,
  payload: nullInfoRow,
});

export const setAddingDrug = (oneDrug: any, idx: number) => ({
  type: SETDRUGS.SET_ADDINGDRUG,
  payload: oneDrug,
  idx,
});

export const setListNull = (id: number, idx: number) => ({
  type: SETDRUGS.SET_LISTNULL,
  payload: nullInfoRow,
  id,
  idx,
});

const nullInfoRow = {
  id: Date.now(),
  drug: {
    id: null,
    name: "",
    reimburse: 0,
    kd_code: null,
    one_liner: null,
    unit: null,
  },
  created: null,
  modified: null,
  dose: 0,
  unit: null,
  doses_num: 0,
  dosing_days_num: 0,
  per_days: 0,
  reimburse: null,
  kd_code: null,
  start_at: null,
  end_at: null,
  prescription: null,
};

export const SETDRUGS = {
  SET_DRUGLIST: "SET_DRUGLIST",
  SET_USERDRUGS: "SET_USERDRUGS",
  SET_DRUGNAME: "SET_DRUGNAME",
  SET_REIMBURSE: "SET_REIMBURSE",
  SET_DOSE: "SET_DOSE",
  SET_DOSESNUM: "SET_DOSESNUM",
  SET_DOSINGDAYSNUM: "SET_DOSINGDAYSNUM",
  SET_PERDAYS: "SET_PERDAYS",
  SET_PRNBOOL: "SET_PRNBOOL",
  SET_INFOROW: "SET_INFOROW",
  SET_ADDINGDRUG: "SET_ADDINGDRUG",
  SET_LISTNULL: "SET_LISTNULL",
};
