import { errorStyle } from "./Styles";

export const getErrorStyle = (error, touched) => {
  return error && touched ? errorStyle.error : null;
};

export const getErrorPlaceholder = (error, touched) => {
  return error && touched ? errorStyle.error.color : "#ededed";
};
