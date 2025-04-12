ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-75.163254, -17.496309, -70.654909, -14.106115]);
var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AREQUIPA_1 = new ol.format.GeoJSON();
var features_AREQUIPA_1 = format_AREQUIPA_1.readFeatures(json_AREQUIPA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AREQUIPA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREQUIPA_1.addFeatures(features_AREQUIPA_1);
var lyr_AREQUIPA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREQUIPA_1, 
                style: style_AREQUIPA_1,
                popuplayertitle: 'AREQUIPA',
                interactive: true,
    title: 'AREQUIPA<br />\
    <img src="styles/legend/AREQUIPA_1_0.png" /> Arequipa<br />' });
var format_AREQUIPAcopiar_2 = new ol.format.GeoJSON();
var features_AREQUIPAcopiar_2 = format_AREQUIPAcopiar_2.readFeatures(json_AREQUIPAcopiar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AREQUIPAcopiar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREQUIPAcopiar_2.addFeatures(features_AREQUIPAcopiar_2);
var lyr_AREQUIPAcopiar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREQUIPAcopiar_2, 
                style: style_AREQUIPAcopiar_2,
                popuplayertitle: 'AREQUIPA copiar',
                interactive: true,
                title: '<img src="styles/legend/AREQUIPAcopiar_2.png" /> AREQUIPA copiar'
            });
var format_cortearequipa_3 = new ol.format.GeoJSON();
var features_cortearequipa_3 = format_cortearequipa_3.readFeatures(json_cortearequipa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cortearequipa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cortearequipa_3.addFeatures(features_cortearequipa_3);
var lyr_cortearequipa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cortearequipa_3, 
                style: style_cortearequipa_3,
                popuplayertitle: 'corte-arequipa',
                interactive: true,
    title: 'corte-arequipa<br />\
    <img src="styles/legend/cortearequipa_3_0.png" /> A-a<br />\
    <img src="styles/legend/cortearequipa_3_1.png" /> Ad-c<br />\
    <img src="styles/legend/cortearequipa_3_2.png" /> Ao-b<br />\
    <img src="styles/legend/cortearequipa_3_3.png" /> C_poblados<br />\
    <img src="styles/legend/cortearequipa_3_4.png" /> C-d<br />\
    <img src="styles/legend/cortearequipa_3_5.png" /> Lagunas<br />\
    <img src="styles/legend/cortearequipa_3_6.png" /> Ll-a<br />\
    <img src="styles/legend/cortearequipa_3_7.png" /> Lld-c<br />\
    <img src="styles/legend/cortearequipa_3_8.png" /> Llo-b<br />\
    <img src="styles/legend/cortearequipa_3_9.png" /> Nv<br />\
    <img src="styles/legend/cortearequipa_3_10.png" /> Represa<br />\
    <img src="styles/legend/cortearequipa_3_11.png" /> V-a<br />\
    <img src="styles/legend/cortearequipa_3_12.png" /> Vc-d<br />\
    <img src="styles/legend/cortearequipa_3_13.png" /> Vc-e<br />\
    <img src="styles/legend/cortearequipa_3_14.png" /> Vg-a<br />\
    <img src="styles/legend/cortearequipa_3_15.png" /> Vs1-d<br />\
    <img src="styles/legend/cortearequipa_3_16.png" /> Vs1-e<br />\
    <img src="styles/legend/cortearequipa_3_17.png" /> Vs2-d<br />\
    <img src="styles/legend/cortearequipa_3_18.png" /> Vs2-e<br />\
    <img src="styles/legend/cortearequipa_3_19.png" /> Vs2d-e<br />\
    <img src="styles/legend/cortearequipa_3_20.png" /> Vs3-d<br />\
    <img src="styles/legend/cortearequipa_3_21.png" /> Vs3-e<br />\
    <img src="styles/legend/cortearequipa_3_22.png" /> Vsa-b<br />\
    <img src="styles/legend/cortearequipa_3_23.png" /> Vso-c<br />' });

lyr_EsriTopographic_0.setVisible(true);lyr_AREQUIPA_1.setVisible(true);lyr_AREQUIPAcopiar_2.setVisible(true);lyr_cortearequipa_3.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_AREQUIPA_1,lyr_AREQUIPAcopiar_2,lyr_cortearequipa_3];
lyr_AREQUIPA_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'Lista': 'Lista', });
lyr_AREQUIPAcopiar_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'Lista': 'Lista', });
lyr_cortearequipa_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SIMBOLO_': 'SIMBOLO_', 'REGION': 'REGION', 'FORMAS_DEL': 'FORMAS_DEL', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_AREQUIPA_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'Lista': 'TextEdit', });
lyr_AREQUIPAcopiar_2.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'Lista': 'TextEdit', });
lyr_cortearequipa_3.set('fieldImages', {'OBJECTID': 'Hidden', 'SIMBOLO_': 'Hidden', 'REGION': 'JsonEdit', 'FORMAS_DEL': 'Hidden', 'Area': 'Hidden', 'Perimetro': 'Hidden', });
lyr_AREQUIPA_1.set('fieldLabels', {'ID_0': 'header label - always visible', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'Lista': 'no label', });
lyr_AREQUIPAcopiar_2.set('fieldLabels', {'ID_0': 'inline label - visible with data', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'inline label - always visible', 'NAME_1': 'no label', 'Lista': 'no label', });
lyr_cortearequipa_3.set('fieldLabels', {'REGION': 'inline label - always visible', });
lyr_cortearequipa_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});