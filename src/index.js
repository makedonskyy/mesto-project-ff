import {
	addNewCardApi,
	editUserDataApi,
	getInitialsCardsApi,
	getUserDataApi,
	updateAvatarApi
} from './components/api.js';
import { createCard, deleteCard, setLikeToCard } from './components/card.js';
import { closeModal, openModal } from './components/modal.js';
import { clearValidation, enableValidation } from './components/validation.js';
import { handleSubmit } from './utils/utils.js';
import './pages/index.css';
import { validationConfig } from './utils/constants';

const placesContainer = document.querySelector('.places__list');
const closePopupButtons = document.querySelectorAll('.popup__close');

const newCardPopup = document.querySelector('.popup_type_new-card');
const addCardForm = document.querySelector('.popup__form[name="new-place"]');
const cardNameInput = addCardForm.querySelector('.popup__input_type_card-name');
const cardUrlInput = addCardForm.querySelector('.popup__input_type_url');
const profileAddButton = document.querySelector('.profile__add-button');

const editProfilePopup = document.querySelector('.popup_type_edit');
const editProfileForm = document.querySelector('.popup__form[name="edit-profile"]');
const userNameInput = editProfileForm.querySelector('.popup__input_type_name');
const userDescriptionInput = editProfileForm.querySelector('.popup__input_type_description');
const profileInfo = document.querySelector('.profile__info');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileDescription = profileInfo.querySelector('.profile__description');
const profileEditButton = profileInfo.querySelector('.profile__edit-button');

const editAvatarPopup = document.querySelector('.popup_type_avatar');
const editAvatarForm = document.querySelector('.popup__form[name="edit-avatar"]');
const avatarUrlInput = editAvatarForm.querySelector('.popup__input_type_avatar');
const profileAvatar = document.querySelector('.profile__image');

const popupImage = document.querySelector('.popup_type_image');
const popupImageElement = popupImage.querySelector('.popup__image');
const popupCaptionElement = popupImage.querySelector('.popup__caption');
let currentUserId = null;

profileEditButton.addEventListener('click', () => {
	userNameInput.value = profileTitle.textContent;
	userDescriptionInput.value = profileDescription.textContent;
	clearValidation(editProfileForm, validationConfig);
	openModal(editProfilePopup);
});

profileAddButton.addEventListener('click', () => {
	addCardForm.reset();
	clearValidation(addCardForm, validationConfig);
	openModal(newCardPopup);
});

profileAvatar.addEventListener('click', () => {
	editAvatarForm.reset();
	clearValidation(editAvatarForm, validationConfig);
	openModal(editAvatarPopup);
});

closePopupButtons.forEach((button) => {
	const popup = button.closest('.popup');
	button.addEventListener('click', () => {
		if (popup) {
			closeModal(popup);
		}
	});
});

function handleProfileFormSubmit(evt) {
	const makeRequest = () => editUserDataApi(userNameInput.value, userDescriptionInput.value).then((userData) => {
		profileTitle.textContent = userData.name;
		profileDescription.textContent = userData.about;
		closeModal(editProfilePopup);
	});

	handleSubmit(makeRequest, evt);
}

function handleAddCardFormSubmit(evt) {
	const makeRequest = () => addNewCardApi(cardNameInput.value, cardUrlInput.value).then((card) => {
		const newCard = createCard(
			card._id,
			card.name,
			card.link,
			deleteCard,
			card.likes,
			setLikeToCard,
			openImagePopup,
			card.owner._id,
			currentUserId
		);
		placesContainer.prepend(newCard);
		closeModal(newCardPopup);
	});

	handleSubmit(makeRequest, evt);
}

function handleEditAvatarFormSubmit(evt) {
	const makeRequest = () => updateAvatarApi(avatarUrlInput.value).then((avatar) => {
		profileAvatar.style.backgroundImage = `url(${avatar.avatar})`;
		closeModal(editAvatarPopup);
	});

	handleSubmit(makeRequest, evt);
}

function openImagePopup(imageSrc, caption) {
	popupImageElement.src = imageSrc;
	popupImageElement.alt = caption;
	popupCaptionElement.textContent = caption;

	openModal(popupImage);
}

Promise.all([getUserDataApi(), getInitialsCardsApi()])
	.then(([userData, initialCards]) => {
		currentUserId = userData._id;
		profileTitle.textContent = userData.name;
		profileDescription.textContent = userData.about;
		profileAvatar.style.backgroundImage = `url(${userData.avatar})`;

		initialCards.forEach((card) => {
			const newCard = createCard(
				card._id,
				card.name,
				card.link,
				deleteCard,
				card.likes,
				setLikeToCard,
				openImagePopup,
				card.owner._id,
				currentUserId
			);
			placesContainer.append(newCard);
		});
	})
	.catch((error) => console.error(`Ошибка загрузки данных: ${error}`));

editProfileForm.addEventListener('submit', handleProfileFormSubmit);
addCardForm.addEventListener('submit', handleAddCardFormSubmit);
editAvatarForm.addEventListener('submit', handleEditAvatarFormSubmit);
enableValidation(validationConfig);