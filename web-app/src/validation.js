export const isInError = (formikProps, name) => {
	return formikProps.errors[name] && formikProps.touched[name] ? "required-error" : "";
};
