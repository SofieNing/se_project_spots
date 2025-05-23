// const array = ("string", 3, null);
// const array = [{objects}]; ex: [{(key)foo: (value)"bar",}];

const initialCards = [{name: "Val Thorens", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},
    {name: "Restaurant terrace", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},
    {name: "An outdoor cafe", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
    {name: "A very long bridge, over the forest and through the trees", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
    {name: "Tunnel with morning light", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
    {name: "Mountain house", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"},
];


const editprofileEditBtn = document.querySelector(".profile__edit-btn");
const editprofileModal = document.querySelector("#edit-profile-modal");
// const Modal = document.querySelector("#edit-profile-modal");
const editprofileCloseBtn = editprofileModal.querySelector(".modal__close-btn");

const newpostAddBtn = document.querySelector(".profile__add-new-btn");
const newpostModal = document.querySelector("#new-post-modal");
const newpostCloseBtn = newpostModal.querySelector(".modal__close-btn");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__description");
const editprofileNameInput = editprofileModal.querySelector("#profile-name-input");
const editprofileDescriptionInput = editprofileModal.querySelector("#profile-description-input");
const editprofileForm = editprofileModal.querySelector(".modal__form");


const addNewPostForm = newpostModal.querySelector(".modal__form");
const CardImageLinkInput = newpostModal.querySelector("#card-image-link-input");
const ImageCaptionInput = newpostModal.querySelector("#image-caption-input");

function openModal(modal) {
    modal.classList.add('modal_is-opened');
}
function closeModal(modal) {
    modal.classList.remove('modal_is-opened');
}

editprofileEditBtn.addEventListener("click", function() {
    editprofileNameInput.value = profileNameElement.textContent;
    editprofileDescriptionInput.value = profileDescriptionElement.textContent;
    // editprofileModal.classList.add("modal_is-opened");
    openModal(editprofileModal);
});
editprofileCloseBtn.addEventListener("click", function () {
    // editprofileModal.classList.remove("modal_is-opened");
    closeModal(editprofileModal);
});

function handleEditProfileSubmit (e){
    e.preventDefault();
    profileNameElement.textContent = editprofileNameInput.value;
    profileDescriptionElement.textContent = editprofileDescriptionInput.value;
    // editprofileModal.classList.remove("modal_is-opened");
    closeModal(editprofileModal);
}
editprofileForm.addEventListener("submit", handleEditProfileSubmit);


newpostAddBtn.addEventListener("click", function() {
    // newpostModal.classList.add("modal_is-opened");
    openModal(newpostModal);
});
newpostCloseBtn.addEventListener("click", function(){
    // newpostModal.classList.remove("modal_is-opened");
    closeModal(newpostModal);
}); 


function handleaddNewPostSubmit(evt){
    evt.preventDefault();
    console.log(CardImageLinkInput.value);
    console.log(ImageCaptionInput.value);
    // newpostModal.classList.remove("modal_is-opened");
    closeModal(newpostModal);
}
     addNewPostForm.addEventListener("submit",handleaddNewPostSubmit);


     initialCards.forEach(function(item) {
        console.log(item.name);
        console.log(item.link);
     });







