import { useState } from "react";

const useForm = (initialValue) => {
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [values, setValue] = useState(initialValue);
	const handleChanges = (e) => {
		setValue({ ...values, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setShowSuccessMessage(true);
	};

	return [values, handleChanges, showSuccessMessage, handleSubmit];
};

export default useForm;
