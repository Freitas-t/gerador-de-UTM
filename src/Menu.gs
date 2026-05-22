function onOpen() {

  const ui = SpreadsheetApp.getUi();

  ui
    .createMenu("Automação")
    .addItem("Abrir gerador de Utm", "abrirSidebar")
    .addToUi();
  
}
