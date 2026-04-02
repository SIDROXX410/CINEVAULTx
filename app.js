const movies = [
  { title: "Inception", genre: "sci-fi", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" },
  { title: "Interstellar", genre: "sci-fi", poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { title: "The Dark Knight", genre: "action", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { title: "Joker", genre: "sad", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { title: "Fight Club", genre: "dark", poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg" },
  { title: "Titanic", genre: "romantic", poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
  { title: "La La Land", genre: "romantic", poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg" },
  { title: "Avengers: Endgame", genre: "action", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { title: "John Wick", genre: "action", poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg" },
  { title: "The Matrix", genre: "sci-fi", poster: "https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg" },
  { title: "Her", genre: "sad", poster: "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg" },
  { title: "Whiplash", genre: "motivating", poster: "https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBa3NM.jpg" },
  { title: "Gladiator", genre: "action", poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
  { title: "The Notebook", genre: "romantic", poster: "https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg" },
  { title: "Blade Runner 2049", genre: "dark", poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg" },
  { title: "Parasite", genre: "dark", poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { title: "Dune", genre: "sci-fi", poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
  { title: "The Shawshank Redemption", genre: "motivating", poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },
  { title: "Forrest Gump", genre: "motivating", poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg" },
  { title: "Deadpool", genre: "action", poster: "https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg" }
];

// LOAD
function loadMovies() {
  displayMovies(movies);
}

// DISPLAY
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

// SEARCH
function searchMovie() {
  const query = document.getElementById("search").value.toLowerCase();

  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(query)
  );

  displayMovies(filtered);
}

// AI
function fakeAI() {
  const input = document.getElementById("ai-input").value.toLowerCase();

  const filtered = movies.filter(m =>
    input.includes(m.genre)
  );

  if (filtered.length === 0) {
    document.getElementById("ai-result").innerText =
      "Try: Inception, Interstellar, Joker";
  } else {
    document.getElementById("ai-result").innerText =
      "Recommended: " + filtered.map(m => m.title).join(", ");
  }
}

// WATCHLIST
function addToWatchlist(movie) {
  let list = JSON.parse(localStorage.getItem("watchlist")) || [];
  list.push(movie);
  localStorage.setItem("watchlist", JSON.stringify(list));
  alert("Added to watchlist");
}

// START
loadMovies();
