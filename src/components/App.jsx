import { DynamicTable } from './DynamicTable';
import { Check, AttachFile, FileCopy } from '@mui/icons-material';
import { approve, viewAttachments, copy } from '../actions/';

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'age', headerName: 'Age' },
];

const data = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Alice Johnson', age: 35 },
    { id: 4, name: 'Bob Brown', age: 40 },
    { id: 5, name: 'Charlie Black', age: 45 },
    { id: 6, name: 'Dave White', age: 50 },
];

const options = {
    initialOrder: 'asc',
    initialOrderBy: 'name',
    rowsPerPage: 5,
    hiddenColumns: ['id'],
    sortable: true,
    pagination: true,
    toggleColumnVisibility: true,
    userCanToggleColumns: true, // Permite al usuario ocultar/mostrar columnas
};

const tools = [
    {
        name: 'Approve',
        icon: <Check />,
        tooltip: 'Approve selected rows',
        action: approve,
    },
    {
        name: 'View Attachments',
        icon: <AttachFile />,
        tooltip: 'View attachments for selected rows',
        action: viewAttachments,
    },
    {
        name: 'Copy',
        icon: <FileCopy />,
        tooltip: 'Copy selected rows',
        action: copy,
    },
];

const App = () => {
    return (
        <div>
            <h1>Dynamic Table</h1>
            <DynamicTable columns={columns} data={data} options={options} tools={tools} />
        </div>
    );
};

export default App;
