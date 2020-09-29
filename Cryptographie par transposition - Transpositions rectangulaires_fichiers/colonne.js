// Ecrit un texte en colonne!

function miseencolonne(texte,nblignes)
{
	var i,j;
	var sortie;
	
	texte=formate_entree(texte);
	sortie="";
	
	for (i=0;i<nblignes;i++)
	{
		j=0;
		while (nblignes*j+i<texte.length)
		{
			sortie+=texte.charAt(nblignes*j+i);
			j++;
		}
		sortie+="\n";
	}
	
	return sortie;
}

function miseenligne(texte,longueurcle)
{
	var i,j;
	var sortie;
	var nblignes;

	texte=formate_entree(texte);

	
	nblignes=Math.ceil(texte.length/longueurcle);
	
	sortie="";
	
	for (i=0;i<nblignes;i++)
	{
		j=0;
		while (nblignes*j+i<texte.length)
		{
			sortie+=texte.charAt(nblignes*j+i);
			j++;
		}
		sortie+="\n";
	}
	
	return sortie;
}

// Teste si un mot probable peut apparaitre dans un texte en examinant le nombre d'occurences de chaque lettre

function test_probable(ligne,mot)
{
	var lettres=new Array(26);
	var lettres2=new Array(26);
	var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	var test=1;
	
	var i;
    

   // On commence par initialiser le tableau des lettres...
   for (i=0;i<26;i++)
       {
       	  lettres[i]=0;
       	  lettres2[i]=0;       	  
       }
       
  //On le remplit!
  
  for (i=0;i<ligne.length;i++)
  {
  	lettres[alphabet.indexOf(ligne.charAt(i))]++;
  }    
  
  for (i=0;i<mot.length;i++)
  {
  	lettres2[alphabet.indexOf(mot.charAt(i))]++;
  }    
  
  for (i=0;i<26;i++)
     test=test && (lettres[i]>=lettres2[i]);
     
  return test;
	
}

// Recherche si une longueur de clé correspond à un mot probable
// Indicateur = 1 si recherche uniquement en début de mot!

function recherchemotprobable(texte,probable,indicateur)
{
	var i,j,n;
	var sortie;
	var ligne;
	var longueur;
	sortie="";
	
	
	texte=formate_entree(texte);
	probable=formate_entree(probable);
	
	for (n=1;n<40;n++)
	{
		// On fabrique les différentes lignes du tableau
		
		for (i=0;i<n;i++)
	    {
	      ligne="";
		  j=0;
		  while (n*j+i<texte.length)
		  {
		  	  ligne+=texte.charAt(n*j+i);
		  	  j++;
		  }
		  if (i==0) longueur=ligne.length;
		  // On teste le mot probable
		  if (test_probable(ligne,probable))
		  {
		  	sortie+="Le mot probable est repéré dans la "+(i+1)+"ème ligne pour une clé de longueur "+longueur+"\n";
		  }
		  if (indicateur==1) i=n;  // On sort de suite!
	    }
	    

	}
	
	if (sortie.length==0) return "Mot probable non repéré"; else 	return sortie;	    
	    
}

function nbcolonnes(texte,cle)
{
	var nb,enplus,sortie,i;
	
	texte=formate_entree(texte);
    nb=Math.floor(texte.length/cle);
    enplus=texte.length-nb*cle;
    sortie="";
    for (i=0;i<cle;i++)
    {
    	if (i>0) sortie+=",";
        if (i<enplus) sortie+=(nb+1); else sortie+=nb;
    }
    return sortie;
    
}

function ecritureencolonnes(texte,colonnes)
{
	var total,i;
	var colonne,ou,sortie,maxlongcolonne;
	
	var stri=colonnes.split(",");
	
	var str=new Array(stri.length);
	for (i=0;i<str.length;i++) str[i]=parseInt(stri[i]);
	
	
	texte=formate_entree(texte);
	total=0;
	for (i=0;i<str.length;i++) total+=str[i];

	// On commence par vérifier que les longueurs coïncident...

	
	if (total!=texte.length)
	{
		alert("La somme des longueurs des colonnes du tableau ("+total+") ne correspond pas à la longueur du texte ("+texte.length+")");
		return "Erreur.";
	}
	else
	{
		sortie="";
		colonne=new Array(str.length);
		ou=0;
		for (i=0;i<str.length;i++)
	    {
	    	colonne[i]=new Array(str[i]);	
		    for (j=0;j<str[i];j++)
		    {
		    	colonne[i][j]=texte.charAt(ou);
		    	ou++;
		    }
	    }
	    // On écrit la sortie...
	    maxlongcolonne=Math.max.apply(Math, str);
	    for (i=0;i<maxlongcolonne;i++)
	    {
	      for (j=0;j<str.length;j++)
	        if (i<colonne[j].length) sortie+=colonne[j][i]; else sortie+=" ";
	      sortie+="\n";
	    }  
	              
	}
	return sortie;
}

