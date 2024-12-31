import {popupClassesConfig} from "../utils/constants";

const openModal = popup => {
	popup.classList.add(popupClassesConfig.animatedPopupClass);
	setTimeout(() => {
		popup.classList.add(popupClassesConfig.openPopupClass);
	}, 0);
	document.addEventListener('keydown', closeModalEsc)
	popup.addEventListener('click', closeModalByOverlay)
}

const closeModal = popup => {
	if (popup) {
		popup.classList.remove(popupClassesConfig.openPopupClass)
		setTimeout(() => {
			popup.classList.remove(popupClassesConfig.animatedPopupClass);
		}, 600);
		document.removeEventListener('keydown', closeModalEsc)
		popup.removeEventListener('click', closeModalByOverlay)
	}
}

const closeModalEsc = evt => {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_is-opened')
		if (openedPopup) {
			closeModal(openedPopup)
		}
	}
}

const closeModalByOverlay = evt => {
	if (evt.target === evt.currentTarget) {
		closeModal(evt.currentTarget)
	}
}

export { closeModal, openModal }
