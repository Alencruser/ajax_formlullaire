$.getJSON("infos.json",function(data){
	var items=[];
	$.each(data,function(key,value){
		items.push(value);
	})
	$('.opti').click(function(){
  $('#affichage').html(`${items[$(this).attr('value')].nom}<br/>${items[$(this).attr('value')].prenom}<br/>${items[$(this).attr('value')].age}<br/>${items[$(this).attr('value')].profession}<br/>${items[$(this).attr('value')].email}<br/>${items[$(this).attr('value')].telephone}`)
  })
});
