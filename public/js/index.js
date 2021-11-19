let submitButton = document.querySelector("#submit");
let form = document.querySelector("#form");
let restaurantDisplay = document.querySelector("#restaurants-display");
let map;
var e = document.getElementById("sort");

const initMap = (lattitude = 33.883415, longitutde = -117.885626) => {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lattitude, lng: longitutde },
        zoom: 13,
    });
};

const getRequest = (lat, long) => {
    const config = {
        headers: {
            Authorization:
                "Bearer UFZPvUmqp5s3EJ8VCo6-U1Gg_6vWarpQlkuBfFhJtcs_-c9qo4nAEPHGNSP0sR7PjdOFFDRo1tscepPBZ7maehpu1P9T0uHE65cYCyK4bgcUMyq_Pjo2OwReHdI6YXYx",
            crossDomain: true,
        },
        params: {
            term: "pizza",
            latitude: lat,
            longitude: long,
            open_now: true,
            sort_by: e.value,
        },
    };

    axios
        .get("https://api.yelp.com/v3/businesses/search?", config)
        .then((response) => {
            restaurant_data = response.data.businesses;
            for (let i = 0; i < 15; i++) {
                restaurantDisplay.innerHTML += `<div class="location-box">${restaurant_data[i].name} <br> 
                ${restaurant_data[i].location.display_address} <br> 
                ${restaurant_data[i].rating} Stars -- ${Math.round(restaurant_data[i].review_count)} Reviews -- 
                ${Math.round(restaurant_data[i].distance)} meters <br> Phone #: ${restaurant_data[i].phone}</div><br> `;
                new google.maps.Marker({
                    position: {
                        lat: restaurant_data[i].coordinates.latitude,
                        lng: restaurant_data[i].coordinates.longitude,
                    },
                    map: map,
                });
            }
        });
};
//let submitButton = document.querySelector("#submit");
//let form = document.querySelector("#form");
const initialize = () => {
    initMap();
};

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    formData = Object.fromEntries(formData.entries());
    restaurantDisplay.innerHTML = " ";
    getRequest(parseFloat(formData.lattitude), parseFloat(formData.longitude));
    initMap(parseFloat(formData.lattitude), parseFloat(formData.longitude));
    if (
        Math.abs(parseFloat(formData.lattitude)) >= 180 ||
        Math.abs(parseFloat(formData.longitude)) >= 180
    ) {
        document.getElementById("result").innerHTML =
            "Invalid Input, please try again.";
    } else {
        document.getElementById("result").innerHTML = "Valid Input";
    }
});

initialize();
