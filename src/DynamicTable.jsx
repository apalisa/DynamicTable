import React, { useState, useMemo } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel,
  TablePagination, Checkbox, Button
} from '@mui/material';

export const DynamicTable = ({ columns, data, options, tools }) => {
    const [order, setOrder] = useState(options?.initialOrder || 'asc');
    const [orderBy, setOrderBy] = useState(options?.initialOrderBy || columns[0].field);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(options?.rowsPerPage || 5);
    const [hiddenColumns, setHiddenColumns] = useState(options?.hiddenColumns || []);

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

    const sortedData = useMemo(() => {
        return data.slice().sort((a, b) => {
            if (a[orderBy] < b[orderBy]) {
                return order === 'asc' ? -1 : 1;
            }
            if (a[orderBy] > b[orderBy]) {
                return order === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }, [data, order, orderBy]);

    const paginatedData = useMemo(() => {
        return sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [sortedData, page, rowsPerPage]);

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
                                        {options?.sortable && (
                                            <TableSortLabel
                                                active={orderBy === column.field}
                                                direction={orderBy === column.field ? order : 'asc'}
                                                onClick={() => handleRequestSort(column.field)}
                                            >
                                                {column.headerName}
                                            </TableSortLabel>
                                        )}
                                        {!options?.sortable && column.headerName}
                                        {options?.toggleColumnVisibility && (
                                            <Checkbox
                                                checked={!hiddenColumns.includes(column.field)}
                                                onChange={() => handleToggleColumn(column.field)}
                                            />
                                        )}
                                    </TableCell>
                                )
                            ))}
                            <TableCell>
                                Tools
                            </TableCell>
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
                                <TableCell>
                                    {tools.map((tool, toolIndex) => (
                                        <Button
                                            key={toolIndex}
                                            onClick={() => tool.action(row)}
                                        >
                                            {tool.name}
                                        </Button>
                                    ))}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {options?.pagination && (
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}
        </>
    );
};
