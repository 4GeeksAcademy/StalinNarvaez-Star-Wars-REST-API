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
    }
  };
};

export default getState;
