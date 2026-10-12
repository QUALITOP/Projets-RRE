ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:26191").setExtent([346660.000000, 357732.060000, 410533.730000, 389509.380000]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LimiteProjetOumAzza_2 = new ol.format.GeoJSON();
var features_LimiteProjetOumAzza_2 = format_LimiteProjetOumAzza_2.readFeatures(json_LimiteProjetOumAzza_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimiteProjetOumAzza_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProjetOumAzza_2.addFeatures(features_LimiteProjetOumAzza_2);
var lyr_LimiteProjetOumAzza_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteProjetOumAzza_2, 
                style: style_LimiteProjetOumAzza_2,
                popuplayertitle: 'Limite Projet Oum Azza',
                interactive: true,
                title: '<img src="styles/legend/LimiteProjetOumAzza_2.png" /> Limite Projet Oum Azza'
            });
var format_LimiteProjetSidiYahyaZair_3 = new ol.format.GeoJSON();
var features_LimiteProjetSidiYahyaZair_3 = format_LimiteProjetSidiYahyaZair_3.readFeatures(json_LimiteProjetSidiYahyaZair_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimiteProjetSidiYahyaZair_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProjetSidiYahyaZair_3.addFeatures(features_LimiteProjetSidiYahyaZair_3);
var lyr_LimiteProjetSidiYahyaZair_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteProjetSidiYahyaZair_3, 
                style: style_LimiteProjetSidiYahyaZair_3,
                popuplayertitle: 'Limite Projet Sidi Yahya Zair',
                interactive: true,
                title: '<img src="styles/legend/LimiteProjetSidiYahyaZair_3.png" /> Limite Projet Sidi Yahya Zair'
            });
var format_LimiteProjetSkhirate_4 = new ol.format.GeoJSON();
var features_LimiteProjetSkhirate_4 = format_LimiteProjetSkhirate_4.readFeatures(json_LimiteProjetSkhirate_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimiteProjetSkhirate_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProjetSkhirate_4.addFeatures(features_LimiteProjetSkhirate_4);
var lyr_LimiteProjetSkhirate_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteProjetSkhirate_4, 
                style: style_LimiteProjetSkhirate_4,
                popuplayertitle: 'Limite Projet Skhirate',
                interactive: true,
                title: '<img src="styles/legend/LimiteProjetSkhirate_4.png" /> Limite Projet Skhirate'
            });
var format_LimiteProjetAinJohraExtension_5 = new ol.format.GeoJSON();
var features_LimiteProjetAinJohraExtension_5 = format_LimiteProjetAinJohraExtension_5.readFeatures(json_LimiteProjetAinJohraExtension_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimiteProjetAinJohraExtension_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProjetAinJohraExtension_5.addFeatures(features_LimiteProjetAinJohraExtension_5);
var lyr_LimiteProjetAinJohraExtension_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteProjetAinJohraExtension_5, 
                style: style_LimiteProjetAinJohraExtension_5,
                popuplayertitle: 'Limite Projet Ain Johra Extension',
                interactive: true,
                title: '<img src="styles/legend/LimiteProjetAinJohraExtension_5.png" /> Limite Projet Ain Johra Extension'
            });
var format_LimiteProjetAinJohraExistante_6 = new ol.format.GeoJSON();
var features_LimiteProjetAinJohraExistante_6 = format_LimiteProjetAinJohraExistante_6.readFeatures(json_LimiteProjetAinJohraExistante_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimiteProjetAinJohraExistante_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProjetAinJohraExistante_6.addFeatures(features_LimiteProjetAinJohraExistante_6);
var lyr_LimiteProjetAinJohraExistante_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteProjetAinJohraExistante_6, 
                style: style_LimiteProjetAinJohraExistante_6,
                popuplayertitle: 'Limite Projet Ain Johra Existante',
                interactive: true,
                title: '<img src="styles/legend/LimiteProjetAinJohraExistante_6.png" /> Limite Projet Ain Johra Existante'
            });
var format_LimitedeslotsAinJohraExistante_7 = new ol.format.GeoJSON();
var features_LimitedeslotsAinJohraExistante_7 = format_LimitedeslotsAinJohraExistante_7.readFeatures(json_LimitedeslotsAinJohraExistante_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimitedeslotsAinJohraExistante_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedeslotsAinJohraExistante_7.addFeatures(features_LimitedeslotsAinJohraExistante_7);
var lyr_LimitedeslotsAinJohraExistante_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedeslotsAinJohraExistante_7, 
                style: style_LimitedeslotsAinJohraExistante_7,
                popuplayertitle: 'Limite des lots Ain Johra Existante',
                interactive: true,
                title: '<img src="styles/legend/LimitedeslotsAinJohraExistante_7.png" /> Limite des lots Ain Johra Existante'
            });
var format_LimiteProjet_8 = new ol.format.GeoJSON();
var features_LimiteProjet_8 = format_LimiteProjet_8.readFeatures(json_LimiteProjet_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimiteProjet_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProjet_8.addFeatures(features_LimiteProjet_8);
var lyr_LimiteProjet_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteProjet_8, 
                style: style_LimiteProjet_8,
                popuplayertitle: 'Limite Projet',
                interactive: true,
                title: '<img src="styles/legend/LimiteProjet_8.png" /> Limite Projet'
            });
var format_LimitesdeslotsBouknadel_9 = new ol.format.GeoJSON();
var features_LimitesdeslotsBouknadel_9 = format_LimitesdeslotsBouknadel_9.readFeatures(json_LimitesdeslotsBouknadel_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimitesdeslotsBouknadel_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesdeslotsBouknadel_9.addFeatures(features_LimitesdeslotsBouknadel_9);
var lyr_LimitesdeslotsBouknadel_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesdeslotsBouknadel_9, 
                style: style_LimitesdeslotsBouknadel_9,
                popuplayertitle: 'Limites des lots Bouknadel',
                interactive: true,
                title: '<img src="styles/legend/LimitesdeslotsBouknadel_9.png" /> Limites des lots Bouknadel'
            });
