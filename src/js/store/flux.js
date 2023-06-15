const apiUrl = "https://swapi.dev/api/";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white"
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white"
        }
      ],
      people: [],
      starships: [],
	    planets: [],
      favorite: []
    },
    actions: {
      apiGet: (endpoint) => {
        fetch(apiUrl + endpoint)
          .then(response => response.json())
          .then(data => setStore({ people: data.results }));

        fetch(apiUrl + "starships")
          .then(response => response.json())
          .then(data => setStore({ starships: data.results }));

		fetch(apiUrl + "planets")
			.then(response => response.json())
			.then(data => setStore({ planets: data.results }));
      },

    añadirFavoritos: (item) => {
      const store = getStore();
      const existeElemento = store.favorite.includes(item);
      if (!existeElemento) {
        setStore({
          favorite: [...store.favorite, item]
        });
      };
    },
    
    borrarFavoritos: (borrarItem) => {
        const store = getStore();
        const newFavorite = store.favorite.filter((item) => item !== borrarItem)
        setStore({
          favorite: newFavorite
        })
     },
    }
  };
};

export default getState;
