const API_KEY = 'api_key=cf131c7981f6da134ce771dd9ed09ba7';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');
getMovies(API_URL);

function getMovies(url){
    
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.results)
        showMovies(data.results)
    })
}


console.log(main)
function showMovies(data) {
    main.innerHTML=''

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        
        `

        main.appendChild(movieEl)

    })
}


function getColor(vote){
    if(vote>=8){
        return 'green'
    }else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }
}
const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    console.log(searchbox);
    const storeitems = document.getElementById("main")
    const movie = document.querySelectorAll(".movie")
    const pname = document.getElementsByTagName("h3")

    for(var i=0; i< pname.length; i++){
        let match = movie[i].getElementsByTagName('h3')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
               movie[i].style.display = ""; 
            } else{
                movie[i].style.display="none";
            }
        }
    }

}