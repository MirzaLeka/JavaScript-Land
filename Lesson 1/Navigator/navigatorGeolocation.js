
const getGeolocation = () => {
    
  if (!navigator.geolocation) {
    alert("This browser doesn't support geolocation.");
  }

  // this will raise a pop and will ask you to reveal give your location
  navigator.geolocation.getCurrentPosition(position => {
    
    const timestamp = position.timestamp; // returns timestamp of position reveal
    const latitude = position.coords.latitude; // returns user's latitude
    const longitude = position.coords.longitude; // returns user's longitude

    document.querySelector('#timestamp').textContent = `Timestamp: ${timestamp}`;
    document.querySelector('#latitude').textContent = `Latitude: ${latitude}`;
    document.querySelector('#longitude').textContent = `Longitude: ${longitude}`;

  }, () => {
    // if something goes wrong
    alert('Unable to fetch location.');
  });

}
