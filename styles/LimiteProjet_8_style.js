var size = 0;
var placement = 'point';

var style_LimiteProjet_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#e31a1c";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("Titre") !== null) {
        labelText = String(feature.get("Titre"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.028}),fill: new ol.style.Fill({color: 'rgba(227,26,28,0.17254901960784313)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
