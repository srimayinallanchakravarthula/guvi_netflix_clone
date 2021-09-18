var movies = {
    mostPopular: [{
            "@type": "imdb.api.title.title",
            "id": "/title/tt9376612/",
            "image": {
                "height": 2500,
                "id": "/title/tt9376612/images/rm4274650881",
                "url": "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                "width": 1688
            },
            "runningTimeInMinutes": 132,
            "title": "Shang-Chi and the Legend of the Ten Rings",
            "titleType": "movie",
            "year": 2021
        },
        {
            "@type": "imdb.api.title.title",
            "disambiguation": "I",
            "id": "/title/tt10155932/",
            "image": {
                "height": 1500,
                "id": "/title/tt10155932/images/rm976551681",
                "url": "https://m.media-amazon.com/images/M/MV5BZTk3ZTEzNGUtZTcwYy00NmRmLWFhMGYtZjA4NWY1ZWI4MzMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                "width": 1013
            },
            "runningTimeInMinutes": 113,
            "title": "Cinderella",
            "titleType": "movie",
            "year": 2021
        },
        {
            "@type": "imdb.api.title.title",
            "id": "/title/tt10838180/",
            "image": {
                "height": 4096,
                "id": "/title/tt10838180/images/rm773124865",
                "url": "https://m.media-amazon.com/images/M/MV5BMmRmZTA3NzAtN2RlZC00Mjc1LTllZDQtNDc0YTYzZmM4ZTQ1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
                "width": 2764
            },
            "title": "The Matrix Resurrections",
            "titleType": "movie",
            "year": 2021
        },
        {
            "@type": "imdb.api.title.title",
            "id": "/title/tt1160419/",
            "image": {
                "height": 755,
                "id": "/title/tt1160419/images/rm2910452737",
                "url": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                "width": 509
            },
            "runningTimeInMinutes": 155,
            "title": "Dune",
            "titleType": "movie",
            "year": 2021
        },
        {
            "@type": "imdb.api.title.title",
            "disambiguation": "I",
            "id": "/title/tt3811906/",
            "image": {
                "height": 4096,
                "id": "/title/tt3811906/images/rm3826383105",
                "url": "https://m.media-amazon.com/images/M/MV5BYTc0NWIwOTYtNzEwYi00YmUyLTlmYWYtYjJiZjRjN2RjMjAxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
                "width": 2764
            },
            "runningTimeInMinutes": 111,
            "title": "Malignant",
            "titleType": "movie",
            "year": 2021
        }
    ]
}

const movieContent = document.createElement('div');
movieContent.className = "movie-content";

var mostPopular = movies.mostPopular;
async function displayPopularMovies() {
    var mostPopularMovies = movies.mostPopular;
    const divPopularMovies = document.createElement("div")
    divPopularMovies.className = "movies most-popular-movies"
    mostPopularMovies.forEach(movie => {
        const img = document.createElement('img');
        img.setAttribute('src', movie.image.url);
        img.setAttribute('onerror', "this.onerror=null; this.src= 'https://post.healthline.com/wp-content/uploads/2020/04/makeup_composition_overhead-732x549-thumbnail.jpg'");
        img.setAttribute('alt', "");
        img.style.height = "10rem";
        img.style.width = "8rem";

        const productImg = document.createElement('div');
        productImg.className = 'product-img';
        productImg.append(img);

        const h3 = document.createElement('p');
        h3.innerText = movie.title;

        const h5 = document.createElement('p');
        h5.innerText = movie.year;

        const infoContainer = document.createElement("div");
        infoContainer.style.padding = "10px";
        infoContainer.append(h3, h5);

        const container = document.createElement("div");
        container.className = 'product-container';

        container.append(productImg, infoContainer);
        divPopularMovies.append(container)
    });

    const heading = document.createElement("p");
    heading.className = "movie-type";
    heading.innerText = "Most Popular Movies"

    movieContent.append(heading, divPopularMovies);

}

displayPopularMovies().catch((error) => console.log(error))

