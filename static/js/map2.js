


function createmap2() {

    var container2 = L.DomUtil.get('map2'); if(container2 != null){ container2._leaflet_id = null; }

    var decade2 = d3.select("#decade2").property("value");

    if (decade2 === "1950") {
        dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1950.geojson"
      } else if (decade2 === "1960") {
        dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1960.geojson"
        } else if (decade2 === "1970") {
        dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1970.geojson"
    } else if (decade2 === "1980") {
        dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1980.geojson"
    } else if (decade2 === "1990") {
        dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1990.geojson"
    } else if (decade2 === "2000") {
        dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2000.geojson"
    } else if (decade2 === "2010") {
        dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2010.geojson"
    } else if (decade2 === "2020") {
        dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2020.geojson"
    } else if (decade2 === "2030") {
        dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2030.geojson"
      } else {
        dataurl2="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2020.geojson"
      }


  var lat = d3.select("#lat-sel").property("value");
  var lng = d3.select("#lng-sel").property("value");
  var zoom = d3.select("#zoom-sel").property("value");
  var size = zoom * 1;


  // Function to determine marker size based on population.
  function markerSize2(population2) {
    if (population2 > 25000) {
      return 5 * size
    } else if (population2 > 10000) {
      return 4.5 * size
    } else if (population2 > 5000) {
      return 3 * size
    } else if (population2 > 2000) {
      return 2.5 * size
    } else if (population2 > 500) {
      return 2 * size  
    } else {
      return 1.5 * size
    }
  }
  // Function to return the color based on population.
  function markerColor2(population2) {
    if (population2 > 25000) {
      return '#1342EF'
    } else if (population2 > 10000) {
      return '#1374EF'
    } else if (population2 > 5000) {
      return '#1398EF'
    } else if (population2 > 2000) {
        return '#13CEEF'
      } else if (population2 > 500) {
        return '#13D1EF'    
    } else {
      return '#13ecef'
    }
  }
  
  
  
  
  // GET request, and function to handle returned JSON data.
  d3.json(dataurl2, function(data2) {
    
    var population2 = L.geoJSON(data2.features, {
      onEachFeature : addPopup2,
      pointToLayer: addMarker2
    });
  
  // Create Map
  createMap2(population2);
  }); 
  
  
  
    function addMarker2(feature, location) {
    var options = {
      stroke: false,
      fillOpacity: 1,
      color: markerColor2(feature.properties.Population),
      fillColor: markerColor2(feature.properties.Population),
      radius: markerSize2(feature.properties.Population)
    }
  
    return L.circleMarker(location, options);
  
  };
  
  // Define a function we want to run once for each feature in the features array
  function addPopup2(feature, layer) {
    // Give each feature a pop up describing the place and time of the earthquake
    return layer.bindPopup(`<h3> ${feature.properties.Urban_Agglomeration} </h3> <hr> <h4>Country: ${feature.properties.Country_or_area} </h4> <h4>Population: ${feature.properties.Population / 1000} M</h4>`);
  }
  
  // function to receive a layer of markers and plot them on a map.
  function createMap2(population2) {
  
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
      Population: population2
    };
  
    // Creating map object
  var myMap2 = L.map("map2", {
  center: [lat, lng],
  zoom: zoom,
  scrollWheelZoom: false,
  zoomControl: false,
  dragging: true,
  layers: [darkmap, population2]
  });

  L.control.pan().addTo(myMap2);
  L.control.zoom().addTo(myMap2);

  var miniMap = new L.Control.GlobeMiniMap({
    position: 'bottomleft',
    //uncomment to assign colors
    land:'#11614d',
    water:'#0e96e1',
    marker:'#000000',
    topojsonSrc : 'static/js/world.json'
  }).addTo(myMap2);
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/outdoors-v11",
  accessToken: API_KEY
  }).addTo(myMap2);
  
    // Create a layer control
      // Pass in our baseMaps and overlayMaps
      // Add the layer control to the map
      L.control.layers(baseMaps, overlayMaps, {
        collapsed: true
      }).addTo(myMap2);
  
  
    // creating the legend
    var legend = L.control({position: 'bottomright'});
  
    // add legend to map
    legend.onAdd = function () {
    
      var div = L.DomUtil.create('div', 'info legend')
        
  
      div.innerHTML += '<h4 style="color: black">Population Legend</h4>';
      div.innerHTML += '<i style="background: #1342EF"></i><span>Greater than 25 Million</span><br>';
      div.innerHTML += '<i style="background: #1374ef"></i><span>Greater than 10 Million</span><br>';
      div.innerHTML += '<i style="background: #1398ef"></i><span>Greater than 5 Million</span><br>';
      div.innerHTML += '<i style="background: #13ceef"></i><span>Greater than 2 Million</span><br>';
      div.innerHTML += '<i style="background: #13d1ef"></i><span>Greater than 0.5 Million</span><br>';
      div.innerHTML += '<i style="background: #13ecef"></i><span>Less Than 0.5 Million</span><br>';
  
      return div;
    };
    
    legend.addTo(myMap2);
  
    
  
  };
  
}

var buttonpressed = d3.select("#Run-btn");
buttonpressed.on("click", createmap2);

