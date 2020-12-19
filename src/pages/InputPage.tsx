import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  setInfoRow,
  setDose,
  setDosesNum,
  setDosingDaysNum,
  setPerDays,
  setPrnBool,
  setListNull,
} from "../store/actions";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { mixin } from "../styles";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import {
  HiFolderDownload,
  HiXCircle,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { RiArrowUpDownLine } from "react-icons/ri";

interface IProps {
  isChangeDrugInputValue: (e: any, id: number, idx: number) => void;
  isMakePrescription: () => void;
}

interface StateForStyle {
  type?: string;
  forward?: boolean;
  w?: any;
  h?: any;
}

const InputPage: React.FC<IProps> = ({
  isChangeDrugInputValue,
  isMakePrescription,
}) => {
  const dispatch = useDispatch();
  const userDrugsInfo = useSelector(
    ({ drugsDataReducer }) => drugsDataReducer.userDrugsInfo
  );
  const drugList = useSelector(
    ({ drugsDataReducer }) => drugsDataReducer.drugList
  );
  const w = useSelector(
    ({ windowSizeReducer }) => windowSizeReducer.windowWidth
  );
  const h = useSelector(
    ({ windowSizeReducer }) => windowSizeReducer.windowHeight
  );

  return (
    <Container>
      <Header>
        <MenuBtn onClick={() => console.log("Menu clicked!!")} />
        <Title>처방 정보 입력</Title>
        <DropDownBtn onClick={() => console.log("DropDown clicked!!")}>
          처리하기
          <DropDownIcon />
        </DropDownBtn>
      </Header>
      <GroupingComponents w={w} h={h}>
        <ImageWrapper w={w} h={h}>
          <TransformWrapper>
            <TransformComponent>
              <PrescriptionImage
                alt="처방전"
                src="https://pcare-public.s3.ap-northeast-2.amazonaws.com/prescription/33969_2020-12-18T061757.557Z.jpg"
                w={w}
                h={h}
              />
            </TransformComponent>
          </TransformWrapper>
        </ImageWrapper>
        <GroupRight w={w} h={h}>
          <InfoWrapper w={w} h={h}>
            <InfoHeader>
              <InfoOrderNum>4</InfoOrderNum>약제
            </InfoHeader>
            <InfoBody w={w} h={h}>
              <InfoBodyIn>
                <NameWrapper>
                  <Name w={w} h={h}>
                    약제명
                  </Name>
                  <Dose w={w} h={h}>
                    1회 투약량
                  </Dose>
                  <DoseInfo w={w} h={h}>
                    투여횟수
                    <HiFolderDownload />
                  </DoseInfo>
                  <DoseInfo w={w} h={h}>
                    총투약일
                    <HiFolderDownload />
                  </DoseInfo>
                  <DoseInfo w={w} h={h}>
                    기준일수
                  </DoseInfo>
                  <Prn w={w} h={h}>
                    PRN
                  </Prn>
                </NameWrapper>
                {userDrugsInfo.length &&
                  userDrugsInfo.map(
                    (
                      {
                        id,
                        drug,
                        dose,
                        doses_num,
                        dosing_days_num,
                        per_days,
                      }: {
                        id: number;
                        drug: any;
                        dose: number;
                        doses_num: number;
                        dosing_days_num: number;
                        per_days: number;
                      },
                      idx: number
                    ) => {
                      return (
                        <DrugInfoCard>
                          <OrderNumber>{idx + 1}.</OrderNumber>
                          <DrugNameBox>
                            <Input
                              type="text"
                              list="drugNames"
                              placeholder="약제명 또는 약제코드를 입력"
                              value={
                                drug.name.length > 0 ||
                                drug.reimburse.length > 0
                                  ? `${drug.name} / ${drug.reimburse}`
                                  : ""
                              }
                              w={w}
                              h={h}
                              onChange={(e) =>
                                isChangeDrugInputValue(e, id, idx)
                              }
                            />
                            <datalist id="drugNames">
                              {drugList.map((el: any) => (
                                <option value={el.drug.name} />
                              ))}
                            </datalist>
                            <DeleteBtn
                              onClick={() => {
                                dispatch(setListNull(id, idx));
                              }}
                            >
                              <HiXCircle className="icon" />
                            </DeleteBtn>
                          </DrugNameBox>
                          <UpDownIcon />
                          <Input
                            type="number"
                            pattern="[0-9]*"
                            value={dose}
                            w={w}
                            h={h}
                            onChange={(e) => {
                              const { value } = e.target;
                              dispatch(setDose(Number(value), id, idx));
                            }}
                          />
                          <Input
                            type="number"
                            value={doses_num}
                            w={w}
                            h={h}
                            onChange={(e) => {
                              const { value } = e.target;
                              dispatch(setDosesNum(Number(value), id, idx));
                            }}
                          />
                          <Input
                            type="number"
                            value={dosing_days_num}
                            w={w}
                            h={h}
                            onChange={(e) => {
                              const { value } = e.target;
                              dispatch(
                                setDosingDaysNum(Number(value), id, idx)
                              );
                            }}
                          />
                          <Input
                            type="number"
                            value={per_days}
                            w={w}
                            h={h}
                            onChange={(e) => {
                              const { value } = e.target;
                              dispatch(setPerDays(Number(value), id, idx));
                            }}
                          />
                          <Input
                            type="checkbox"
                            onClick={() => dispatch(setPrnBool(true, id, idx))}
                          />
                        </DrugInfoCard>
                      );
                    }
                  )}

                <AddCardBtn>
                  <span
                    className="btn"
                    onClick={() => {
                      dispatch(setInfoRow(1));
                    }}
                  >
                    + 추가
                  </span>
                </AddCardBtn>
              </InfoBodyIn>
            </InfoBody>
          </InfoWrapper>
          <MovingBtnWrapper w={w} h={h}>
            <MovingBtn
              w={w}
              h={h}
              onClick={() => console.log("Undo button clicked!!")}
              forward={false}
            >
              <HiChevronLeft />
            </MovingBtn>
            <MovingBtn
              w={w}
              h={h}
              onClick={() => isMakePrescription()}
              forward={true}
            >
              <HiChevronRight />
            </MovingBtn>
          </MovingBtnWrapper>
        </GroupRight>
      </GroupingComponents>
    </Container>
  );
};

export default InputPage;

const Container = styled.div``;

const Header = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  ${mixin.flexSet("space-between", "center", "row")};
  display: flex;
  height: 9vh;
  background-color: ${({ theme }) => theme.headerBlack};
  color: ${({ theme }) => theme.gray};
`;

const GroupingComponents = styled.div<StateForStyle>`
  flex-flow: ${({ w, h }) => w > h && "row wrap"};
  display: ${({ w, h }) => w > h && "flex"};
  margin-top: 9vh;
  width: ${({ w, h }) => w > h && "50vw"};
`;

const GroupRight = styled.div<StateForStyle>`
  position: ${({ w, h }) => w > h && "absolute"};
  top: ${({ w, h }) => w > h && "0"};
  right: ${({ w, h }) => w > h && "0"};
  width: ${({ w, h }) => w > h && "50vw"};
`;

const MenuBtn = styled(FiMenu)`
  margin-left: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const Title = styled.h1`
  position: fixed;
  left: 50%;
  display: inline-block;
  transform: translate(-50%);
  font-size: 1.3rem;
  font-weight: 800;
`;

const DropDownBtn = styled.span`
  flex-direction: row;
  display: flex;
  margin-right: 0.5rem;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 50px;
  width: inline-block;
  padding: 0.45rem 0.8rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 800;
`;

const DropDownIcon = styled(FiChevronDown)`
  margin-left: 0.3rem;
`;

const ImageWrapper = styled.div<StateForStyle>`
  position: relative;
  overflow: scroll;
  height: ${({ w, h }) => w < h && "35vh"};
`;

const PrescriptionImage = styled.img<StateForStyle>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: transparent scroll no-repeat 0 0;
`;

const InfoWrapper = styled.div<StateForStyle>`
  ${({ w, h }) => w > h && `margin-top: 30vh;`}
`;

const InfoHeader = styled.header`
  ${mixin.flexSet("center", "center", "row")}
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.borderGray};
  height: 2.2rem;
  background-color: #f8f8f8;
