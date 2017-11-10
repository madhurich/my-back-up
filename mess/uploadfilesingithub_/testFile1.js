 
describe("Dataset upload test --> ", function () {
		var dataUploadView = null;
		var dataSetIntegrationController = null;
		beforeEach(function () {				
			dataUploadController = dataUploadView.getController();			
		});
		
		it("Check DataSetIntegration View", function () {
				expect(dataUploadView).toBeDefined();
				expect(dataUploadController).toBeDefined();
		});
		describe("Functionality test :-",function(){
			
				it("uploadDataViewAfterRender() called or not", function () {
					spyOn(dataUploadController, "uploadDataViewAfterRender");//.and.callThrough();
					dataUploadController.uploadDataViewAfterRender();
					expect(dataUploadController.uploadDataViewAfterRender).toHaveBeenCalled();
				})
				
				it("fileUploadChange() called or not", function () {
					spyOn(dataUploadController, "fileUploadChange");//.and.callThrough();
					dataUploadController.fileUploadChange();
					expect(dataUploadController.fileUploadChange).toHaveBeenCalled();
				})
				
				it("uploadFileOnChange() called or not", function () {
					spyOn(dataUploadController, "uploadFileOnChange");//.and.callThrough();
					dataUploadController.uploadFileOnChange();
					expect(dataUploadController.uploadFileOnChange).toHaveBeenCalled();
				})
				
				it("showLoadProgressBar() called or not", function () {
					spyOn(dataUploadController, "showLoadProgressBar");//.and.callThrough();
					dataUploadController.showLoadProgressBar();
					expect(dataUploadController.showLoadProgressBar).toHaveBeenCalled();
				})
				
				it("abortFileUpload() called or not", function () {
					spyOn(dataUploadController, "abortFileUpload");//.and.callThrough();
					dataUploadController.abortFileUpload();
					expect(dataUploadController.abortFileUpload).toHaveBeenCalled();
				})
				it("closeProgressPopup() called or not", function () {
					spyOn(dataUploadController, "closeProgressPopup");//.and.callThrough();
					dataUploadController.closeProgressPopup();
					expect(dataUploadController.closeProgressPopup).toHaveBeenCalled();
				})
				it("uploadFileFieldAfterRender() called or not", function () {
					spyOn(dataUploadController, "uploadFileFieldAfterRender");//.and.callThrough();
					dataUploadController.uploadFileFieldAfterRender();
					expect(dataUploadController.uploadFileFieldAfterRender).toHaveBeenCalled();
				})
				it("populateFileDetails() called or not", function () {
					spyOn(dataUploadController, "populateFileDetails");//.and.callThrough();
					dataUploadController.populateFileDetails();
					expect(dataUploadController.populateFileDetails).toHaveBeenCalled();
				})
				
				it("removeFile() called or not", function () {
					spyOn(dataUploadController, "removeFile").and.callThrough();
					dataUploadController.removeFile();
					expect(dataUploadController.removeFile).toHaveBeenCalled();
				})
				
				it("getDataFilesGrid() called or not", function () {
					spyOn(dataUploadController, "getDataFilesGrid").and.callThrough();
					dataUploadController.getDataFilesGrid();
					expect(dataUploadController.getDataFilesGrid).toHaveBeenCalled();
				})
				
				it("isChildSelected() called or not", function () {
					spyOn(dataUploadController, "isChildSelected");//.and.callThrough();
					dataUploadController.isChildSelected();
					expect(dataUploadController.isChildSelected).toHaveBeenCalled();
				})	
				
				it("loadDataFileGrid() called or not", function () {
					spyOn(dataUploadController, "loadDataFileGrid");//.and.callThrough();
					dataUploadController.loadDataFileGrid();
					expect(dataUploadController.loadDataFileGrid).toHaveBeenCalled();
				})
				 
				it("resetGridColor() called or not", function () {
					spyOn(dataUploadController, "resetGridColor");//.and.callThrough();
					dataUploadController.resetGridColor();
					expect(dataUploadController.resetGridColor).toHaveBeenCalled();
				})
				
				it("setChilds() called or not", function () {
					spyOn(dataUploadController, "setChilds");//.and.callThrough();
					dataUploadController.setChilds();
					expect(dataUploadController.setChilds).toHaveBeenCalled();
				})
				
				it("isFileUploaded() called or not", function () {
					spyOn(dataUploadController, "isFileUploaded");//.and.callThrough();
					dataUploadController.isFileUploaded();
					expect(dataUploadController.isFileUploaded).toHaveBeenCalled();
				})
				
				it("nextClick() called or not", function () {
					spyOn(dataUploadController, "nextClick");//.and.callThrough();
					dataUploadController.nextClick();
					expect(dataUploadController.nextClick).toHaveBeenCalled();
				})
			 
				it("fileSourceChange() called or not", function () {
					spyOn(dataUploadController, "fileSourceChange");//.and.callThrough();
					dataUploadController.fileSourceChange();
					expect(dataUploadController.fileSourceChange).toHaveBeenCalled();
				})
				
				it("onFTPFormCancel() called or not", function () {
					spyOn(dataUploadController, "onFTPFormCancel").and.callThrough();
					dataUploadController.onFTPFormCancel();
					expect(dataUploadController.onFTPFormCancel).toHaveBeenCalled();
				})
				it("onFTPFormSubmit() called or not", function () {
					spyOn(dataUploadController, "onFTPFormSubmit").and.callThrough();
					dataUploadController.onFTPFormSubmit();
					expect(dataUploadController.onFTPFormSubmit).toHaveBeenCalled();
				})
				it("showTabView() called or not", function () {
					spyOn(dataUploadController, "showTabView").and.callThrough();
					dataUploadController.showTabView();
					expect(dataUploadController.showTabView).toHaveBeenCalled();
				})
				it("loadActiveTab() called or not", function () {
					spyOn(dataUploadController, "loadActiveTab");//.and.callThrough();
					dataUploadController.loadActiveTab();
					expect(dataUploadController.loadActiveTab).toHaveBeenCalled();
				})
				it("crossTabChange() called or not", function () {
					spyOn(dataUploadController, "crossTabChange");//.and.callThrough();
					dataUploadController.crossTabChange();
					expect(dataUploadController.crossTabChange).toHaveBeenCalled();
				})
				 
				it("applyClick() called or not", function () {
					spyOn(dataUploadController, "applyClick");//.and.callThrough();
					dataUploadController.applyClick();
					expect(dataUploadController.applyClick).toHaveBeenCalled();
				})
				it("showPreviewGrid() called or not", function () {
					spyOn(dataUploadController, "showPreviewGrid");//.and.callThrough();
					dataUploadController.showPreviewGrid();
					expect(dataUploadController.showPreviewGrid).toHaveBeenCalled();
				})
				it("previewGridInfo() called or not", function () {
					spyOn(dataUploadController, "previewGridInfo");//.and.callThrough();
					dataUploadController.previewGridInfo();
					expect(dataUploadController.previewGridInfo).toHaveBeenCalled();
				})
				it("ingestClick() called or not", function () {
					spyOn(dataUploadController, "ingestClick");//.and.callThrough();
					dataUploadController.ingestClick();
					expect(dataUploadController.ingestClick).toHaveBeenCalled();
				})
				it("cancelPreviewDetailsClick() called or not", function () {
					spyOn(dataUploadController, "cancelPreviewDetailsClick");//.and.callThrough();
					dataUploadController.cancelPreviewDetailsClick();
					expect(dataUploadController.cancelPreviewDetailsClick).toHaveBeenCalled();
				})
				it("cancelDetailsClick() called or not", function () {
					spyOn(dataUploadController, "cancelDetailsClick");//.and.callThrough();
					dataUploadController.cancelDetailsClick();
					expect(dataUploadController.cancelDetailsClick).toHaveBeenCalled();
				})
				it("cancelPreviewClick() called or not", function () {
					spyOn(dataUploadController, "cancelPreviewClick");//.and.callThrough();
					dataUploadController.cancelPreviewClick();
					expect(dataUploadController.cancelPreviewClick).toHaveBeenCalled();
				})
				it("cancelSummaryClick() called or not", function () {
					spyOn(dataUploadController, "cancelSummaryClick");//.and.callThrough();
					dataUploadController.cancelSummaryClick();
					expect(dataUploadController.cancelSummaryClick).toHaveBeenCalled();
				})
				it("cancelFileDetailsPopup() called or not", function () {
					spyOn(dataUploadController, "cancelFileDetailsPopup").and.callThrough();
					dataUploadController.cancelFileDetailsPopup();
					expect(dataUploadController.cancelFileDetailsPopup).toHaveBeenCalled();
				})
				it("registerClick() called or not", function () {
					spyOn(dataUploadController, "registerClick");//.and.callThrough();
					dataUploadController.registerClick();
					expect(dataUploadController.registerClick).toHaveBeenCalled();
				})
				it("registerToCatalog() called or not", function () {
					spyOn(dataUploadController, "registerToCatalog");//.and.callThrough();
					dataUploadController.registerToCatalog();
					expect(dataUploadController.registerToCatalog).toHaveBeenCalled();
				})
			
		});
		afterEach(function () {		 
			dataUploadView.destroy();
			dataUploadController.destroy();
		});
});


