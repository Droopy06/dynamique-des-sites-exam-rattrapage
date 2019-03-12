/********************************************/
/*              AJAX PART                   */
/********************************************/

// Point bonus avec AJAX

let shopLille = [];

function getXMLHttpRequest() {
    let xhr = null;

    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest();
        }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }

    return xhr;
}

function request() {
    let xhr = getXMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
            getClothingFromApi(this.response);
        }
    };

    xhr.open("GET", "", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null);
}

function getClothingFromApi(responseApi){
    //Parser le fichier JSON
    //Effectuer le traitement d'affichage
    //Appel à la fonction getClothingFromLille
}

/********************************************/
/*            JAVASCRIPT PART               */
/********************************************/

let shop = [
    {
        "agence": "Abercrombie & fitch - Lille",
        "adress": "41 rue du port 59000 Lille",
        "opening_time": "8am-12am, 2pm:8pm",
        "clothing_category": [
            {
                "id": 1,
                "category": "Nouveautés",
                "picture": "https://anf.scene7.com/is/image/anf/KIC_159-9017-2630-900_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR",
                "starting_price": 80,
                "clothing": []
            },
            {
                "id": 2,
                "category": "veste & manteaux",
                "picture": "https://anf.scene7.com/is/image/anf/KIC_144-9107-0962-200_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR",
                "starting_price": 100,
                "clothing": [
                    {
                        "name": "COUPE-VENT ZIPPÉ SUR TOUTE LA LONGUEUR",
                        "price": 108,
                        "exclu": false,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_144-9107-0962-200_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    },
                    {
                        "name": "TRENCH DRAPÉ",
                        "price": 180,
                        "exclu": false,
                        "picture": "https://anf.scene7.com/is/image/anf/anf_196983_02_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    },
                    {
                        "name": "VESTE DE MOTARD EN IMITATION CUIR",
                        "price": 150,
                        "exclu": false,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_144-9020-0949-900_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    },
                    {
                        "name": "VESTE GIRLFRIEND COURTE EN JEAN DEUX-EN-UN",
                        "price": 128,
                        "exclu": true,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_144-9028-0973-100_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    }
                ]
            },
            {
                "id": 3,
                "category": "tops",
                "picture": "https://anf.scene7.com/is/image/anf/KIC_140-9002-0307-900_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR",
                "starting_price": 30,
                "clothing": [
                    {
                        "name": "CARACO EN DENTELLE À ENCOLURE CARRÉE",
                        "price": 34,
                        "exclu": false,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_140-9002-0307-900_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    },
                    {
                        "name": "CARDIGAN BOYFRIEND CACHEMIRE",
                        "price": 158,
                        "exclu": false,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_150-9092-0891-112_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    },
                    {
                        "name": "SWEAT À CAPUCHE ZIPPÉ SUR TOUTE LA LONGUEUR À LOGO BRODÉ",
                        "price": 88,
                        "exclu": false,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_152-9000-0058-200_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    },
                    {
                        "name": "CHEMISE SLIM BOYFRIEND",
                        "price": 74,
                        "exclu": true,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_140-9044-2094-100_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    }
                ]
            },
            {
                "id": 4,
                "category": "bas",
                "picture": "https://anf.scene7.com/is/image/anf/KIC_155-8439-0468-278_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR",
                "starting_price": 80,
                "clothing": [
                    {
                        "name": "JEAN DROIT LONGUEUR CHEVILLE TAILLE ULTRA HAUTE",
                        "price": 98,
                        "exclu": true,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_140-9044-2094-100_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    },
                    {
                        "name": "VESTE GIRLFRIEND COURTE EN JEAN DEUX-EN-UN",
                        "price": 74,
                        "exclu": true,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_144-9028-0973-100_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    }
                ]
            },
            {
                "id": 5,
                "category": "robes et combinaison",
                "picture": "https://anf.scene7.com/is/image/anf/KIC_159-9058-2485-206_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR",
                "starting_price": 70,
                "clothing": [
                    {
                        "name": "COMBINAISON SANS MANCHES NOUÉE SUR LE DEVANT",
                        "price": 74,
                        "exclu": true,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_159-9067-2515-104_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    },
                    {
                        "name": "ROBE DROITE EN DENTELLE",
                        "price": 84,
                        "exclu": true,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_159-9055-2492-100_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    }
                ]
            },
            {
                "id": 6,
                "category": "pyjamas et brassières",
                "picture": "https://anf.scene7.com/is/image/anf/anf_212399_04_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR",
                "starting_price": 20,
                "clothing": [
                    {
                        "name": "CHEMISE DE NUIT À MANCHES LONGUES",
                        "price": 58,
                        "exclu": false,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_110-9100-0254-224_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    },
                    {
                        "name": "CHEMISE DE NUIT À MANCHES LONGUES",
                        "price": 58,
                        "exclu": false,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_110-9100-0254-608_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    },
                    {
                        "name": "COL BOUTONNÉ COURT EN NID D'ABEILLE",
                        "price": 22,
                        "exclu": true,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_110-9004-0145-110_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    },
                    {
                        "name": "BRASSIÈRE EN NID D'ABEILLE À COL BOUTONNÉ",
                        "price": 30,
                        "exclu": false,
                        "picture": "https://anf.scene7.com/is/image/anf/KIC_110-9006-0144-100_model1?$product-anf-v1$&wid=347&hei=438&locale=fr_FR"
                    }
                ]
            }
        ]
    }
];

function getClothingFromLille() {
    //Parcourir les différentes catégories de vetements
    //aller rechercher la div #returnClothing pour afficher le code html
    //faire appel à la fonction createHtmlContentClothingCategory
    //afficher le code html obtenu
}

function getDetailsClothing(id) {
    //fonction pour récupérer les différents vetements de la catégorie sélectionnée.
    //aller rechercher la div #returnClothing pour afficher le code html et supprimer le précédent contenu
    //faire appel à la fonction createHtmlContentDetailsCategory
    //afficher le code html obtenu
}

function createHtmlContentClothingCategory(content) {
    //permet de construire la cardview avec la catégorie
}

function createHtmlContentDetailsCategory(content){
    //permet de construire la cardview avec le vetement courant
}

function createHtmlContentBtnBackHome() {
    //créer le contenu du bouton retour arrière dans le HTML (#returnBtnBackHome)
    //Prévoir le retour arrière sur le bouton
}

function backToHomePage() {
    //implémenter le retour à la page précédente
}
