function normalizarTexto(texto){

  if (!texto) return "";

  texto = String (texto);

  return texto
   .toLowerCase()
   .replaceAll(" ", "_")
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "");
}

function normalizarData(data){

  if (!data) return "";

  data = String(data);

  return data
    .replaceAll("-", "_")
}