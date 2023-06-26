function formatDate(date) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  }

  function updateClock() {
    const clockElement = document.getElementById("liveClock");
    const currentTime = new Date();

    let hours = currentTime.getHours();
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    const formattedTime = `${hours}:${minutes}:${seconds} ${amPm} IST`;
    clockElement.textContent = formattedTime;
  }

    // Update the clock immediately
    updateClock();

    // Update the clock every second (1000 milliseconds)
    setInterval(updateClock, 1000);

    // Get the current date
    const currentDate = new Date();

    // Format the date
    const formattedDate = formatDate(currentDate);
    // Append the result to the element with ID "currentDate"
    const element = document.getElementById("currentDate");
    element.textContent = formattedDate;
  