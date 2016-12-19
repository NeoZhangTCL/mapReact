function Item(lat, lng, name, address){
    this.position = new google.maps.LatLng(lat, lng);
    this.name = name;
    this.address = address;
    this.listItem = createListItem();
    this.marker = createMarker();

    function createListItem() {
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
            this.marker.getMap().panTo(this.position);
        });
        return lItem;
    }

    function createMarker(){
        var _marker = new google.maps.Marker({
            position: position,
            label: this.name
        });
        _marker.addListener('click', function() {
            this.listItem.click();
        });
        return _marker;
    }

}
