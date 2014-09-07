SMGoogleSheetsPlugin
====================


Sheets API: https://developers.google.com/apps-script/reference/spreadsheet/

From https://developers.google.com/apps-script/add-ons/:
To create an add-on, you start out by writing a script that is bound to a Google Sheets, Docs, or Forms file. (Make sure you opt in to the new version of Google Sheets, since add-ons aren't supported in the old version.) During early development, you run the script directly from that file, as shown in the quickstart. Next, make sure you understand the intricacies of the add-on authorization lifecycle. Once everything works, apply to publish to the store. After that, Google Apps users worldwide — or, if you prefer, just users within your domain — will be able to use your add-on in their own documents.


Development
===========

The following instructions are based on Google's App development tutorial.

1. Open a new Google Sheets document. I call mine "SM Testing."
2. From the "Tools" menu, select "Script editor." This will open an IDE in a new tab.
3. Paste the code from `main.gs` in the script editor and save the file(s).
4. Refresh the Google Sheets document. A SurveyMan button should show up next to the "Help" menu.

Note: When I refresh, my script editor closes.