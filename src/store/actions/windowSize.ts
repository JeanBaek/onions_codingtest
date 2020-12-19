export const setWidth = (w: number) => ({
  type: SETSIZE.SET_WIDTH,
  payload: w,
});

export const setHeight = (h: number) => ({
  type: SETSIZE.SET_HEIGHT,
  payload: h,
});

export const SETSIZE = {
  SET_WIDTH: "SET_WIDTH",
  SET_HEIGHT: "SET_HEIGHT",
};
