const url2 = './data.json';
const promise= new Promise((resolve, reject) => {
       
    const requete = new XMLHttpRequest();
    requete.open('GET',url2);
    // or doing requete.responseType = 'json';
    requete.onload=()=>{
      const data= JSON.parse(requete.response)
     resolve(data);
    }
    requete.send();
});

const cartedisplay = document.getElementById("placeajout");
async function afficher (){
    const tableau= await promise
    
      cartedisplay.innerHTML =""
      tableau.forEach((element) => {
         
        cartedisplay.innerHTML += `
         <div class="col">
        <div class="card bg-black text-white carte shadow-lg">
          <div
            class="card-header d-flex align-items-center justify-content-around"
          >
            <img
              src="${element.drapeau}"
              class="card-img-top w-25 animate__animated animate__flip  animate__infinite	infinite"
              alt="..."
            />
            <h2 class="fw-bolder text-decoration-underline">${element.pays}</h2>
          </div>
          <div class="card-body">
            <div class="row ">
                <div class="col-lg-6  d-flex justify-content-between  flex-wrap gx-5">
                    <div class="">
                        <p class="fw-bold">Superficie: <span class="fw-lighter">${element.Superficie}</span></p>
                      </div>
                     
                      <div class="">
                        <p class="fw-bold">La capitale: <span class="fw-lighter">${element.capital}.</span></p>
                      </div>
                </div>
                <div class="col-lg-6 d-flex justify-content-between  flex-wrap gx-5">
                    <div class=" ">
                        <p class="fw-bold">Population: <span class="fw-lighter text-warning">${element.population}.</span></p>
                    </div>
                    <div class="">
                        <p class="fw-bold">pays voisins:  <span class="fw-lighter">${element.voisin}</span></p>
                      </div>
                     
                </div>
            </div>
            <div>
                <h5 class="text-center"> voici 3 de ses regions</h5>
            </div>
            <div class="row ">
                <div class="col-12  d-flex justify-content-between  flex-wrap gx-5 border-top">
                    <div class="p-2">
                        <p class="fw-bold ">Nom: <span class="fw-light">${element.region[0].nom}.</span></p>
                      </div>
                     
                      <div class="p-2">
                        <p class="fw-bold">population: <span class="popregall fw-lighter">${element.region[0].population.all}</span></p>
                      </div>
                      <div class="p-2">
                        <p class="fw-bold">Hommes: <span class="men fw-lighter">${element.region[0].population.men}</span></p>
                      </div>
                      <div class="p-2">
                        <p class="fw-bold">femmes: <span class="women fw-lighter">${element.region[0].population.women}</span></p>
                      </div>
                      <div class="p-2">
                        <p class="fw-bold">H adultes: <span class="percenmen fw-lighter">${element.region[0].population.percenmen}%</span></p>
                      </div>
                      <div class="p-2">
                        <p class="fw-bold">F adultes: <span class="percenwomen fw-lighter">${element.region[0].population.percenwomen}%</span></p>
                      </div>
                      <div class="p-2">
                        <p class="fw-bold">H enfants: <span class="percenyoungmen fw-lighter">${element.region[0].population.percenyoungmen}%</span></p>
                      </div>
                      <div class="p-2">
                        <p class="fw-bold">F enfants: <span class="percenyounggirl fw-lighter">${element.region[0].population.percenyounggirl}%</span></p>
                      </div>
                </div>
                <div class="col-12  d-flex justify-content-between  flex-wrap gx-5 border-top">
                <div class="p-2">
                    <p class="fw-bold ">Nom: <span class="fw-light">${element.region[1].nom}.</span></p>
                  </div>
                 
                  <div class="p-2">
                    <p class="fw-bold">population: <span class="popregall fw-lighter">${element.region[1].population.all}</span></p>
                  </div>
                  <div class="p-2">
                    <p class="fw-bold">Hommes: <span class="men fw-lighter">${element.region[1].population.men}</span></p>
                  </div>
                  <div class="p-2">
                    <p class="fw-bold">femmes: <span class="women fw-lighter">${element.region[1].population.women}</span></p>
                  </div>
                  <div class="p-2">
                    <p class="fw-bold">H adultes: <span class="percenmen fw-lighter">${element.region[1].population.percenmen}%</span></p>
                  </div>
                  <div class="p-2">
                    <p class="fw-bold">F adultes: <span class="percenwomen fw-lighter">${element.region[1].population.percenwomen}%</span></p>
                  </div>
                  <div class="p-2">
                    <p class="fw-bold">H enfants: <span class="percenyoungmen">${element.region[1].population.percenyoungmen}%</span></p>
                  </div>
                  <div class="p-2">
                    <p class="fw-bold">F enfants: <span class="percenyounggirl fw-lighter">${element.region[1].population.percenyounggirl}%</span></p>
                  </div>
            </div>
            <div class="col-12  d-flex justify-content-between  flex-wrap gx-5 border-top">
            <div class="p-2">
                <p class="fw-bold ">Nom: <span class="fw-light">${element.region[2].nom}.</span></p>
              </div>
             
              <div class="p-2">
                <p class="fw-bold">population: <span class="popregall fw-lighter">${element.region[2].population.all}</span></p>
              </div>
              <div class="p-2">
                <p class="fw-bold">Hommes: <span class="men fw-lighter">${element.region[2].population.men}</span></p>
              </div>
              <div class="p-2">
                <p class="fw-bold">femmes: <span class="women fw-lighter">${element.region[2].population.women}</span></p>
              </div>
              <div class="p-2">
                <p class="fw-bold">H adultes: <span class="percenmen fw-lighter">${element.region[2].population.percenmen}%</span></p>
              </div>
              <div class="p-2">
                <p class="fw-bold">F adultes: <span class="percenwomen fw-lighter">${element.region[2].population.percenwomen}%</span></p>
              </div>
              <div class="p-2">
                <p class="fw-bold">H enfants: <span class="percenyoungmen fw-lighter">${element.region[2].population.percenyoungmen}%</span></p>
              </div>
              <div class="p-2">
                <p class="fw-bold">F enfants: <span class="percenyounggirl fw-lighter">${element.region[2].population.percenyounggirl}%</span></p>
              </div>
        </div>
             
            </div>
         
          </div>
        </div>
      </div>`;
      });
      
    }
    afficher()
