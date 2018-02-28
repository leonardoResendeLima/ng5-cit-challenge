export const environment = {
	production: true,
	apiUrl: "http://gateway.marvel.com/v1/public/",
	methods: {
		getHeroes: "characters",
		getHero: "characters/"
	},
	apiAuthentication: {
		publicKey: "8d4fb63f32f1e6c7e6ea1614c26c306d",
		// TODO: This shoudn`t be here
		privateKey: "9155993b682a06759d001d624b9fb0b4e3084b1e",
		timestamp: "1000"
	}
};
