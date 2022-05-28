import axios from 'axios'



function generatejoke() {
     
const config={
     headers:{
         Accept:'application/json'
     }
}
axios.get('https://icanhazdadjoke.com', config).then((res) => {
    document.getElementById('joke').innerHTML = res.data.joke
    
    return res.data.joke;
  })
}

export default generatejoke