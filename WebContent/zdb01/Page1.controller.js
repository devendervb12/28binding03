sap.ui.controller("zdb01.Page1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zdb01.Page1
*/
	onInit: function() {
		

            var oModel = new sap.ui.model.json.JSONModel();        
    
            oModel.loadData("model/data.json");   
            
           // view level 
          this.getView().setModel(oModel); 
	},
	onSelectionChange : function(oEvent){
		// get index of selected item
		var selectedItem = oEvent.getParameter("selectedItem");
		// get the index of selected Item
		var selectedItemIndex = oEvent.getSource().indexOfItem(selectedItem);
		
		// let's do binding to simpleform
		this.getView().byId("idSimpleForm").bindElement("/companyInfo/empInfo/"+selectedItemIndex);
		
	}
   

});