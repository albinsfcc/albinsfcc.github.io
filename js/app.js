const $body = $('body');
const menuTimeout = 400;


function closeMenu() {
  $('.outer-menu').animate({
    right: '-80%'
  }, menuTimeout);
  setTimeout(() => {
    $('.full-screen-overlay').remove();
  }, menuTimeout);
  $body.removeClass('fixed-body');
}

function openMenu() {
  $('.full-screen-overlay').remove();
    var overlay = document.createElement('div');
    overlay.classList.add('full-screen-overlay');
    var $menu = $('.menu-list').clone();
    var closeBtn = $('<div>').addClass('close-btn').append('<i class="fa-solid fa-xmark" style="color: #000000;"></i>');
    var $menuOuter = $('<div>').addClass('outer-menu').append(closeBtn).append($menu);
    $(overlay).append($menuOuter);
    $body.append(overlay);
    $('.outer-menu').animate({
      right: '0'
    }, menuTimeout);
    $body.addClass('fixed-body');
}


function initEvents() {

  // hamburger click event
  $('.hamburger').on('click', function () {
    openMenu();
  });

  // hamburger close 
  $body.on('click', '.close-btn i', function () {
    closeMenu();
  });

  $body.on('click', '.full-screen-overlay li.menu-item', function () {
    closeMenu();
  })
}

function formatDateTime(date) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = String(hours % 12 || 12).padStart(2, '0');

    return `${year} ${month} ${day} | ${hours}:${minutes}:${seconds} ${amPm}`;
  }

  function updateDateTime() {
    const dateTimeElement = document.getElementById("currentDateTime");
    const currentDateTime = new Date();
    const formattedDateTime = formatDateTime(currentDateTime);

    dateTimeElement.textContent = formattedDateTime;
  }


  $('#theme').on('click', function () {
    $('body').toggleClass('dark');
  });

  $('.go-to-top').on('click', function () {
    $("html, body").animate(
      { scrollTop: "0" }, 1000);
  });

  $('.go-to-top').on('mouseenter', function () {
    $('.fa-angles-up').addClass('fa-bounce').on('mouseout', function () {
      $('.fa-angles-up').removeClass('fa-bounce');
    })
  });
  // Update the date and time immediately
  updateDateTime();

  // Update the date and time every second (1000 milliseconds)
  setInterval(updateDateTime, 1000);

  // initialize events
  initEvents();