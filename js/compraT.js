window.addEventListener('load', function(){
    let apiKey = '7bdc01d41b64d4396399e9ee70b4980b';
    let imgP = document.querySelector('.imgP')
    let titulo = document.querySelector('.titulo')
    let botones = document.querySelector('.botones')

    let detalle = location.search
    let detalleObj = new URLSearchParams(detalle)

    let id = detalleObj.get('id')

    fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(function(response){
        return response.json()
    })
    .then(function(infoP){
        console.log(infoP);
        imgP.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${infoP.poster_path}">`
        titulo.innerHTML = `${infoP.title}`
      })
      
      botones.innerHTML = `<a href="tickets.html?id=${id}">
                              <button class='boton' type='submit' name='button' id='botonFavs'>Comprar tus tickets</button>
                          </a>
                          <a href='https://www.pedidosya.com.ar/'>
                              <button class='boton' type='submit' name='button' class='botonFavs'>Comprar Pochoclos</button> 
                          </a>`

    //lleva pelicula a mis tickets
  var recuperoStorage = localStorage.getItem('favoritos')

  if (recuperoStorage == null){
    favoritos = [];
  }
  else{
    favoritos = JSON.parse(recuperoStorage);
  }

  var boton = document.querySelector("#botonFavs")

  if(favoritos.includes(id)){
    boton.innerHTML = 'Ya se encuentra en tus tickets!'
  }

  boton.addEventListener('click' , function(){

    if(favoritos.includes(id)==true){
        var index = favoritos.indexOf(id)
        favoritos.splice(index, 1)
        boton.innerHTML="Comprar Tickets"
    }
    else{
        favoritos.push(id)
        boton.innerHTML ="Ya se encuentra en tus tickets!"
    }

    let infoParaStorage = JSON.stringify(favoritos)
    localStorage.setItem("favoritos", infoParaStorage)
    console.log(localStorage); 
  })

})