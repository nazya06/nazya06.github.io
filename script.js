
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalAddress = document.getElementById("modal-address");
const modalRating = document.getElementById("modal-rating");
const closeModal = document.querySelector(".close");


document.querySelectorAll(".card-image").forEach((image) => {
  image.addEventListener("click", () => {
    const src = image.src;
    const name = image.dataset.name;
    const address = image.dataset.address;
    const rating = image.dataset.rating;


    modalImage.src = src;
    modalName.textContent = name;
    modalAddress.textContent = `Address: ${address}`;
    modalRating.textContent = `Rating: ${rating}`;


    modal.style.display = "block";
  });
});


closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


document.getElementById("review-form").addEventListener("submit", function(event) {
                  event.preventDefault();
                  
                  const nameInput = document.getElementById("kindergarten-name");
                  const nameError = document.getElementById("name-error");
                  const ratingInputs = document.getElementsByName("rating");
                  const ratingError = document.getElementById("rating-error");
                  
                  let isValid = true;

                  if (nameInput.value.trim() === "") {
                      nameError.style.display = "block";
                      isValid = false;
                  } else {
                      nameError.style.display = "none";
                  }
      
                  const isRatingSelected = Array.from(ratingInputs).some(input => input.checked);
                  if (!isRatingSelected) {
                      ratingError.style.display = "block";
                      isValid = false;
                  } else {
                      ratingError.style.display = "none";
                  }
      
                  if (isValid) {
                      alert("Спасибо за отзыв!");
                      event.target.submit();
                  }
              });
  