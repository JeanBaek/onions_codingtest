import React, { useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../config";
import {
  setDrugList,
  setUserDrugs,
  setWidth,
  setHeight,
  setAddingDrug,
  setDrugName,
  setReimburse,
} from "../store/actions";
import InputPage from "../pages/InputPage";

const InputPageContainer = () => {
  const dispatch = useDispatch();
  const drugList = useSelector(
    ({ drugsDataReducer }) => drugsDataReducer.drugList
  );
  const userDrugsInfo = useSelector(
    ({ drugsDataReducer }) => drugsDataReducer.userDrugsInfo
  );

  useEffect(() => {
    axios
      .get(`http://localhost:3000/data/mockdata.json`)
      .then((response) => {
        dispatch(setDrugList(response.data.results));
        dispatch(setUserDrugs(response.data.results));
      })
      .catch((error) => console.log("Catched errors!!", error));

    // AWS에서 API를 호출하여 데이터를 받아오려 했으나, CORS 관련 문제로 호출 실패함. 추후 재시도 예정.
    //   axios
    //     .get(API, {
    //       headers: { "Access-Control-Allow-Origin": "http://192.168.25.7:3000/" },
    //     })
    //     .then((response) => console.log("response", response))
    //     .catch((error) => console.log("Catched errors!!", error));
  }, [dispatch]);

  useLayoutEffect(() => {
    const updateSize = () => {
      dispatch(setWidth(Number(window.innerWidth)));
      dispatch(setHeight(Number(window.innerHeight)));
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [dispatch]);

  const isChangeDrugInputValue = (e: any, id: number, idx: number) => {
    let { value } = e.target;
    let seperatedValue = value.split("/");
    let valueWithoutSpace = seperatedValue.map((value: any) => value.trim());

    drugList.map((el: any) => {
      if (value === el.drug.name) {
        dispatch(setAddingDrug(el, idx));
      }
      if (value !== el.drug.name) {
        dispatch(setDrugName(valueWithoutSpace[0], id, idx));
        dispatch(setReimburse(valueWithoutSpace[1], id, idx));
      }
    });
  };

  const isMakePrescription = () => {
    const trimNull = userDrugsInfo.filter((drug: any) => drug.created !== null);

    const trimOverlappedInfo = Array.from(
      new Set(trimNull.map((a: any) => a.id))
    ).map((id) => {
      return trimNull.find((a: any) => a.id === id);
    });
    console.log("업데이트된 약제 처방 리스트 >>>", trimOverlappedInfo);
  };

  const InputPageProps = {
    isChangeDrugInputValue,
    isMakePrescription,
  };

  return <InputPage {...InputPageProps} />;
};

export default InputPageContainer;
