export const viewAttachments = (selectedRows) => {
    alert(`Viewing attachments for ${selectedRows.map(row => row.name).join(', ')}`);
};
