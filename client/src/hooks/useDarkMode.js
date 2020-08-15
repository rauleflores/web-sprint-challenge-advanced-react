import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useMedia from "./useMedia";

const usePrefersDarkMode = () => {
	return useMedia(["(prefers-color-scheme: dark)"], [true], false);
};

const useDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

	const prefersDarkMode = usePrefersDarkMode();

	const enabled = typeof darkMode !== undefined ? darkMode : prefersDarkMode;

	useEffect(() => {
		const body = document.querySelector("body");
		console.log("useDarkMode.. body:", body);
		console.log("uDM body.classList value:", body.classList);
		// if (darkMode) {
		// 	window.document.body.classList.add("dark-mode");
		// } else {
		// 	window.document.body.classList.remove("dark-mode");
		// }
		return enabled
			? body.classList.add("dark-mode")
			: body.classList.remove("dark-mode");
	}, [enabled]);

	return [darkMode, setDarkMode];
};

export default useDarkMode;
