function cloth_button() {
  var pyrmont = { lat: 5.339479, lng: 100.298138 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(
    {
      location: pyrmont,
      radius: 2000,
      type: ['clothing_store']
    },
    callback
  );
}

function shoe_button() {
  var pyrmont = { lat: 5.339479, lng: 100.298138 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(
    {
      location: pyrmont,
      radius: 2000,
      type: ['shoe_store']
    },
    callback
  );
}
