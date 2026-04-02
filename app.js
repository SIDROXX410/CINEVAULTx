const movies = [
  {
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
  },
  {
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    title: "Joker",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    title: "Fight Club",
    poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
  }
];

// Load movies
function loadMovies() {
  displayMovies(movies);
}

// Display
function displayMovies(list) {
  const container = document.getElementById("movies");
  container.innerHTML = "";

  list.forEach(movie => {
    container.innerHTML += `
      <div class="movie-card">
        <img src="${movie.poster}" />
        <h4>${movie.title}</h4>
        <button onclick="addToWatchlist('${movie.title}')">❤️</button>
      </div>
    `;
  });
}

// Search
function searchMovie() {
  const query = document.getElementById("search").value.toLowerCase();

  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(query)
  );

  displayMovies(filtered);
}

// Fake AI
function fakeAI() {
  const input = document.getElementById("ai-input").value.toLowerCase();

  let result = "Try: ";

  if (input.includes("sad")) {
    result += "Joker, Fight Club";
  } else if (input.includes("space")) {
    result += "Interstellar";
  } else if (input.includes("action")) {
    result += "The Dark Knight";
  } else {
    result += "Inception";
  }

  document.getElementById("ai-result").innerText = result;
}

// Watchlist
function addToWatchlist(movie) {
  let list = JSON.parse(localStorage.getItem("watchlist")) || [];
  list.push(movie);
  localStorage.setItem("watchlist", JSON.stringify(list));
  alert("Added to watchlist");
}

// Start
loadMovies();
