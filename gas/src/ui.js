export const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('🇮🇳  Vaccine Tracker')
    .addItem('Enable', 'showApp')
    .addSeparator()
    .addItem('Disable', 'disableApp')
    .addToUi();
};

export const showApp = () => {
  const html = HtmlService.createHtmlOutputFromFile('app.html')
    .setWidth(480)
    .setHeight(680);
  SpreadsheetApp.getUi().showModalDialog(html, 'COVID-19 Vaccine Near Me 🇮🇳');
};
