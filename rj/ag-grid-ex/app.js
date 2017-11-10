(function(){
	agGrid.initialiseAgGridWithAngular1(angular);
	angular.module('ag-example', ['agGrid']);
	angular.module('ag-example')
			.controller('gridCtrl', gridCtrl);

	gridCtrl.$inject = ['$scope'];
	function gridCtrl($scope){
		var gc = this;
		gc.hello = 'hello';
		var columnDefs = [
			{headerName: 'a', field: 'kill'},
			{headerName: 'b', field: 'b'},
			{headerName: 'c', field: 'c'},
			{headerName: 'd', field: 'd'},
			// {
			// 	headerName: 'group', 
			// 	headerGroupComponent: MyHeaderGroupComponent,
			// 	children: [
			// 		{headerName: 'one', field: 'one'},
			// 		{headerName: 'two', field: 'two'},
			// 		{headerName: 'three', field: 'three'}
			// 	]
			// },
			{
				headerName: 'testFilter', 
				field: 'testFilter', 
				filter: 'number',
				suppressToolPanel: true
			}
		];

		var defaultColDef = {
			editable: true,
			filter: 'text'
		};

		function MyHeaderGroupComponent(){}

		//the field values given must be same here in rowData. If they are 'a', 'b', 'c' these must be 'a', 'b', 'c' refering to the values in rowData. The header name can be anything, its just the name that will be shown on the screen.
		var rowData = [
			{kill: "Toyota", b: "Celica", c: 35000, d: 1, testFilter: 90},
			{kill: "Ford", b: "Mondeo", c: 32000, d: 2, testFilter: 40},
        	{kill: "Porsche", b: "Boxter", c: 72000, d: 3, testFilter: 120}
		];

		gc.gridOptions = {
			columnDefs: columnDefs,
			rowData: rowData,
			onRowClicked: onRowClicked,
			onColumnResized: onColumnResized,
			onGridReady: onGridReady,
			defaultColDef: defaultColDef 
		};

		function onRowClicked(e){
			//this e.data is an object with keys as the field names given in coumnDefs and values as given in rowData.
			console.log(e.data, 'row is clicked');
		}

		function onColumnResized(e){
			console.log(e);
			console.log('column resize');
		}

		//this will be invoked when the grid is initialised
		function onGridReady(e){
			//e is an object that has columnApi and api as keys
			console.log(e, 'grid is ready');
			console.log('api grid',gc.gridOptions.api);
			gc.gridOptions.api.addGlobalListener(function(type, event){
				console.log(type);
				console.log(event);
			});
		}

		//gc.gridOptions.api.refreshView();
	}		
})();