import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";
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
import { 
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket
} from "./information.js";
import { 
    tableRocketColum1, 
    tableRocketColum2
} from "./tables.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum
} from "./inform.js";
import { 
    imageRockets 
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




export const paginationCapsules = async(page=1, limit=4)=>{  
     
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
    let [back, a1,a2,a3,a4, next] = div.children
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






export const paginationCompany = async() => {
    let data = await getCompany()
    await clear()

    await nameCompany(data.name);

}


export const paginationRoadster = async (e) => {
    let data = await getRoadster()
    await clear()

    await nameRoadsters(data.name);

}



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



export const paginationCores = async(page=1, limit=4)=>{  
     
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
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}




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


};



export const paginationCrew = async(page=1, limit=4)=>{  
     
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
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}



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

};



export const paginationDragons = async(page=1, limit=4)=>{  
     
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
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}






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




export const paginationHistory = async(page=1, limit=4)=>{  
     
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
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}









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


};



export const paginationLandpads = async(page=1, limit=4)=>{  
     
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
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}




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

};



export const paginationLaunches = async(page=1, limit=4)=>{  
     
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
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}



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

};




export const paginationLaunchpads = async(page=1, limit=4)=>{  
     
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
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}