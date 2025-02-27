import React from "react"
import { CardVehicule } from "./card-vehicule"

import hundaiImg from "../../public/img/offres/hundai.png"
import audiImg from "../../public/img/offres/audi.png"
import citroenImg from "../../public/img/offres/citroen.png"

const data = [
	{
		id: 1,
		logo: hundaiImg,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		vitesse: "Manuelle",
		km: "86 583",
		carburant: "Diesel",
		date: "15 décembre 2021 à 10h",
		panierUrl: "/",
		panierTitle: "Ajouter au panier",
		readMoreUrl: "/",
		readMoreTitle: "Voir Détails",
	},
	{
		id: 2,
		logo: audiImg,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		vitesse: "Manuelle",
		km: "86 583",
		carburant: "Diesel",
		date: "15 décembre 2021 à 10h",
		panierUrl: "/",
		panierTitle: "Ajouter au panier",
		readMoreUrl: "/",
		readMoreTitle: "Voir Détails",
	},
	{
		id: 3,
		logo: citroenImg,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		vitesse: "Manuelle",
		km: "86 583",
		carburant: "Diesel",
		date: "15 décembre 2021 à 10h",
		panierUrl: "/",
		panierTitle: "Ajouter au panier",
		readMoreUrl: "/",
		readMoreTitle: "Voir Détails",
	},
]

export const Default = () => <CardVehicule data={data} />

export default {
	title: "Dynamic Fields/Card Vehicule",
}
