// src/App.jsx
import React from 'react';
import { DynamicTable } from './DynamicTable';

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

const App = () => {
    return (
        <div>
            <h1>Dynamic Table</h1>
            <DynamicTable columns={columns} data={data} />
        </div>
    );
};

export default App;
