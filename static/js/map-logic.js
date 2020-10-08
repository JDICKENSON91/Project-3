function createmap1950() {

  dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1950.geojson"

  var container = L.DomUtil.get('map'); if(container != null){ container._leaflet_id = null; }

  var lat = d3.select("#lat-sel").property("value");
  var lng = d3.select("#lng-sel").property("value");
  var zoom = d3.select("#zoom-sel").property("value");


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
    if (population > 25000) {
      return '#FEA3AA'
    } else if (population > 10000) {
      return '#F8B88B'
    } else if (population > 5000) {
      return '#FAF884'
    } else if (population > 2000) {
        return '#BAED91'
      } else if (population > 500) {
        return '#B2CEFE'    
    } else {
      return '#F2A2E8'
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
  center: [lat, lng],
  zoom: zoom,
  scrollWheelZoom: false,
  zoomControl: false,
  dragging: true,
  layers: [darkmap, population]
  });

  L.control.pan().addTo(myMap);
  L.control.zoom().addTo(myMap);
  
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
      div.innerHTML += '<i style="background: #FEA3AA"></i><span>Greater than 25 Million</span><br>';
      div.innerHTML += '<i style="background: #F8B88B"></i><span>Greater than 10 Million</span><br>';
      div.innerHTML += '<i style="background: #FAF884"></i><span>Greater than 5 Million</span><br>';
      div.innerHTML += '<i style="background: #BAED91"></i><span>Greater than 2 Million</span><br>';
      div.innerHTML += '<i style="background: #B2CEFE"></i><span>Greater than 0.5 Million</span><br>';
      div.innerHTML += '<i style="background: #F2A2E8"></i><span>Less Than 0.5 Million</span><br>';
  
  
      return div;
    };
    
    legend.addTo(myMap);
  
    
  
  };
  



  
}


function createmap1960() {

  dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1960.geojson"

  var container = L.DomUtil.get('map'); if(container != null){ container._leaflet_id = null; }

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
    if (population > 25000) {
      return '#FEA3AA'
    } else if (population > 10000) {
      return '#F8B88B'
    } else if (population > 5000) {
      return '#FAF884'
    } else if (population > 2000) {
        return '#BAED91'
      } else if (population > 500) {
        return '#B2CEFE'    
    } else {
      return '#F2A2E8'
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
  scrollWheelZoom: false,
  zoomControl: false,
  layers: [darkmap, population]
  });

  L.control.pan().addTo(myMap);
  L.control.zoom().addTo(myMap);
  
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
      div.innerHTML += '<i style="background: #FEA3AA"></i><span>Greater than 25 Million</span><br>';
      div.innerHTML += '<i style="background: #F8B88B"></i><span>Greater than 10 Million</span><br>';
      div.innerHTML += '<i style="background: #FAF884"></i><span>Greater than 5 Million</span><br>';
      div.innerHTML += '<i style="background: #BAED91"></i><span>Greater than 2 Million</span><br>';
      div.innerHTML += '<i style="background: #B2CEFE"></i><span>Greater than 0.5 Million</span><br>';
      div.innerHTML += '<i style="background: #F2A2E8"></i><span>Less Than 0.5 Million</span><br>';
  
  
      return div;
    };
  
  
  };
  
}


function createmap1970() {

  dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1970.geojson"

  var container = L.DomUtil.get('map'); if(container != null){ container._leaflet_id = null; }

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
    if (population > 25000) {
      return '#FEA3AA'
    } else if (population > 10000) {
      return '#F8B88B'
    } else if (population > 5000) {
      return '#FAF884'
    } else if (population > 2000) {
        return '#BAED91'
      } else if (population > 500) {
        return '#B2CEFE'    
    } else {
      return '#F2A2E8'
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
  scrollWheelZoom: false,
  zoomControl: false,
  layers: [darkmap, population]
  });
  
  L.control.pan().addTo(myMap);
  L.control.zoom().addTo(myMap);

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
      div.innerHTML += '<i style="background: #FEA3AA"></i><span>Greater than 25 Million</span><br>';
      div.innerHTML += '<i style="background: #F8B88B"></i><span>Greater than 10 Million</span><br>';
      div.innerHTML += '<i style="background: #FAF884"></i><span>Greater than 5 Million</span><br>';
      div.innerHTML += '<i style="background: #BAED91"></i><span>Greater than 2 Million</span><br>';
      div.innerHTML += '<i style="background: #B2CEFE"></i><span>Greater than 0.5 Million</span><br>';
      div.innerHTML += '<i style="background: #F2A2E8"></i><span>Less Than 0.5 Million</span><br>';
  
  
      return div;
    };
    
  
  };
  
}


