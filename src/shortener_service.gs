function deveEncurtarLink(source, content){

   if (source === "facebook" || (source === "instagram" && content === "bio")){
        return true;
   }
   return false;
}

function obterTokenBitly(){

    const properties = PropertiesService.getScriptProperties();
    const token = properties.getProperty("BITLY_TOKEN");

    return token;
}

function encurtarLinkBitly(url){
    const token = obterTokenBitly();
    const payload = {
        long_url: url
    };

    const payloadJson = JSON.stringify(payload);

    const options = {
        method: "post",
        contentType: "application/json",
        headers: {
            Authorization: "Bearer " + token
        },
        payload: payloadJson
    };

    const endpoint = "https://api-ssl.bitly.com/v4/shorten";
    const response = UrlFetchApp.fetch(endpoint, options);

    const responseText = response.getContentText();
    const data = JSON.parse(responseText);
    return data.link;
}

function gerarLinkCurtoSeNecessario(utm, source, content){

    if(!deveEncurtarLink(source, content)){
        return "";
    }
    return encurtarLinkBitly(utm);
}