/*
describe("Upload dataset from file system functionality--", function() {
    var mainController = null;
    var preview = null;
    var liveDataPanel = null;
    var validateView = null;
    
    var uploadView = null;
    var uploadController = null;
    
    beforeEach(function() {
        
        uploadController = uploadView.getController();
        
        
       
        mainController = mainView.getController();
        // spyOn(liveDataPanel, "hidden");
        // spyOn(preview, "hidden");
        // spyOn(validateView, "hidden");
    });
    
     it("Check upload view -- ", function() {
        expect(uploadView).toBeDefined();
        expect(uploadController).toBeDefined();
    });
    
    describe("Upload dataset from file system functionality--", function() {
        
        
    });
    
    
    it("Check Preview and Validation screens are created or not", function() {
        expect(preview).toBeDefined();
        expect(validateView).toBeDefined();
    });
    it("Check Upload button got created or not", function() {
        
        expect(uploadBtn).toBeDefined();
    });
    it("Check Validation screen is in hidden before the file upload", function() {
        expect(validateView.hidden).toBeTruthy();
    });
    it("Check Preview screen is in hidden before the file upload", function() {
        console.log("************* console check ********** " + preview.hidden);
        expect(preview.hidden).toBeTruthy();
    });
    it("Live Data panel visibility check before file upload", function() {
        expect(liveDataPanel.hidden).toBeFalsy();
    });
    describe("Check the upload functionality", function() {
        var myFile = null;
        var uploadBtn = null;
        var controller = null;
        var eventDetails = null;
        var params = null;
        beforeEach(function() {
            var date = new Date();
            var builder = new WebKitBlobBuilder();
            builder.append("");
            var blob = builder.getBlob();
            eventDetails = {
                target: {
                    files: [blob]
                }
            };
            var projId = 2365;
            params = {
                "project-id": projId
            };
            spyOn(controller, "fileUploadChange");
            spyOn(controller, "uploadFileOnChange");
            controller.fileUploadChange(uploadBtn, eventDetails, null);
            controller.uploadFileOnChange(eventDetails.target.files, params);
        });
        it("File upload check", function() {
            console.log("************* fileUploadChange ********** ");
            expect(controller.fileUploadChange).toHaveBeenCalled();
        });
        it("File Upload API Call function called or not", function() {
            console.log("************* uploadFileOnChange ********** ");
            expect(controller.uploadFileOnChange).toHaveBeenCalled();
        });
        it("File Upload API Call function called with the provided params or not", function() {
            console.log("************* uploadFileOnChange with values ********** ");
            expect(controller.uploadFileOnChange).toHaveBeenCalledWith(eventDetails.target.files, params);
        });
    });
    describe("After the upload got success, previewing the resultant records and validation status of the uploaded dataset", function() {
        var data = {
            filePath: "/integrationstudio/data/demo_datasets/Media_CN_GUM.CSV",
            fileSizeInMB: 0.07,
            fileType: "text/csv",
            message: "SUCCESS",
            numOfRecords: 605,
            status_code: "200",
            updatedTimeStamp: "09-Mar-2016"
        };
        var dataSet = {
            dataVal: data,
            projId: 2365
        };
        // var liveDataPanel = null;
        beforeEach(function() {
            //spyOn(preview, "isHidden");
            spyOn(mainController, "uploadFileDataVal");
            mainController.uploadFileDataVal(dataSet);
            preview.show();
            validateView.show();
            liveDataPanel.hide();
        });
        it("Check the uploadFileDataVal custom event has been called or not", function() {
            console.log("************* uploadFileDataVal ********** ");
            expect(mainController.uploadFileDataVal).toHaveBeenCalled();
        });
        it("Check the uploadFileDataVal custom event has been called with the provided params", function() {
            console.log("************* uploadFileDataVal with values ********** ");
            expect(mainController.uploadFileDataVal).toHaveBeenCalledWith(dataSet);
        });
        it("Check Validation screen is in shown after the file upload", function() {
            console.log("************* Validation view is visible or not ********** ");
            expect(validateView.hidden).toBeFalsy();
        });
        it("Check Live data screen is in hidden after the file upload", function() {
            console.log("************* Live Data view is visible or not ********** ");
            expect(liveDataPanel.hidden).toBeTruthy();
        });
        it("Check Preview screen is in shown after the file upload", function() {
            console.log("************* Preview view is visible or not ********** ");
            expect(preview.hidden).toBeFalsy();
        });
    });
});
*/