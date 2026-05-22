function buscarOpcoesBase(termo){

  if (!termo){
    return [];
  }
  
  const base = lerBaseUTM();

  const busca = normalizarTexto(String(termo));

  const resultado = base.filter(function (linha){
    const marca = normalizarTexto(String(linha[0]));
    
    

    return marca.includes(busca);
  });
  return resultado;
}

function obterSources(){

  const config = lerConfigUTM();

  const sources = config
    .map(function (linha){
      return String(linha[0]).trim();
    })
    .filter(function (valor){
      return valor;
    });

    return sources;
}

function obterMediums(){

  const config = lerConfigUTM();

  const mediums = config
    .map(function (linha){
      return String(linha[1]).trim();
    })
    .filter(function (valor){
      return valor;
    });

    return mediums;
}

function obterContents(){

  const config = lerConfigUTM();

  const contents = config
    .map(function (linha){
      return String(linha[2]).trim();
    })
    .filter(function (valor){
      return valor;
    });

    return contents;
}