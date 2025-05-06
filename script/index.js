console.log("Hello,world!!");

const editprofileEditBtn = document.querySelector(".profile__edit-btn");
const editprofileModal = document.querySelector("#edit-profile-modal");
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

editprofileEditBtn.addEventListener("click", function() {
    editprofileNameInput.value = profileNameElement.textContent;
    editprofileDescriptionInput.value = profileDescriptionElement.textContent;
    editprofileModal.classList.add("modal_is-opened");
});
editprofileCloseBtn.addEventListener("click", function(){
    editprofileModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit (e){
    e.preventDefault();
    profileNameElement.textContent = editprofileNameInput.value;
    profileDescriptionElement.textContent = editprofileDescriptionInput.value;
    editprofileModal.classList.remove("modal_is-opened");
}
editprofileForm.addEventListener("submit", handleEditProfileSubmit);


newpostAddBtn.addEventListener("click", function() {
    newpostModal.classList.add("modal_is-opened");
});
newpostCloseBtn.addEventListener("click", function(){
    newpostModal.classList.remove("modal_is-opened");
}); 


function handleaddNewPostSubmit(evt){
    evt.preventDefault();
    console.log(CardImageLinkInput.value);
    console.log(ImageCaptionInput.value);
    newpostModal.classList.remove("modal_is-opened");
}
     addNewPostForm.addEventListener("submit",handleaddNewPostSubmit);







