function showPlanetsClassicAjaxCall() {
  console.log("CHIAMATA FUNCTION SHOW PLANETS - CAC");

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = callBackPlanets;

  xmlhttp.open("GET", "https://swapi.co/api/planets/", true);
  xmlhttp.send();
  console.log("Ho mandato la chiamata");
}

function callBackPlanets() {
  if (this.readyState == 4 && this.status == 200) {
    console.log("Ho ricevuto la risposta");
    var responseObject = JSON.parse(this.responseText);
    var planets = responseObject.results;

    var htmlGen = "";
    for (var c of planets) {
      htmlGen += "<p>" + c.name + "</p>";
    }
    document.getElementById("content").innerHTML = htmlGen;
  }
}
