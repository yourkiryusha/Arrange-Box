import CreateWrappers from './scripts/create-wrappers.js';
import CreateButtons from './scripts/create-buttons.js';
import ButtonsHandlers from './scripts/buttons-handlers.js';

class ArrangeBox {
	constructor() {
		this.arrangeBox = document.createElement('div');
		this.arrangeBox.classList.add('arrange-box');
		this.uniqueId = Date.now().toString();
		this.arrangeBox.setAttribute('data-custom-id', this.uniqueId);
		this.arrangeBoxes = document.querySelector('.arrange-boxes');
		this.arrangeBoxes.append(this.arrangeBox);

		if (!document.querySelector('.button-add-new-arrange-box')) {
			this.buttonAddNewArrangeBox = document.createElement('button');
			this.buttonAddNewArrangeBox.classList.add('button-add-new-arrange-box');
			this.buttonAddNewArrangeBox.addEventListener('click', () => new ArrangeBox());
			document.body.append(this.buttonAddNewArrangeBox);
		}

		this.availableButtons = new CreateButtons(
			'available-buttons',
			[
				'button-available-move-up',
				'button-available-move-top',
				'button-available-move-down',
				'button-available-move-bottom',
				'button-available-add-item',
				'button-available-sorting-ascending',
				'button-available-sorting-descending'
			],
			this.uniqueId
		);

		this.availableWrapper = new CreateWrappers(
			'available',
			this.uniqueId
		);

		this.transferButtons = new CreateButtons(
			'transfer-buttons',
			[
				'button-move-to-selected',
				'button-move-to-selected-all',
				'button-move-to-available',
				'button-move-to-available-all',
				'button-reset-arrange-box',
				'button-current-state-arrange-box'
			],
			this.uniqueId
		);

		this.selectedWrapper = new CreateWrappers(
			'selected',
			this.uniqueId
		);

		this.selectedButtons = new CreateButtons(
			'selected-buttons',
			[
				'button-selected-move-up',
				'button-selected-move-top',
				'button-selected-move-down',
				'button-selected-move-bottom'
			],
			this.uniqueId
		);

		this.arrangeBox.append(
			this.availableButtons.buttons,
			this.availableWrapper.wrapper,
			this.transferButtons.buttons,
			this.selectedWrapper.wrapper,
			this.selectedButtons.buttons
		);

		const buttonsHandlers = new ButtonsHandlers(
			this.uniqueId
		);
	}
}

const arrangeBox = new ArrangeBox();