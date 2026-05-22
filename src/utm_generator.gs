function gerarUTMs(){

    const dados = lerDadosUTM();

    let geradas = 0;
    let ignoradas = 0;

    const resultados = dados.map(function (linha){

      const data = normalizarData(linha[0]);
      const url = linha[1];
      const marca = normalizarTexto(linha[2]);
      const campanha = normalizarTexto(linha[3]);
      const source = normalizarTexto(linha[4]);
      const medium = normalizarTexto(linha[5]);
      const content = normalizarTexto(linha[6]);

      const campaign = marca + "_" + campanha + "_" + data;

      if (!data || !url || !marca || !campanha || !source || !medium || !content){
        ignoradas++;
        return [""];
      }

      const utm = montarUTM (url, source, medium, campaign, content);
       geradas++;

      return [utm];
    });

  escreverResultadosUTM(resultados);

  registrarLogExecucao("Geração de UTMs", geradas, ignoradas);

  Logger.log("UTMs geradas: " + geradas);
  Logger.log("UTMs ignoradas: " + ignoradas);

}

function montarUTM(url, source, medium, campaign, content){

  return `${url}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}&utm_content=${content}`; 
}

function gerarUTMPeloFormulario(dados){
  
  const url = dados.url;
  const data = normalizarData(dados.data);
  const marca = normalizarTexto(dados.marca);
  const campanha = normalizarTexto(dados.campanha);
  const source = normalizarTexto(dados.source);
  const medium = normalizarTexto(dados.medium);
  const content = normalizarTexto(dados.content);

  if (!url || !data || !marca || !campanha || !source || !medium || !content){
    return "Preencha todos os campos antes de gerar a UTM.";
  }

  const campaign = marca + "_" + campanha + "_" + data;

  const utm = montarUTM(url, source, medium, campaign, content);

  return utm;
}

function salvarLinhaUTMPeloFormulario(dados){
  
  const url = dados.url;
  const data = normalizarData(dados.data);
  const marca = normalizarTexto(dados.marca);
  const campanha = normalizarTexto(dados.campanha);
  const source = normalizarTexto(dados.source);
  const medium = normalizarTexto(dados.medium);
  const content = normalizarTexto(dados.content);

  if (!url || !data || !marca || !campanha || !source || !medium || !content){
    return "Preencha todos os campos antes de gerar a UTM.";
  }

  const campaign = marca + "_" + campanha + "_" + data;

  const utm = montarUTM(url, source, medium, campaign, content);

  const linha = [
    data,
    url, 
    marca, 
    campanha, 
    source, 
    medium,
    content,
    utm
  ];

  salvarLinhaUTM(linha);

  return utm;
}
