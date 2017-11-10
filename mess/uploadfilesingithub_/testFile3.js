// AngularJS Unit Testing for MES

describe("Create test cases for MES", function() {

   beforeEach (function () {
		datasetPanelController = datasetPanel.getController();
  spyOn(controller, "loadMetadataView");
  spyOn(controller,'loadDimensionsData');
  spyOn(controller,'loadPreviewDatasetMetaData');
  controller.loadMetadataView(datagrid, 'Fact');
  controller.loadDimensionsData();
  controller.loadPreviewDatasetMetaData();
	});

   it("Check for grid in dateset panel", function(){
	   grid = datasetPanel.query('[itemId=datasetGrid]')[0];
   	expect(grid !=null).toBeTruthy(true);  		
   });

 it("Check for dateset metadata tabpanel", function(){
    expect(dataSetMetaDataPanel !=null).toBeTruthy(true);     
   });

it("Loadmetadata Function to be called", function(){
    console.log("************* loadMetaview to be called ********** ");
    expect(controller.loadMetadataView).toHaveBeenCalled();     
   });

it("Load Dimensions data function to be called", function(){
    console.log("************* loadDimensionsdata to be called ********** ");
    expect(controller.loadDimensionsData).toHaveBeenCalled();     
   });

it("Preview dataset metadata to be called", function(){
    console.log("************* Preview dataset metadata to be called ********** ");
    expect(controller.loadPreviewDatasetMetaData).toHaveBeenCalled();     
   });

   });