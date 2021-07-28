var moment = require("moment"); // require

const DATE_FORMAT = "DD.MM.yyyy.";

export const formatDate = (date, format = false) => {
	return moment(date, DATE_FORMAT).format(format ? format : DATE_FORMAT);
};
