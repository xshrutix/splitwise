export const validateCheckbox = (checkedValues: string) => {
	return checkedValues.length > 0 || 'Please select at least one checkbox';
};
