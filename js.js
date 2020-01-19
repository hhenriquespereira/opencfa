// Produire le nombre de phare désiré au type désiré
function exemplaire(nombre, type) {
	vider();
	for (let i = 0; i < nombre; i++) 
	{
		const resultat = document.createElement("li");
		resultat.textContent = `${phrase(type)}`;
		ulResultat.appendChild(resultat);
	}
}

function etape(div, valeur) 
{
	div.style.display = valeur;
} 
function clickEtape(etape1, etape2, nom) 
{
	etape(etape1, "none");
	etape(etape2, "block");
	etape(buttonEtape, "block");
	nomEtape.textContent = nom;
	vider();
}

function vider() 
{
	while ( ulResultat.hasChildNodes() ) 
	{ 
    	ulResultat.removeChild( ulResultat.firstChild );
	}
	setTimeout(
		function ()
		{
			message.classList.remove("message");
			message.textContent = ``;
		}, 
		(
			2000
		)
	);
}

let divEtape1 = document.getElementById("divEtape1");
let divEtape2 = document.getElementById("divEtape2");

let etape1 = document.getElementById("etape1");
etape1.addEventListener("click", function () { clickEtape(divEtape2, divEtape1, "Etape 1 : des citations aléatoires"); } );

let etape2 = document.getElementById("etape2");
etape2.addEventListener("click", function () { clickEtape(divEtape1, divEtape2, "Etape 2 : des citations configurables"); } );

let ulResultat = document.getElementById("resultat");
let nomEtape = document.getElementById("nomEtape");
let message = document.getElementById("message");

let buttonEtape = document.getElementById("buttonEtape");
buttonEtape.addEventListener("click", function () 
	{
		if (document.querySelector('input[id=etape2]:checked')) 
		{
			let nombre;
			let type;
			if(document.querySelector('input[name=citation]:checked') && document.querySelector('input[name=type]:checked')) 
			{ 
				nombre = document.querySelector('input[name=citation]:checked').value;
				type = document.querySelector('input[name=type]:checked').value;
				exemplaire(nombre,type);
			}
			else if(document.querySelector('input[name=citation]:checked') && !document.querySelector('input[name=type]:checked')) 
			{
				message.classList.add("message");
				message.textContent = `Veuillez sélectionner un type de citations.`;
				vider();
			}
			else if(!document.querySelector('input[name=citation]:checked') && document.querySelector('input[name=type]:checked')) 
			{
				message.classList.add("message");
				message.textContent = `Veuillez sélectionner un nombre de citations.`;
				vider();
			}
			else 
			{
				message.classList.add("message");
				message.textContent = `Veuillez sélectionner un nombre de citations ainsi qu'un type.`;
				vider();
			}
		}
		else 
		{
			exemplaire(1,1);
		}
	}
);


