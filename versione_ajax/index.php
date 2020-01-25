<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
        <script src="../public/js/app.js" charset="utf-8"></script>
        <link rel="stylesheet" href="../public/css/app.css">
        <title>PHP Ajax Dischi</title>
    </head>
    <body>
        <header>
            <img src="../public/images/logo.png" alt="Spotify">
        </header>
        <main>
            <select id="scelta-genere">
                <option value="">Scegli un genere</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
                <option value="Metal">Metal</option>
            </select>
            <div id= dischi class="discografia">

           </div>
        </main>

        <!-- Template disco -->
        <script id="template-disco" type="text/x-handlebars-template">
            <div class="disco" data-genere={{genere}}>
                <img class="copertina" src="{{copertina}}" alt="copertina album {{titolo}} di {{artista}}">
                <p class="titolo">{{titolo}}</p>
                <small class="artista">{{artista}}</small>
                <small class="anno">{{anno}}</small>
            </div>
        </script>

    </body>
</html>
