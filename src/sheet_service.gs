function obterSheetUTM() {

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  const sheet = spreadsheet.getSheetByName("UTM");

  if (!sheet){
    throw Error ("A aba UTM não foi encontrada");
  }

  return sheet;

}

function obterSheetLogs() {

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  const sheet = spreadsheet.getSheetByName("LOGS");

  if (!sheet){
    throw Error ("A aba LOGS não foi encontrada");
  }

  return sheet;

}

function lerDadosUTM(){

  const sheet = obterSheetUTM();

  const linhas = sheet.getDataRange().getValues();

  const dados = linhas.slice(1);

  return dados;
}

function escreverResultadosUTM(resultados){

  const sheet = obterSheetUTM();

  sheet.getRange(2, 7, resultados.length, 1).setValues(resultados);

}

function registrarLogExecucao(processo, geradas, ignoradas){
  const sheet = obterSheetLogs();

  const data = new Date();

  sheet.appendRow([data, processo, geradas, ignoradas]);
}

function salvarLinhaUTM(linha, resultados){

  const sheet = obterSheetUTM();
  
  sheet.appendRow(linha);

}

function obterBaseUTM(){

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  const sheet = spreadsheet.getSheetByName("LINKS");

  if (!sheet){
    throw Error ("A aba LINKS não foi encontrada");
  }

  return sheet;
}

function lerBaseUTM(){
  
  const sheet = obterBaseUTM();

  const linhas = sheet.getDataRange().getValues();

  const dados = linhas.slice(1);

  return dados;
}

function obterConfigUTM(){

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  const sheet = spreadsheet.getSheetByName("CONFIG");

  if (!sheet){
    throw Error ("A aba CONFIG não foi encontrada");
  }

  return sheet;
}

function lerConfigUTM(){

  const sheet = obterConfigUTM();

  const linhas = sheet.getDataRange().getValues();

  const dados = linhas.slice(1);

  return dados;
}