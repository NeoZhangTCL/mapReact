

function ItemManager(map,data){
    this.map = map;
    this.dataList = [];
	this.currDataList = [];
	this.drawer = $(".collapsible");

	function loadData(data){
		data.map(function(obj){
			var item = Item(obj.lat, obj.lng, obj.name, obj.address, this.map);
			return item;
		});
	};

	function getMarkers(){
		this.currDataList.map(function(item){
			return item.marker;
		});
	}

	function mapRefresh(){
	    currDataList = $.grep(dataList, function(v) {
	        return ((this.map.getBounds().contains(v.position))==true);
	    });
	}

	function searchRefresh(keyword){
	    var key = keyword.toUpperCase();
	    currDataList = $.grep(dataList, function(v) {
	        var tarName = v.Name.toUpperCase();
	        var tarAddress = v.Address.toUpperCase();
	        return (tarName.indexOf(key)>= 0 || tarAddress.indexOf(key)>=0);
	    });
	}

	function reset(){
	    this.currDataList = this.dataList;
	}

	function renderDrawer(){
		this.currDataList.map(function(item){
			drawer.append(item.listItem);
		});
	}

	dataList = loadData();

}




/*
this.addItem(item){
    this.markerList.append(Item.marker);
    this.sideList.append(Item.listItem);
}

this.removeItem(item){
    var mIndex = this.markerList.indexOf(item.marker);
    if (mIndex > -1) {
        this.markerList.splice(mIndex, 1);
    }
    var iIndex = this.sideList.indexOf(item.listItem);
    if (iIndex > -1) {
        this.sideList.splice(iIndex, 1);
    }
}
*/
