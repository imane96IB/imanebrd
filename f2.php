<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">

	<title >Chiffre de césar</title >
</head>
<body>
	<div id="main" >
	<a href="index.php">Retour</a>

		<h1>Chiffre de césar</h1>
		<form method="post" action="">
			<input type="submit" name="cryptermsg" value="crypter" id="submit">
			<input type="submit" name="decryptermsg" value="decrypter" id="submit">

		</form><br />
		<?php
		if (isset($_POST['cryptermsg'])) {

		?>
		<h2>Cryptez votre message:</h2>

		<form method="post" action="">
		<h4>Veuillez entrez votre message svp:</h3><textarea name="message" required></textarea><br />		
		<h4>Veuillez choisir votre décalage:</h4>
		<input type="number" name="i" required>
		<select name="dec" >
			<option value="droite">à droite</option>
			<option value="gauche">à gauche</option>
		</select>
		<input type="submit" name="submit" value="crypter" id="submit">
		</form>

		<?php

		}
		if (isset($_POST['submit'])) {
			$decalage=$_POST['i'];
			
			if ($decalage<=0) {
				?>
		<h2>Cryptez votre message:</h2>

		<form method="post" action="">
		<h4>Veuillez entrez votre message svp:</h3><textarea name="message" required></textarea><br />		
		<h4>Veuillez choisir votre décalage:</h4>
		<input type="number" name="i" required>
		<select name="dec" >
			<option value="droite">à droite</option>
			<option value="gauche">à gauche</option>
		</select>
		<input type="submit" name="submit" value="crypter" id="submit">
		</form>

		<?php
				echo '</br> <br/><span style="color:red;">Veuillez entrez un nombre positif superieur a zero!</span>';
			}else{
			echo '<span style="color:blue;">Votre message crypté:</span><br /><br />';
			if ($_POST['dec']=='droite' ){
				$dec=1;
			}else if ($_POST['dec']=='gauche') {
				$dec=-1;
			}
			
				$split=str_split($_POST['message']);
				

			for ($i=0; $i <strlen($_POST['message']) ; $i++) { 
				$val=$split[$i];
				$ord=ord($val);
				$new=$ord+($dec*$_POST['i']);
				echo $cry=chr($new);
			}
				?>
			
			<?php
			}



			
		}


		if (isset($_POST['decrypter'])or isset($_POST['decryptermsg'])) {
			?>
			<h2>Décryptez votre message:</h2>
		<form method="post" action="">
		<h4>Veuillez entrez votre message svp:</h3><textarea name="message" required></textarea><br />		
		<h4>Veuillez choisir votre décalage:</h4>
		<input type="number" name="i" required>
		<select name="dec" >
			<option value="droite">à droite</option>
			<option value="gauche">à gauche</option>
		</select>
		<input type="submit" name="decry" id="submit" value="decrypter">
		</form>

		<?php
		}
		if (isset($_POST['decry'])) {
			$decalage=$_POST['i'];
			if ($decalage<=0) {
				?>
			<h2>Décryptez votre message:</h2>
		<form method="post" action="">
		<h4>Veuillez entrez votre message svp:</h3><textarea name="message" required></textarea><br />		
		<h4>Veuillez choisir votre décalage:</h4>
		<input type="number" name="i" required>
		<select name="dec" >
			<option value="droite">à droite</option>
			<option value="gauche">à gauche</option>
		</select>
		<input type="submit" name="decry" id="submit" value="decrypter">
		</form>

		<?php
				echo '</br> <br/><span style="color:red;">Veuillez entrez un nombre positif! superieur a zero</span>';
			}else{
			echo '<span style="color:blue;">Votre message décrypté:</span><br /><br />';
			if ($_POST['dec']=='droite' ){
				$dec=-1;
			}else if ($_POST['dec']=='gauche') {
				$dec=1;
			}
			
				$split=str_split($_POST['message']);
			for ($i=0; $i <strlen($_POST['message']) ; $i++) { 
				$new=ord($split[$i])+$dec*$_POST['i'];
				echo $cry=chr($new);
			}
			}	}
			?>
	</div>
</body>
</html>
