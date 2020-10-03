var dataurl = "https://raw.githubusercontent.com/JDICKENSON91/Project-3/master/static/js/global-city-population-estimates.geojson"

// Function to determine marker size based on population.
function markerSize(population) {
  return population / 10;
}

// Function to return the color based on population.
function markerColor(population) {
  if (population > 10000) {
    return 'red'
  } else if (population > 5000) {
    return 'orange'
  } else if (population > 3000) {
    return 'yellow'
  } else if (population > 1000) {
      return 'green'
  } else {
    return 'blue'
  }
}


// Function for opacity based on population.
function markerOpacity(population) {
  if (population > 10000) {
    return .99
  } else if (population > 9000) {
    return .9
  } else if (population > 8000) {
    return .8
  } else if (population > 7000) {
    return .7
  } else if (population > 6000) {
    return .6
  } else if (population > 5000) {
    return .5
  } else if (population > 4000) {
    return .4
  } else if (population > 3000) {
    return .3
  } else if (population > 2000) {
    return .2
  } else {
    return .1
  }
}

// GET request, and function to handle returned JSON data.
d3.json(link, function(data) {
  
  var population = L.geoJSON(data.features, {
    onEachFeature : addPopup,
    pointToLayer: addMarker
  });

// Create Map
createMap(population);

}); 


function addMarker(feature, location) {
  var options = {
    stroke: false,
    fillOpacity: markerOpacity(feature.properties.2030),
    color: markerColor(feature.properties.2030),
    fillColor: markerColor(feature.properties.2030),
    radius: markerSize(feature.properties.2030)
  }

  return L.circleMarker(location, options);

}

// Define a function we want to run once for each feature in the features array
function addPopup(feature, layer) {
  // Give each feature a pop up describing the place and time of the earthquake
  return layer.bindPopup(`<h3> ${feature.properties.Urban Agglomeration} </h3> <hr> <h4>Country: ${feature.properties.Country or area} </h4> <h4>Country: ${feature.properties.2030} </h4>`);
}

// function to receive a layer of markers and plot them on a map.
function createMap(population) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "mapbox/dark-v10",
    accessToken: API_KEY
  });

  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap,
    "Light Map" : lightmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Population: 2030
  };

  // Creating map object
var myMap = L.map("map", {
center: [-31.9505, 115.8605],
zoom: 3,
layers: [lightmap, 2030]
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
tileSize: 512,
maxZoom: 18,
zoomOffset: -1,
id: "mapbox/outdoors-v11",
accessToken: API_KEY
}).addTo(myMap);


  // creating the legend
  var legend = L.control({position: 'bottomright'});

  // add legend to map
  legend.onAdd = function () {
  
    var div = L.DomUtil.create('div', 'info legend')
      

    div.innerHTML += "<h4>Population (Thousdands)</h4>";
    div.innerHTML += '<i style="background: red"></i><span>Greater than 10,000</span><br>';
    div.innerHTML += '<i style="background: orange"></i><span>5,000</span><br>';
    div.innerHTML += '<i style="background: yellow"></i><span>3,000</span><br>';
    div.innerHTML += '<i style="background: green"></i><span>1,000</span><br>';
    div.innerHTML += '<i style="background: blue"></i><span>Less Than 1,000</span><br>';


    return div;
  };
  
  legend.addTo(myMap);

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: true
  }).addTo(myMap);

}




