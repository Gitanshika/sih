function initMap() {
      let location = {lat:23.346270738545847,lng:85.30483015828166};
      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
      });
      new google.maps.Marker({position: location, map: map, title: "Starting Point"});
    }
