//AFFICHAGE DE L'OURSON SELECTIONNÉ SUR LA PAGE INDEX 

                                        /********** On récupère les paramètre de l'URL de la page index **********/
                                              

let params = window.location.search;                                        //=> récupère l'URL courante 
const urlParams = new URLSearchParams(params);                              //=> On créer une constante avec la nouvelle URL 
const id = urlParams.get("id");                                             //=> récupère l'ID sur la page courante 
                                                    

                                        /**********On lance une requete pour récupérer l'API des oursons **********/ 


var request = new XMLHttpRequest();                                         //=> Lance une requete XMLHttRequest

request.onreadystatechange = function () {                                  //=> Au changement de onreadystatechange :

    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {     //=> Si son changement est égal à une requete réussis et un status de 200 :

        const response = JSON.parse (this.responseText)                     //=> Créer une constante que l'on parse dans un JSON en string
        productTeddies (response);                                          //=> ProductTeddies c'est le nom de la futur fonction 
    };
};
request.open ("GET" , "http://localhost:3000/api/teddies/"+id);             //=> On lance la requete sur cette url 
request.send();                                                             //=> On donne l'ordre de lance la requete 


                                        /********** Import de l'ID descriptionTeddies présent dans le code HTML **********/


let descriptionTeddies = document.getElementById ("descriptionTeddies");    //=> On récupère l'élément "descriptionTeddies" qui est dans le code html


                                        /********** Création d'une fonction pour mettre en place les donnée récupérées de l'API **********/


