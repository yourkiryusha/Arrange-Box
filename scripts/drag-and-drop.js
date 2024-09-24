export default class DragAndDrop {
	constructor(uniqueId) {
		this.availableBody = document.querySelector(
			`.available-body[data-custom-id="${uniqueId}"]`
		);
		this.selectedBody = document.querySelector(
			`.selected-body[data-custom-id="${uniqueId}"]`
		);
		this.currentElements = document.querySelectorAll(
			`.body-item[data-custom-id="${uniqueId}"]`
		);
		this.dragAndDropEventsListeners(uniqueId);
	}

	dragAndDropEventsListeners(uniqueId) {
		this.availableBody.addEventListener(
			'dragover', (event) => this.dragOver(event)
		);
		this.selectedBody.addEventListener(
			'dragover', (event) => this.dragOver(event)
		);
		this.availableBody.addEventListener(
			'drop', (event) => this.drop(event, uniqueId)
		);
		this.selectedBody.addEventListener(
			'drop', (event) => this.drop(event, uniqueId)
		);
		this.currentElements.forEach(currentElement => {
			currentElement.addEventListener(
				'dragstart', (event) => this.dragStart(event)
			);
		});
	}

	dragOver(event) {
		event.preventDefault();
	}

	dragStart(event) {
 	    const itemId = event.target.getAttribute('data-id');
		event.dataTransfer.setData('data-id', itemId);
	}

	drop(event, uniqueId) {
		const itemId = event.dataTransfer.getData('data-id');
		const elements = document.querySelectorAll(
			`.body-item[data-custom-id="${uniqueId}"]`
		);
		elements.forEach(currentElement => {
			if (currentElement.getAttribute('data-id') === itemId) {
				const rect = event.target.getBoundingClientRect();
				const mouseY = event.clientY;
				const isCenter = mouseY < rect.top + rect.height / 2;
				if (
					event.target.classList.contains('selected-body') ||
					event.target.classList.contains('available-body')
				) {
					event.target.append(currentElement);
				} else {
					if (isCenter) {
 						event.target.parentElement.insertBefore(currentElement, event.target);
					} else {
						const nextSibling = event.target.nextElementSibling;
						if (nextSibling) {
							event.target.parentElement.insertBefore(currentElement, nextSibling);
						} else {
							event.target.parentElement.append(currentElement);
						}
					}
				}
			}
		});
		const availableItems = Array.from(
			this.availableBody.querySelectorAll('.body-item')
		);
		availableItems.forEach((currentItem, index) => {
			currentItem.id = index;
		});
		const selectedItems = Array.from(
			this.selectedBody.querySelectorAll('.body-item')
		);
		selectedItems.forEach((currentItem, index) => {
			currentItem.id = index;
		});
	}
}