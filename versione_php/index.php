<?php
    include 'dischi.php';
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link rel="stylesheet" href="../public/css/app.css">
        <title>PHP Ajax Dischi</title>
    </head>
    <body>
        <header>
            <img src="images/logo.png" alt="Spotify">
        </header>
        <main>
            <select id="scelta-genere">
                <option value="">Scegli un genere</option>
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="jazz">Jazz</option>
                <option value="metal">Metal</option>
            </select>
            <div id= dischi class="discografia">
                <?php foreach ($dischi['response'] as $value): ?>
                    <div class="disco" data-genere="<?php echo $value['genre'] ?>">
                        <img class="copertina" src="<?php echo $value['poster'] ?>" alt="copertina album <?php echo $value['title'] ?> di <?php echo $value['author'] ?>">
                        <p class="titolo"><?php echo $value['title'] ?></p>
                        <small class="artista"><?php echo $value['author'] ?></small>
                        <small class="anno"><?php echo $value['year'] ?></small>
                    </div>
                <?php endforeach; ?>
           </div>
        </main>
    </body>
</html>