function productTeddies(data) {                                             //=> Fonction productTeddies avec en paramètre data qui correspond au donnée de l'API récupéré                     

                                        /********** Création de balises sous forme de cards **********/ 
                                

    let teddiesProductContainer = document.createElement ("div");               //=> Création d'une balise <div> que l'on va injecter dans la balise "descriptionTeddies" du code html et qui contiendra l'image de l'ourson 
    teddiesProductContainer.setAttribute ("class" , "cards__item__thumb");      //=> On attribut une class à notre <div>
    descriptionTeddies.appendChild(teddiesProductContainer);                    //=> On déclare que "teddiesProductContainer" est l'enfant de "descriptionTeddies"


    let teddiesProductPicture = document.createElement ("img");                 //=> Création d'une balise <img> que l'on va injecter dans la balise "teddiesProductContainer"   
    teddiesProductPicture.setAttribute("class" , "image__teddies__product");    //=> On attribut une classe à notre <img>
    teddiesProductPicture.setAttribute("src" , data.imageUrl);                  //=> On lui indique où récupérer l'image
    teddiesProductPicture.setAttribute("alt","image d'un ours en peluche");     //=> On lui assigne une balise "alt"
    teddiesProductContainer.appendChild(teddiesProductPicture);                 //=> On déclare que "teddiesProductPicture" est l'enfant de "teddiesProductContainer"


    let teddiesProductItem = document.createElement ("div");                    //=> Création d'une balise <div> que l'on va injecter dans la balise "descriptionTeddies" du code html et qui contiendra les info de l'ourson
    teddiesProductItem.setAttribute("class" , "cards__items__body");            //=> On attribut une classe à notre <div>
    descriptionTeddies.appendChild(teddiesProductItem);                         //=> On déclare que "teddiesProductItem" est l'enfant de "descriptionTeddies"


    let teddiesProductTitle = document.createElement ("h3");                    //=> Création d'une balise <h3> que l'on va injecter dans la balise "teddiesProductItem"
    teddiesProductTitle.setAttribute("class" , "cards__items__body--title")     //=> On attribut une classe à notre <h3>
    teddiesProductItem.appendChild(teddiesProductTitle);                        //=> On déclare que "teddiesProductTitle" est l'enfant de "teddiesProductItem"
    teddiesProductTitle.textContent = data.name;                                //=> On lui attribut le contenu "name" qui se trouve dans le "data" de la requete 


    let teddiesProductName = document.createElement ("p");                      //=> Création d'une balise <p> que l'on va injecter dans la balise "teddiesProductItem"
    teddiesProductName.setAttribute("class", "cards__items__body--name");       //=> On attribut une classe à notre <p>
    teddiesProductItem.appendChild(teddiesProductName);                         //=> On déclare que "teddiesProductName" est l'enfant de "teddiesProductItem"
    teddiesProductName.textContent = "Nom: " + data.name;                       //=> On lui attribut le texte "Nom :" avec le contenu "name" qui se trouve dans le "data" de la requete 


    let teddiesProductColors = document.createElement ("p");                    //=> Création d'une balise <p> que l'on va injecter dans la balise "teddiesProductItem"
    teddiesProductColors.setAttribute("class" , "cards__items__body—colors");   //=> On attribut une classe à notre <p>
    teddiesProductItem.appendChild(teddiesProductColors);                       //=> On déclare que "teddiesProductColors" est l'enfant de "teddiesProductItem"
    teddiesProductColors.textContent = "Couleurs: " + data.colors;              //=> On lui attribut le texte "Couleurs:" avec le contenu "colors" qui se trouve dans le "data" de la requete 


    let teddiesProductDescription = document.createElement ("p");               //=> Création d'une balise <p> que l'on va injecter dans la balise "teddiesProductItem"
    teddiesProductDescription.setAttribute("class" , "cards__items__body—description"); //=> On attribut une classe à notre <p> 
    teddiesProductItem.appendChild(teddiesProductDescription);                  //=> On déclare que "teddiesProductDescription" est l'enfant de "teddiesProductItem"
    teddiesProductDescription.textContent = "Description: " + data.description; //=> On lui attribut le texte "Description:" avec le contenu "description" qui se trouve dans le "data" de la requete


    let teddiesProductPrice = document.createElement ("p");                     //=> Création d'une balise <p> que l'on va injecter dans la balise "teddiesProductItem"
    teddiesProductPrice.setAttribute("class", "cards__items__body—price");      //=> On attribut une classe à notre <p>
    teddiesProductItem.appendChild(teddiesProductPrice);                        //=> On déclare que "teddiesProductPrice" est l'enfant de "teddiesProductItem"
    teddiesProductPrice.textContent = "Prix: " + data.price/100 + " €";         //=> On lui attribut le texte "Prix:" avec le contenu "price" qui se trouve dans le "data" de la requete puis on le divise par cent 


    let teddiesCheckArticles = document.createElement ("div")                   //=> Création d'une balise <div> que l'on va injecter dans la balise "teddiesProductItem" du code html et qui contiendra le bouton pour le panier et le choix de la couleurs
    teddiesCheckArticles.setAttribute("class", "checkArticle" );                //=> On attribut une classe à notre <div>
    teddiesProductItem.appendChild(teddiesCheckArticles);                       //=> On déclare que "teddiesCheckArticles" est l'enfant de "teddiesProductItem"


    let teddiesDetailSelect = document.createElement ("select");                //=> Création d'une balise <select> que l'on va injecter dans la balise "teddiesCheckArticles"
    teddiesDetailSelect.setAttribute("id","selects");                           //=> On lui attribut un "ID"
    teddiesCheckArticles.appendChild(teddiesDetailSelect)                       //=> On déclare que "teddiesDetailSelect" est l'enfant de "teddiesCheckArticles"
    


    let teddiesSelectOptions = document.createElement ("option");               //=> Création d'une balise <option> que l'on va injecter dans la balise "teddiesDetailSelect"
    teddiesDetailSelect.appendChild(teddiesSelectOptions);                      //=> On déclare que "teddiesSelectOptions" est l'enfant de "teddiesDetailSelect" 
    teddiesSelectOptions.textContent = "--Choisissez votre couleur--";          //=> On lui attribut le texte "--Choisissez votre couleur--" 
    teddiesSelectOptions.setAttribute("id" , "defaultOption");                  //=> On attribut un "ID"
    

    let detailBtn = document.createElement ("button");                          //=> Création d'une balise <button> que l'on va injecter dans la balise "teddiesCheckArticles"
    detailBtn.setAttribute("class","btn btn-primary");                          //=> On attribut une classe à notre <button>
    detailBtn.setAttribute("id","basket");                                      //=> On attribut un "ID" à notre <button>
    detailBtn.setAttribute("type","button");                                    //=> On définit sons type  
   
    detailBtn.dataset.idteddie = data._id   ;                                   //=> On définit l'action quand on appuis sur le bouton 
    teddiesCheckArticles.appendChild(detailBtn);                                //=> On déclare que "detailBtn" est l'enfant de "teddiesCheckArticles"
    detailBtn.textContent="Ajouter à mon panier";                               //=> On lui attribut le texte "Ajouter à mon panier"  au bouton 
    
    


                                        /********** Création d'une boucle pour récupérer les couleurs des oursons **********/

    for (let i = 0;i < data.colors.length; i++) {                               //=> On initialise l'index à 0 et index plus petit que le tableau => data => couleurs dans ce cas , on incrémente i ; ce qui récupère les différente couleurs de l'ourson

        let option = document.createElement("option");                          //=> On crée une balise <option> qui va permettre de choisir la couleur
        teddiesDetailSelect.appendChild(option);                                //=> On déclare que "option" est l'enfant de "teddiesDetailSelect"
        option.textContent=data.colors[i];                                      //=> On lui attribut les couleurs récupérés dans le data de la requete plus l'index de la boucle 
    };


                                        /********** On écoute le bouton **********/
    selectItem.addEventListener('click' , function (event) {                          //=> On crée un évènement au click sur le bouton 
                                    
        let selectItem = document.getElementById("selects").selectedOptions[0];     //=> On récupère l' ID "selects" avec le paramètre selectedOptions et le premier élément de l'array                                   
                                            
            if(!(data.colors).includes(selectItem.textContent)){                      //=> On teste si la couleur sélectionné est bien contenu dans le tableau couleur de l'ourson  
                                                          
                basket.disabled = true
                                    
            } else  {
                                      
                basket.disabled = false   
                                            
            };
                                        
    });

detailBtn.addEventListener('click', function (event){
    event.preventDefault();

    productBasket(event.target.dataset.idteddie) ;                            //=> On associe l'évènement au bouton   
});                         





    
};
                                        /********** On créer une fonction qui va contenir les oursons dans le panier **********/


