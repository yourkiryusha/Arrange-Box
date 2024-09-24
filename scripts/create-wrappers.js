export default class CreateWrappers {
	constructor(
		currentClass,
		uniqueId
	) {
		this.wrapper = this.#fillWrapper(
			currentClass,
			uniqueId
		);
	}

	static availableItems = [
		'Avocado', 'Kiwi', 'Grapes', 'Melon', 'Watermelon', 'Banana', 'Lime', 'Lemon', 'Peach', 'Mango'
	];

	#generateUniqueId() {
		return Math.floor(100 + Math.random() * 1000);
	}

	#createElement({ elementType, className, attributes, textContent }) {
		const newElement = document.createElement(elementType);
		newElement.classList.add(className);
		if (attributes) {
			Object.entries(attributes).forEach(([key, value]) => newElement.setAttribute(key, value));
		}
		if (textContent) {
			newElement.textContent = textContent.charAt(0).toUpperCase() + textContent.slice(1);
		}
		return newElement;
	}

	#shuffleItems(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	#fillBody(uniqueId) {
		const currentAvailableItems = this.#shuffleItems(CreateWrappers.availableItems);
		return currentAvailableItems.map((currentItem, index) => {
			const bodyItem = document.createElement('div');
			bodyItem.classList.add('body-item');
			bodyItem.textContent = currentItem;
			bodyItem.id = index.toString();
			bodyItem.setAttribute('data-id', this.#generateUniqueId().toString());
			bodyItem.setAttribute('data-custom-id', uniqueId);
			bodyItem.draggable = true;
			return bodyItem;
		});
	}

	#fillWrapper(currentClass, uniqueId) {
		const createWrapper = this.#createElement({
			elementType: 'div',
			className: `${currentClass}-wrapper`
		});
		const createHeader = this.#createElement({
			elementType: 'header',
			className: `${currentClass}-header`,
			textContent: currentClass
		});
		const createInput = this.#createElement({
			elementType: 'input',
			className: `${currentClass}-input`,
			attributes:	{ 'placeholder': 'Search by name', 'data-custom-id': `${uniqueId}` }
		});
		const createBody = this.#createElement({
			elementType: 'div',
			className: `${currentClass}-body`,
			attributes: { 'data-custom-id': `${uniqueId}` }
		});
		if (currentClass === 'available') {
			const createItems = this.#fillBody(uniqueId);
			createBody.append(...createItems);
		}
		createWrapper.append(createHeader, createInput, createBody);
		return createWrapper;
	}
}