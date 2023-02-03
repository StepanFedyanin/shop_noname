import axios from "axios";

// export class Katalog {
// 	static getKatalog(dispath) {
// 		axios.get('/api/pruductlist')
// 			.then(response => console.log(response))
// 	}
// }
export function Katalog() {
	fetch('/api/pruductlist')
		.then(response => response.json())
		.then(katalog => console.log(katalog))
}