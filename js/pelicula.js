window.addEventListener('load',function(){
    let apiKey = '7bdc01d41b64d4396399e9ee70b4980b'
    let pelicula = document.querySelector('.pelicula')

    let detalle = location.search
    let detalleObj = new URLSearchParams(detalle)

    let id = detalleObj.get('id')

    
    fetch (`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
    
    .then(function(response) {
      return response.json()
    })

    .then(function(videoPeli){
      console.log(videoPeli);
      videoPeli.results.forEach(element =>{
          pelicula.innerHTML = `<iframe width="560" height="315" 
          src="https://www.youtube.com/embed/${element.key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      })

    })



    var recuperoStorage = localStorage.getItem('favoritos')

  if (recuperoStorage == null){
    favoritos = [];
  }
  else{
    favoritos = JSON.parse(recuperoStorage);
  }

  var boton = document.querySelector("#botonFavs")

  if(favoritos.includes(id)){
    boton.innerHTML = 'Terminar periodo de visualizacion!'
  }

  boton.addEventListener('click' , function(){

    if(favoritos.includes(id)==true){
        var index = favoritos.indexOf(id)
        favoritos.splice(index, 1)
    }
    else{
        favoritos.push(id)
        boton.innerHTML ="Terminar periodo de visualizacion!"
    }

    let infoParaStorage = JSON.stringify(favoritos)
    localStorage.setItem("favoritos", infoParaStorage)
    console.log(localStorage); 
  })





})