window.addEventListener('load', function(){
    let apiKey = '7bdc01d41b64d4396399e9ee70b4980b';
    let imgP = document.querySelector('.imgP')
    let titulo = document.querySelector('.titulo')

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




})