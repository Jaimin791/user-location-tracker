let map, marker;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 0, lng: 0 },
    zoom: 2
  });

  marker = new google.maps.Marker({
    position: { lat: 0, lng: 0 },
    map: map,
    title: 'Your Location'
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        marker.setPosition(pos);
        map.setCenter(pos);
      },
      () => {
        handleLocationError(true);
      }
    );
  } else {
    handleLocationError(false);
  }
}

function handleLocationError(browserHasGeolocation) {
  const message = browserHasGeolocation
    ? 'Error: The Geolocation service failed.'
    : 'Error: Your browser doesn\'t support geolocation.';

  alert(message);
}

initMap();