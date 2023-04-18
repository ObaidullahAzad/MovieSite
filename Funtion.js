const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    console.log(searchbox);
    const storeitems = document.getElementById("movielist")
    const movie = document.querySelectorAll(".moviecard")
    const pname = document.getElementsByTagName("a")

    for(var i=0; i< pname.length; i++){
        let match = movie[i].getElementsByTagName('a')[0];

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