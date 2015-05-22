$( document ).ready(function() {

  //initialize the leaflet map, set options and view
  //   .setView({{latitude}},{{longitude}}], {{zoom}});
var map = L.map('map', {
      zoomControl: true,
      
      scrollWheelZoom: false
    })
    .setView([37.760693, -122.418475], 15);
    
    L.tileLayer(
    'http://openmapsurfer.uni-hd.de/tiles/roadsg/x={x}&y={y}&z={z}', {
      minZoom: 0,
      maxZoom: 19,
      attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  // //add an OSM tileset as the base layer
  // L.tileLayer({{Url for Basemap tiles}},{
  //   attribution: {{Attribution Text}}
  // }).addTo(map);

  // //call our getData() function.
  // getData();


  // function getData() {

  //   //Socrata Query
  //   var query = "https://opendata.demo.socrata.com/resource/3bfj-rqn7.json";

  //   //Use jQuery getJSON to query socrata, then create map markers for each result
  //   $.getJSON(query, function(data){

  //     //iterate over each element, add a marker to the map
  //     for(var i=0; i<data.length; i++) {
  //       var marker = data[i];

  //       L.marker( [{{latitude}}, {{longitude}}] )
  //       .bindPopup(
  //         '<h4>' + {{Some attribute from the data}} + '</h4>'
  //         )
  //       .addTo(map);
  //     }
  //   })
  // }
});