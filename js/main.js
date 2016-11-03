function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru,
    minZoom: 8
  });

  map.addListener('bounds_changed', function() {
  // 3 seconds after the center of the map has changed, pan back to the
  // marker.
  window.setTimeout(function() {
    map.panTo(marker.getPosition());
  }, 3000);
});

}

function setMark(){

}

function search(){

}

function getMapBoundry(){

}

function refreshList(){

}
