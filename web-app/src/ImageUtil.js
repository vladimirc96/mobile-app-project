export const resolveImage = async (file) => {
	const response = await fetch(file);
	const blob = await response.blob();
	const image = {
		uri: file,
		type: blob.type,
		name: "blob.data.name",
	};
	return image;
};

export const toBase64 = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});

export const base64ToFile = async (url) => {
	let imageUrl;
	if (url.indexOf("data") !== -1) {
		imageUrl = url;
	} else {
		imageUrl = "data:image/png;base64," + url;
	}
	const response = await fetch(imageUrl);
	const blob = await response.blob();
	const file = new File([blob], "File name", { type: "image/png" });
	return file;
};
