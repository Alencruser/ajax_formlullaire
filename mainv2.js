$.ajax({
    url: 'http://www.example.org',
    data: {'a':1,'b':2,'c':3},
    dataType: 'xml',
    complete : function(){
        alert(this.url)
    },
    success: function(xml){

    }
});

var requete = new XMLHttpRequest();
requete.onload = traiteResultat;

requete.open("get", "users.txt", true);
requete.send();
