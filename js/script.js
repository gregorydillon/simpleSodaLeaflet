$( document ).ready(function() {

  //initialize the leaflet map, set options and view
  var map = L.map('map')
    .setView({{latitude}},{{longitude}}], {{zoom}});

  //add an OSM tileset as the base layer
  L.tileLayer({{Url for Basemap tiles}},{
    attribution: {{Attribution Text}}
  }).addTo(map);

  //call our getData() function.
  getData();


  function getData() {

    //Socrata Query
    var query = "https://opendata.demo.socrata.com/resource/3bfj-rqn7.json";

    //use jQuery's getJSON() to call the SODA API for NYC 311
    //concatenate sodaQueryBox and sevenDaysAgo to add a $where clause to the SODA endpoint
    $.getJSON(query, function(data){

      //iterate over each element, add a marker to the map
      for(var i=0; i<data.length; i++) {
        var marker = data[i];

        L.marker( [{{latitude}}, {{longitude}}] )
        .bindPopup(
          '<h4>' + {{Some attribute from the data}} + '</h4>'
          )
        .addTo(map);
      }
    })
  }
});