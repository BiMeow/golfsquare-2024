const getImageUrl = (url = "") => {
	return process.env.NEXT_PUBLIC_BASE_ULR_IMAGE ? `${process.env.NEXT_PUBLIC_BASE_ULR_IMAGE}${url}` : url;
};

const asset = (src: string) => {
	return getImageUrl(src);
};

export default asset;
