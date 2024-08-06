[English](#english) | [Español](#español)
###### English

# DynamicTable

A dynamic table component for ReactJS built with Material-UI, featuring sorting, pagination, column visibility toggling, and custom toolbar actions.

## Features

- **Sorting**: Clickable column headers to sort data in ascending or descending order.
- **Pagination**: Adjustable rows per page and pagination controls.
- **Column Visibility**: Option to hide and show columns.
- **Custom Toolbar**: Add custom tools to the toolbar that appear when rows are selected.

## Installation

Install the package via npm:

```sh
npm install dynamic-table-react
```

## Usage

Here is an example of how to use the DynamicTable component in your React project:

```javascript
import React from 'react';
import { DynamicTable } from 'dynamic-table-react';
import { Check, AttachFile, FileCopy } from '@mui/icons-material';
import { approve } from './actions/approve';
import { viewAttachments } from './actions/viewAttachments';
import { copy } from './actions/copy';

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
    userCanToggleColumns: true,
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

```

## Options

The **'DynamicTable'** component accepts several options to customize its behavior:

* **'initialOrder':** Initial order of sorting ('asc' or 'desc').
* **'initialOrderBy':** Initial column to sort by.
* **'rowsPerPage':** Number of rows to display per page.
* **'hiddenColumns':** Array of columns to be hidden initially.
* **'sortable':** Enable or disable column sorting.
* **'pagination':** Enable or disable pagination.
* **'toggleColumnVisibility':** Allow users to toggle column visibility.
* **'userCanToggleColumns':** Allow users to hide/show columns.

## Custom Toolbar Actions

You can pass custom tools to the toolbar using the tools prop. Each tool should have the following structure:

```js
{
    name: 'Tool Name',
    icon: <YourIcon />,
    tooltip: 'Tooltip for the tool',
    action: (selectedRows) => { /* Your custom action */ },
}

```

## Development

To run the project locally for development:

```sh
npm run dev
```

## Building and Publishing

To build the project for production and publish it to NPM:

```sh
npm run build
npm publish
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

---
---

###### Español

# DynamicTable

Un componente de tabla dinámica para ReactJS construido con Material-UI, con clasificación, paginación, alternancia de visibilidad de columnas y acciones personalizadas en la barra de herramientas.

## Características

* **Clasificación:** Encabezados de columna clicables para ordenar datos en orden ascendente o descendente.
* **Paginación:** Número ajustable de filas por página y controles de paginación.
* **Visibilidad de Columnas:** Opción para ocultar y mostrar columnas.
* **Barra de Herramientas Personalizada:** Agrega herramientas personalizadas a la barra de herramientas que aparecen cuando se seleccionan filas.

## Instalacion

Instala el paquete a través de npm:

```sh
npm install dynamic-table-react
```

## Uso

Aquí hay un ejemplo de cómo usar el componente DynamicTable en tu proyecto React:

```js
import React from 'react';
import { DynamicTable } from 'dynamic-table-react';
import { Check, AttachFile, FileCopy } from '@mui/icons-material';
import { approve } from './actions/approve';
import { viewAttachments } from './actions/viewAttachments';
import { copy } from './actions/copy';

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
    userCanToggleColumns: true,
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
```

## Opciones

El componente **'DynamicTable'** acepta varias opciones para personalizar su comportamiento:

* **'initialOrder':** Orden inicial de clasificación ('asc' o 'desc').
* **'initialOrderBy':** Columna inicial para ordenar.
* **'rowsPerPage':** Número de filas a mostrar por página.
* **'hiddenColumns':** Array de columnas que se ocultan inicialmente.
* **'sortable':** Habilitar o deshabilitar la clasificación de columnas.
* **'pagination':** Habilitar o deshabilitar la paginación.
* **'toggleColumnVisibility':** Permitir a los usuarios alternar la visibilidad de columnas.
* **'userCanToggleColumns':** Permitir a los usuarios ocultar/mostrar columnas.

## Acciones personalizadas en la Barra de Herramientas

Puedes pasar herramientas personalizadas a la barra de herramientas utilizando la prop tools. Cada herramienta debe tener la siguiente estructura:

```js
{
    name: 'Nombre de la Herramienta',
    icon: <TuIcono />,
    tooltip: 'Tooltip para la herramienta',
    action: (selectedRows) => { /* Tu acción personalizada */ },
}
```

## Desarrollo

Para ejecutar el proyecto localmente para desarrollo:

```sh
npm run dev
```

## Construcción y Publicación

Para construir el proyecto para producción y publicarlo en NPM:

```sh
npm run build
npm publish
```

## Contribuciones
¡Las contribuciones son bienvenidas! Por favor, abre un problema o envía una solicitud de extracción para cualquier mejora o corrección de errores.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.