function onOpen() {

  const ui = SpreadsheetApp.getUi();

  ui
    .createMenu("UTMs")
    .addItem("Abrir gerador", "abrirSidebar")
    .addSeparator()
    .addItem("Limpar Resultados", "limparResultados")
    .addToUi();
}