`;

const InfoOrderNum = styled.span`
  margin-right: 0.5rem;
  border: 1px solid #6699ff;
  border-radius: 50px;
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.blue};
  text-align: center;
  color: ${({ theme }) => theme.white};
`;

const InfoBody = styled.div<StateForStyle>`
  overflow: scroll;
  margin-bottom: 9vh;
  width: ${({ w, h }) => (w > h ? "50vw" : "100vw")};
`;

const InfoBodyIn = styled.div`
  display: inline-block;
`;

const NameWrapper = styled.div<StateForStyle>`
  align-items: center;
  display: flex;
  height: 3rem;
  padding-top: 0.5rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.gray};
`;

const Name = styled.span<StateForStyle>`
  margin-left: 3rem;
  width: 23.5rem;
`;

const Dose = styled.span<StateForStyle>`
  margin-left: 2.3rem;
  width: 4rem;
`;

const DoseInfo = styled.span<StateForStyle>`
  margin-left: 0.4rem;
  width: 4rem;
`;

const Prn = styled.span<StateForStyle>`
  margin-left: 0.4rem;
`;

const DrugInfoCard = styled.div`
  align-items: center;
  display: flex;
  padding: 0.5rem;
`;

const OrderNumber = styled.span`
  display: inline-block;
  width: 2.5rem;
  padding-left: 0.8rem;
  font-size: 1.1rem;
`;

const DrugNameBox = styled.span`
  position: relative;
`;

const Input = styled.input<StateForStyle>`
  margin-right: 0.4rem;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 0.5rem;
  width: ${({ type, w, h }) =>
    type === "text" ? "23.5rem" : type === "number" ? "4rem" : "1rem"};
  height: ${({ type }) => (type === "button" ? "1.5vh" : "5vh")};
  padding-left: 0.7rem;
  text-align: ${({ type }) => type === "number" && "right"};
`;

const DeleteBtn = styled.span`
  position: absolute;
  top: 1vh;
  right: 1.2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.gray};

  .icon {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const UpDownIcon = styled(RiArrowUpDownLine)`
  margin-right: 0.2rem;
  width: 1.6rem;
`;

const AddCardBtn = styled.div`
  margin-bottom: 1.5rem;
  height: 5vh;
  padding: 1rem;

  .btn {
    margin-left: 2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.blue};
  }
`;

const MovingBtnWrapper = styled.div<StateForStyle>`
  position: fixed;
  bottom: 0;
  right: 0;
  ${mixin.flexSet("center", "flex-end", "column")};
  flex-wrap: wrap;
  display: flex;
  width: ${({ w, h }) => (w > h ? "50vw" : "100vw")};
  height: 9vh;
`;

const MovingBtn = styled.div<StateForStyle>`
  ${mixin.flexSet("center", "center")}
  display: flex;
  margin: 0 0.1rem;
  width: ${({ w, h }) => (w > h ? "25vw" : "50vw")};
  height: 100%;
  background-color: ${({ theme, forward }) =>
    forward ? theme.blue : theme.gray};
  cursor: pointer;
  font-size: 4rem;
  color: ${({ theme }) => theme.white};
`;
