$(document).ready(onReady);

function onReady() {
  $('#js-form-newPet').on('submit', postNewPet);

  getPets();
}

function getPets() {
  $.ajax({
    type: 'GET',
    url: '/pets',
  }).then((dataFromServer) => {
    render(dataFromServer);
  });
}

function postNewPet(event) {
  event.preventDefault();

  const newPet = {
    name: $('#js-input-petName').val(),
  };

  $('#js-input-petName').val('');

  $.ajax({
    type: 'POST',
    url: '/pets',
    data: newPet,
  }).then((response) => {
    // NEED TO DO AN AJAX GET
    getPets();
  });
}

function render(listOfPets) {
  $('.js-container').empty();

  for (let pet of listOfPets) {
    $('.js-container').append(`<p>${pet}</p>`);
  }
}
