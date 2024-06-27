function initMap() {
    const userLocation = { lat: 51.509865, lng: -0.118092 }; // Example: London
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: userLocation,
    });

    const attractions = [
        { name: "Attraction 1", lat: 51.509865, lng: -0.118092 },
        { name: "Attraction 2", lat: 53.349805, lng: -6.26031 },
    ];

    attractions.forEach(attraction => {
        const marker = new google.maps.Marker({
            position: { lat: attraction.lat, lng: attraction.lng },
            map: map,
            title: attraction.name,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<div class="attraction">${attraction.name}</div>`,
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}

window.onload = initMap;
