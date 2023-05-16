const posts = [
    {
        "id": 0,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// VARIABILI
const container = document.getElementById("container")


// Richiamo la funzione creazioneSchede
creazioneSchede()

// Seleziono tutti gli elementi con classe .like-button, avrò quindi un array
let button = document.querySelectorAll(".like-button")

// In questo array faccio un for per poterli analizzare tutti al click
for (let i = 0; i < (button.length); i++) {

    // Creo l'evento al click
    button[i].addEventListener("click", function () {
        let likesCounter = document.getElementById(`like-counter-${i}`);

        // Coloro la cella di blu
        button[i].classList.add("likeClick")

        // Aggiungo 1 likes
        let numeroLikes = parseInt(likesCounter.textContent)

        // Stampo nell'id selezionato
        likesCounter.innerHTML = numeroLikes+1

        // Aumento il valore dell'elemento 
        posts[i].likes++

    })

}

// FUNZIONI UTILI
function creazioneSchede() {

    // Ciclo all'interno dell'array
    posts.forEach(element => {

        // Dicharo la variabile scheda
        let scheda = ""

        // Destrutturo 
        let { id, content, media, author, likes, created } = element

        // Verifico se author.image presente o meno
        if (author.image != null) {
            scheda = `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
    
                    <!-- IMMAGINE (IMAGE AUTHOR) -->
                    <img class="profile-pic" src="${author.image}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
    
                    <!-- NAME AUTHOR -->
                    <div class="post-meta__author">${author.name}</div>
    
                    <!-- CREATED -->
                    <div class="post-meta__time">${created}</div>
                </div>                    
            </div>
        </div>
    
        <!-- CONTENT -->
        <div class="post__text">${content}</div>
        <div class="post__image">
    
            <!-- MEDIA -->
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}"
                    class="js-likes-counter">
                    <!-- NUMERO LIKES -->
                    ${likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
        }

        else {
            scheda = `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
    
                    <!-- IMMAGINE (IMAGE AUTHOR) -->
                    <img class="profile-pic" src="#" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
    
                    <!-- NAME AUTHOR -->
                    <div class="post-meta__author">${author.name}</div>
    
                    <!-- CREATED -->
                    <div class="post-meta__time">${created}</div>
                </div>                    
            </div>
        </div>
    
        <!-- CONTENT -->
        <div class="post__text">${content}</div>
        <div class="post__image">
    
            <!-- MEDIA -->
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}"
                    class="js-likes-counter">
                    <!-- NUMERO LIKES -->
                    ${likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
        }

        // Ad ogni ciclo appendo la scheda al container 
        container.innerHTML += scheda
    });
}