function createmap1980() {

  dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1980.geojson"

  var container = L.DomUtil.get('map'); if(container != null){ container._leaflet_id = null; }

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
    if (population > 25000) {
      return '#FEA3AA'
    } else if (population > 10000) {
      return '#F8B88B'
    } else if (population > 5000) {
      return '#FAF884'
    } else if (population > 2000) {
        return '#BAED91'
      } else if (population > 500) {
        return '#B2CEFE'    
    } else {
      return '#F2A2E8'
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
  scrollWheelZoom: false,
  zoomControl: false,
  layers: [darkmap, population]
  });
  
  L.control.pan().addTo(myMap);
  L.control.zoom().addTo(myMap);


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
      div.innerHTML += '<i style="background: #FEA3AA"></i><span>Greater than 25 Million</span><br>';
      div.innerHTML += '<i style="background: #F8B88B"></i><span>Greater than 10 Million</span><br>';
      div.innerHTML += '<i style="background: #FAF884"></i><span>Greater than 5 Million</span><br>';
      div.innerHTML += '<i style="background: #BAED91"></i><span>Greater than 2 Million</span><br>';
      div.innerHTML += '<i style="background: #B2CEFE"></i><span>Greater than 0.5 Million</span><br>';
      div.innerHTML += '<i style="background: #F2A2E8"></i><span>Less Than 0.5 Million</span><br>';
  
  
      return div;
    };
  
    
  
  };
  
}
 


function createmap1990() {

  dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-1990.geojson"

  var container = L.DomUtil.get('map'); if(container != null){ container._leaflet_id = null; }

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
    if (population > 25000) {
      return '#FEA3AA'
    } else if (population > 10000) {
      return '#F8B88B'
    } else if (population > 5000) {
      return '#FAF884'
    } else if (population > 2000) {
        return '#BAED91'
      } else if (population > 500) {
        return '#B2CEFE'    
    } else {
      return '#F2A2E8'
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
  scrollWheelZoom: false,
  zoomControl: false,
  layers: [darkmap, population]
  });

  L.control.pan().addTo(myMap);
  L.control.zoom().addTo(myMap);
  
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
      div.innerHTML += '<i style="background: #FEA3AA"></i><span>Greater than 25 Million</span><br>';
      div.innerHTML += '<i style="background: #F8B88B"></i><span>Greater than 10 Million</span><br>';
      div.innerHTML += '<i style="background: #FAF884"></i><span>Greater than 5 Million</span><br>';
      div.innerHTML += '<i style="background: #BAED91"></i><span>Greater than 2 Million</span><br>';
      div.innerHTML += '<i style="background: #B2CEFE"></i><span>Greater than 0.5 Million</span><br>';
      div.innerHTML += '<i style="background: #F2A2E8"></i><span>Less Than 0.5 Million</span><br>';
  
  
      return div;
    };
    
    
  
  };
  
}



function createmap2000() {

  dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2000.geojson"

  var container = L.DomUtil.get('map'); if(container != null){ container._leaflet_id = null; }

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
    if (population > 25000) {
      return '#FEA3AA'
    } else if (population > 10000) {
      return '#F8B88B'
    } else if (population > 5000) {
      return '#FAF884'
    } else if (population > 2000) {
        return '#BAED91'
      } else if (population > 500) {
        return '#B2CEFE'    
    } else {
      return '#F2A2E8'
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
  scrollWheelZoom: false,
  zoomControl: false,
  layers: [darkmap, population]
  });

  L.control.pan().addTo(myMap);
  L.control.zoom().addTo(myMap);
  
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
      div.innerHTML += '<i style="background: #FEA3AA"></i><span>Greater than 25 Million</span><br>';
      div.innerHTML += '<i style="background: #F8B88B"></i><span>Greater than 10 Million</span><br>';
      div.innerHTML += '<i style="background: #FAF884"></i><span>Greater than 5 Million</span><br>';
      div.innerHTML += '<i style="background: #BAED91"></i><span>Greater than 2 Million</span><br>';
      div.innerHTML += '<i style="background: #B2CEFE"></i><span>Greater than 0.5 Million</span><br>';
      div.innerHTML += '<i style="background: #F2A2E8"></i><span>Less Than 0.5 Million</span><br>';
  
  
      return div;
    };
    
    
  
  };
  
}


