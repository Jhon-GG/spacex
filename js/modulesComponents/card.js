
// -------------------Seccion de Rockets ------------------


export const imageRockets = async(flickr_images)=>{
    let section__image = document.querySelector("#section__image")
    let divs = [];
    flickr_images.forEach(val => {
        let div = document.createElement("div");
        div.classList.add("carousel__item")
        let img = document.createElement("img");
        img.setAttribute("src", val)
        img.setAttribute("referrerpolicy", "no-referrer")
        div.append(img)
        divs.push(div);
    });
    section__image.append(...divs)
    // <div class="carousel__item">
    //     <img src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg" referrerpolicy="no-referrer">
    // </div>
}





// -------------------Seccion de Crew ------------------


export const Crewimage = async (crewData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; 
    crewData.forEach(member => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");
        
        let img = document.createElement("img");
        img.setAttribute("src", member.image);
        img.setAttribute("alt", member.name); 
        img.setAttribute("referrerpolicy", "no-referrer");


        img.setAttribute("style", "width: 280px; height: 300px;"); 
        

        img.onload = function() {
            let imgWidth = this.width;
            let imgHeight = this.height;
            let containerWidth = section__image.offsetWidth;
            let containerHeight = section__image.offsetHeight;
            let marginLeft = (containerWidth - imgWidth) / 2;
            let marginTop = (containerHeight - imgHeight) / 2;
            
            this.style.marginLeft = marginLeft + "px";
            this.style.marginTop = marginTop + "px";
        };

        div.append(img);
        section__image.append(div);
    });
};






// // -------------------Seccion de Launches ------------------

export const Launchesimage = async (launchData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; 

    launchData.forEach(launch => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");

        let imageUrl = launch.links.patch.small || "storage/img/icons/land.gif"; // Verificar si hay una imagen, de lo contrario, usar elon.webp

        let img = document.createElement("img");
        img.setAttribute("src", imageUrl);
        img.setAttribute("alt", launch.name);
        img.setAttribute("referrerpolicy", "no-referrer");

        img.setAttribute("style", "width: 280px; height: 300px;"); 

        img.onload = function() {
            let imgWidth = this.width;
            let imgHeight = this.height;
            let containerWidth = section__image.offsetWidth;
            let containerHeight = section__image.offsetHeight;
            let marginLeft = (containerWidth - imgWidth) / 2;
            let marginTop = (containerHeight - imgHeight) / 2;

            this.style.marginLeft = marginLeft + "px";
            this.style.marginTop = marginTop + "px";
        };

        div.append(img);
        section__image.append(div);
    });
}




// // -------------------Seccion de Landpads ------------------


export const LandpadsImage = async (landpadsData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; 

    landpadsData.forEach(landpad => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");

        let img = document.createElement("img");
        img.setAttribute("src", landpad.images.large[0]); 
        img.setAttribute("alt", landpad.name); 
        img.setAttribute("referrerpolicy", "no-referrer");

        img.setAttribute("style", "width: 280px; height: 300px;"); 

        // Centrar la imagen
        img.onload = function() {
            let imgWidth = this.width;
            let imgHeight = this.height;
            let containerWidth = section__image.offsetWidth;
            let containerHeight = section__image.offsetHeight;
            let marginLeft = (containerWidth - imgWidth) / 2;
            let marginTop = (containerHeight - imgHeight) / 2;

            this.style.marginLeft = marginLeft + "px";
            this.style.marginTop = marginTop + "px";
        };

        div.append(img);
        section__image.append(div);
    });
};




// // -------------------Seccion de Dragons ------------------


export const Dragonsimage = async (flickr_images) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; 

    flickr_images.forEach((val) => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");
        let img = document.createElement("img");
        img.setAttribute("src", val);
        img.setAttribute("referrerpolicy", "no-referrer");
        img.style.marginTop = "70px"; 
        img.style.width = "320px"; 
        img.style.height = "300px"; 
        div.append(img);
        section__image.append(div);
    });


    if (flickr_images.length > 1) {
        $(document).ready(function() {
            $(section__image).slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            });
        });
    }
};




// // -------------------Seccion de Launchpads ------------------

export const LaunchpadsImage = async (launchpadsData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; 
  
    launchpadsData.forEach(launchpad => {
      let div = document.createElement("div");
      div.classList.add("carousel__item");
  
      let img = document.createElement("img");
      if (launchpad.images && launchpad.images.large && launchpad.images.large.length > 0) {
        img.setAttribute("src", launchpad.images.large[0]); 
      } else {
        img.setAttribute("src", "default_image.jpg"); 
      }
      img.setAttribute("alt", launchpad.name); 
      img.setAttribute("referrerpolicy", "no-referrer");
  

      img.setAttribute("style", "width: 280px; height: 300px;"); 
  
      // Centrar la imagen
      img.onload = function() {
        let imgWidth = this.width;
        let imgHeight = this.height;
        let containerWidth = section__image.offsetWidth;
        let containerHeight = section__image.offsetHeight;
        let marginLeft = (containerWidth - imgWidth) / 2;
        let marginTop = (containerHeight - imgHeight) / 2;
  
        this.style.marginLeft = marginLeft + "px";
        this.style.marginTop = marginTop + "px";
      };
  
      div.append(img);
      section__image.append(div);
    });
  }



//   // -------------------Seccion de Roadster ------------------


  export const Roadsterimage = async (flickr_images) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; // Limpiar el contenido existente

    flickr_images.forEach((val) => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");
        let img = document.createElement("img");
        img.setAttribute("src", val);
        img.setAttribute("referrerpolicy", "no-referrer");
        img.style.marginTop = "70px"; 
        img.style.width = "320px"; 
        img.style.height = "300px"; 
        div.append(img);
        section__image.append(div);
    });

    // Inicializar Slick Slider solo si hay más de una imagen
    if (flickr_images.length > 1) {
        $(document).ready(function() {
            $(section__image).slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            });
        });
    }
};





// // -------------------Seccion de Ships ------------------

export const Shipsimage = async (ship) => {
    console.log(ship);
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = "";

    let div = document.createElement("div");
    div.classList.add("carousel__item");

    let imageUrl = ship.image || "storage/img/icons/ships.gif"; 

    let img = document.createElement("img");
    img.setAttribute("src", imageUrl);
    img.setAttribute("alt", ship.name); 
    img.setAttribute("referrerpolicy", "no-referrer");

    // Establecer el tamaño de la imagen
    img.setAttribute("style", "width: 280px; height: 300px;"); 

    // Centrar la imagen
    img.onload = function() {
        let imgWidth = this.width;
        let imgHeight = this.height;
        let containerWidth = section__image.offsetWidth;
        let containerHeight = section__image.offsetHeight;
        let marginLeft = (containerWidth - imgWidth) / 2;
        let marginTop = (containerHeight - imgHeight) / 2;

        this.style.marginLeft = marginLeft + "px";
        this.style.marginTop = marginTop + "px";
    };

    div.append(img);
    section__image.append(div);
};