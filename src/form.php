<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Confirmation | Portfolio Max</title>

    <link rel="stylesheet" href="styles/main.css" />
    <script src="scripts/main.js" defer></script>
    <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="assets/favicon_io/site.webmanifest">
  </head>
  <?php

 $name = $_POST['name'];
 $email = $_POST['email'];
 $comment = $_POST['comment'];
 
 // Si il y a un commentaire
 if($comment){
     $comment;
 } else{
     $comment = "Aucun";
 }


 // Infos du courriel
 $dest = 'mbrousseaucarnevale@gmail.com';
 $objet = "Nouveau formulaire portfolio";
 $contenu = '<html>
 <head>
 <title>HTML email</title>
 </head>
 <body>
 <h1>Alert ! Emploi potentiel</h1>
 <p><b>Nom : </b>' . $name . '<br>
     <b>Courriel : </b>' . $email . '<br>
     <b>Commentaire : </b>' . $comment . '</p>
     </body>
     </html>
     ';

 // Convertir le html en texte
 $headers = "MIME-Version: 1.0" . "\r\n"; 
 $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 


 // Confirmation de l'envoie du formulaire
 $retour = mail($dest, $objet, $contenu, $headers);
 if ($retour){
     echo "<div class='confirmation_form'><h2>Merci de votre intérêt.</h2><p>Je vous reviens bientôt avec plus d'informations.</p><a class='button' href='index.html'>Retour</a></div>";
 }