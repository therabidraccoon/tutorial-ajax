function paperon() {
    document.getElementById("paperone").innerHTML = "PAPERONE DE";
}


function showPlanets() {
	console.log("CIAO CESCO");
    var xmlhttp = new XMLHttpRequest();
    
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
            console.log("Ho ricevuto la risposta");
            var planets = JSON.parse(this.responseText);
            planets = planets.results;
			var htmlGen = "";
			for(var c of planets){
				htmlGen += "<p>"+c.name+"</p>";
			}
			document.getElementById("content").innerHTML = htmlGen;
		}
    };
    
	xmlhttp.open("GET", "https://swapi.co/api/planets/",
			true);
    xmlhttp.send();
    console.log("Ho mandato la chiamata");
}