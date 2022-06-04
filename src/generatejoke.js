import axios from 'axios'



function generatejoke() {
     
const config={
     headers:{
         Accept:'application/json'
     }
}
axios.get('https://icanhazdadjoke.com', config).then((res) => {
    document.getElementById('joke').innerHTML = res.data.joke
    var scrt_var = res.data.id;
    var strLink = "https://icanhazdadjoke.com/j/" + scrt_var;
    document.getElementById("share").setAttribute("data-href",strLink);
    console.log(strLink)
    
  })
}

export default generatejoke