function createmap2010() {

  dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2010.geojson"

  var container = L.DomUtil.get('map'); if(container != null){ container._leaflet_id = null; }

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
    if (population > 25000) {
      return '#FEA3AA'
    } else if (population > 10000) {
      return '#F8B88B'
    } else if (population > 5000) {
      return '#FAF884'
    } else if (population > 2000) {
        return '#BAED91'
      } else if (population > 500) {
        return '#B2CEFE'    
    } else {
      return '#F2A2E8'
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
  scrollWheelZoom: false,
  zoomControl: false,
  layers: [darkmap, population]
  });
  
  L.control.pan().addTo(myMap);
  L.control.zoom().addTo(myMap);

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
      div.innerHTML += '<i style="background: #FEA3AA"></i><span>Greater than 25 Million</span><br>';
      div.innerHTML += '<i style="background: #F8B88B"></i><span>Greater than 10 Million</span><br>';
      div.innerHTML += '<i style="background: #FAF884"></i><span>Greater than 5 Million</span><br>';
      div.innerHTML += '<i style="background: #BAED91"></i><span>Greater than 2 Million</span><br>';
      div.innerHTML += '<i style="background: #B2CEFE"></i><span>Greater than 0.5 Million</span><br>';
      div.innerHTML += '<i style="background: #F2A2E8"></i><span>Less Than 0.5 Million</span><br>';
  
  
      return div;
    };
    
  
  };
  
}


function createmap2020() {

  dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2020.geojson"

  var container = L.DomUtil.get('map'); if(container != null){ container._leaflet_id = null; }

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
    if (population > 25000) {
      return '#FEA3AA'
    } else if (population > 10000) {
      return '#F8B88B'
    } else if (population > 5000) {
      return '#FAF884'
    } else if (population > 2000) {
        return '#BAED91'
      } else if (population > 500) {
        return '#B2CEFE'    
    } else {
      return '#F2A2E8'
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
  scrollWheelZoom: false,
  zoomControl: false,
  layers: [darkmap, population]
  });

  L.control.pan().addTo(myMap);
  L.control.zoom().addTo(myMap);
  
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
      div.innerHTML += '<i style="background: #FEA3AA"></i><span>Greater than 25 Million</span><br>';
      div.innerHTML += '<i style="background: #F8B88B"></i><span>Greater than 10 Million</span><br>';
      div.innerHTML += '<i style="background: #FAF884"></i><span>Greater than 5 Million</span><br>';
      div.innerHTML += '<i style="background: #BAED91"></i><span>Greater than 2 Million</span><br>';
      div.innerHTML += '<i style="background: #B2CEFE"></i><span>Greater than 0.5 Million</span><br>';
      div.innerHTML += '<i style="background: #F2A2E8"></i><span>Less Than 0.5 Million</span><br>';
  
  
      return div;
    };

  
  };
  
}


function createmap2030() {

  dataurl="https://raw.githubusercontent.com/JDICKENSON91/Project-3/logic/Data/global-city-population-estimates-2030.geojson"

  var container = L.DomUtil.get('map'); if(container != null){ container._leaflet_id = null; }

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
    if (population > 25000) {
      return '#FEA3AA'
    } else if (population > 10000) {
      return '#F8B88B'
    } else if (population > 5000) {
      return '#FAF884'
    } else if (population > 2000) {
        return '#BAED91'
      } else if (population > 500) {
        return '#B2CEFE'    
    } else {
      return '#F2A2E8'
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
  scrollWheelZoom: false,
  zoomControl: false,
  layers: [darkmap, population]
  });

  L.control.pan().addTo(myMap);
  L.control.zoom().addTo(myMap);
  
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
      div.innerHTML += '<i style="background: #FEA3AA"></i><span>Greater than 25 Million</span><br>';
      div.innerHTML += '<i style="background: #F8B88B"></i><span>Greater than 10 Million</span><br>';
      div.innerHTML += '<i style="background: #FAF884"></i><span>Greater than 5 Million</span><br>';
      div.innerHTML += '<i style="background: #BAED91"></i><span>Greater than 2 Million</span><br>';
      div.innerHTML += '<i style="background: #B2CEFE"></i><span>Greater than 0.5 Million</span><br>';
      div.innerHTML += '<i style="background: #F2A2E8"></i><span>Less Than 0.5 Million</span><br>';
  
  
      return div;
    };
    

    
  
  };
  
}

  
var button1950 = d3.select("#D1950-btn");
button1950.on("click", createmap1950);
    
var button1960 = d3.select("#D1960-btn");
button1960.on("click", createmap1960);

var button1970 = d3.select("#D1970-btn");
button1970.on("click", createmap1970);
    
var button1980 = d3.select("#D1980-btn");
button1980.on("click", createmap1980);
    
var button1990 = d3.select("#D1990-btn");
button1990.on("click", createmap1990);
    
var button2000 = d3.select("#D2000-btn");
button2000.on("click", createmap2000);
    
var button2010 = d3.select("#D2010-btn");
button2010.on("click", createmap2010);
    
var button2020 = d3.select("#D2020-btn");
button2020.on("click", createmap2020);
    
var button2030 = d3.select("#D2030-btn");
button2030.on("click", createmap2030);



