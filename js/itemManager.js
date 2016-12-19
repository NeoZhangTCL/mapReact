import { Item } from "item";

function ItemManager(map,data){
    this.map = map;
    this.dataList = [];
    this.currDataList = [];
    this.loadData(data);
}

ItemManager.prototype.loadData = function(data){
    data.map(function(obj){
        var item = Item(obj.lat, obj.lng, obj.name, obj.address, this.map);
        this.dataList.append(item);
    });
}

ItemManager.prototype.mapRefresh = function(){
    var bounds = this.map.getBounds();
    currDataList = $.grep(dataList, function(v) {
        return (bounds.contains(dataList.position)==true);
    });
}


ItemManager.prototype.searchRefresh = function(keyword){
    var key = keyword.toUpperCase();
    currDataList = $.grep(dataList, function(v) {
        var tarName = v.Name.toUpperCase();
        var tarAddress = v.Address.toUpperCase();
        return (tarName.indexOf(key)>= 0 || tarAddress.indexOf(key)>=0);
    });
}

ItemManager.prototype.reset = function(){
    this.currDataList = this.dataList;
}
/*
ItemManager.prototype.addItem(item){
    this.markerList.append(Item.marker);
    this.sideList.append(Item.listItem);
}

ItemManager.prototype.removeItem(item){
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
