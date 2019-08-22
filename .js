({
    handleFilesChange: function(component, event, helper) {
        var fileName1 = 'No File Selected..';
        if (event.getSource().get("v.files").length > 0) {
            fileName1 = event.getSource().get("v.files")[0]['name'];
        }
        component.set("v.fileName1", fileName1);
        component.set("v.showLabel","true");
        let button = component.find('disablebuttonid');
        button.set('v.disabled',false);
        component.set("v.showData","false");
        component.set("v.showClear","false");
    },
    generate: function(component, event, helper) {
        if (component.find("fuploader").get("v.files").length > 0) {
            //alert(component.find("fuploader").get("v.files"));
            helper.generateFile2Data(component, event);
        } else {
            alert('Please Select a Valid File');
        }
    },
    handleClear: function(component, event, helper) {
        component.set("v.showLabel","false");
        component.set("v.showData","false");
        component.set("v.showClear","false");
    },
    reset: function(component, event, helper) {
        var totRecords= component.get("v.fullResult");
        var end = component.get("v.endPage");
        var start = component.get("v.startPage");
        var pageSize = component.get("v.pageSize");
        var PagList = [];
        var pageNumber = component.get("v.currentPageNumber");
        var inc = 0;
        for ( var i= 0; i < pageSize ; i++ ) {
                PagList.push(totRecords[i]);
        }
        component.set("v.startPage", 0);
        component.set("v.endPage", 9);
        component.set('v.filterResult', PagList);
        component.set('v.currentPageNumber', 1); 
    },
    onSelectChange: function(component, event, helper) {
    },
    handleNext: function(component, event, helper) {
        var totRecords= component.get("v.fullResult");
		var end = component.get("v.endPage");
        //alert('end= '+end);
        var start = component.get("v.startPage");
        var pageSize = component.get("v.pageSize");
        var pageNumber = component.get("v.currentPageNumber");
        var PagList = [];
        var inc = 0;
        for ( var i = end + 1; i < end + pageSize + 1; i++ ) {
            if ( totRecords.length > i ) {
                PagList.push(totRecords[i]);
            }
            inc ++ ;
        }
        pageNumber+= 1;
        start = start + inc;
        end = end + inc;
        component.set("v.startPage", start);
        component.set("v.endPage", end);
        component.set('v.filterResult', PagList); 
        component.set('v.currentPageNumber', pageNumber); 
    },
    handlePrev: function(component, event, helper) {
 		var totRecords= component.get("v.fullResult");
        var end = component.get("v.endPage");
        var start = component.get("v.startPage");
        var pageSize = component.get("v.pageSize");
        var PagList = [];
        var pageNumber = component.get("v.currentPageNumber");
        var inc = 0;
        for ( var i= start-pageSize; i < start ; i++ ) {
            if ( i > -1 ) {
                PagList.push(totRecords[i]);
                inc ++;
            } else {
                start++;
            }
        }
        pageNumber-= 1;
        start = start - inc;
        end = end - inc;
        component.set("v.startPage", start);
        component.set("v.endPage", end);
        component.set('v.filterResult', PagList);
        component.set('v.currentPageNumber', pageNumber); 
    },
})
