/* 
Projet 5 : Imaginez un générateur de citations
*/

// Tableaux
let nom = ["Albus Dumbledore", "Sirius Black", "Remus Lupin", "Severus Rogue", "Rubeus Hagrid", "Minerva McGonagall", "Alastor Maugrey", "Kingsley Shacklebolt", "Nymphadora Tonks", "Arthur Weasley", "Molly Weasley", "James Potter", "Lily Potter", "Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Londubat", "Ginny Weasley", "Fred Weasley", "George Weasley", "Luna Lovegood", "Cho Chang"];
let action = ["mange", "court", "boit", "discute", "séjourne"];
let lieu = ["dans le salon", "au 1er étage", "dans le bâtiment", "aux Halles", "à Paris", "en Seine-Saint-Denis", "en Ile-de-France", "en France", "en Europe", "sur la planète", "dans l'espace", "dans l'univers"];
let compagnie = ["avec", "sans"];
let adverbe = ["depuis", "dans"];
let temps = ["une seconde", "une minute", "une heure", "une journée", "une semaine", "un mois", "une année", "un siècle"];

// Choisir un élèment au hasard dans le tableau
function aleatoire(table) {
	return table[Math.floor(Math.random() * table.length)];
}

// Test
/*console.log(nom);
console.log(action); 
console.log(temps);
console.log(`${aleatoire(nom)}`);
console.log(`${aleatoire(action)}`);
console.log(`${aleatoire(temps)}`);*/

// Constituer une phrase selon le type désiré
function phrase(type) {
	if (type === "1")
	{
		return `${aleatoire(nom)} ${aleatoire(action)} ${aleatoire(adverbe)} ${aleatoire(temps)}.`;
	}
	else
	{
		return `${aleatoire(nom)} ${aleatoire(action)} ${aleatoire(lieu)} ${aleatoire(compagnie)} ${aleatoire(nom)} ${aleatoire(adverbe)} ${aleatoire(temps)}.`;
	}
}