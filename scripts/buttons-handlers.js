import CreateWrappers from './create-wrappers.js';
import DragAndDrop from './drag-and-drop.js';

export default class ButtonsHandlers {
	constructor(
		uniqueId
	) {
		this.availableBody = document.querySelector(`.available-body[data-custom-id="${uniqueId}"]`);
		this.selectedBody = document.querySelector(`.selected-body[data-custom-id="${uniqueId}"]`);
		this.bodyItems = document.querySelectorAll(`.body-item[data-custom-id="${uniqueId}"]`);
		this.selected = [];
		this.availableButtonMoveToUp = document.querySelector(
			`.button-available-move-up[data-custom-id="${uniqueId}"]`
		);
		this.availableButtonMoveToTop = document.querySelector(
			`.button-available-move-top[data-custom-id="${uniqueId}"]`
		);
		this.availableButtonMoveToDown = document.querySelector(
			`.button-available-move-down[data-custom-id="${uniqueId}"]`
		);
		this.availableButtonMoveToBottom = document.querySelector(
			`.button-available-move-bottom[data-custom-id="${uniqueId}"]`
		);
		this.availableInputName = document.querySelector(
			`.available-input[data-custom-id="${uniqueId}"]`
		);
		this.selectedButtonMoveToUp = document.querySelector(
			`.button-selected-move-up[data-custom-id="${uniqueId}"]`
		);
		this.selectedButtonMoveToTop = document.querySelector(
			`.button-selected-move-top[data-custom-id="${uniqueId}"]`
		);
		this.selectedButtonMoveToDown = document.querySelector(
			`.button-selected-move-down[data-custom-id="${uniqueId}"]`
		);
		this.selectedButtonMoveToBottom = document.querySelector(
			`.button-selected-move-bottom[data-custom-id="${uniqueId}"]`
		);
		this.selectedInputName = document.querySelector(
			`.selected-input[data-custom-id="${uniqueId}"]`
		);
		this.transferButtonMoveToSelected = document.querySelector(
			`.button-move-to-selected[data-custom-id="${uniqueId}"]`
		);
		this.transferButtonMoveToSelectedAll = document.querySelector(
			`.button-move-to-selected-all[data-custom-id="${uniqueId}"]`
		);
		this.transferButtonMoveToAvailable = document.querySelector(
			`.button-move-to-available[data-custom-id="${uniqueId}"]`
		);
		this.transferButtonMoveToAvailableAll = document.querySelector(
			`.button-move-to-available-all[data-custom-id="${uniqueId}"]`
		);
		this.availableButtonSortingAscending = document.querySelector(
			`.button-available-sorting-ascending[data-custom-id="${uniqueId}"]`
		);
		this.availableButtonSortingDescending = document.querySelector(
			`.button-available-sorting-descending[data-custom-id="${uniqueId}"]`
		);
		this.availableButtonAddItem = document.querySelector(
			`.button-available-add-item[data-custom-id="${uniqueId}"]`
		);
		this.availableBodyItems = this.availableBody.querySelectorAll(
			`.body-item[data-custom-id="${uniqueId}"]`
		);
		this.buttonCurrentStateArrangeBox = document.querySelector(
			`.button-current-state-arrange-box[data-custom-id="${uniqueId}"]`
		);
		this.buttonResetArrangeBox = document.querySelector(
			`.button-reset-arrange-box[data-custom-id="${uniqueId}"]`
		);
		this.dragNdrop = new DragAndDrop(uniqueId);
		this.#buttonsEventsListeners(
			this.availableBody,
			this.selectedBody,
			this.availableInputName,
			this.selectedInputName,
			uniqueId
		);
	}

	#buttonsEventsListeners(availableBody, selectedBody, availableInput, selectedInput, uniqueId) {
		this.availableButtonMoveToUp.addEventListener(
			'click', event => this.#buttonMoveToUpHandler(event, availableBody)
		);
		this.availableButtonMoveToTop.addEventListener(
			'click', event => this.#buttonMoveToTopHandler(event, availableBody)
		);
		this.availableButtonMoveToDown.addEventListener(
			'click', event => this.#buttonMoveToDownHandler(event, availableBody)
		);
		this.availableButtonMoveToBottom.addEventListener(
			'click', event => this.#buttonMoveToBottomHandler(event, availableBody)
		);
		this.availableInputName.addEventListener(
			'keyup', () => this.#inputTextHandler(availableBody, availableInput)
		);
		this.selectedButtonMoveToUp.addEventListener(
			'click', event => this.#buttonMoveToUpHandler(event, selectedBody)
		);
		this.selectedButtonMoveToTop.addEventListener(
			'click', event => this.#buttonMoveToTopHandler(event, selectedBody)
		);
		this.selectedButtonMoveToDown.addEventListener(
			'click', event => this.#buttonMoveToDownHandler(event, selectedBody)
		);
		this.selectedButtonMoveToBottom.addEventListener(
			'click', event => this.#buttonMoveToBottomHandler(event, selectedBody)
		);
		this.selectedInputName.addEventListener(
			'keyup', () => this.#inputTextHandler(selectedBody, selectedInput)
		);
		this.transferButtonMoveToSelected.addEventListener(
			'click', () => this.#transferButtonMoveToSelectedOrAvailableHandler(availableBody, selectedBody)
		);
		this.transferButtonMoveToSelectedAll.addEventListener(
			'click', () => this.#transferButtonMoveToSelectedOrAvailableAllHandler(availableBody, selectedBody)
		);
		this.transferButtonMoveToAvailable.addEventListener(
			'click', () => this.#transferButtonMoveToSelectedOrAvailableHandler(selectedBody, availableBody)
		);
		this.transferButtonMoveToAvailableAll.addEventListener(
			'click', () => this.#transferButtonMoveToSelectedOrAvailableAllHandler(selectedBody, availableBody)
		);
		this.availableButtonSortingAscending.addEventListener(
			'click', () => this.#availableButtonSortingAscendingHandler()
		);
		this.availableButtonSortingDescending.addEventListener(
			'click', () => this.#availableButtonSortingDescendingHandler()
		);
		this.buttonCurrentStateArrangeBox.addEventListener(
			'click', () => this.#buttonCurrentStateArrangeBoxHandler()
		);
		this.availableButtonAddItem.addEventListener(
			'click', () => this.#availableButtonAddItemHandler(uniqueId)
		);
		this.buttonResetArrangeBox.addEventListener(
			'click', () => this.#buttonResetArrangeBoxHandler(uniqueId)
		);
		this.bodyItems.forEach(currentItem => {
			currentItem.addEventListener('click', (event) => this.#selectElementHandler(event, uniqueId));
		});
	}

	#updateIdCurrentContainer(currentBody) {
		const currentItems = Array.from(
			currentBody.querySelectorAll('.body-item')
		);
		currentItems.forEach((currentItem, index) => {
			currentItem.id = index;
		});
	}

	#selectElementHandler(event, uniqueId) {
		if (!event.target.classList.contains('active'))  {
			const currentActiveItem = document.querySelector(`.body-item.active[data-custom-id="${uniqueId}"]`);
			if (currentActiveItem) {
				currentActiveItem.classList.remove('active');
				this.selected = [];
			}
			event.target.classList.add('active');
			this.selected.push(event.target);
		} else {
			event.target.classList.remove('active');
			this.selected = [];
		}
	}

	#buttonMoveToUpHandler(event, currentBody) {
		const currentItems = Array.from(currentBody.querySelectorAll('.body-item'));
		const isActiveItem = currentBody.querySelector('.body-item.active');
		if (currentItems.length > 0 && event.target && isActiveItem) {
			const currentId = +this.selected[0].id;
			if (currentId !== 0) {
				const updateId = currentId - 1;
				currentItems[currentId].id = updateId;
				currentItems[updateId].id = currentId;
				currentBody.insertBefore(currentItems[currentId], currentItems[updateId]);
				this.selected[0].scrollIntoView({ block: 'center', behavior: 'smooth' });
			}
		}
	}

	#buttonMoveToTopHandler(event, currentBody) {
		const currentItems = Array.from(currentBody.querySelectorAll('.body-item'));
		const isActiveItem = currentBody.querySelector('.body-item.active');
		if (currentItems.length > 0 && event.target && isActiveItem) {
			const currentId = +this.selected[0].id;
			if (currentId !== 0) {
				currentBody.insertBefore(currentItems[currentId], currentItems[0]);
				this.selected[0].scrollIntoView({ block: 'center', behavior: 'smooth' });
				this.#updateIdCurrentContainer(currentBody);
			}
		}
	}

	#buttonMoveToDownHandler(event, currentBody) {
		const currentItems = Array.from(currentBody.querySelectorAll('.body-item'));
		const isActiveItem = currentBody.querySelector('.body-item.active');
		if (currentItems.length > 0 && event.target && isActiveItem) {
			const currentId = +this.selected[0].id;
			if (currentId !== currentItems.length - 1) {
				const updateId = currentId + 1;
				currentItems[currentId].id = updateId;
				currentItems[updateId].id = currentId;
				currentBody.insertBefore(currentItems[updateId], currentItems[currentId]);
				this.selected[0].scrollIntoView({ block: 'center', behavior: 'smooth' });
			}
		}
	}

	#buttonMoveToBottomHandler(event, currentBody) {
		const currentItems = Array.from(currentBody.querySelectorAll('.body-item'));
		const isActiveItem = currentBody.querySelector('.body-item.active');
		if (currentItems.length > 0 && event.target && isActiveItem) {
			const currentId = +this.selected[0].id;
			if (currentId !== currentItems.length - 1) {
				currentBody.append(this.selected[0]);
				this.selected[0].scrollIntoView({ block: 'center', behavior: 'smooth' });
			}
			this.#updateIdCurrentContainer(currentBody);
		}
	}

	#inputTextHandler(currentBody, inputClass) {
		const availableBodyList = Array.from(currentBody.querySelectorAll('.body-item'));
		const inputText = inputClass.value.toLowerCase();
		availableBodyList.forEach(currentItem => {
			const itemName = currentItem.textContent.toLowerCase();
			if (itemName.includes(inputText)) {
				currentItem.style.display = 'flex';
			} else {
				currentItem.style.display = 'none';
			}
		});
	}

	#transferButtonMoveToSelectedOrAvailableHandler(currentBody, crossBody) {
		const isActiveItem = currentBody.querySelector('.body-item.active');
		if (isActiveItem) {
			crossBody.append(this.selected[0]);
			this.selected[0].classList.remove('active');
			this.#updateIdCurrentContainer(currentBody);
			this.#updateIdCurrentContainer(crossBody);
			this.selected = [];
		}
	}

	#transferButtonMoveToSelectedOrAvailableAllHandler(currentBody, crossBody) {
		currentBody.querySelectorAll('.body-item').forEach(currentItem => {
			crossBody.append(currentItem);
			currentItem.classList.remove('active');
		});
		this.#updateIdCurrentContainer(crossBody);
		this.selected = [];
	}

	#availableBodyListNames() {
		return Array.from(this.availableBody.querySelectorAll('.body-item'))
			.map(currentItem => currentItem.textContent);
	}

	#availableBodyChangedList(availableBodyListNames) {
		this.selected = [];
		const availableItems = Array.from(this.availableBody.querySelectorAll('.body-item'));
		const isSelected = new Set();
		availableItems.forEach(currentItem => {
			if (currentItem.classList.contains('active')) {
				isSelected.add(currentItem.textContent);
				currentItem.classList.remove('active');
			}
		});
		availableItems.forEach((currentItem, index) => {
			currentItem.textContent = availableBodyListNames[index];
			if (isSelected.has(availableBodyListNames[index]) && this.selected.length === 0) {
				currentItem.classList.add('active');
				this.selected.push(currentItem);
				this.selected[0].scrollIntoView({ block: 'center', behavior: 'smooth' });
			}
		});
	}

	#availableButtonSortingAscendingHandler() {
		const sortedList = this.#availableBodyListNames().sort();
		this.#availableBodyChangedList(sortedList);
	}

	#availableButtonSortingDescendingHandler() {
		const sortedList = this.#availableBodyListNames().sort((a, b) => b.localeCompare(a));
		this.#availableBodyChangedList(sortedList);
	}

	#buttonCurrentStateArrangeBoxHandler() {
		const selectedBodyListItems = Array.from(this.selectedBody.querySelectorAll('.body-item'))
			.map(currentItem => currentItem.textContent);
		console.log(selectedBodyListItems);
	}

	#createNewItem(itemName, uniqueId) {
		const newItemContainer = document.createElement('div');
		const randomId = Math.floor(100 + Math.random() * 1000).toString();
		const availableBodyList = Array.from(this.availableBodyItems);
		newItemContainer.classList.add('body-item');
		newItemContainer.innerHTML = itemName;
		newItemContainer.id = availableBodyList.length.toString();
		newItemContainer.setAttribute('data-id', randomId.toString());
		newItemContainer.setAttribute('data-custom-id', uniqueId);
		newItemContainer.draggable = true;
		return newItemContainer;
	}

	#availableButtonAddItemHandler(uniqueId) {
		const randomItems = ['Cherry', 'Blueberry', 'Blackberry', 'Strawberry', 'Raspberry'];
		const randomIndex = Math.floor(Math.random() * randomItems.length);
		const itemName = randomItems[randomIndex];
		const newItem = this.#createNewItem(itemName, uniqueId);
		this.availableBody.append(newItem);
		this.#updateIdCurrentContainer(this.availableBody);
		newItem.addEventListener('dragstart', (event) => this.dragNdrop.dragStart(event));
		newItem.addEventListener('click', (event) => this.#selectElementHandler(event, uniqueId));
	}

	#buttonResetArrangeBoxHandler(uniqueId) {
		this.selected = [];
		this.availableBody.textContent = '';
		this.selectedBody.textContent = '';
		const availableItems = CreateWrappers.availableItems;
		const originalItems = availableItems.map((currentItem, index) => {
			const newItem = document.createElement('div');
			newItem.classList.add('body-item');
			newItem.textContent = currentItem;
			newItem.id = index.toString();
			newItem.setAttribute('data-id', Math.floor(100 + Math.random() * 1000).toString());
			newItem.setAttribute('data-custom-id', uniqueId);
			newItem.draggable = true;
			newItem.addEventListener('dragstart', (event) => this.dragNdrop.dragStart(event));
			newItem.addEventListener('click', (event) => this.#selectElementHandler(event, uniqueId));
			return newItem;
		});
		this.availableBody.append(...originalItems);
	}
}