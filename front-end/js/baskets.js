



const basket = document.getElementById("basket");

    

let itemsTeddies = JSON.parse(sessionStorage.getItem("selectTeddies"));

for (let i = 0;i < itemsTeddies.length; i++) {

    var id =  itemsTeddies[i].id 

    var request = new XMLHttpRequest();                                         

    request.onreadystatechange = function () {                                  

        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {     

            const response = JSON.parse (this.responseText)                 
            basketTeddies(response);  
                            
        }; 
    }; 

    request.open ("GET" , "http://localhost:3000/api/teddies/"+id);             
    request.send();
       
        
        //un tableau avec le nom de tes colonnes, puis tu boucle dessus avec create element th, ajoute l'attribute scop avec la valeur col et tu l'append au tr précédent à qui tu aura mis un id pour le reconnaitre



        function basketTeddies (data)  {
             
            let tables = [" Miniature " , " Nom " , " Prix unitaire " , " Quantités " ," Prix total " , " Ajouter ou supprimer " ] ;
console.log(tables)
            let productBasket = document.createElement("main");
            productBasket.setAttribute ("class" , "cards__item__thumb_1");      
            basket.appendChild(productBasket);

            let teddiesTables = document.createElement("table");
            productBasket.appendChild(teddiesTables);
                
            let theadTables = document.createElement("thead");
            teddiesTables.appendChild(theadTables);

            let trTables = document.createElement("tr");
            trTables.setAttribute ("id","trHeader")
            theadTables.appendChild(trTables);

            for (let i = 0;i < tables.length; i++) {
                    
                let thTables = document.createElement("th")
                thTables.setAttribute("scope", "col");  
                trTables.appendChild(thTables);
                thTables.textContent = tables[i];


            


                              
          };

                            //let imgItemTeddie = document.createElement("img");
                //imgItemTeddie .setAttribute ("class" , "image__teddies__product"); 
                // imgItemTeddie.setAttribute ("src" , data.imageUrl)
              // imgItemTeddie.setAttribute("alt","image d'un ours en peluche");     
               // thTables.appendChild(imgItemTeddie);
               // imgItemTeddie.textContent = data.imageUrl
                    //let tbodyTables = document.createElement("tbody");
                   // teddiesTables.appendChild(tbodyTables);
                     //   let trTablesBody = document.createElement("tr");
                      // tbodyTables.appendChild(trTablesBody);
                         //   let tdTables = document.createElement()


                
            
                

                //let nameItemTeddie = document.createElement("p");
               // nameItemTeddie.setAttribute ("class", "cards__items__body--name");
               // productBasket.appendChild(nameItemTeddie);
               // nameItemTeddie.textContent = data.name;




            
            }
            
        };




    








    //};
    

 
//1) Aller chercher le sessionStorage
//2) Faire une boucle pour récupérer les ids
    //3) Faire une requete pour récupérer les oursons par rapport à leur ID => avec l'URL 
    //4) Retranscrire les infos en injectant dans le code HTML avec les paramètres qui y corresponde 

//faire une fonction avec en parametre la réponse de la requete 

//la fonction sert à injecter le code html avec des cartes pour chaque oursons pour la page 









   

    

    //Import du sessionStorage







