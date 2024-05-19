import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";


// importar los titulos de la pagina

import { 
    nameRockets,
    nameCapsul,
    nameCrew,
    nameLaunches,
    nameCore,
    nameLanpad,
    nameShip,
    nameCompany,
    nameDragon,
    nameLaunchpad,
    nameHistory,
    namePayload,
    nameRoadsters
} from "./title.js";


// importar los datos del Api en la pagina

import { 
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket,
    companyId,
    founder,
    summary,
    founded,
    employees,
    vehicles,
    launch_sites,
    test_sites,
    cto_propulsion,
    valuation,
    coo,
    companytwitter,
    RoadserId,
    orbit_type,
    launch_date_utc,
    norad_id,
    inclination,
    longitude,
    period_days,
    eccentricity,
    detailsRoadster,
    earth_distance_km,
    mars_distance_mi,
    speed_kph,
    epoch_jd
} from "./information.js";





// importar las tablas de la pagina

import { 
    tableRocketColum1, 
    tableRocketColum2
} from "./tables.js";



import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum
} from "./inform.js";




// importar imagenes
import { 
    imageRockets,
    Crewimage,
    Launchesimage,
    LandpadsImage,
    Dragonsimage,
    LaunchpadsImage,
    Roadsterimage,
    Shipsimage
} from "./card.js";



import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
} from "../modulesComponents/progressBar.js";
///
import { 
    getAllCapsules,
    getIdCapsules,
} from "../modules/capsules.js";

import {
    getCompany,
    getCompanyById
} from "../modules/company.js"

import {
    getIdRoadster,
    getRoadster
} from "../modules/roadster.js"

import {
    getAllCores,
    getIdCore
} from "../modules/cores.js"

import {
    getAllCrew,
    getIdCrew
} from "../modules/crew.js"

import {
    getAllDragons,
    getIDDragons
} from "../modules/dragons.js"

import {
    getAllHistory,
    getIdHistory
} from "../modules/history.js"

import {
    getAllLandpads,
    getIDlandpads
} from "../modules/landpads.js"

import {
    getAllLaunches,
    getIdLaunches
} from "../modules/launches.js"

import {
    getAllLaunchpads,
    getIdlaunchpadsId
} from "../modules/launchpads.js"

import {
    getAllPayloads,
    getpayloadsId
} from "../modules/payloads.js"

import {
    getAllShips,
    getIDShips
} from "../modules/ships.js"







// -------------------Codigo de cada Paginacion------------------

export const load = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = `
        <div class="load"></div>
    `;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = `
        <div class="load" style="height: 150px;"></div>
    `;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = `
        <div class="load" style="height: 350px"></div>
    `;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;
}
export const clear = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = ``;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = ``;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = ``;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = ``;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = ``;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = ``;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

}


// -------------------Seccion de Rockets ------------------

const getRocketsId = async(e)=>{
    e.preventDefault();
    // console.log(e.target);
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let Rocket = await getAllRocketsId(e.target.id);
    await clear();
    
    await informationRockets(Rocket.country, Rocket.description)
    await nameRockets(Rocket.name)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await informationFirstFlightRocket(Rocket.first_flight)
    await informationWebRocket(Rocket.wikipedia)

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await imageRockets(Rocket.flickr_images);

    await tableRocketColum1(Rocket)
    await tableRocketColum2(Rocket)

    await progressRocketWeight(Rocket)
    await progressPayloadWeights(Rocket)
    await progressHeightRocket(Rocket)
    await progressDiameterRocket(Rocket)
    await progressSecondStageDiameterRocket(Rocket)
    await progressSecondStageHeightRocket(Rocket)
}
export const paginationRockets = async()=>{
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    
    let [a1,a2,a3,a4] = div.children
    a3.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    
    return div;
}












const getCapsulesId = async (e) => {
    e.preventDefault();
  
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
  
    let a = e.target.parentElement.children;
    for (let val of a) {
      val.classList.remove('activo');
    }
    e.target.classList.add('activo');
  
    let capsules = await getIdCapsules(e.target.id);
    console.log(capsules);
  
    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = "";
  
    await nameCapsul(capsules.serial);


};




export const paginationCapsules = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}





// -------------------Seccion de Company ------------------



