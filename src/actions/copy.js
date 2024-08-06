export const copy = (selectedRows) => {
    alert(`Copied ${selectedRows.map(row => row.name).join(', ')}`);
};
