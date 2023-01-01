import { initFederation } from "./core/federation";

(async () => {

	await initFederation();

	await import('./bootstrap');

})();
