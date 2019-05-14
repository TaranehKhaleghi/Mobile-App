
function TKbtnSave_click() {
    TKAddFeedback();
}

function TKbtnSaveDef_click() {
     TKSaveDefaultEmail();
}

function TKAddFeedbackPage_show() {
     TKshowAddFeedback();
}


function TKinit() {
    console.info("DOM is ready");

    $("#TKbtnSave").on("click", TKbtnSave_click);

  $("#TKbtnSaveDef").on("click", TKbtnSaveDef_click);

     $("#TKAddFeedbackPage").on("pageshow",TKAddFeedbackPage_show);

}
function TKinitDB(){
    try{
        DB.TKcreateDatabase();
        if (db) {
            console.info("Creating tables...");
            DB.TKcreateTables();
        }
        else{
            console.error("Error: Cannot create tables: database does not exist");
        }
    }
    catch(e){
        console.error("Error: (Fatal) error in initDB(). Can not proceed.");
    }
}
$(document).ready(function () {
    TKinit();
    TKinitDB();
});