var tvshows = {
    mostPopular: [{
            "@type": "imdb.api.title.title",
            "id": "/title/tt6468322/",
            "image": {
                "height": 2222,
                "id": "/title/tt6468322/images/rm2776628993",
                "url": "https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
                "width": 1500
            },
            "runningTimeInMinutes": 70,
            "nextEpisode": "/title/tt6807344/",
            "numberOfEpisodes": 41,
            "seriesEndYear": 2021,
            "seriesStartYear": 2017,
            "title": "Money Heist",
            "titleType": "tvSeries",
            "year": 2017
        },
        {
            "@type": "imdb.api.title.title",
            "id": "/title/tt10888878/",
            "image": {
                "height": 2222,
                "id": "/title/tt10888878/images/rm2400319745",
                "url": "https://m.media-amazon.com/images/M/MV5BMTU2OGI4YWItMTYxZi00MzU3LThiYjItZTcyNDMyZjI1MDNmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
                "width": 1500
            },
            "runningTimeInMinutes": 368,
            "nextEpisode": "/title/tt11389804/",
            "numberOfEpisodes": 8,
            "seriesEndYear": 2021,
            "seriesStartYear": 2021,
            "title": "Clickbait",
            "titleType": "tvMiniSeries",
            "year": 2021
        },
        {
            "@type": "imdb.api.title.title",
            "id": "/title/tt10168312/",
            "image": {
                "height": 2500,
                "id": "/title/tt10168312/images/rm4202035201",
                "url": "https://m.media-amazon.com/images/M/MV5BOGYwYTA5M2QtMTk3Zi00ZjdjLWFkNDUtYzg4MjM0ZGI0MGU1XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
                "width": 1687
            },
            "nextEpisode": "/title/tt10670784/",
            "numberOfEpisodes": 18,
            "seriesStartYear": 2021,
            "title": "What If...?",
            "titleType": "tvSeries",
            "year": 2021
        },
        {
            "@type": "imdb.api.title.title",
            "id": "/title/tt2861424/",
            "image": {
                "height": 1920,
                "id": "/title/tt2861424/images/rm209331968",
                "url": "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
                "width": 1280
            },
            "runningTimeInMinutes": 23,
            "nextEpisode": "/title/tt2169080/",
            "numberOfEpisodes": 52,
            "seriesStartYear": 2013,
            "title": "Rick and Morty",
            "titleType": "tvSeries",
            "year": 2013
        },
        {
            "@type": "imdb.api.title.title",
            "id": "/title/tt1520211/",
            "image": {
                "height": 6000,
                "id": "/title/tt1520211/images/rm2446196481",
                "url": "https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                "width": 3986
            },
            "runningTimeInMinutes": 44,
            "nextEpisode": "/title/tt1589921/",
            "numberOfEpisodes": 177,
            "seriesEndYear": 2022,
            "seriesStartYear": 2010,
            "title": "The Walking Dead",
            "titleType": "tvSeries",
            "year": 2010
        }
    ]
}

async function displayPopularTVShows() {
    var mostPopularMovies = tvshows.mostPopular;
    const divPopularMovies = document.createElement("div")
    divPopularMovies.className = "movies most-popular-tvshows"
    mostPopularMovies.forEach(movie => {
        const img = document.createElement('img');
        img.setAttribute('src', movie.image.url);
        img.setAttribute('onerror', "this.onerror=null; this.src= 'https://post.healthline.com/wp-content/uploads/2020/04/makeup_composition_overhead-732x549-thumbnail.jpg'");
        img.setAttribute('alt', "");
        img.style.height = "10rem";
        img.style.width = "8rem";

        const productImg = document.createElement('div');
        productImg.className = 'product-img';
        productImg.append(img);

        const h3 = document.createElement('p');
        h3.innerText = movie.title;

        const h5 = document.createElement('p');
        h5.innerText = movie.year;

        const infoContainer = document.createElement("div");
        infoContainer.style.padding = "10px";
        infoContainer.append(h3, h5);

        const container = document.createElement("div");
        container.className = 'product-container';

        container.append(productImg, infoContainer);
        divPopularMovies.append(container)
    });

    const heading = document.createElement("p");
    heading.className = "movie-type";
    heading.innerText = "Most Popular TV Shows"

    movieContent.append(heading, divPopularMovies);

}

displayPopularTVShows().catch((error) => console.log(error))

document.body.append(movieContent)