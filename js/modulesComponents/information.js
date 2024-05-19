export const informationRockets = async(country, description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = country
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the coete"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}


// -------------seccion informacion de Company---------------------

export const companyId  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/empresa.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const founder  = async(founder)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/empresa.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Founder:"
    let small = document.createElement('small');
    small.textContent = founder
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}

export const summary  = async(summary)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/empresa.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Summary:"
    let small = document.createElement('small');
    small.textContent = summary
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const founded  = async(founded)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/empresa.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Founded:"
    let small = document.createElement('small');
    small.textContent = founded
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}

export const employees  = async(employees)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/empresa.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Employees:"
    let small = document.createElement('small');
    small.textContent = employees
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}

export const vehicles  = async(vehicles)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/empresa.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Vehicles:"
    let small = document.createElement('small');
    small.textContent = vehicles
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const launch_sites  = async(launch_sites)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/empresa.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch Sites:"
    let small = document.createElement('small');
    small.textContent = launch_sites
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const test_sites  = async(test_sites)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/empresa.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Test Sites:"
    let small = document.createElement('small');
    small.textContent = test_sites
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const cto_propulsion  = async(cto_propulsion)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/empresa.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Cto Propulsion:"
    let small = document.createElement('small');
    small.textContent = cto_propulsion
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const valuation  = async(valuation)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/empresa.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Valuation:"
    let small = document.createElement('small');
    small.textContent = valuation
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}


export const coo  = async(coo)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/empresa.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Coo:"
    let small = document.createElement('small');
    small.textContent = coo
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; // Devuelve el elemento div en lugar de agregarlo directamente al DOM
}

export const companytwitter = async (twitter) => {
    let div = document.createElement('div');
    div.classList.add('description__container');
  
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/empresa.png");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
  
    divFirst.append(img);
  
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Twitter:";
    let link = document.createElement('a');
    link.href = twitter; // Asigna el link de Twitter a la propiedad href del enlace
    link.target = "_blank"; // Abre el enlace en una nueva pestaña
    link.textContent = "Discover more here"; // Cambia el texto a "Discover more here"
    divLast.append(h3, link);
  
    div.append(divFirst, divLast);
  
    return div;
  };
  


// -------------seccion informacion de Roadster---------------------

export const RoadserId  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const orbit_type  = async(orbit_type)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Orbit Type:"
    let small = document.createElement('small');
    small.textContent = orbit_type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const launch_date_utc  = async(launch_date_utc)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch Date Utc:"
    let small = document.createElement('small');
    small.textContent = launch_date_utc
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const norad_id  = async(norad_id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Norad Id:"
    let small = document.createElement('small');
    small.textContent = norad_id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const inclination  = async(inclination)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "inclination:"
    let small = document.createElement('small');
    small.textContent = inclination
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const longitude  = async(longitude)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "longitude:"
    let small = document.createElement('small');
    small.textContent = longitude
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const period_days  = async(period_days)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Period Days:"
    let small = document.createElement('small');
    small.textContent = period_days
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const eccentricity  = async(eccentricity)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "eccentricity:"
    let small = document.createElement('small');
    small.textContent = eccentricity
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const detailsRoadster  = async(details)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Details:"
    let small = document.createElement('small');
    small.textContent = details
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const earth_distance_km  = async(earth_distance_km)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Earth Distance Km:"
    let small = document.createElement('small');
    small.textContent = earth_distance_km
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}



export const mars_distance_mi  = async(mars_distance_mi)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Mars Distance Mi:"
    let small = document.createElement('small');
    small.textContent = mars_distance_mi
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const speed_kph  = async(speed_kph)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Speed Kph:"
    let small = document.createElement('small');
    small.textContent = speed_kph
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const epoch_jd  = async(epoch_jd)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/car.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Epoch Jd:"
    let small = document.createElement('small');
    small.textContent = epoch_jd
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}



// -------------seccion informacion de Capsules---------------------

export const capsulesId = async (id) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/capsules.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:";
    let small = document.createElement('small');
    small.textContent = id;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};



export const capsulesLaunches = async (launches) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/capsules.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launches:";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    if (Array.isArray(launches) && launches.length > 0) {
        // Si hay más de una lanzamiento, creamos una matriz de lanzamientos
        let launchesArray = JSON.stringify(launches, null, 2);
        // Eliminamos el primer y último carácter (los corchetes)
        launchesArray = launchesArray.slice(1, -1);
        small.textContent = launchesArray;
    } else {
        // Si solo hay una lanzamiento, creamos un solo elemento de texto
        small.textContent = launches;
    }
    small.style.fontSize = "10px"; // Tamaño de fuente más pequeño
    divLast.appendChild(small);

    div.appendChild(divFirst);
    div.appendChild(divLast);

    return div;
};


