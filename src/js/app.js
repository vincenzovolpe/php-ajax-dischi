$(document).ready(function(){
  // Recupero l'html del template quadratino
  var template_html = $('#template-disco').html();
  // Compilo l'html con la funzione di handlebars
  var template_function = Handlebars.compile(template_html);
  // Chiamata ajax per recuperare i dischi da visualizzare
    ajaxAll();


    // BONUS:Tendina per selezionare il genere
    $('#scelta-genere').change(function(){
        $('.discografia').empty();
        // Recupero il genere selezionato dall'utente
        var genere_selezionato = $('#scelta-genere').val();
        if (genere_selezionato == '') {
            ajaxAll();
        } else {
            $('.discografia').empty();
            // Per ogni disco verifico se il suo genere corrisponde al genere genere_selezionato
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
                        if (dischi[i].genre == genere_selezionato) {
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
                              $('img.copertina').height(altezzacopertina);
                        }
                    }
                },
                error: function() {
                    alert('Error')
                }
            });
        }
    });

    function ajaxAll() {
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
                      $('img.copertina').height(altezzacopertina);
                }
            },
            error: function() {
                alert('Error')
            }
        });
    }
});
