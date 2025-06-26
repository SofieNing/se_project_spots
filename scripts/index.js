// const array = ("string", 3, null);
// const array = [{objects}]; ex: [{(key)foo: (value)"bar",}];

const initialCards = [
    {
        name: "Golden Gate Bridge",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
    },
    {
        name: "Val Thorens",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    },
    {
        name: "Restaurant terrace",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    },
    {
        name: "An outdoor cafe",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    },
    {
        name: "A very long bridge, over the forest and through the trees",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    },
    {
        name: "Tunnel with morning light",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    },
    {
        name: "Mountain house",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    },
];

const editProfileModal = document.querySelector("#edit-profile-modal");
// const Modal = document.querySelector("#edit-profile-modal");
const editProfileEditBtn = document.querySelector(".profile__edit-btn");
// const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const closeButtons = document.querySelectorAll(".modal__close-btn");

const newPostModal = document.querySelector("#new-post-modal");
const newPostAddBtn = document.querySelector(".profile__add-new-btn");
// const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const editProfileForm = editProfileModal.querySelector(".modal__form");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__description");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const addNewPostForm = newPostModal.querySelector(".modal__form");
const CardImageLinkInput = newPostModal.querySelector("#card-image-link-input");
const ImageCaptionInput = newPostModal.querySelector("#image-caption-input");

const cardTemplate = document
    .querySelector("#card__template")
    .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

const previewModal = document.querySelector("#preview-modal");
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");
// const previewCloseBtn = previewModal.querySelector(".modal__close-btn");

function openModal(modal) {
    modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
}

closeButtons.forEach(function (button) {
    const randomModal = button.closest(".modal");
    button.addEventListener("click", function () {
        closeModal(randomModal);
    });
});

editProfileEditBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameElement.textContent;
    editProfileDescriptionInput.value = profileDescriptionElement.textContent;
    // editprofileModal.classList.add("modal_is-opened");
    openModal(editProfileModal);
});

//  editProfileCloseBtn.addEventListener("click", function (){
//     // editProfileModal.classList.remove("modal_is-opened");
//     closeModal(editProfileModal);
// });

function handleEditProfileSubmit(e) {
    e.preventDefault();
    profileNameElement.textContent = editProfileNameInput.value;
    profileDescriptionElement.textContent = editProfileDescriptionInput.value;
    // editProfileModal.classList.remove("modal_is-opened");
    closeModal(editProfileModal);
}
editProfileForm.addEventListener("submit", handleEditProfileSubmit);

newPostAddBtn.addEventListener("click", function () {
    // newPostModal.classList.add("modal_is-opened");
    openModal(newPostModal);
});

// newPostCloseBtn.addEventListener("click", function() {
//     // newPostModal.classList.remove("modal_is-opened");
//     closeModal(newPostModal);
// });

function handleaddNewPostSubmit(evt) {
    evt.preventDefault();

    const inputValues = {
        link: CardImageLinkInput.value,
        name: ImageCaptionInput.value,
    };
    const cardElementNot = getCardElement(inputValues);
    cardsList.prepend(cardElementNot);

    // console.log(CardImageLinkInput.value);

    // console.log(ImageCaptionInput.value);
    // newPostModal.classList.remove("modal_is-opened");
    addNewPostForm.reset();

    closeModal(newPostModal);
}
addNewPostForm.addEventListener("submit", handleaddNewPostSubmit);

initialCards.forEach(function (item) {
    const cardElementNot = getCardElement(item);
    cardsList.append(cardElementNot);
    //   cardsList.append(cardElementNot);
});

function getCardElement(data) {
    let cardElement = cardTemplate.cloneNode(true);
    const cardTitleEl = cardElement.querySelector(".card__title");
    const cardImageEl = cardElement.querySelector(".card__image");

    cardImageEl.src = data.link;
    cardImageEl.alt = data.name;
    cardTitleEl.textContent = data.name;

    const cardLikeBtnEl = cardElement.querySelector(".card__like-btn");
    cardLikeBtnEl.addEventListener("click", () => {
        cardLikeBtnEl.classList.toggle("card__like-button_active");
    });

    const cardDelBtnEl = cardElement.querySelector(".card__delete-btn");
    cardDelBtnEl.addEventListener("click", () => {
        // cardDelBtnEl.closest(".card").remove();
        cardElement.remove();
        cardElement = null;
    });

    cardImageEl.addEventListener("click", () => {
        previewModal.classList.add("modal_is-opened");
        previewImageEl.src = data.link;
        previewCaptionEl.textContent = data.name;
    });

    // const cardPreview = cardElement.querySelector("");

    console.log(cardsList);

    return cardElement;
}

// previewCloseBtn.addEventListener("click", ()=>{
//     closeModal(previewModal);
// });
