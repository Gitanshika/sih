// Called by Google Maps script when it finishes loading
function initMaps() {
  // You can set a ready flag if you want, but not required
  window._gmapsReady = true;
}

// Hide others, show the requested map, then create the map instance
function showMap(divId, lat, lng, title) {
  // If Google Maps hasn’t finished loading yet, retry shortly
  if (!window.google || !window.google.maps) {
    setTimeout(function () { showMap(divId, lat, lng, title); }, 150);
    return;
  }

  // Hide all maps first (so only one is visible)
  document.querySelectorAll(".map").forEach(function (m) {
    m.style.display = "none";
  });

  // Show the selected map div
  var mapDiv = document.getElementById(divId);
  mapDiv.style.display = "block";

  // Create the map
  var map = new google.maps.Map(mapDiv, {
    zoom: 12,
    center: { lat: lat, lng: lng },
  });

  // Add a marker
  new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: map,
    title: title,
  });
}

