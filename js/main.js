function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 42.984, lng: -81.250},
    minZoom: 8,
    mapTypeControl: false,
    streetViewControl: false
  });

  map.addListener('bounds_changed', refreshList() , 3000);

}

function setMark(){

}

function search(){

}

function getMapBoundry(){

}

function refreshList(){

}