export const paginationCompany = async() => {
    let data = await getCompany()
    await clear()

    await nameCompany(data.name);


    let summaryElement = await summary(data.summary);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(summaryElement);

    let foundedElement = await founded(data.founded);
    descriptionItem.append(foundedElement);
    
    let employeesElement = await employees(data.employees);
    descriptionItem.append(employeesElement);


    let companytwitterElement = await companytwitter(data.links.twitter);
    descriptionItem.append(companytwitterElement);


    let companyIdElement = await companyId(data.id); // Espera a que la función asíncrona se resuelva
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(companyIdElement);

    let founderElement = await founder(data.founder);
    information__2.appendChild(founderElement);


    let vehiclesElement = await vehicles(data.vehicles);
    information__2.appendChild(vehiclesElement);

    let launch_sitesElement = await launch_sites(data.launch_sites);
    information__2.appendChild(launch_sitesElement);

    let test_sitesElement = await test_sites(data.test_sites);
    information__2.appendChild(test_sitesElement);

    let cto_propulsionElement = await cto_propulsion(data.cto_propulsion);
    information__2.appendChild(cto_propulsionElement);

    let valuationElement = await valuation(data.valuation);
    information__2.appendChild(valuationElement);


    let cooElement = await coo(data.coo);
    information__2.appendChild(cooElement);





    let sectionImage = document.querySelector("#section__information__1");
    let img1 = document.createElement("img");
    img1.setAttribute("src", "storage/img/icons/spacex.jpg");
    img1.classList.add("imagen-paginacion-capsula");
    img1.style.position = "absolute";
    img1.style.top = "100px";
    img1.style.left = "50px";
    img1.style.width = "500px";
    img1.style.height = "250px";
    img1.style.marginTop = "220px";
    img1.style.marginLeft = "28px";
    img1.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";
    img1.style.borderRadius = "10%"
    sectionImage.appendChild(img1);
    
    // Crea y configura la segunda imagen
    let img2 = document.createElement("img");
    img2.setAttribute("src", "storage/img/icons/elon.jpg"); // Cambia la ruta de la imagen
    img2.classList.add("imagen-paginacion-capsula");
    img2.style.position = "absolute";
    img2.style.top = "300px"; // Ajusta la posición vertical de la segunda imagen
    img2.style.left = "150px"; // Ajusta la posición horizontal de la segunda imagen
    img2.style.width = "200px"; // Ajusta el ancho de la segunda imagen
    img2.style.height = "250px";
    img2.style.marginTop = "20px";
    img2.style.marginLeft = "530px";
    img2.style.borderRadius = "10%"
    sectionImage.appendChild(img2);


    


}








// -------------------Seccion de Roadster ------------------

export const paginationRoadster = async (e) => {
    let data = await getRoadster();
    await clear();

    await nameRoadsters(data.name);
    await Roadsterimage(data.flickr_images);



    let detailsRoadsterElement = await detailsRoadster(data.details);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(detailsRoadsterElement);



    let RoadserIdElement = await RoadserId(data.id); // Espera a que la función asíncrona se resuelva
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(RoadserIdElement);

    let orbit_typeElement = await orbit_type(data.orbit_type); 
    information__2.appendChild(orbit_typeElement);

    let launch_date_utcElement = await launch_date_utc(data.launch_date_utc); 
    information__2.appendChild(launch_date_utcElement);

    let norad_idElement = await norad_id(data.norad_id); 
    information__2.appendChild(norad_idElement);

    let inclinationElement = await inclination(data.inclination); 
    information__2.appendChild(inclinationElement);

    let longitudeElement = await longitude(data.longitude); 
    information__2.appendChild(longitudeElement);

    let period_daysElement = await period_days(data.period_days); 
    information__2.appendChild(period_daysElement);


    let eccentricityElement = await eccentricity(data.eccentricity); 
    information__2.appendChild(eccentricityElement);

    let earth_distance_kmElement = await earth_distance_km(data.earth_distance_km); 
    information__2.appendChild(earth_distance_kmElement);


    let mars_distance_miElement = await mars_distance_mi(data.mars_distance_mi); 
    information__2.appendChild(mars_distance_miElement);


    let speed_kphElement = await speed_kph(data.speed_kph); 
    information__2.appendChild(speed_kphElement);

    let epoch_jdElement = await epoch_jd(data.epoch_jd); 
    information__2.appendChild(epoch_jdElement);



    let sectionImage = document.querySelector("#section__information__1");
    if (!sectionImage) {
        console.error("El elemento #section__information__1 no existe en el DOM.");
        return;
    }

    // Crea y configura la primera imagen
    let img1 = document.createElement("img");
    img1.setAttribute("src", "storage/img/icons/tesla1.gif");
    img1.classList.add("imagen-paginacion-roadster");
    img1.style.position = "absolute";
    img1.style.top = "100px";
    img1.style.left = "50px";
    img1.style.width = "300px";
    img1.style.height = "250px";
    img1.style.marginTop = "220px";
    img1.style.marginLeft = "-20px";
    img1.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";
    img1.style.borderRadius = "10%";
    sectionImage.appendChild(img1);

    console.log("Primera imagen añadida:", img1);

    // Crea y configura la segunda imagen
    let img2 = document.createElement("img");
    img2.setAttribute("src", "storage/img/icons/tesla2.gif"); // Cambia la ruta de la imagen
    img2.classList.add("imagen-paginacion-roadster");
    img2.style.position = "absolute";
    img2.style.top = "300px"; // Ajusta la posición vertical de la segunda imagen
    img2.style.left = "150px"; // Ajusta la posición horizontal de la segunda imagen
    img2.style.width = "300px"; // Ajusta el ancho de la segunda imagen
    img2.style.height = "250px";
    img2.style.marginTop = "20px";
    img2.style.marginLeft = "530px";
    img2.style.borderRadius = "10%";
    sectionImage.appendChild(img2);

    console.log("Segunda imagen añadida:", img2);
};








