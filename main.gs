/**
 * Retrieves all the rows in the active spreadsheet that contain data and logs the
 * values for each row.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function readRows() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var rows = sheet.getDataRange();
    var numRows = rows.getNumRows();
    var values = rows.getValues();

    for (var i = 0; i <= numRows - 1; i++) {
        var row = values[i];
        Logger.log(row);
    }
};

function validate() {
}

function sendCSV() {
    // sends the csv to the surveyman static analyser
    validate();
    // get the contents of the csv and send it to codemonkey
};

/**
 * Adds a custom menu to the active spreadsheet, containing a single menu item
 * for invoking the readRows() function specified above.
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function onOpen() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var entries = [{
        name : "Send CSV",
        functionName : "sendCSV"
    }];
    spreadsheet.addMenu("SurveyMan", entries);
};
