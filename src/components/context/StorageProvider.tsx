import { createContext, memo, useContext, useState } from "react";

export const StorageContext = createContext<any>(null);

const StorageProvider = (props: any) => {
	const [isLoading, setIsLoading] = useState(true);

	const [isModalOpen, setIsModalOpen] = useState<any>(false);
	const [isModalRegisterOpen, setIsModalRegisterOpen] = useState<any>(false);

	return (
		<StorageContext.Provider
			value={{
				isLoading,
				setIsLoading,
				isModalOpen,
				setIsModalOpen,
				isModalRegisterOpen,
				setIsModalRegisterOpen,
			}}
			{...props}
		></StorageContext.Provider>
	);
};

export default memo(StorageProvider);

export const useStorage = () => {
	const context = useContext(StorageContext);
	if (!context) {
		throw new Error("useStorage has to be used within <StorageContext.Provider>");
	}
	return context;
};