// -------------------Seccion de Core ------------------

const getAllCoreId = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCores(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let core = await getIdCore(e.target.id);
    console.log(core);

    await nameCore(core.serial);


};



export const paginationCores = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCores(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllCoreId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllCoreId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllCoreId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}













// -------------------Seccion de Crew ------------------

const getAllIDCrew = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCrew(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let crew = await getIdCrew(e.target.id);
    console.log(crew);

    await nameCrew(crew.name);
    await Crewimage([{ name: crew.name, image: crew.image }]);


};



export const paginationCrew = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCrew(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllIDCrew)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllIDCrew)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllIDCrew)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}







// -------------------Seccion de Dragon ------------------


const getAllIdDragon = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationDragons(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]

            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let dragons = await getIDDragons(e.target.id);
    console.log(dragons); 

    await nameDragon(dragons.name);
    await Dragonsimage(dragons.flickr_images);

};



export const paginationDragons = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllDragons(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllIdDragon)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllIdDragon)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllIdDragon)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}








// -------------------Seccion de History ------------------


const getAllIDHistory = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationHistory(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]

            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let history = await getIdHistory(e.target.id);
    console.log(history); // Verifica los datos en la consola

    await nameHistory(history.title);


};




export const paginationHistory = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllHistory(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllIDHistory)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllIDHistory)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllIDHistory)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}









// -------------------Seccion de Landpads ------------------


const getAllIdLandpads = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLandpads(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]

            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let landpads = await getIDlandpads(e.target.id);
    console.log(landpads);

    await nameLanpad(landpads.name);

    await LandpadsImage([landpads]);


};



export const paginationLandpads = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLandpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllIdLandpads)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllIdLandpads)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllIdLandpads)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,next] = div.children
    a1.click();
    return div;
}










// -------------------Seccion de Launches ------------------

const getIDLaunches = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunches(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]
            
            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');

    let Launches = await getIdLaunches(e.target.id);
    console.log(Launches);

    await nameLaunches(Launches.name);
    await Launchesimage([Launches]);

};



export const paginationLaunches = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunches(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getIDLaunches)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getIDLaunches)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getIDLaunches)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}







// -------------------Seccion de Launchpads ------------------


const getAllIdLaunchpads = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunchpads(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]

            a1.click();
        }, 200);
    }

    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let launchpad = await getIdlaunchpadsId(e.target.id);
    console.log(launchpad); 

    await nameLaunchpad(launchpad.name);
    await LaunchpadsImage ([launchpad]);
};




export const paginationLaunchpads = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunchpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getAllIdLaunchpads)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getAllIdLaunchpads)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getAllIdLaunchpads)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,next] = div.children
    a1.click();
    return div;
}










// -------------------Seccion de Payloads ------------------

const getPayloadsId = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationPayloads(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]

            a1.click();
        }, 200);
    }
    e.target.classList.add('activo');
  
    let payloads = await getpayloadsId(e.target.id);
    console.log(payloads);
  
    let namePayElement = await namePayload(payloads.name);

};



export const paginationPayloads = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllPayloads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getPayloadsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getPayloadsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getPayloadsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,next] = div.children
    a1.click();
    return div;
}








// -------------------Seccion de Ships ------------------

const getShipId = async (e) => {
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationShips(Number(e.target.dataset.page)))
        setTimeout(() => {
            let paginacion = document.querySelector("#paginacion");
            let a1 = paginacion.children[0].children[1]

            a1.click();
        }, 200);
    }

    let a = e.target.parentElement.children;
    for (let val of a) {
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let ships = await getIDShips(e.target.id);
    console.log(ships);

    await nameShip(ships.name);
    await Shipsimage(ships);

};



export const paginationShips = async(page=1, limit=3)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllShips(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getShipId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getShipId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getShipId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3, next] = div.children
    a1.click();
    return div;
}