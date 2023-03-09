
function GeoOk(position){

}
function GeoError(){
    alert("can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);