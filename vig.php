<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
    <title >Chiffre de Vigenère</title >
</head>
<body>

<div id="main">
<a href="index.php">Retour</a>
<br /><a href="ping.php">Déchiffrer</a>

<h1>Chiffre de Vigenère</h1>
<h2>Chiffrement:</h2>
<form action="" method="post">
    <h4>Entrez votre clé:</h4><input type="text" name="cle" required>
    <h4>Entrez votre message:</h4><textarea name="msg" required></textarea><br /><br /><br />
    <input type="submit" name="submit" value="Chiffrer" id="submit"><br/> <br />
</form>
<?php
if (isset($_POST['submit'])) {
	$c=strlen($_POST['cle']);
$n=strlen($_POST['msg']);

$r=$n%$c;
$q=$n/$c-($r/$n);
				$_POST['cle']=strtolower($_POST['cle']);
				$_POST['msg']=strtolower($_POST['msg']);
                $splitmsg=str_split($_POST['msg']);
                $splitcle=str_split($_POST['cle']);
                $alpha=array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
                  for ($i=0; $i <strlen($_POST['msg']) ; $i++) { 
                  	# code...
                  
                  $msg[]=array_search($splitmsg[$i], $alpha);
                
                  
				}
				
				echo '<br />';
				 for ($i=0; $i <strlen($_POST['cle']) ; $i++) { 
                  	# code...
                  
                  
                  $cle[]=array_search($splitcle[$i], $alpha);
                  
				}
				if (count($msg)>count($cle)) {
					$minus=count($msg)-count($cle);
				}else if (count($cle)>count($msg)) {
					$minus=count($cle)-count($msg);
				}else if (count($cle)==count($msg)) {
					$minus=count($cle);
				}
				for ($i=0; $i <$minus ; $i++) { 
					$cle[]=$cle[$i];
				}
				echo '<h3>Le texte chiffré est:</h3>';
			for ($i=0; $i <count($msg) ; $i++) { 
					# code...
					
				$x=($msg[$i]+$cle[$i])%26;

				echo $alpha[$x];

				}
				
				

}
?>
</div>
</body>
</html>