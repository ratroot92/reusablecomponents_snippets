import React from 'react';

import MUIDataTable from 'mui-datatables';

import { BoxLoading } from 'react-loadingg';


// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// import { MuiThemeProvider } from '@material-ui/core/styles';

export default function MTable(props) {
	const [load, setLoad] = React.useState(false);
	const [stateRows, setStateRows] = React.useState();
	const [stateColumns, setStateColumns] = React.useState();
	const { rows, columns, tableName,options } = props;

	

	React.useEffect(() => {
		const tableColumns = [];
		const tableRows = [];
		/**
		 * Create formatted columns names
		 */
		columns.forEach((column) => {
			tableColumns.push({
				name: column,
				options: { filter: true },
			});
			setStateColumns(tableColumns);
			/**
			 * Create formatted rows
			 */
			rows.forEach((row) => {
				tableRows.push(Object.values(row));
			});
			setStateRows(tableRows);
			setLoad(true);
		});
	}, []);

	// const getMuiTheme = () =>
	// 	createMuiTheme({
	// 		overrides: {
	// 			MUIDataTable: {
	// 				root: {
	// 					backgroundColor: '#FF000',
	// 				},
	// 				paper: {
	// 					boxShadow: 'none',
	// 				},
	// 			},
	// 			MUIDataTableBodyCell: {
	// 				root: {
	// 					backgroundColor: '#FF0000',
	// 				},
	// 			},
	// 		},
	// 	});

	return (
		// <MuiThemeProvider theme={getMuiTheme()}>
		// <MuiThemeProvider>
		<div>
			{load ? (
				<MUIDataTable
					title={tableName}
					data={stateRows}
					columns={stateColumns}
					options={options}
					editable={{
						onRowUpdate: (newData, oldData) => {
							console.log('onRowUpdate');
							console.log(oldData);
							console.log(newData);
						},
						// 	  new Promise((resolve) => {
						// 		handleRowUpdate(newData, oldData, resolve);
						//   }),
						onRowAdd: (newData) => {
							console.log('onRowAdd');
							console.log(newData);
						},
						// new Promise((resolve) => {
						//   handleRowAdd(newData, resolve)
						// }),
						onRowDelete: (oldData) => {
							console.log('onRowDelete');
							console.log(oldData);
						},
						// new Promise((resolve) => {
						//   handleRowDelete(oldData, resolve)
						// }),
					}}
				/>
			) : (
				<BoxLoading />
			)}
		</div>
		// {/* </MuiThemeProvider> */}
	);
}
