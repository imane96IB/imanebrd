function stripVowelAccent(str)
{
 var rExps=[
 {re:/[\xC0-\xC6]/g, ch:'A'},
 {re:/[\xE0-\xE6]/g, ch:'a'},
 {re:/[\xC8-\xCB]/g, ch:'E'},
 {re:/[\xE8-\xEB]/g, ch:'e'},
 {re:/[\xCC-\xCF]/g, ch:'I'},
 {re:/[\xEC-\xEF]/g, ch:'i'},
 {re:/[\xD2-\xD6]/g, ch:'O'},
 {re:/[\xF2-\xF6]/g, ch:'o'},
 {re:/[\xD9-\xDC]/g, ch:'U'},
 {re:/[\xF9-\xFC]/g, ch:'u'},
 {re:/[\xD1]/g, ch:'N'},
 {re:/[\xF1]/g, ch:'n'},
 {re:/[\xC7]/g, ch:'c'},
 {re:/[\xE7]/g, ch:'C'},
 {re:/[\xDF]/g, ch:'ss'} ];

 for(var i=0, len=rExps.length; i<len; i++)
  str=str.replace(rExps[i].re, rExps[i].ch);

 return str;
}


function striptout(str)
{
 var rExps=[
 {re:/[\xC0-\xC6]/g, ch:'A'},
 {re:/[\xE0-\xE6]/g, ch:'a'},
 {re:/[\xC8-\xCB]/g, ch:'E'},
 {re:/[\xE8-\xEB]/g, ch:'e'},
 {re:/[\xCC-\xCF]/g, ch:'I'},
 {re:/[\xEC-\xEF]/g, ch:'i'},
 {re:/[\xD2-\xD6]/g, ch:'O'},
 {re:/[\xF2-\xF6]/g, ch:'o'},
 {re:/[\xD9-\xDC]/g, ch:'U'},
 {re:/[\xF9-\xFC]/g, ch:'u'},
 {re:/[\xD1]/g, ch:'N'},
 {re:/[\xF1]/g, ch:'n'},
 {re:/[\xC7]/g, ch:'C'},
 {re:/[\xE7]/g, ch:'c'},
 {re:/[\xDF]/g, ch:'ss'} ];

 for(var i=0, len=rExps.length; i<len; i++)
  str=str.replace(rExps[i].re, rExps[i].ch);

 return str;
}


function formate_entree(entree)
{
	  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	  var text;
	  var i;

	// On met en majuscule
  text=	stripVowelAccent(entree);
  text=text.toUpperCase();	
  
	
	 // On supprime tous les caractères incodables du message...
 
  i=0;
  while (i<text.length)
  {
    if (alphabet.indexOf(text.charAt(i)) == -1)
    {
      text=text.replace(text.charAt(i),'');
    }
    else i++;
  }
  
  return text;
  
}

function formate_sauf_espace(entree)
{
	  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	  var text;
	  var i;

	// On met en majuscule
  text=	stripVowelAccent(entree);
  text=text.toUpperCase();	
  
	
	 // On supprime tous les caractères incodables du message...
 
  i=0;
  while (i<text.length)
  {
    if ( (alphabet.indexOf(text.charAt(i)) == -1) && (text.charAt(i)!=' ')) 
    {
      text=text.replace(text.charAt(i),'');
    }
    else i++;
  }
  
  return text;
  
}

function formate_stat_entree(entree)
{
	  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	  var text;
	  var i;

	// On met en majuscule
  text=	striptout(entree);
  text=text.toUpperCase();	
  
	
	 // On supprime tous les caractères incodables du message...
 
  i=0;
  while (i<text.length)
  {
    if (alphabet.indexOf(text.charAt(i)) == -1)
    {
      text=text.replace(text.charAt(i),'');
    }
    else i++;
  }
  
  return text;
  
}

function formate_entree_polybe(entree)  // On doit aussi supprimer les i
{
	  var text;
	  var i;
	  
	  var alphabet='ABCDEFGHIKLMNOPQRSTUVWXYZ0123456789';


	// On met en majuscule
  text=	stripVowelAccent(entree);
  text=text.toUpperCase();	
  text=text.replace('J','I');
  
	
	 // On supprime tous les caractères incodables du message...
 
  for (i=0; i<text.length; i++)
  {
    if (alphabet.indexOf(text.charAt(i)) == -1)
    {
      text=text.replace(text.charAt(i),'');
    }
  }
  
  return text;
  
}

function formate_chiffre(entree)
{
	  var alphabet='0123456789';
	  var text;
	  var i;

	// On met en majuscule
	
  text=entree.toUpperCase();	
	
	 // On supprime tous les caractères incodables du message...
 
  for (i=0; i<text.length; i)
  {
    if (alphabet.indexOf(text.charAt(i)) == -1)
    {
      text=text.replace(text.charAt(i),'');
    }
    else i++;
  }
  
  return text;
  
}


function formate_sortie(result)
{
	var i;
	
	
  for (i=0; i<result.length; i++)
  {
    if (i % 6 == 0) result=result.substr(0,i) + ' ' + result.substr(i);
  }
 
  while (result.substr(0,1) == ' ')
  {
    result = result.substr(1);
  }
  return result;
}

// La fonction iquoi de Maple

function iquo(a,b)
{
  return ( Math.floor(a/b));
}

// Le modulo qui fonctionne aussi pour les nombres négatifs...
// b doit être positif...

function irem(a,b)
{
	while (a<0) a+=b;
	return ( (Math.abs(a) )%b);
}

// La fonction suivante retourne l'inverse de b modulo a

function inverse(a,b)
{
  var r,r1,u,u1,v,v1;
  	
  r=a;r1=b;
  u=1;u1=0;
  v=0;v1=1;
  while (r1!=0)
  {
	q=iquo(r,r1);
	aux=r;r=r1;r1=aux-r1*q;
	aux=u;u=u1;u1=aux-u1*q;
	aux=v;v=v1;v1=aux-v1*q;
  }
  return v;

}