export class StateActiveProduct {
	constructor() {
		this.detailedProductAttr = JSON.parse(window.localStorage.getItem("detailedProductAttr")) || '';
	}

	saveProductStateInLocalStorage(attr) {
        window.localStorage.setItem("detailedProductAttr", JSON.stringify(attr));
	}

	removeProductStateFromLocalStorage() {
		if (JSON.parse(window.localStorage.getItem("detailedProductAttr")) != null) {
			window.localStorage.removeItem("detailedProductAttr");
		}
	}

}