import { errorStyle } from "./Styles";

export const getErrorStyle = (error, touched) => {
  return error && touched ? errorStyle.error : null;
};

export const getErrorPlaceholder = (error, touched) => {
  return error && touched ? errorStyle.error.color : "#ededed";
};

export const getEditProfileError = (error, touched) => {
  return error && touched ? errorStyle.editProfileError : null;
};

export const getFieldNameError = (error, touched) => {
  return error && touched ? errorStyle.fieldNameError : null;
};
