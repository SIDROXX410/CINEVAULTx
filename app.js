const API_KEY = "YOUR_TMDB_API_KEY";

async function getTrending() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();
  displayMovies(data.results);
}

function displayMovies(movies) {
  const container = document.getElementById("movies");
  container.innerHTML = "";

  movies.forEach(movie => {
    container.innerHTML += `
      <div class="movie-card">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
        <h4>${movie.title}</h4>
        <button onclick="addToWatchlist('${movie.title}')">❤️</button>
      </div>
    `;
  });
}

async function searchMovie() {
  const query = document.getElementById("search").value;
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await res.json();
  displayMovies(data.results);
}

function fakeAI() {
  const input = document.getElementById("ai-input").value.toLowerCase();

  let result = "Try: ";

  if (input.includes("sad")) {
    result += "Joker, Her, Manchester by the Sea";
  } else if (input.includes("action")) {
    result += "John Wick, Mad Max, Extraction";
  } else if (input.includes("romantic")) {
    result += "Titanic, La La Land, Before Sunrise";
  } else {
    result += "Inception, Interstellar, The Dark Knight";
  }

  document.getElementById("ai-result").innerText = result;
}

function addToWatchlist(movie) {
  let list = JSON.parse(localStorage.getItem("watchlist")) || [];
  list.push(movie);
  localStorage.setItem("watchlist", JSON.stringify(list));
  alert("Added to watchlist");
}

getTrending();
