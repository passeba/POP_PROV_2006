var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PROVINCE_1 = new ol.format.GeoJSON();
var features_PROVINCE_1 = format_PROVINCE_1.readFeatures(json_PROVINCE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCE_1.addFeatures(features_PROVINCE_1);
var lyr_PROVINCE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVINCE_1, 
                style: style_PROVINCE_1,
                popuplayertitle: 'PROVINCE',
                interactive: true,
    title: 'PROVINCE<br />\
    <img src="styles/legend/PROVINCE_1_0.png" /> 70036 - 401507<br />\
    <img src="styles/legend/PROVINCE_1_1.png" /> 401507 - 732978<br />\
    <img src="styles/legend/PROVINCE_1_2.png" /> 732978 - 1064448<br />\
    <img src="styles/legend/PROVINCE_1_3.png" /> 1064448 - 1395919<br />\
    <img src="styles/legend/PROVINCE_1_4.png" /> 1395919 - 1727390<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_PROVINCE_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_PROVINCE_1];
lyr_PROVINCE_1.set('fieldAliases', {'NAME_2': 'NAME_2', 'PROV_POP20': 'PROV_POP20', });
lyr_PROVINCE_1.set('fieldImages', {'NAME_2': 'TextEdit', 'PROV_POP20': 'TextEdit', });
lyr_PROVINCE_1.set('fieldLabels', {'NAME_2': 'inline label - always visible', 'PROV_POP20': 'inline label - always visible', });
lyr_PROVINCE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});