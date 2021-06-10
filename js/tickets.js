window.addEventListener('load', function(){
    let apiKey = '7bdc01d41b64d4396399e9ee70b4980b';
    var recuperoStorage = localStorage.getItem('favoritos')
    
    favoritos = JSON.parse(recuperoStorage)
    console.log(favoritos)
    
    var separacion = document.querySelector('.top-estrenos')
    for (let index = 0; index < favoritos.length; index++) {   
        const element = favoritos[index];
        fetch (`https://api.themoviedb.org/3/movie/${element}?api_key=${apiKey}&language=en-US`)  //Peliculas 
          .then(function(response) {
            return response.json()
          })
          .then(function(information){
            console.log(information);
            separacion.innerHTML += `
            
                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">
    
                    <ul class="uk-slider-items uk-grid">
                        <li class="uk-width-3-4">
                            <div class="uk-panel">
                            <a href='pelicula.html?media_type=movie&id=${information.id}&title=${information.title}&img=${information.poster_path}&gnrid=${information.genre_ids}&resumen=${information.overview}&calificacion=${information.vote_average}'> <img src="https://image.tmdb.org/t/p/w500${information.poster_path}" alt=""> </a>
                                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                    <h3 class="uk-margin-remove">${information.title}</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
            
                    
                </div>
            `
              
          })
        
          .catch(function(error) {
            //console.log("Error: " + error);
        })
    }
}) //NO BORRAR