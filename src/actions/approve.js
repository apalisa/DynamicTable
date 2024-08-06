export const approve = (selectedRows) => {
    alert(`Approved ${selectedRows.map(row => row.name).join(', ')}`);
};
