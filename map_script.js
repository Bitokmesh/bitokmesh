//OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
/*specifying the extent of the map*/
var extents = new OpenLayers.Bounds(3770444.9648360885,-540694.9212164582,4669514.277532622,608946.295373067); 

/*loading various controls to the map*/
var control, controls = [];

  var map = new OpenLayers.Map("map" /*this map is the div id in the html code*/, {
        controls: [
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.ArgParser(),
            //new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.LayerSwitcher({'div':OpenLayers.Util.getElement('dropdown-content')}),
            new OpenLayers.Control.MousePosition(),
            //new OpenLayers.Control.ScaleLine(),
            new OpenLayers.Control.PanZoomBar(),
             //new OpenLayers.Control.Zoom(),
            new OpenLayers.Control.KeyboardDefaults()
        ],
        maxExtent: extents,
        minExtent: "auto",
        restrictedExtent: extents /*one cannot pan outside the specified extent*/
    },
        {projection: new OpenLayers.Projection("EPSG:900913")}, /*specifying the projection*/
    

        {units: 'm'},
        {allOverlays: true} /*all other data added will overlay on the basemap*/
        );


   

 //var google_sat = new OpenLayers.Layer.Google("Google Satellite",{type:google.maps.MapTypeId.SATELLITE,numZoomLevels:40});

 var OSM = new OpenLayers.Layer.OSM("OpenStreetMap");  /*loading the OSM basemap*/


/*loading the overlays from GeoServer.kenyadata is the workspace name. Loading the layer as a WMS*/

 var road_networkt = new OpenLayers.Layer.WMS (
        "road_networkt",
        "http://localhost:8080/geoserver/web/project/wms",
        {layers:"project:road_networkt",transparent: true, format: "image/jpeg"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);

 var restaurants = new OpenLayers.Layer.WMS (
        "restaurants",
        "http://localhost:8080/geoserver/web/project/wms",
        {layers:"project:restaurants",transparent: true, format: "image/jpeg"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);

 

 


/*adding the data to the map object*/ 

map.addLayers([OSM,road_networkt,restaurants]);

/*specifying the center of the map and a zoom level of 6.5*/

map.setCenter(new OpenLayers.LonLat(4202772.79676, 87951.51065),6.5 );