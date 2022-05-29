import generatejoke from "./generatejoke"
import './styles/main.scss'
import laughing from "./assets/laughing.svg"
import share from "./share"


const laughImg=document.getElementById('laughImg')
laughImg.src=laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generatejoke)




generatejoke()