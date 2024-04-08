document.addEventListener("DOMContentLoaded", function() {
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
  
    var evolutionName = getParameterByName('evolucao');
    if (evolutionName) {
      document.title = `Página do ${evolutionName}`;
    }
  
    if (evolutionName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionName}`)
        .then(response => response.json())
        .then(data => {
          var img = document.createElement("img");
          img.src = data.sprites.front_default;
          img.alt = `Imagem de ${evolutionName}`;
          document.body.appendChild(img);
        })
        .catch(error => console.error('Erro ao obter dados do Pokémon:', error));
    }
  });
  
