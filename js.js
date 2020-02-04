// Paramètres
let etape = 0;
let citation = 0;
let type = 0;

// Bouton
const etape1 = document.getElementById( "etape1" );
const etape2 = document.getElementById( "etape2" );
const buttonEtape = document.getElementById( "buttonEtape" );

// Etape
const divEtape1 = document.getElementById( "divEtape1" );
const divEtape2 = document.getElementById( "divEtape2" );

// Résultat
const nomEtape = document.getElementById( "nomEtape" );
const textMessage = document.getElementById( "message" );
const ulResultat = document.getElementById( "resultat" );

// Action
etape1.addEventListener( "click" , function ( ) { clickEtape( 1 , divEtape2 , divEtape1 , "Etape 1 : des citations aléatoires" ); } );
etape2.addEventListener( "click" , function ( ) { clickEtape( 2 , divEtape1 , divEtape2 , "Etape 2 : des citations configurables" ); } );
buttonEtape.addEventListener( "click" , function () 
	{
		if ( etape == 2 ) 
		{
			if ( document.querySelector( 'input[name=citation]:checked' ) ) 
			{
				citation = document.querySelector( 'input[name=citation]:checked' ).value;
			}
			if ( document.querySelector( 'input[name=type]:checked' ) ) 
			{
				type = document.querySelector( 'input[name=type]:checked' ).value;
			}

			if( ( ( citation >= 1 ) && ( citation <= 5 ) ) && ( ( type >= 1 ) && ( type <= 2 ) ) ) 
			{ 
				exemplaire( citation , type );
			}
			else if( ( ( citation >= 1 ) && ( citation <= 5 ) ) && !( ( type >= 1 ) && ( type <= 2 ) ) ) 
			{
				message( "Veuillez sélectionner un type de citations." );
			}
			else if( !( ( citation >= 1 ) && ( citation <= 5 ) ) && ( ( type >= 1 ) && ( type <= 2 ) ) ) 
			{
				message( "Veuillez sélectionner un nombre de citations." );
			}
			else 
			{
				message( "Veuillez sélectionner un nombre de citations ainsi qu'un type." );
			}
		}
		else 
		{
			exemplaire( 1 , 1 );
		}
	}
);

// Vider l'espace de résultat
function vider( bool = false , texte ) 
{
	while ( ulResultat.hasChildNodes( ) ) 
	{ 
    	ulResultat.removeChild( ulResultat.firstChild );
	}
}

// Afficher/Supprimer un message
function message( texte ) 
{
	vider( );
	textMessage.classList.add( "message" );
	textMessage.textContent = texte;
	setTimeout(
		function ( )
		{
			textMessage.classList.remove( "message" );
			textMessage.textContent = "";
		}, 
		2000
	);
}


// Produire le nombre de phare désiré au type désiré
function exemplaire( nombre , type ) 
{
	vider( );
	for( let i = 0 ; i < nombre ; i++ ) 
	{
		const resultat = document.createElement( "li" );
		resultat.textContent = phrase( type );
		ulResultat.appendChild( resultat );
	}
}

// Changement d'Etape 
function clickEtape( num, etape1 , etape2 , nom ) 
{
	vider( );
	//
	function displayEtape( div , valeur ) 
	{
		div.style.display = valeur;
	}
	etape = num ;
	displayEtape( etape1 , "none" );
	displayEtape( etape2 , "block" );
	displayEtape( buttonEtape , "block" );
	nomEtape.textContent = nom;
}