export const capsulestype = async (type) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/capsules.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type:";
    let small = document.createElement('small');
    small.textContent = type;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


export const capsulesstatus = async (status) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/capsules.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status:";
    let small = document.createElement('small');
    small.textContent = status;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


export const capsulesSerial = async (serial) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/capsules.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Serial:";
    let small = document.createElement('small');
    small.textContent = serial;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


export const capsuleslast_update = async (last_update) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/capsules.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Last Update:";
    let small = document.createElement('small');
    small.textContent = last_update;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


export const capsulesland_landings = async (land_landings) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/capsules.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Land Landings:";
    let small = document.createElement('small');
    small.textContent = land_landings;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


export const capsuleswater_landings = async (water_landings) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/capsules.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Water Landings:";
    let small = document.createElement('small');
    small.textContent = water_landings;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


export const capsulesreuse_count = async (reuse_count) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/capsules.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Reuse Count:";
    let small = document.createElement('small');
    small.textContent = reuse_count;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};




// -------------seccion informacion de Cores---------------------

export const coresId = async (id) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/coree.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:";
    let small = document.createElement('small');
    small.textContent = id;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


export const coresstatus = async (status) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/coree.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status:";
    let small = document.createElement('small');
    small.textContent = status;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


export const coresserial = async (serial) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/coree.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Serial:";
    let small = document.createElement('small');
    small.textContent = serial;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


export const coresblock = async (block) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/coree.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Block:";
    divLast.append(h3);

    if (block === null) {
        let small = document.createElement('small');
        small.textContent = "No data"; // Mensaje en inglés
        small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
        divLast.appendChild(small);
    } else {
        let small = document.createElement('small');
        small.textContent = block;
        small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
        divLast.appendChild(small);
    }
    
    div.append(divFirst, divLast);

    return div; 
};


export const coresreuse_count = async (reuse_count) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/coree.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Reuse Count:";
    let small = document.createElement('small');
    small.textContent = reuse_count;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};

export const corertls_attempts = async (rtls_attempts) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/coree.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rtls Attempts:";
    let small = document.createElement('small');
    small.textContent = rtls_attempts;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


export const corertls_landings = async (rtls_landings) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/coree.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rtls Landings:";
    let small = document.createElement('small');
    small.textContent = rtls_landings;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


export const coreasds_attempts = async (asds_attempts) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/coree.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Asds Attempts:";
    let small = document.createElement('small');
    small.textContent = asds_attempts;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


export const corelast_update = async (last_update) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/coree.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Last Update:";
    let small = document.createElement('small');
    small.textContent = last_update;
    small.style.fontSize = "12px"; // Tamaño de fuente más pequeño
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
};


// -------------seccion informacion de Crew---------------------

export const crewId  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/astro.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const crewWikipedia = async (wikipedia) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/astro.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Wikipedia:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    // Crear un elemento de texto para el enlace de Wikipedia
    let readHereLink = document.createElement('span');
    readHereLink.textContent = "Read Here";
    readHereLink.style.color = "white"; // Establecer el color del texto en blanco
    readHereLink.style.marginLeft = "20px";
    readHereLink.style.cursor = "pointer"; // Cambiar el cursor al estilo de enlace
    readHereLink.style.textDecoration = "underline"; // Subrayar el texto
    readHereLink.style.fontSize = "9px";

    // Agregar un evento de clic para redirigir al enlace de Wikipedia
    readHereLink.addEventListener('click', () => {
        window.open(wikipedia, '_blank'); // Abrir enlace en una nueva pestaña
    });

    // Agregar el enlace al contenedor
    divLast.appendChild(readHereLink);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}



export const crewagency = async(agency)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/astro.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Agency:"
    let small = document.createElement('small');
    small.textContent = agency
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const crewLaunches = async (launches) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/capsules.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launches:";
    divLast.appendChild(h3);

    let small = document.createElement('small');
    if (Array.isArray(launches) && launches.length > 0) {
        // Si hay más de una lanzamiento, creamos una matriz de lanzamientos
        let launchesArray = JSON.stringify(launches, null, 2);
        // Eliminamos el primer y último carácter (los corchetes)
        launchesArray = launchesArray.slice(1, -1);
        small.textContent = launchesArray;
    } else {
        // Si solo hay una lanzamiento, creamos un solo elemento de texto
        small.textContent = launches;
    }
    small.style.fontSize = "10px"; // Tamaño de fuente más pequeño
    divLast.appendChild(small);

    div.appendChild(divFirst);
    div.appendChild(divLast);

    return div;
};



