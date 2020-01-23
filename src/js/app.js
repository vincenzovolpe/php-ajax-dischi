$(document).ready(function(){
  // Recupero l'html del template quadratino
  var template_html = $('#template-disco').html();
  // Compilo l'html con la funzione di handlebars
  var template_function = Handlebars.compile(template_html);
  // Chiamata ajax per recuperare i dischi da visualizzare
    $.ajax({
        dataType: 'json',
        url: 'dischi.php',
        method: 'get',
        success: function(data) {
            // Recupero l'array che contiene tutti i dischi
            var dischi = data.response;
            //console.log(dischi);
            //var dischi = data.response;
            // Ciclo tutti i dischi
            for (var i = 0; i < dischi.length; i++) {
                // Per ogni disco, recupero le informazioni e le metto nelle variabili di handlebars
                var variabili = {
                    genere: dischi[i].genre,
                    copertina: dischi[i].poster,
                    titolo: dischi[i].title,
                    artista: dischi[i].author,
                    anno: dischi[i].year
                }
                // Creo il template
                var html = template_function(variabili);
                // Lo appendo al contenitore dei dischi
                $('#dischi').append(html);
                // Altezza div immagine imgcopertina
                // Setto l'altezza del div immagine copertina uguale alla larghezza
                  var altezzacopertina = $('img.copertina').width();
                  console.log(altezzacopertina);
                  $('img.copertina').height(altezzacopertina);
            }
        },
        error: function() {
            alert('Error')
        }
    });

});
