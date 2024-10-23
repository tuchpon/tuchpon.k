var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_female_cleaned_1 = new ol.format.GeoJSON();
var features_female_cleaned_1 = format_female_cleaned_1.readFeatures(json_female_cleaned_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_female_cleaned_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_female_cleaned_1.addFeatures(features_female_cleaned_1);
var lyr_female_cleaned_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_female_cleaned_1, 
                style: style_female_cleaned_1,
                popuplayertitle: "female_cleaned",
                interactive: true,
                title: '<img src="styles/legend/female_cleaned_1.png" /> female_cleaned'
            });
var format_male_cleaned_2 = new ol.format.GeoJSON();
var features_male_cleaned_2 = format_male_cleaned_2.readFeatures(json_male_cleaned_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_male_cleaned_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_male_cleaned_2.addFeatures(features_male_cleaned_2);
var lyr_male_cleaned_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_male_cleaned_2, 
                style: style_male_cleaned_2,
                popuplayertitle: "male_cleaned",
                interactive: true,
                title: '<img src="styles/legend/male_cleaned_2.png" /> male_cleaned'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_female_cleaned_1.setVisible(true);lyr_male_cleaned_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_female_cleaned_1,lyr_male_cleaned_2];
lyr_female_cleaned_1.set('fieldAliases', {'timestamp': 'timestamp', 'service': 'service', 'reg_type': 'reg_type', 'prefix': 'prefix', 'sex': 'sex', 'work': 'work', 'income': 'income', 'education': 'education', 'year': 'year', 'village_no': 'village_no', 'village': 'village', 'road': 'road', 'alley': 'alley', 'district': 'district', 'amphoe': 'amphoe', 'province': 'province', 'zipcode': 'zipcode', 'congenital': 'congenital', 'congenit_1': 'congenit_1', 'disability': 'disability', 'disabili_1': 'disabili_1', 'environmen': 'environmen', 'treatment_': 'treatment_', 'treatmen_1': 'treatmen_1', 'requiremen': 'requiremen', 'requirem_1': 'requirem_1', 'date_start': 'date_start', 'date_end': 'date_end', 'occupation': 'occupation', 'relationsh': 'relationsh', 'ability': 'ability', 'vaccine': 'vaccine', 'num_vaccin': 'num_vaccin', 'lat': 'lat', 'long': 'long', 'status': 'status', });
lyr_male_cleaned_2.set('fieldAliases', {'timestamp': 'timestamp', 'service': 'service', 'reg_type': 'reg_type', 'prefix': 'prefix', 'sex': 'sex', 'work': 'work', 'income': 'income', 'education': 'education', 'year': 'year', 'village_no': 'village_no', 'village': 'village', 'road': 'road', 'alley': 'alley', 'district': 'district', 'amphoe': 'amphoe', 'province': 'province', 'zipcode': 'zipcode', 'congenital': 'congenital', 'congenit_1': 'congenit_1', 'disability': 'disability', 'disabili_1': 'disabili_1', 'environmen': 'environmen', 'treatment_': 'treatment_', 'treatmen_1': 'treatmen_1', 'requiremen': 'requiremen', 'requirem_1': 'requirem_1', 'date_start': 'date_start', 'date_end': 'date_end', 'occupation': 'occupation', 'relationsh': 'relationsh', 'ability': 'ability', 'vaccine': 'vaccine', 'num_vaccin': 'num_vaccin', 'vaccine_ty': 'vaccine_ty', 'lat': 'lat', 'long': 'long', 'status': 'status', });
lyr_female_cleaned_1.set('fieldImages', {'timestamp': 'TextEdit', 'service': 'TextEdit', 'reg_type': 'TextEdit', 'prefix': 'TextEdit', 'sex': 'TextEdit', 'work': 'TextEdit', 'income': 'TextEdit', 'education': 'TextEdit', 'year': 'TextEdit', 'village_no': 'TextEdit', 'village': 'TextEdit', 'road': 'TextEdit', 'alley': 'TextEdit', 'district': 'TextEdit', 'amphoe': 'TextEdit', 'province': 'TextEdit', 'zipcode': 'TextEdit', 'congenital': 'TextEdit', 'congenit_1': 'TextEdit', 'disability': 'TextEdit', 'disabili_1': 'TextEdit', 'environmen': 'TextEdit', 'treatment_': 'TextEdit', 'treatmen_1': 'TextEdit', 'requiremen': 'TextEdit', 'requirem_1': 'TextEdit', 'date_start': 'TextEdit', 'date_end': 'TextEdit', 'occupation': 'TextEdit', 'relationsh': 'TextEdit', 'ability': 'TextEdit', 'vaccine': 'TextEdit', 'num_vaccin': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'status': 'TextEdit', });
lyr_male_cleaned_2.set('fieldImages', {'timestamp': 'TextEdit', 'service': 'TextEdit', 'reg_type': 'TextEdit', 'prefix': 'TextEdit', 'sex': 'TextEdit', 'work': 'TextEdit', 'income': 'TextEdit', 'education': 'TextEdit', 'year': 'TextEdit', 'village_no': 'TextEdit', 'village': 'TextEdit', 'road': 'TextEdit', 'alley': 'TextEdit', 'district': 'TextEdit', 'amphoe': 'TextEdit', 'province': 'TextEdit', 'zipcode': 'TextEdit', 'congenital': 'TextEdit', 'congenit_1': 'TextEdit', 'disability': 'TextEdit', 'disabili_1': 'TextEdit', 'environmen': 'TextEdit', 'treatment_': 'TextEdit', 'treatmen_1': 'TextEdit', 'requiremen': 'TextEdit', 'requirem_1': 'TextEdit', 'date_start': 'TextEdit', 'date_end': 'TextEdit', 'occupation': 'TextEdit', 'relationsh': 'TextEdit', 'ability': 'TextEdit', 'vaccine': 'TextEdit', 'num_vaccin': 'TextEdit', 'vaccine_ty': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'status': 'TextEdit', });
lyr_female_cleaned_1.set('fieldLabels', {'timestamp': 'inline label - always visible', 'service': 'inline label - always visible', 'reg_type': 'inline label - always visible', 'prefix': 'inline label - always visible', 'sex': 'inline label - always visible', 'work': 'inline label - always visible', 'income': 'inline label - always visible', 'education': 'inline label - always visible', 'year': 'inline label - always visible', 'village_no': 'inline label - always visible', 'village': 'inline label - always visible', 'road': 'inline label - always visible', 'alley': 'inline label - always visible', 'district': 'inline label - always visible', 'amphoe': 'inline label - always visible', 'province': 'inline label - always visible', 'zipcode': 'inline label - always visible', 'congenital': 'inline label - always visible', 'congenit_1': 'inline label - always visible', 'disability': 'inline label - always visible', 'disabili_1': 'inline label - always visible', 'environmen': 'inline label - always visible', 'treatment_': 'inline label - always visible', 'treatmen_1': 'inline label - always visible', 'requiremen': 'inline label - always visible', 'requirem_1': 'inline label - always visible', 'date_start': 'inline label - always visible', 'date_end': 'inline label - always visible', 'occupation': 'inline label - always visible', 'relationsh': 'inline label - always visible', 'ability': 'inline label - always visible', 'vaccine': 'inline label - always visible', 'num_vaccin': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', 'status': 'inline label - always visible', });
lyr_male_cleaned_2.set('fieldLabels', {'timestamp': 'inline label - always visible', 'service': 'inline label - always visible', 'reg_type': 'inline label - always visible', 'prefix': 'inline label - always visible', 'sex': 'inline label - always visible', 'work': 'inline label - always visible', 'income': 'inline label - always visible', 'education': 'inline label - always visible', 'year': 'inline label - always visible', 'village_no': 'inline label - always visible', 'village': 'inline label - always visible', 'road': 'inline label - always visible', 'alley': 'inline label - always visible', 'district': 'inline label - always visible', 'amphoe': 'inline label - always visible', 'province': 'inline label - always visible', 'zipcode': 'inline label - always visible', 'congenital': 'inline label - always visible', 'congenit_1': 'inline label - always visible', 'disability': 'inline label - always visible', 'disabili_1': 'inline label - always visible', 'environmen': 'inline label - always visible', 'treatment_': 'inline label - always visible', 'treatmen_1': 'inline label - always visible', 'requiremen': 'inline label - always visible', 'requirem_1': 'inline label - always visible', 'date_start': 'inline label - always visible', 'date_end': 'inline label - always visible', 'occupation': 'inline label - always visible', 'relationsh': 'inline label - always visible', 'ability': 'inline label - always visible', 'vaccine': 'inline label - always visible', 'num_vaccin': 'inline label - always visible', 'vaccine_ty': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', 'status': 'inline label - always visible', });
lyr_male_cleaned_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});