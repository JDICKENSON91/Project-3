var dataurl = "https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2000.geojson"

// Function to determine marker size based on population.
function markerSize(population) {
  if (population > 30000) {
    return 20
  } else if (population > 20000) {
    return 15
  } else if (population > 10000) {
    return 10
  } else if (population > 5000) {
    return 5  
  } else {
    return 3
  }
}
// Function to return the color based on population.
function markerColor(population) {
  if (population > 30000) {
    return 'red'
  } else if (population > 20000) {
    return 'orange'
  } else if (population > 10000) {
    return 'yellow'
  } else if (population > 5000) {
      return 'green'
    } else if (population > 2000) {
      return 'blue'    
  } else {
    return 'purple'
  }
}



// GET request, and function to handle returned JSON data.
d3.json(dataurl, function(data) {
  
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
    fillOpacity: 1,
    color: markerColor(feature.properties.Population),
    fillColor: markerColor(feature.properties.Population),
    radius: markerSize(feature.properties.Population)
  }

  return L.circleMarker(location, options);

};



//function addMarker(feature, location) {
//  var options = {
//    stroke: false,
//    fillOpacity: 1,
//    color: markerColor(feature.properties.D2030),
//    fillColor: markerColor(feature.properties.D2030),
//    radius: markerSize(feature.properties.D2030)
//  }
//
//  return L.circleMarker(location, options);
//
//}

// Define a function we want to run once for each feature in the features array
function addPopup(feature, layer) {
  // Give each feature a pop up describing the place and time of the earthquake
  return layer.bindPopup(`<h3> ${feature.properties.Urban_Agglomeration} </h3> <hr> <h4>Country: ${feature.properties.Country_or_area} </h4> <h4>Population: ${feature.properties.Population / 1000} M</h4>`);
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

  var satelite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "mapbox/satellite-v9",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Satelite": satelite,
    "Dark Map": darkmap,
    "Light Map" : lightmap,
    "Street Map": streetmap
  };



  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Population: population
  };

  // Creating map object
var myMap = L.map("map", {
center: [0, 0],
zoom: 3,
layers: [darkmap, population]
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

  // Create a layer control
    // Pass in our baseMaps and overlayMaps
    // Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: true
    }).addTo(myMap);


  // creating the legend
  var legend = L.control({position: 'bottomright'});

  // add legend to map
  legend.onAdd = function () {
  
    var div = L.DomUtil.create('div', 'info legend')
      

    div.innerHTML += "<h4>Population</h4>";
    div.innerHTML += '<i style="background: red"></i><span>Greater than 30 Million</span><br>';
    div.innerHTML += '<i style="background: orange"></i><span>20 Million</span><br>';
    div.innerHTML += '<i style="background: yellow"></i><span>10 Million</span><br>';
    div.innerHTML += '<i style="background: green"></i><span>5 Million</span><br>';
    div.innerHTML += '<i style="background: blue"></i><span>2 Million</span><br>';
    div.innerHTML += '<i style="background: purple"></i><span>Less Than 2 Million</span><br>';


    return div;
  };
  
  legend.addTo(myMap);

    // creating the legend
    var poptotal = L.control({position: 'bottomleft'});

    // add legend to map
    poptotal.onAdd = function () {
    
      var div = L.DomUtil.create('div', 'info legend')
        
  
      div.innerHTML += "<h4>Global Population Total: ${feature.properties.Population / 1000} M</h4>";
  
  
      return div;
    };
    
    poptotal.addTo(myMap);
  

}