function productBasket (idTeddie) {                                                //=> On créer une fonction pour créer le panier avec les oursons à l'intérieur  


    if (localStorage.getItem("selectTeddies") == undefined ){                      //=> On récupère avec getitem dans le sessionStorage "selectTeddies" et si il est "undefined" :

    let  indexTeddies = [];                                                        //=> On crée un tableau array vide qui va contenir les oursons sélectionnés    

    indexTeddies.push({id:id , quantity:1});                                       //=> On crée un objet et on le push dans le array "indexTeddies"

    localStorage.setItem("selectTeddies" , JSON.stringify (indexTeddies));         //=> On met à jour le tableau "selectTeddies" avec setitem avec à l'intérieur le tableau "indexTeddies"
    

    }else {                                                                         //=> Sinon si il est défini :
     
        var teddiesTab =  JSON.parse(localStorage.getItem("selectTeddies"));        //=> on récupère le tableau "selectTeddies" 

        //console.log("avant",teddiesTab)
       // console.log(teddiesTab.length);
    

       
       if  (!teddiesTab.map(function(selectTeddies) { return selectTeddies.id; }).includes(idTeddie)) {     //=> Test si l'ourson sélectionner est présent dans le tableau                                                  
        console.log("test")
        
        teddiesTab.push({id:id , quantity:1});
        

       }else{

       for (let index=0; index< teddiesTab.length ;index++) {                       //=> On met en place une boucle dans le cas de deux id identique , puis on incrémente leurs quantité  
          // console.log(teddiesTab[index].id == idTeddie );
          // console.log("boucle for",teddiesTab[index])

            if (teddiesTab[index].id == idTeddie ){                                 //=> Si le tableau dans le localStorage est identique à l'id sélectionner 
            
                teddiesTab[index].quantity = teddiesTab[index].quantity+1;          //=> On incrémente la quantité en +1
               // console.log("test")
            };             
        };                                                                  
       // console.log("apres",teddiesTab)  
        
    }           
    localStorage.setItem("selectTeddies" , JSON.stringify (teddiesTab));

};
};






                                        