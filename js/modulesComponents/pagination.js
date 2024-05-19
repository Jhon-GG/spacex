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
    epoch_jd,
    capsulesId,
    capsulesLaunches,
    capsulestype,
    capsulesstatus,
    capsulesSerial,
    capsuleslast_update,
    capsulesland_landings,
    capsuleswater_landings,
    capsulesreuse_count,
    coresId,
    coresstatus,
    coresserial,
    coresblock,
    coresreuse_count,
    corertls_attempts,
    corertls_landings,
    coreasds_attempts,
    corelast_update,
    crewId,
    crewWikipedia,
    crewagency,
    crewLaunches,
    crewstatus,
    HistoryId,
    Historyevent_date_utc,
    Historydetails,
    historyLinks,
    Historyevent_date_unix,
    DragonsId,
    Dragonsdetails,
    Dragonstype,
    Dragonsactive,
    Dragonscrew_capacity,
    Dragonssidewall_angle_deg,
    Dragonsorbit_duration_yr,
    DragonWikipedia,
    Dragonsodry_mass_kg,
    Dragonsodry_mass_lb,
    ShipId,
    ShipsLaunches,
    Shipactive,
    Shipahome_port,
    Shiplegacy_id,
    Shiptype,
    shipsRoles,
    shipLink,
    shipimo,
    shipmmsi,
    shipabs,
    shipmass_kg,
    shipyear_built,
    shipstatus,
    payloadId,
    payloadlaunch,
    payloadtype,
    payloadreused,
    payloadcustomers,
    payloadnationalities,
    payloadmanufacturers,
    payloadorbit,
    payloadreference_system,
    payloadregime,
    payloadmean_anomaly,
    payloadepoch,
    payloadperiapsis_km,
    LandpadsId,
    LandpadsLaunches,
    Landpadsfull_name,
    Landpadstatus,
    Landpadstype,
    Landpadsdetails,
    Landpadslocality,
    Landpadsregion,
    Landpadslatitude,
    Landpadslongitude
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
    `;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = `

    `;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = `

    `;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = `

    `;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = `
 
    `;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = `

    `;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = `

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
  
    await nameCapsul(capsules.serial);


    let capsulesLaunchesElement = await capsulesLaunches(capsules.launches);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(capsulesLaunchesElement);


    let capsuleslast_updateElement = await capsuleslast_update(capsules.last_update);
    descriptionItem.append(capsuleslast_updateElement);

    let capsulesland_landingsElement = await capsulesland_landings(capsules.land_landings);
    descriptionItem.append(capsulesland_landingsElement);

    let capsuleswater_landingsElement = await capsuleswater_landings(capsules.water_landings);
    descriptionItem.append(capsuleswater_landingsElement);

    let capsulesreuse_countElement = await capsulesreuse_count(capsules.reuse_count);
    descriptionItem.append(capsulesreuse_countElement);



    let capsulesIdElement = await capsulesId(capsules.id); // Espera a que la función asíncrona se resuelva
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(capsulesIdElement);



    let capsulestypeElement = await capsulestype(capsules.type);
    information__2.appendChild(capsulestypeElement);


    let capsulesstatusElement = await capsulesstatus(capsules.status);
    information__2.appendChild(capsulesstatusElement);


    let capsulesSerialElement = await capsulesSerial(capsules.serial);
    information__2.appendChild(capsulesSerialElement);



    let sectionImage = document.querySelector("#section__information__1");

    // Crea y configura la primera imagen
    let img1 = document.createElement("img");
    img1.setAttribute("src", "storage/img/icons/capsule1.gif");
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
    img2.setAttribute("src", "storage/img/icons/capsule2.gif"); // Cambia la ruta de la imagen
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


    let img3 = document.createElement("img");
    img3.setAttribute("src", "storage/img/icons/capsule3.gif"); // Cambia la ruta de la imagen
    img3.classList.add("imagen-paginacion-roadster");
    img3.style.position = "absolute";
    img3.style.top = "300px"; // Ajusta la posición vertical de la segunda imagen
    img3.style.left = "150px"; // Ajusta la posición horizontal de la segunda imagen
    img3.style.width = "300px"; // Ajusta el ancho de la segunda imagen
    img3.style.height = "250px";
    img3.style.marginTop = "20px";
    img3.style.marginLeft = "210px";
    img3.style.borderRadius = "10%";
    sectionImage.appendChild(img3);

    console.log("Tercera imagen añadida:", img3);


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


    let coresblockElement = await coresblock(core.block);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(coresblockElement);


    let coresreuse_countElement = await coresreuse_count(core.reuse_count);
    descriptionItem.append(coresreuse_countElement);

    let corertls_attemptsElement = await corertls_attempts(core.rtls_attempts);
    descriptionItem.append(corertls_attemptsElement);

    let corertls_landingsElement = await corertls_landings(core.rtls_landings);
    descriptionItem.append(corertls_landingsElement);

    let coreasds_attemptsElement = await coreasds_attempts(core.asds_attempts);
    descriptionItem.append(coreasds_attemptsElement);

    let corelast_updateElement = await corelast_update(core.last_update);
    descriptionItem.append(corelast_updateElement);



    let coresIdElement = await coresId(core.id); // Espera a que la función asíncrona se resuelva
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(coresIdElement);

    let coresstatusElement = await coresstatus(core.status);
    information__2.appendChild(coresstatusElement);

    let coresserialElement = await coresserial(core.serial);
    information__2.appendChild(coresserialElement);


    let sectionImage = document.querySelector("#section__information__1");

    // Crea y configura la primera imagen
    let img1 = document.createElement("img");
    img1.setAttribute("src", "storage/img/icons/core1.gif");
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
    img2.setAttribute("src", "storage/img/icons/core2.gif"); // Cambia la ruta de la imagen
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


    let img3 = document.createElement("img");
    img3.setAttribute("src", "storage/img/icons/core3.gif"); // Cambia la ruta de la imagen
    img3.classList.add("imagen-paginacion-roadster");
    img3.style.position = "absolute";
    img3.style.top = "300px"; // Ajusta la posición vertical de la segunda imagen
    img3.style.left = "150px"; // Ajusta la posición horizontal de la segunda imagen
    img3.style.width = "300px"; // Ajusta el ancho de la segunda imagen
    img3.style.height = "250px";
    img3.style.marginTop = "20px";
    img3.style.marginLeft = "210px";
    img3.style.borderRadius = "10%";
    sectionImage.appendChild(img3);

    console.log("Tercera imagen añadida:", img3);

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



    let crewagencyElement = await crewagency(crew.agency);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(crewagencyElement);

    let crewWikipediaElement = await crewWikipedia(crew.wikipedia);
    descriptionItem.append(crewWikipediaElement);



    let crewIdElement = await crewId (crew.id); 
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(crewIdElement);

    let crewLaunchesElement = await crewLaunches (crew.launches); 
    information__2.appendChild(crewLaunchesElement);

    let crewstatusElement = await crewstatus (crew.status); 
    information__2.appendChild(crewstatusElement);


    let sectionImage = document.querySelector("#section__information__1");

    // Crea y configura la primera imagen
    let img1 = document.createElement("img");
    img1.setAttribute("src", "storage/img/icons/crew1.gif");
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
    img2.setAttribute("src", "storage/img/icons/crew2.gif"); // Cambia la ruta de la imagen
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



    let DragonsdetailsElement = await Dragonsdetails(dragons.description);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(DragonsdetailsElement);




    let DragonsIdElement = await DragonsId (dragons.id); 
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(DragonsIdElement);


    let DragonstypeElement = await Dragonstype (dragons.type); 
    information__2.appendChild(DragonstypeElement);


    let DragonsactiveElement = await Dragonsactive (dragons.active); 
    information__2.appendChild(DragonsactiveElement);

    let Dragonscrew_capacityElement = await Dragonscrew_capacity (dragons.crew_capacity); 
    information__2.appendChild(Dragonscrew_capacityElement);

    let Dragonssidewall_angle_degElement = await Dragonssidewall_angle_deg (dragons.sidewall_angle_deg); 
    information__2.appendChild(Dragonssidewall_angle_degElement);

    let Dragonsorbit_duration_yrElement = await Dragonsorbit_duration_yr (dragons.orbit_duration_yr); 
    information__2.appendChild(Dragonsorbit_duration_yrElement);

    let DragonWikipediaElement = await DragonWikipedia (dragons.wikipedia); 
    information__2.appendChild(DragonWikipediaElement);

    let Dragonsodry_mass_kgElement = await Dragonsodry_mass_kg (dragons.dry_mass_kg); 
    information__2.appendChild(Dragonsodry_mass_kgElement);

    let Dragonsodry_mass_lbElement = await Dragonsodry_mass_lb (dragons.dry_mass_lb); 
    information__2.appendChild(Dragonsodry_mass_lbElement);



    let sectionImage = document.querySelector("#section__information__1");

    // Crea y configura la primera imagen
    let img1 = document.createElement("img");
    img1.setAttribute("src", "storage/img/icons/dragon1.gif");
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
    img2.setAttribute("src", "storage/img/icons/dragon3.webp"); // Cambia la ruta de la imagen
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


    let HistorydetailsElement = await Historydetails(history.details);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(HistorydetailsElement);

    let historyLinksElement = await historyLinks(history.links);
    descriptionItem.appendChild(historyLinksElement);


    let HistoryIdElement = await HistoryId(history.id); // Espera a que la función asíncrona se resuelva
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(HistoryIdElement);


    let Historyevent_date_utcElement = await Historyevent_date_utc(history.event_date_utc);
    information__2.appendChild(Historyevent_date_utcElement);

    let Historyevent_date_unixElement = await Historyevent_date_unix(history.event_date_unix);
    information__2.appendChild(Historyevent_date_unixElement);


    let sectionImage = document.querySelector("#section__information__1");

    // Crea y configura la primera imagen
    let img1 = document.createElement("img");
    img1.setAttribute("src", "storage/img/icons/history1.gif");
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
    img2.setAttribute("src", "storage/img/icons/history2.webp"); // Cambia la ruta de la imagen
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


    let img3 = document.createElement("img");
    img3.setAttribute("src", "storage/img/icons/history3.gif"); // Cambia la ruta de la imagen
    img3.classList.add("imagen-paginacion-roadster");
    img3.style.position = "absolute";
    img3.style.top = "300px"; // Ajusta la posición vertical de la segunda imagen
    img3.style.left = "150px"; // Ajusta la posición horizontal de la segunda imagen
    img3.style.width = "300px"; // Ajusta el ancho de la segunda imagen
    img3.style.height = "250px";
    img3.style.marginTop = "20px";
    img3.style.marginLeft = "210px";
    img3.style.borderRadius = "10%";
    sectionImage.appendChild(img3);

    console.log("Tercera imagen añadida:", img3);

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


    let LandpadsLaunchesElement = await LandpadsLaunches(landpads.launches);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(LandpadsLaunchesElement);

    let LandpadsdetailsElement = await Landpadsdetails(landpads.details);
    descriptionItem.append(LandpadsdetailsElement);


    let LandpadsIdElement = await LandpadsId (landpads.id); 
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(LandpadsIdElement);

    let Landpadsfull_nameElement = await Landpadsfull_name (landpads.full_name);
    information__2.appendChild(Landpadsfull_nameElement); 


    let LandpadstatusElement = await Landpadstatus (landpads.status);
    information__2.appendChild(LandpadstatusElement); 

    let LandpadstypeElement = await Landpadstype (landpads.type);
    information__2.appendChild(LandpadstypeElement); 

    let LandpadslocalityElement = await Landpadslocality (landpads.locality);
    information__2.appendChild(LandpadslocalityElement); 

    let LandpadsregionElement = await Landpadsregion (landpads.region);
    information__2.appendChild(LandpadsregionElement); 

    let LandpadslatitudeElement = await Landpadslatitude (landpads.latitude);
    information__2.appendChild(LandpadslatitudeElement); 


    let LandpadslongitudeElement = await Landpadslongitude (landpads.longitude);
    information__2.appendChild(LandpadslongitudeElement); 


    let sectionImage = document.querySelector("#section__information__1");

    // Crea y configura la primera imagen
    let img1 = document.createElement("img");
    img1.setAttribute("src", "storage/img/icons/land1.gif");
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
    img2.setAttribute("src", "storage/img/icons/land2.webp"); // Cambia la ruta de la imagen
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


    let sectionImage = document.querySelector("#section__information__1");

    // Crea y configura la primera imagen
    let img1 = document.createElement("img");
    img1.setAttribute("src", "storage/img/icons/laun1.gif");
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
    img2.setAttribute("src", "storage/img/icons/laun2.gif"); // Cambia la ruta de la imagen
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


    let sectionImage = document.querySelector("#section__information__1");

    // Crea y configura la primera imagen
    let img1 = document.createElement("img");
    img1.setAttribute("src", "storage/img/icons/launc.gif");
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
    img2.setAttribute("src", "storage/img/icons/launc2.gif"); // Cambia la ruta de la imagen
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


    let payloadlaunchElement = await payloadlaunch(payloads.launch);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(payloadlaunchElement);

    let payloadcustomersElement = await payloadcustomers(payloads.customers);
    descriptionItem.append(payloadcustomersElement);

    let payloadnationalitiesElement = await payloadnationalities(payloads.nationalities);
    descriptionItem.append(payloadnationalitiesElement);

    let payloadmanufacturersElement = await payloadmanufacturers(payloads.manufacturers);
    descriptionItem.append(payloadmanufacturersElement);


    let payloadIdElement = await payloadId (payloads.id); 
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(payloadIdElement);

    let payloadtypeElement = await payloadtype (payloads.type); 
    information__2.appendChild(payloadtypeElement);

    let payloadreusedeElement = await payloadreused (payloads.reused); 
    information__2.appendChild(payloadreusedeElement);

    let payloadorbitElement = await payloadorbit (payloads.orbit); 
    information__2.appendChild(payloadorbitElement);

    let payloadreference_systemElement = await payloadreference_system (payloads.reference_system); 
    information__2.appendChild(payloadreference_systemElement);

    let payloadregimeElement = await payloadregime (payloads.regime); 
    information__2.appendChild(payloadregimeElement);


    let payloadmean_anomalyElement = await payloadmean_anomaly (payloads.mean_anomaly); 
    information__2.appendChild(payloadmean_anomalyElement);

    let payloadepochElement = await payloadepoch (payloads.epoch); 
    information__2.appendChild(payloadepochElement);


    let payloadperiapsis_kmElement = await payloadperiapsis_km (payloads.periapsis_km); 
    information__2.appendChild(payloadperiapsis_kmElement);
    

    let sectionImage = document.querySelector("#section__information__1");

    // Crea y configura la primera imagen
    let img1 = document.createElement("img");
    img1.setAttribute("src", "storage/img/icons/pa2.jpg");
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
    img2.setAttribute("src", "storage/img/icons/pay3.jpg"); // Cambia la ruta de la imagen
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


    let img3 = document.createElement("img");
    img3.setAttribute("src", "storage/img/icons/pay1.jpeg"); // Cambia la ruta de la imagen
    img3.classList.add("imagen-paginacion-roadster");
    img3.style.position = "absolute";
    img3.style.top = "300px"; // Ajusta la posición vertical de la segunda imagen
    img3.style.left = "150px"; // Ajusta la posición horizontal de la segunda imagen
    img3.style.width = "300px"; // Ajusta el ancho de la segunda imagen
    img3.style.height = "250px";
    img3.style.marginTop = "20px";
    img3.style.marginLeft = "210px";
    img3.style.borderRadius = "10%";
    sectionImage.appendChild(img3);

    console.log("Tercera imagen añadida:", img3);

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


    let ShipsLaunchesElement = await ShipsLaunches(ships.launches);
    let descriptionItem = document.querySelector(".description__item");
    descriptionItem.innerHTML = "";
    descriptionItem.append(ShipsLaunchesElement);

    let Shiplegacy_idElement = await Shiplegacy_id(ships.legacy_id);
    descriptionItem.append(Shiplegacy_idElement);

    let shipsRolesElement = await shipsRoles(ships.roles);
    descriptionItem.append(shipsRolesElement);


    let ShipIdElement = await ShipId (ships.id); 
    let information__2 = document.getElementById('information__2');
    information__2.innerHTML = "";
    information__2.appendChild(ShipIdElement);

    let ShipactiveElement = await Shipactive (ships.active); 
    information__2.appendChild(ShipactiveElement);

    let Shipahome_portElement = await Shipahome_port (ships.home_port); 
    information__2.appendChild(Shipahome_portElement);

    let ShiptypeElement = await Shiptype (ships.type); 
    information__2.appendChild(ShiptypeElement);

    let shipLinkElement = await shipLink (ships.link); 
    information__2.appendChild(shipLinkElement);

    let shipimoElement = await shipimo (ships.imo); 
    information__2.appendChild(shipimoElement);

    let shipmmsiElement = await shipmmsi (ships.mmsi); 
    information__2.appendChild(shipmmsiElement);

    let shipabsElement = await shipabs (ships.abs); 
    information__2.appendChild(shipabsElement);

    let shipmass_kgElement = await shipmass_kg (ships.mass_kg); 
    information__2.appendChild(shipmass_kgElement);

    let shipyear_builtElement = await shipyear_built (ships.year_built); 
    information__2.appendChild(shipyear_builtElement);

    let shipstatusElement = await shipstatus (ships.status); 
    information__2.appendChild(shipstatusElement);


    let sectionImage = document.querySelector("#section__information__1");

    // Crea y configura la primera imagen
    let img1 = document.createElement("img");
    img1.setAttribute("src", "storage/img/icons/ship1.gif");
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
    img2.setAttribute("src", "storage/img/icons/ship2.gif"); // Cambia la ruta de la imagen
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