export const crewstatus = async(status)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/astro.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status:"
    let small = document.createElement('small');
    small.textContent = status
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


// -------------seccion informacion de History ---------------------

export const HistoryId  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/history.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const Historyevent_date_utc = async(event_date_utc)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/history.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Event Date Utc:"
    let small = document.createElement('small');
    small.textContent = event_date_utc
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const Historydetails = async(details)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/history.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Details:"
    let small = document.createElement('small');
    small.textContent = details
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const historyLinks = async (links) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; 
    divWrapper.style.alignItems = "center"; 
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/history.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Article:";
    h3.style.color = "white"; 
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    // Extraer el enlace del objeto "links"
    let articleLink = links.article;

    // Crear un enlace (<a>) para el artículo
    let articleAnchor = document.createElement('a');
    articleAnchor.textContent = "Read here";
    articleAnchor.style.color = "white"; 
    articleAnchor.style.marginLeft = "20px";
    articleAnchor.style.textDecoration = "underline"; 
    articleAnchor.href = articleLink; 
    articleAnchor.style.fontSize = "9px";
    articleAnchor.target = "_blank";

    divLast.appendChild(articleAnchor);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const Historyevent_date_unix = async(event_date_unix)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/history.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Event Date Unix:"
    let small = document.createElement('small');
    small.textContent = event_date_unix
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}



// -------------seccion informacion de Company---------------------

export const DragonsId  = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/dragonn.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID:"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const Dragonsdetails  = async(description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/dragonn.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Description:"
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const Dragonstype  = async(type)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/dragonn.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type:"
    let small = document.createElement('small');
    small.textContent = type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const Dragonsactive  = async(active)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/dragonn.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Active:"
    let small = document.createElement('small');
    small.textContent = active
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const Dragonscrew_capacity  = async(crew_capacity)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/dragonn.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Crew Capacity:"
    let small = document.createElement('small');
    small.textContent = crew_capacity
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const Dragonssidewall_angle_deg  = async(sidewall_angle_deg)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/dragonn.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Sidewall Angle Deg:"
    let small = document.createElement('small');
    small.textContent = sidewall_angle_deg
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}



export const Dragonsorbit_duration_yr  = async(orbit_duration_yr)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/dragonn.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Sidewall Angle Deg:"
    let small = document.createElement('small');
    small.textContent = orbit_duration_yr
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}


export const DragonWikipedia = async (wikipedia) => {
    let div = document.createElement('div');
    div.classList.add('description__container2');

    let divWrapper = document.createElement('div');
    divWrapper.style.display = "flex"; // Utilizar flexbox
    divWrapper.style.alignItems = "center"; // Alinear elementos verticalmente al centro
    divWrapper.style.marginBottom = "20px"; 
    divWrapper.style.marginLeft = "20px";

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/dragonn.png");
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");
    divFirst.appendChild(img);

    let divLast = document.createElement('div');

    let h3 = document.createElement('h3');
    h3.textContent = "Wikipedia:";
    h3.style.color = "white"; // Establecer el color del texto en blanco
    h3.style.marginLeft = "20px";
    divLast.appendChild(h3);

    // Crear un elemento de texto para el enlace de Wikipedia
    let readHereLink = document.createElement('span');
    readHereLink.textContent = "Read Here";
    readHereLink.style.color = "white"; // Establecer el color del texto en blanco
    readHereLink.style.marginLeft = "20px";
    readHereLink.style.cursor = "pointer"; // Cambiar el cursor al estilo de enlace
    readHereLink.style.textDecoration = "underline"; // Subrayar el texto
    readHereLink.style.fontSize = "9px";

    // Agregar un evento de clic para redirigir al enlace de Wikipedia
    readHereLink.addEventListener('click', () => {
        window.open(wikipedia, '_blank'); // Abrir enlace en una nueva pestaña
    });

    // Agregar el enlace al contenedor
    divLast.appendChild(readHereLink);

    divWrapper.appendChild(divFirst);
    divWrapper.appendChild(divLast);

    div.appendChild(divWrapper);

    return div;
}


export const Dragonsodry_mass_kg  = async(dry_mass_kg)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/dragonn.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Dry Mass Kg:"
    let small = document.createElement('small');
    small.textContent = dry_mass_kg
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}

export const Dragonsodry_mass_lb  = async(dry_mass_lb)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/dragonn.png")

    img.setAttribute("width", "50"); 
     img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Dry Mass Lb:"
    let small = document.createElement('small');
    small.textContent = dry_mass_lb
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    return div; 
}