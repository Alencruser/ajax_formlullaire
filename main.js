$.getJSON("infos.json",function(data){
	var items=[];
	$.each(data,function(key,value){
		items.push(value);
	})
	$('#clients').click(function(){
		  	var i;
  	var opt=$('#clients').find(":selected").text()
  	switch(opt){
  		case "Roger":
  		i=0
  		break;
  		case "Denis":
  		i=1
  		break;
  	}
  $('#affichage').html(`${items[i].nom}<br/>${items[i].prenom}<br/>${items[i].age}<br/>${items[i].profession}<br/>${items[i].email}<br/>${items[i].telephone}`)
  })
});
