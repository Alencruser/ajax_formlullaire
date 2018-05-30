function traiteResultat(){
	var data=JSON.parse(this.responseText)
	$('.opti').click(function(){
		$('#affichage').html(data[$(this).attr('value')].prenom)
	})
}
var requete = new XMLHttpRequest();
requete.onload = traiteResultat;

requete.open("get", "infos.json", true);
requete.send();

