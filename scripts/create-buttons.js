export default class CreateButtons {
	constructor(
		sectionClass,
		buttonsClasses,
		uniqueId
	) {
		this.buttons = this.#fillSection(sectionClass, buttonsClasses, uniqueId);
	}

	#fillSection(sectionClass, buttonsClasses, uniqueId) {
		const sectionElement = document.createElement('div');
		sectionElement.classList.add(sectionClass);
		const buttonsList = buttonsClasses.map((buttonClass) => {
			const buttonElement = document.createElement('button');
			buttonElement.classList.add(buttonClass);
			buttonElement.setAttribute('data-custom-id', uniqueId);
			return buttonElement;
		});
		sectionElement.append(...buttonsList);
		return sectionElement;
	}
}