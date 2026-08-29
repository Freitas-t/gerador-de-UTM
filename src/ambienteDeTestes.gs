function testeSidebar(){
  return "Conexão OK";
}


function testeBuscaBase(){
  return buscarOpcoesBase("co");
}

function testeSources(){
  return obterSources();
}

function testeMediums(){
  return obterMediums();
}

function testeContents(){
  return obterContents();
}

function testeDeveEncurtarLink(){

  Logger.log(deveEncurtarLink("facebook", "feed"));
  Logger.log(deveEncurtarLink("instagram", "bio"));
  Logger.log(deveEncurtarLink("instagram", "stories"));
}

function testeTokenBitly(){
  const token = obterTokenBitly();

  Logger.log(token ? "token encontrado" : "Token não encontrado");
}

function testeEncurtarBitly(){
  const url = "https://example.com";
  const linkCurto = encurtarLinkBitly(url);

  Logger.log(linkCurto);
}

function testeEncurtarLink(){
  const utm1 = "https://www.saopaulocafe.com.br?utm_source=facebook&utm_medium=social&utm_campaign=sao_paulo_cafe_teste_final_2026_03_26&utm_content=feed";
  const utm2 = "https://www.saopaulocafe.com.br?utm_source=instagram&utm_medium=social&utm_campaign=sao_paulo_cafe_teste_final_2026_03_26&utm_content=bio";
  const utm3 = "https://www.saopaulocafe.com.br?utm_source=instagram&utm_medium=social&utm_campaign=sao_paulo_cafe_teste_final_2026_03_26&utm_content=story";

  const linkCurto1 = gerarLinkCurtoSeNecessario(utm1, "facebook", "feed");
  const linkCurto2 = gerarLinkCurtoSeNecessario(utm2, "instagram", "bio");
  const linkCurto3 = gerarLinkCurtoSeNecessario(utm3, "instagram", "story");

  Logger.log("Facebook feed: " + linkCurto1);
  Logger.log("Instagram Bio: " + linkCurto2);
  Logger.log("Instagram Story: " + linkCurto3);
}