//

function nouvellecolonnes(texte,misencol,cle)
{
	var i,j,sortie,colonne;
	var pseudotexte=formate_sauf_espace(texte);
	var nblignes;
	
	var stri=misencol.split(",");
	
	var str=new Array(stri.length);
	
	for (i=0;i<str.length;i++) str[i]=parseInt(stri[i])-1;
	
	sortie="";
	// On commence par fabriquer toutes les colonnes!
	colonne=new Array(cle);
	nblignes=Math.floor(pseudotexte.length/cle);
	if (nblignes*cle<pseudotexte.length) nblignes++;
	for (i=0;i<cle;i++)
	{
		colonne[i]=new Array(nblignes);
	  for (j=0;j<nblignes;j++)
	    colonne[i][j]=pseudotexte.charAt(j*cle+i);
	}
	
    // On écrit la sortie...
    for (i=0;i<nblignes;i++)
    {
      for (j=0;j<str.length;j++)
        if (i<colonne[str[j]].length) sortie+=colonne[str[j]][i]; else sortie+=" ";
      sortie+="\n";
	}  	
	return sortie;
}


// Recherche si une longueur de clé correspond à un mot probable
// Indicateur = 1 si recherche uniquement en début de mot!

function recherchemotprobable(texte,cle,indicateur)
{
	var nb,enplus,sortie,i;
	
	texte=formate_entree(texte);
    nb=Math.floor(texte.length/cle);
    enplus=texte.length-nb*cle;
    sortie="";
    
    str=new Array(cle);
    
    
	
	
	texte=formate_entree(texte);
	probable=formate_entree(probable);
	
	for (n=1;n<40;n++)
	{
		// On fabrique les différentes lignes du tableau
		
		for (i=0;i<n;i++)
	    {
	      ligne="";
		  j=0;
		  while (n*j+i<texte.length)
		  {
		  	  ligne+=texte.charAt(n*j+i);
		  	  j++;
		  }
		  if (i==0) longueur=ligne.length;
		  // On teste le mot probable
		  if (test_probable(ligne,probable))
		  {
		  	sortie+="Le mot probable est repéré dans la "+(i+1)+"ème ligne pour une clé de longueur "+longueur+"\n";
		  }
		  if (indicateur==1) i=n;  // On sort de suite!
	    }
	    

	}
	
	if (sortie.length==0) return "Mot probable non repéré"; else 	return sortie;	    
	    
}

// Retourne un tableau dont l'indice i donne la position dans la clé
// du i-ème caractère par ordre alphabétique

function produire_tableau_cle(cle)
{
  var tableau=new Array(cle.length);
  var pos,i,j;
  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  
  pos=0;
  
  for (j=0;j<26;j++)
  {
    for (i=0;i<cle.length;i++)
    {
    	if (cle.charAt(i)==alphabet.charAt(j)) 
    	{
    		tableau[pos]=i;
    		pos++;
    	}
    	
    }
  }
  return tableau;
}

// Chiffrer et déchiffrer par transposition rectangulaire

function chiffrer(texte,cle)
{
	var nb,i,enplus,sortie;
	var tableaucle;
	var colonnes,borne;
	
	texte=formate_entree(texte);
	cle=formate_entree(cle);
	nb=Math.floor(texte.length/cle.length);
    enplus=texte.length-nb*cle.length;
    
    tableaucle=produire_tableau_cle(cle);
    colonnes=new Array(cle.length);
		
	for (i=0;i<cle.length;i++)
	{
		if (i<enplus) borne=nb+1; else borne=nb;
		colonnes[i]="";
		for (j=0;j<borne;j++)
		{
			colonnes[i]+=texte.charAt(j*cle.length+i);
		}
	}
    
    // On relève les colonnes...
    
    sortie="";
    for (i=0;i<cle.length;i++)
    {
    	sortie+=colonnes[tableaucle[i]];
    }
    return formate_sortie(sortie);
}

function dechiffrer(texte,cle)
{
	var nb,i,enplus,sortie;
	var tableaucle;
	var colonnes,courant,borne;
	
	texte=formate_entree(texte);
	cle=formate_entree(cle);
	nb=Math.floor(texte.length/cle.length);
    enplus=texte.length-nb*cle.length;
    
    tableaucle=produire_tableau_cle(cle);
    colonnes=new Array(cle.length);
    courant=0;
    
    for (i=0;i<cle.length;i++)
    {
    	if (tableaucle[i]<enplus) borne=nb+1; else borne=nb;
    	colonnes[tableaucle[i]]=texte.substring(courant,courant+borne);
    	courant+=borne;
    }
    
    sortie="";
    for (j=0;j<nb;j++)
    {
    	for (i=0;i<cle.length;i++) sortie+=colonnes[i].charAt(j);
    }
    for (i=0;i<enplus;i++) sortie+=colonnes[i].charAt(nb);
    
    return sortie;
}
	
	