var group_Bouknadel = new ol.layer.Group({
                                layers: [lyr_LimiteProjet_8,lyr_LimitesdeslotsBouknadel_9,],
                                fold: 'close',
                                title: 'Bouknadel'});
var group_AinJohra = new ol.layer.Group({
                                layers: [lyr_LimiteProjetAinJohraExistante_6,lyr_LimitedeslotsAinJohraExistante_7,],
                                fold: 'close',
                                title: 'Ain Johra'});
var group_AinJohraExtension = new ol.layer.Group({
                                layers: [lyr_LimiteProjetAinJohraExtension_5,],
                                fold: 'close',
                                title: 'Ain Johra Extension'});
var group_Skhirate = new ol.layer.Group({
                                layers: [lyr_LimiteProjetSkhirate_4,],
                                fold: 'close',
                                title: 'Skhirate'});
var group_SidiYahyaZair = new ol.layer.Group({
                                layers: [lyr_LimiteProjetSidiYahyaZair_3,],
                                fold: 'close',
                                title: 'Sidi Yahya Zair'});
var group_OumAzza = new ol.layer.Group({
                                layers: [lyr_LimiteProjetOumAzza_2,],
                                fold: 'close',
                                title: 'Oum Azza'});

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_LimiteProjetOumAzza_2.setVisible(true);lyr_LimiteProjetSidiYahyaZair_3.setVisible(true);lyr_LimiteProjetSkhirate_4.setVisible(true);lyr_LimiteProjetAinJohraExtension_5.setVisible(true);lyr_LimiteProjetAinJohraExistante_6.setVisible(true);lyr_LimitedeslotsAinJohraExistante_7.setVisible(true);lyr_LimiteProjet_8.setVisible(true);lyr_LimitesdeslotsBouknadel_9.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleHybrid_1,group_OumAzza,group_SidiYahyaZair,group_Skhirate,group_AinJohraExtension,group_AinJohra,group_Bouknadel];
lyr_LimiteProjetOumAzza_2.set('fieldAliases', {'Layer': 'Layer', 'Titre': 'Titre', });
lyr_LimiteProjetSidiYahyaZair_3.set('fieldAliases', {'Layer': 'Layer', 'Titre': 'Titre', });
lyr_LimiteProjetSkhirate_4.set('fieldAliases', {'Layer': 'Layer', 'Titre': 'Titre', });
lyr_LimiteProjetAinJohraExtension_5.set('fieldAliases', {'Layer': 'Layer', 'Titre': 'Titre', });
lyr_LimiteProjetAinJohraExistante_6.set('fieldAliases', {'Layer': 'Layer', 'Titre': 'Titre', });
lyr_LimitedeslotsAinJohraExistante_7.set('fieldAliases', {'Layer': 'Layer', 'Titre/Lot': 'Titre/Lot', });
lyr_LimiteProjet_8.set('fieldAliases', {'Layer': 'Layer', 'Titre': 'Titre', });
lyr_LimitesdeslotsBouknadel_9.set('fieldAliases', {'id': 'id', 'Titre/Lot': 'Titre/Lot', });
lyr_LimiteProjetOumAzza_2.set('fieldImages', {'Layer': 'TextEdit', 'Titre': 'TextEdit', });
lyr_LimiteProjetSidiYahyaZair_3.set('fieldImages', {'Layer': 'TextEdit', 'Titre': 'TextEdit', });
lyr_LimiteProjetSkhirate_4.set('fieldImages', {'Layer': 'TextEdit', 'Titre': 'TextEdit', });
lyr_LimiteProjetAinJohraExtension_5.set('fieldImages', {'Layer': 'TextEdit', 'Titre': 'TextEdit', });
lyr_LimiteProjetAinJohraExistante_6.set('fieldImages', {'Layer': 'TextEdit', 'Titre': 'TextEdit', });
lyr_LimitedeslotsAinJohraExistante_7.set('fieldImages', {'Layer': 'TextEdit', 'Titre/Lot': 'TextEdit', });
lyr_LimiteProjet_8.set('fieldImages', {'Layer': 'TextEdit', 'Titre': 'TextEdit', });
lyr_LimitesdeslotsBouknadel_9.set('fieldImages', {'id': 'TextEdit', 'Titre/Lot': 'TextEdit', });
lyr_LimiteProjetOumAzza_2.set('fieldLabels', {'Layer': 'no label', 'Titre': 'inline label - always visible', });
lyr_LimiteProjetSidiYahyaZair_3.set('fieldLabels', {'Layer': 'no label', 'Titre': 'inline label - always visible', });
lyr_LimiteProjetSkhirate_4.set('fieldLabels', {'Layer': 'no label', 'Titre': 'inline label - always visible', });
lyr_LimiteProjetAinJohraExtension_5.set('fieldLabels', {'Layer': 'no label', 'Titre': 'inline label - always visible', });
lyr_LimiteProjetAinJohraExistante_6.set('fieldLabels', {'Layer': 'no label', 'Titre': 'inline label - always visible', });
lyr_LimitedeslotsAinJohraExistante_7.set('fieldLabels', {'Layer': 'no label', 'Titre/Lot': 'inline label - always visible', });
lyr_LimiteProjet_8.set('fieldLabels', {'Layer': 'no label', 'Titre': 'inline label - always visible', });
lyr_LimitesdeslotsBouknadel_9.set('fieldLabels', {'id': 'no label', 'Titre/Lot': 'inline label - always visible', });
lyr_LimitesdeslotsBouknadel_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});