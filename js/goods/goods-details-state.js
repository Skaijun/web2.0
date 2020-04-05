export class StateActiveProduct {
	constructor() {
		this.detailedProductAttr = JSON.parse(window.localStorage.getItem("detailedProductAttr")) || '';
	}

	saveProductStateInLocalStorage(attr) {
        window.localStorage.setItem("detailedProductAttr", JSON.stringify(attr));
	}

}