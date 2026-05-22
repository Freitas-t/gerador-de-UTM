function abrirSidebar(){
  
  const html = HtmlService.createHtmlOutputFromFile("Sidebar").setTitle('Gerador de UTM');
  SpreadsheetApp.getUi().showSidebar(html)
}