var map;
var data = [{
    Lat: -31.563910,
    Lng: 147.154312,
    Name: "Neo's",
    Address: "1023 C Street"
}, {
    Lat: -33.718234,
    Lng: 150.363181,
    Name: "Blizzard",
    Address: "13 Ruby Street"
}, {
    Lat: -33.727111,
    Lng: 150.371124,
    Name: "Slack",
    Address: "323 C++ Street N"
}, {
    Lat: -33.848588,
    Lng: 151.209834,
    Name: "Neo",
    Address: "1023 Python Street N"
}, {
    Lat: -33.851702,
    Lng: 151.216968,
    Name: "Deloitte",
    Address: "542 Java Road"
}, {
    Lat: -34.671264,
    Lng: 150.863657,
    Name: "IBM",
    Address: "978 Haskle Street"
}, {
    Lat: -35.304724,
    Lng: 148.662905,
    Name: "Intel",
    Address: "116 Python Street S"
}, {
    Lat: -36.817685,
    Lng: 175.699196,
    Name: "AMD",
    Address: "534 Go Road"
}, {
    Lat: -36.828611,
    Lng: 175.790222,
    Name: "Paypal",
    Address: "2041 Swift Street"
}, {
    Lat: -37.750000,
    Lng: 145.116667,
    Name: "SpaceX",
    Address: "673 MatLab Street"
}, {
    Lat: -37.759859,
    Lng: 145.128708,
    Name: "Alibaba",
    Address: "1023 PHP Ave"
}, {
    Lat: -37.765015,
    Lng: 145.133858,
    Name: "Github",
    Address: "442 Java Ct"
}, {
    Lat: -37.770104,
    Lng: 145.143299,
    Name: "Linkedin",
    Address: "935 C# Street"
}, {
    Lat: -37.773700,
    Lng: 145.145187,
    Name: "Yelp",
    Address: "105 JavaScript Street"
}, {
    Lat: -37.774785,
    Lng: 145.137978,
    Name: "Microsoft",
    Address: "87 Scala Street"
}, {
    Lat: -37.819616,
    Lng: 144.968119,
    Name: "Google",
    Address: "42 R Street"
}, {
    Lat: -38.330766,
    Lng: 144.695692,
    Name: "CNN",
    Address: "942 Objective-C Street"
}, {
    Lat: -39.927193,
    Lng: 175.053218,
    Name: "Tesla",
    Address: "10 JavaScript Street"
}, {
    Lat: -41.330162,
    Lng: 174.865694,
    Name: "Bell",
    Address: "6 LaTeX Street"
}, {
    Lat: -42.734358,
    Lng: 147.439506,
    Name: "Yahoo",
    Address: "1023 Perl Street"
}, {
    Lat: -42.734358,
    Lng: 147.501315,
    Name: "Apple",
    Address: "102 Bash Street"
}, {
    Lat: -42.735258,
    Lng: 147.438000,
    Name: "Alphabet",
    Address: "762 Brainf**k Street"
}, {
    Lat: -43.999792,
    Lng: 170.463352,
    Name: "Airbnb",
    Address: "65 Lisp Street"
}];

var currData = data;

$(document).ready(function() {
    $('.collapsible').collapsible();
});

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {
            lat: -34.171798,
            lng: 150.407391
        },
        minZoom: 4,
        mapTypeControl: false,
        streetViewControl: false
    });

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = currData.map(function(obj, i) {
        var marker = new google.maps.Marker({
            position: {
                lat: obj.Lat,
                lng: obj.Lng
            },
            label: obj.Name
        });
        attachMarkerCnterlizer(marker);
        return marker;
    });


    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

    console.log(map);
    google.maps.event.addListener(map, 'bounds_changed', function() {
        refreshList();
    });

}

function attachMarkerCnterlizer(marker) {
    marker.addListener('click', function() {
        marker.get('map').panTo(marker.position);
        var n = marker.getLabel();
        console.log(n);
        var id = "#" + n;
        console.log(id);
        console.log($(id));
        $(id).click();
    });
}



function search() {
    $("#search").on('keypress', function(e) {
        if (e.which === 13) {
            var keyword = $("#search").val();
            console.log(keyword);
            currData = $.grep(data, function(v) {
                if (v.Name.indexOf(keyword) >= 0 || v.Address.indexOf(keyword)) {
                    return v;
                }
            });
            console.log(currData);
        }
    });
}

/*
<li>
  <div class="collapsible-header">First</div>

  <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
</li>
*/
function refreshList() {
    //clean all list First
    $(".collapsible").empty();
    var bounds = map.getBounds();
    var items = currData.map(function(obj) {
        var lItem = $("<li></li>");
        var header = $("<div></div>").text(obj.Name);
        header.addClass("collapsible-header");
        header.attr("id", obj.Name);
        var add = $("<p></p>").text("Location: " + obj.Address);
        var address = $("<div></div>").append(add);
        address.addClass("collapsible-body");
        lItem.append(header);
        lItem.append(address);
        lItem.click(function() {
            map.panTo({
                lat: obj.Lat,
                lng: obj.Lng
            });
        });
        if (bounds.contains(new google.maps.LatLng(obj.Lat, obj.Lng))) {
            $(".collapsible").append(lItem);
        }
    });
}
