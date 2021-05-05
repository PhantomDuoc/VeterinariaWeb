function iniciarMap() {
    var coord = { lat: -33.0156319227719, lng: -71.54985066685555 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}