const search=document.getElementById("search");
search.addEventListener("keyup",async (e) => {
 
    const valeur = Number(e.target.value)
    const table = await promise
    const result = table.filter((item) =>{
  ({ntp}=item)
     return ntp >= valeur 
    })
    
    cartedisplay.innerHTML =""
    result.forEach((element) => {
       
      cartedisplay.innerHTML += `
       <div class="col">
      <div class="card bg-black text-white carte shadow-lg">
        <div
          class="card-header d-flex align-items-center justify-content-around"
        >
          <img
            src="${element.drapeau}"
            class="card-img-top w-25 animate__animated animate__flip  animate__infinite	infinite"
            alt="..."
          />
          <h2 class="fw-bolder text-decoration-underline">${element.pays}</h2>
        </div>
        <div class="card-body">
          <div class="row ">
              <div class="col-lg-6  d-flex justify-content-between  flex-wrap gx-5">
                  <div class="">
                      <p class="fw-bold">Superficie: <span class="fw-lighter">${element.Superficie}</span></p>
                    </div>
                   
                    <div class="">
                      <p class="fw-bold">La capitale: <span class="fw-lighter">${element.capital}.</span></p>
                    </div>
              </div>
              <div class="col-lg-6 d-flex justify-content-between  flex-wrap gx-5">
                  <div class=" ">
                      <p class="fw-bold">Population: <span class="fw-lighter text-primary">${element.population}.</span></p>
                  </div>
                  <div class="">
                      <p class="fw-bold">pays voisins:  <span class="fw-lighter">${element.voisin}</span></p>
                    </div>
                   
              </div>
          </div>
          <div>
              <h5 class="text-center"> voici 3 de ses regions</h5>
          </div>
          <div class="row ">
              <div class="col-12  d-flex justify-content-between  flex-wrap gx-5 border-top">
                  <div class="p-2">
                      <p class="fw-bold ">Nom: <span class="fw-light">${element.region[0].nom}.</span></p>
                    </div>
                   
                    <div class="p-2">
                      <p class="fw-bold">population: <span class="popregall fw-lighter">${element.region[0].population.all}</span></p>
                    </div>
                    <div class="p-2">
                      <p class="fw-bold">Hommes: <span class="men fw-lighter">${element.region[0].population.men}</span></p>
                    </div>
                    <div class="p-2">
                      <p class="fw-bold">femmes: <span class="women fw-lighter">${element.region[0].population.women}</span></p>
                    </div>
                    <div class="p-2">
                      <p class="fw-bold">H adultes: <span class="percenmen fw-lighter">${element.region[0].population.percenmen}%</span></p>
                    </div>
                    <div class="p-2">
                      <p class="fw-bold">F adultes: <span class="percenwomen fw-lighter">${element.region[0].population.percenwomen}%</span></p>
                    </div>
                    <div class="p-2">
                      <p class="fw-bold">H enfants: <span class="percenyoungmen fw-lighter">${element.region[0].population.percenyoungmen}%</span></p>
                    </div>
                    <div class="p-2">
                      <p class="fw-bold">F enfants: <span class="percenyounggirl fw-lighter">${element.region[0].population.percenyounggirl}%</span></p>
                    </div>
              </div>
              <div class="col-12  d-flex justify-content-between  flex-wrap gx-5 border-top">
              <div class="p-2">
                  <p class="fw-bold ">Nom: <span class="fw-light">${element.region[1].nom}.</span></p>
                </div>
               
                <div class="p-2">
                  <p class="fw-bold">population: <span class="popregall fw-lighter">${element.region[1].population.all}</span></p>
                </div>
                <div class="p-2">
                  <p class="fw-bold">Hommes: <span class="men fw-lighter">${element.region[1].population.men}</span></p>
                </div>
                <div class="p-2">
                  <p class="fw-bold">femmes: <span class="women fw-lighter">${element.region[1].population.women}</span></p>
                </div>
                <div class="p-2">
                  <p class="fw-bold">H adultes: <span class="percenmen fw-lighter">${element.region[1].population.percenmen}%</span></p>
                </div>
                <div class="p-2">
                  <p class="fw-bold">F adultes: <span class="percenwomen fw-lighter">${element.region[1].population.percenwomen}%</span></p>
                </div>
                <div class="p-2">
                  <p class="fw-bold">H enfants: <span class="percenyoungmen fw-lighter">${element.region[1].population.percenyoungmen}%</span></p>
                </div>
                <div class="p-2">
                  <p class="fw-bold">F enfants: <span class="percenyounggirl fw-lighter">${element.region[1].population.percenyounggirl}%</span></p>
                </div>
          </div>
          <div class="col-12  d-flex justify-content-between  flex-wrap gx-5 border-top">
          <div class="p-2">
              <p class="fw-bold ">Nom: <span class="fw-light">${element.region[2].nom}.</span></p>
            </div>
           
            <div class="p-2">
              <p class="fw-bold">population: <span class="popregall fw-lighter">${element.region[2].population.all}</span></p>
            </div>
            <div class="p-2">
              <p class="fw-bold">Hommes: <span class="men fw-lighter">${element.region[2].population.men}</span></p>
            </div>
            <div class="p-2">
              <p class="fw-bold">femmes: <span class="women fw-lighter">${element.region[2].population.women}</span></p>
            </div>
            <div class="p-2">
              <p class="fw-bold">H adultes: <span class="percenmen fw-lighter">${element.region[2].population.percenmen}%</span></p>
            </div>
            <div class="p-2">
              <p class="fw-bold">F adultes: <span class="percenwomen fw-lighter">${element.region[2].population.percenwomen}%</span></p>
            </div>
            <div class="p-2">
              <p class="fw-bold">H enfants: <span class="percenyoungmen fw-lighter">${element.region[2].population.percenyoungmen}%</span></p>
            </div>
            <div class="p-2">
              <p class="fw-bold">F enfants: <span class="percenyounggirl fw-lighter">${element.region[2].population.percenyounggirl}%</span></p>
            </div>
      </div>
           
          </div>
       
        </div>
      </div>
    </div>`;
   
  }) })
