window.addEventListener('load', function(){
    var apiKey = '7bdc01d41b64d4396399e9ee70b4980b';
    var estrenos = this.document.querySelector('.top-estrenos')
    
    fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)  //Peliculas 
      .then(function(response) {
        return response.json()
      })
      .then(function(information) {
          console.log(information);
          for (let index = 0; index < 20; index++) {
            const element = information.results[index];
            estrenos.innerHTML += `
        
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">

                <ul class="uk-slider-items uk-grid">
                    <li class="uk-width-3-4">
                        <div class="uk-panel">
                        <a href='detail.html?media_type=movie&id=${element.id}&title=${element.title}&img=${element.poster_path}&gnrid=${element.genre_ids}&resumen=${element.overview}&calificacion=${element.vote_average}'> <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=""> </a>
                            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                                <h3 class="uk-margin-remove">${element.title}</h3>
                            </div>
                        </div>
                    </li>
                </ul>
        
                
            </div>
        `
          }
      })

})