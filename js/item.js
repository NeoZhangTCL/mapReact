function Item(lat,lng,name,address){
    Item.prototype.lat = lat;
    Item.prototype.lng = lng;
    Item.prototype.name = name;
    Item.prototype.address = address;

    Item.prototype.marker = new google.maps.Marker({
        position: {
            lat: this.lat,
            lng: this.lng
        },
        label: this.name
    });

    Item.prototype.items = function() {
        var lItem = $("<li></li>");
        var header = $("<div></div>").text(this.name);
        header.addClass("collapsible-header");
        header.attr("id", this.name);
        var add = $("<p></p>").text("Location: " + this.Address);
        var address = $("<div></div>").append(add);
        address.addClass("collapsible-body");
        lItem.append(header);
        lItem.append(address);
        lItem.click(function() {
            map.panTo({
                lat: this.lat,
                lng: this.lng
            });
        });
    }
}
