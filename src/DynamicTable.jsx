// src/DynamicTable.jsx
import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel,
  TablePagination, FormControlLabel, Checkbox
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const DynamicTable = ({ columns, data, options }) => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState(columns[0].field);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [hiddenColumns, setHiddenColumns] = useState([]);

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleToggleColumn = (field) => {
        setHiddenColumns((prevHiddenColumns) =>
        prevHiddenColumns.includes(field)
            ? prevHiddenColumns.filter((col) => col !== field)
            : [...prevHiddenColumns, field]
        );
    };

    const sortedData = data.sort((a, b) => {
        if (a[orderBy] < b[orderBy]) {
            return order === 'asc' ? -1 : 1;
        }
        if (a[orderBy] > b[orderBy]) {
            return order === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                !hiddenColumns.includes(column.field) && (
                                    <TableCell
                                        key={column.field}
                                        sortDirection={orderBy === column.field ? order : false}
                                    >
                                        <TableSortLabel
                                            active={orderBy === column.field}
                                            direction={orderBy === column.field ? order : 'asc'}
                                            onClick={() => handleRequestSort(column.field)}
                                        >
                                            {column.headerName}
                                        </TableSortLabel>
                                        <Visibility
                                            style={{ cursor: 'pointer', marginLeft: 5 }}
                                            onClick={() => handleToggleColumn(column.field)}
                                        />
                                    </TableCell>
                                )
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData.map((row, index) => (
                            <TableRow key={index}>
                                {columns.map((column) =>
                                    !hiddenColumns.includes(column.field) && (
                                        <TableCell key={column.field}>{row[column.field]}</TableCell>
                                    )
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <div>
                {columns.map((column) => (
                    <FormControlLabel
                        key={column.field}
                        control={
                            <Checkbox
                                checked={!hiddenColumns.includes(column.field)}
                                onChange={() => handleToggleColumn(column.field)}
                            />
                        }
                        label={column.headerName}
                    />
                ))}
            </div>
        </>
    );
};
