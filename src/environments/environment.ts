// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	apiUrl: "http://gateway.marvel.com/v1/public/",
	methods: {
		getHeroes: "characters",
		getHero : "characters/"
	},
	apiAuthentication: {
		publicKey: "8d4fb63f32f1e6c7e6ea1614c26c306d",
		// TODO: This shoudn`t be here
		privateKey: "9155993b682a06759d001d624b9fb0b4e3084b1e",
		timestamp: "1000"
	}
};
