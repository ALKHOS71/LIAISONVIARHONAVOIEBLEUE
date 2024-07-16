var wms_layers = [];

var lyr_Ortho50cm_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/inspire/inspire/r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortho 50 cm",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho50cm_0, 0]);

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VOIEBLEUE_2 = new ol.format.GeoJSON();
var features_VOIEBLEUE_2 = format_VOIEBLEUE_2.readFeatures(json_VOIEBLEUE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOIEBLEUE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOIEBLEUE_2.addFeatures(features_VOIEBLEUE_2);
var lyr_VOIEBLEUE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOIEBLEUE_2, 
                style: style_VOIEBLEUE_2,
                popuplayertitle: "VOIE BLEUE",
                interactive: false,
                title: '<img src="styles/legend/VOIEBLEUE_2.png" /> VOIE BLEUE'
            });
var format_VIARHONA_3 = new ol.format.GeoJSON();
var features_VIARHONA_3 = format_VIARHONA_3.readFeatures(json_VIARHONA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONA_3.addFeatures(features_VIARHONA_3);
var lyr_VIARHONA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIARHONA_3, 
                style: style_VIARHONA_3,
                popuplayertitle: "VIARHONA",
                interactive: false,
                title: '<img src="styles/legend/VIARHONA_3.png" /> VIARHONA'
            });
var format_PROJETANNEAUBLEU_4 = new ol.format.GeoJSON();
var features_PROJETANNEAUBLEU_4 = format_PROJETANNEAUBLEU_4.readFeatures(json_PROJETANNEAUBLEU_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROJETANNEAUBLEU_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROJETANNEAUBLEU_4.addFeatures(features_PROJETANNEAUBLEU_4);
var lyr_PROJETANNEAUBLEU_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROJETANNEAUBLEU_4, 
                style: style_PROJETANNEAUBLEU_4,
                popuplayertitle: "PROJET ANNEAU BLEU",
                interactive: false,
                title: '<img src="styles/legend/PROJETANNEAUBLEU_4.png" /> PROJET ANNEAU BLEU'
            });
var format_BOUCLESLOISIRS_5 = new ol.format.GeoJSON();
var features_BOUCLESLOISIRS_5 = format_BOUCLESLOISIRS_5.readFeatures(json_BOUCLESLOISIRS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUCLESLOISIRS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUCLESLOISIRS_5.addFeatures(features_BOUCLESLOISIRS_5);
var lyr_BOUCLESLOISIRS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUCLESLOISIRS_5, 
                style: style_BOUCLESLOISIRS_5,
                popuplayertitle: "BOUCLES LOISIRS",
                interactive: false,
                title: '<img src="styles/legend/BOUCLESLOISIRS_5.png" /> BOUCLES LOISIRS'
            });
var format_LIAISONAMENAGEMENTSPRECONISES_6 = new ol.format.GeoJSON();
var features_LIAISONAMENAGEMENTSPRECONISES_6 = format_LIAISONAMENAGEMENTSPRECONISES_6.readFeatures(json_LIAISONAMENAGEMENTSPRECONISES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIAISONAMENAGEMENTSPRECONISES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIAISONAMENAGEMENTSPRECONISES_6.addFeatures(features_LIAISONAMENAGEMENTSPRECONISES_6);
var lyr_LIAISONAMENAGEMENTSPRECONISES_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIAISONAMENAGEMENTSPRECONISES_6, 
                style: style_LIAISONAMENAGEMENTSPRECONISES_6,
                popuplayertitle: "LIAISON : AMENAGEMENTS PRECONISES",
                interactive: true,
    title: 'LIAISON : AMENAGEMENTS PRECONISES<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_0.png" /> Voie verte<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_1.png" /> Piste cyclable<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_2.png" /> Voie interdite aux véhicules motorisés sauf ayants droits<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_3.png" /> Chaussée à voie centrale banalisée<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_4.png" /> Chaussée à voie centrale banalisée + zone 30<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_5.png" /> Double sens cyclable<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_6.png" /> Impasse avec débouché cyclable<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_7.png" /> Vélorue<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_8.png" /> Vélorue + double sens cyclable<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_9.png" /> Vélorue + zone 20 ou zone 30<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_10.png" /> Vélorue + zone 30<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_11.png" /> voie partagée avec simple jalonnement<br />\
    <img src="styles/legend/LIAISONAMENAGEMENTSPRECONISES_6_12.png" /> voie partagée avec simple jalonnement + alternat<br />'
        });
var format_LIAISONPOINTSDURS_7 = new ol.format.GeoJSON();
var features_LIAISONPOINTSDURS_7 = format_LIAISONPOINTSDURS_7.readFeatures(json_LIAISONPOINTSDURS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIAISONPOINTSDURS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIAISONPOINTSDURS_7.addFeatures(features_LIAISONPOINTSDURS_7);
var lyr_LIAISONPOINTSDURS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIAISONPOINTSDURS_7, 
                style: style_LIAISONPOINTSDURS_7,
                popuplayertitle: "LIAISON : POINTS DURS",
                interactive: true,
                title: '<img src="styles/legend/LIAISONPOINTSDURS_7.png" /> LIAISON : POINTS DURS'
            });

lyr_Ortho50cm_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_VOIEBLEUE_2.setVisible(true);lyr_VIARHONA_3.setVisible(true);lyr_PROJETANNEAUBLEU_4.setVisible(true);lyr_BOUCLESLOISIRS_5.setVisible(true);lyr_LIAISONAMENAGEMENTSPRECONISES_6.setVisible(true);lyr_LIAISONPOINTSDURS_7.setVisible(true);
var layersList = [lyr_Ortho50cm_0,lyr_OpenStreetMap_1,lyr_VOIEBLEUE_2,lyr_VIARHONA_3,lyr_PROJETANNEAUBLEU_4,lyr_BOUCLESLOISIRS_5,lyr_LIAISONAMENAGEMENTSPRECONISES_6,lyr_LIAISONPOINTSDURS_7];
lyr_VOIEBLEUE_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'stroke': 'stroke', 'stroke_opa': 'stroke_opa', 'fill_opaci': 'fill_opaci', });
lyr_VIARHONA_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_PROJETANNEAUBLEU_4.set('fieldAliases', {'id': 'id', });
lyr_BOUCLESLOISIRS_5.set('fieldAliases', {'ID': 'ID', 'COMMUNE': 'COMMUNE', 'TYPE ITI': 'TYPE ITI', 'BOUCLE': 'BOUCLE', 'LINEAIRE E': 'LINEAIRE E', 'TYPE EP': 'TYPE EP', 'POINTDUR': 'POINTDUR', 'INTERET': 'INTERET', 'SDC': 'SDC', 'LIAISON': 'LIAISON', 'STATUT': 'STATUT', 'AGGLO': 'AGGLO', 'EMPRISE': 'EMPRISE', 'LARG_AMGT': 'LARG_AMGT', 'REVETEMENT': 'REVETEMENT', 'ETAT REV': 'ETAT REV', 'PRATICABIL': 'PRATICABIL', 'L_ACCOT1': 'L_ACCOT1', 'NAT_ACCOT1': 'NAT_ACCOT1', 'L_ACCOT2': 'L_ACCOT2', 'NAT_ACCOT2': 'NAT_ACCOT2', 'JALON': 'JALON', 'LINEAIRE': 'LINEAIRE', 'TRAFIC': 'TRAFIC', 'COMMENTAIR': 'COMMENTAIR', 'FONCTION': 'FONCTION', 'AMGT_PRECO': 'AMGT_PRECO', 'DIRECTION': 'DIRECTION', 'REVETEMT_C': 'REVETEMT_C', 'LARGEUR_AM': 'LARGEUR_AM', 'TRAVAUX': 'TRAVAUX', 'PROFIL_TYP': 'PROFIL_TYP', 'PU€HT': 'PU€HT', '.+/-VALUE': '.+/-VALUE', 'TOTAL €': 'TOTAL €', 'ACQ_FONC': 'ACQ_FONC', 'MOE_ALEAS': 'MOE_ALEAS', 'TOTAL_HT': 'TOTAL_HT', 'AMGT_PRE_1': 'AMGT_PRE_1', 'DIRECTION2': 'DIRECTION2', 'REVETEMT2': 'REVETEMT2', 'LARGEUR__1': 'LARGEUR__1', 'TRAVAUX2': 'TRAVAUX2', 'PROFIL_T_1': 'PROFIL_T_1', 'PU€HT2': 'PU€HT2', '.+/-VALUE2': '.+/-VALUE2', 'TOTAL ��_1': 'TOTAL ��_1', 'ACQ_FONC2': 'ACQ_FONC2', 'MOE_ALEAS2': 'MOE_ALEAS2', 'TOTAL_HT2': 'TOTAL_HT2', 'MO': 'MO', 'SOURCE': 'SOURCE', });
lyr_LIAISONAMENAGEMENTSPRECONISES_6.set('fieldAliases', {'ID': 'ID', 'PHOTO': 'PHOTO', 'COMMUNE': 'COMMUNE', 'TYPE ITI': 'TYPE ITI', 'LIAISON': 'LIAISON', 'SDC': 'SDC', 'STATUT': 'STATUT', 'AGGLO': 'AGGLO', 'EMPRISE': 'EMPRISE', 'REVETEMENT': 'REVETEMENT', 'ETAT REV': 'ETAT REV', 'PRATICABIL': 'PRATICABIL', 'LINEAIRE': 'LINEAIRE', 'TRAFIC': 'TRAFIC', 'COMMENTAIR': 'COMMENTAIR', 'FONCTION': 'FONCTION', 'AMGT_PRECO': 'AMGT_PRECO', 'DIRECTION': 'DIRECTION', 'REVETEMT_C': 'REVETEMT_C', 'LARGEUR_AM': 'LARGEUR_AM', 'TRAVAUX': 'TRAVAUX', 'PROFIL_TYP': 'PROFIL_TYP', 'PU€HT': 'PU€HT', '.+/-VALUE': '.+/-VALUE', 'TOTAL €': 'TOTAL €', 'ACQ_FONC': 'ACQ_FONC', 'MOE_ALEAS': 'MOE_ALEAS', 'TOTAL_HT': 'TOTAL_HT', 'MO': 'MO', 'SOURCE': 'SOURCE', });
lyr_LIAISONPOINTSDURS_7.set('fieldAliases', {'ID': 'ID', 'PHOTO': 'PHOTO', 'COMMUNE': 'COMMUNE', 'TYPE ITI': 'TYPE ITI', 'LIAISON': 'LIAISON', 'SDC': 'SDC', 'AGGLO': 'AGGLO', 'COMMENTAIR': 'COMMENTAIR', 'AMGT_PRECO': 'AMGT_PRECO', 'DIRECTION': 'DIRECTION', 'REVETEMT_C': 'REVETEMT_C', 'LARGEUR_AM': 'LARGEUR_AM', 'TRAVAUX': 'TRAVAUX', 'PROFIL_TYP': 'PROFIL_TYP', 'PU€HT': 'PU€HT', '.+/-VALUE': '.+/-VALUE', 'TOTAL €': 'TOTAL €', 'ACQ_FONC': 'ACQ_FONC', 'MOE_ALEAS': 'MOE_ALEAS', 'TOTAL_HT': 'TOTAL_HT', 'MO': 'MO', 'SOURCE': 'SOURCE', });
lyr_VOIEBLEUE_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'stroke': 'TextEdit', 'stroke_opa': 'TextEdit', 'fill_opaci': 'TextEdit', });
lyr_VIARHONA_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_PROJETANNEAUBLEU_4.set('fieldImages', {'id': 'TextEdit', });
lyr_BOUCLESLOISIRS_5.set('fieldImages', {'ID': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE ITI': 'TextEdit', 'BOUCLE': 'TextEdit', 'LINEAIRE E': 'TextEdit', 'TYPE EP': 'TextEdit', 'POINTDUR': 'TextEdit', 'INTERET': 'TextEdit', 'SDC': 'TextEdit', 'LIAISON': 'TextEdit', 'STATUT': 'TextEdit', 'AGGLO': 'TextEdit', 'EMPRISE': 'TextEdit', 'LARG_AMGT': 'TextEdit', 'REVETEMENT': 'TextEdit', 'ETAT REV': 'TextEdit', 'PRATICABIL': 'TextEdit', 'L_ACCOT1': 'TextEdit', 'NAT_ACCOT1': 'TextEdit', 'L_ACCOT2': 'TextEdit', 'NAT_ACCOT2': 'TextEdit', 'JALON': 'TextEdit', 'LINEAIRE': 'TextEdit', 'TRAFIC': 'TextEdit', 'COMMENTAIR': 'TextEdit', 'FONCTION': 'TextEdit', 'AMGT_PRECO': 'TextEdit', 'DIRECTION': 'TextEdit', 'REVETEMT_C': 'TextEdit', 'LARGEUR_AM': 'TextEdit', 'TRAVAUX': 'TextEdit', 'PROFIL_TYP': 'TextEdit', 'PU€HT': 'TextEdit', '.+/-VALUE': 'TextEdit', 'TOTAL €': 'TextEdit', 'ACQ_FONC': 'TextEdit', 'MOE_ALEAS': 'TextEdit', 'TOTAL_HT': 'TextEdit', 'AMGT_PRE_1': 'TextEdit', 'DIRECTION2': 'TextEdit', 'REVETEMT2': 'TextEdit', 'LARGEUR__1': 'TextEdit', 'TRAVAUX2': 'TextEdit', 'PROFIL_T_1': 'TextEdit', 'PU€HT2': 'TextEdit', '.+/-VALUE2': 'TextEdit', 'TOTAL ��_1': 'TextEdit', 'ACQ_FONC2': 'TextEdit', 'MOE_ALEAS2': 'TextEdit', 'TOTAL_HT2': 'TextEdit', 'MO': 'TextEdit', 'SOURCE': 'TextEdit', });
lyr_LIAISONAMENAGEMENTSPRECONISES_6.set('fieldImages', {'ID': 'TextEdit', 'PHOTO': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE ITI': 'TextEdit', 'LIAISON': 'TextEdit', 'SDC': 'TextEdit', 'STATUT': 'TextEdit', 'AGGLO': 'TextEdit', 'EMPRISE': 'TextEdit', 'REVETEMENT': 'TextEdit', 'ETAT REV': 'TextEdit', 'PRATICABIL': 'TextEdit', 'LINEAIRE': 'TextEdit', 'TRAFIC': 'TextEdit', 'COMMENTAIR': 'TextEdit', 'FONCTION': 'TextEdit', 'AMGT_PRECO': 'TextEdit', 'DIRECTION': 'TextEdit', 'REVETEMT_C': 'TextEdit', 'LARGEUR_AM': 'TextEdit', 'TRAVAUX': 'TextEdit', 'PROFIL_TYP': 'TextEdit', 'PU€HT': 'TextEdit', '.+/-VALUE': 'TextEdit', 'TOTAL €': 'TextEdit', 'ACQ_FONC': 'TextEdit', 'MOE_ALEAS': 'TextEdit', 'TOTAL_HT': 'TextEdit', 'MO': 'TextEdit', 'SOURCE': 'TextEdit', });
lyr_LIAISONPOINTSDURS_7.set('fieldImages', {'ID': 'TextEdit', 'PHOTO': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE ITI': 'TextEdit', 'LIAISON': 'Range', 'SDC': 'TextEdit', 'AGGLO': 'TextEdit', 'COMMENTAIR': 'TextEdit', 'AMGT_PRECO': 'TextEdit', 'DIRECTION': 'TextEdit', 'REVETEMT_C': 'TextEdit', 'LARGEUR_AM': 'TextEdit', 'TRAVAUX': 'TextEdit', 'PROFIL_TYP': 'TextEdit', 'PU€HT': 'TextEdit', '.+/-VALUE': 'TextEdit', 'TOTAL €': 'TextEdit', 'ACQ_FONC': 'TextEdit', 'MOE_ALEAS': 'TextEdit', 'TOTAL_HT': 'TextEdit', 'MO': 'TextEdit', 'SOURCE': 'TextEdit', });
lyr_VOIEBLEUE_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'stroke': 'no label', 'stroke_opa': 'no label', 'fill_opaci': 'no label', });
lyr_VIARHONA_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_PROJETANNEAUBLEU_4.set('fieldLabels', {'id': 'no label', });
lyr_BOUCLESLOISIRS_5.set('fieldLabels', {'ID': 'inline label - always visible', 'COMMUNE': 'no label', 'TYPE ITI': 'no label', 'BOUCLE': 'no label', 'LINEAIRE E': 'no label', 'TYPE EP': 'no label', 'POINTDUR': 'no label', 'INTERET': 'no label', 'SDC': 'no label', 'LIAISON': 'no label', 'STATUT': 'no label', 'AGGLO': 'no label', 'EMPRISE': 'no label', 'LARG_AMGT': 'no label', 'REVETEMENT': 'no label', 'ETAT REV': 'no label', 'PRATICABIL': 'no label', 'L_ACCOT1': 'no label', 'NAT_ACCOT1': 'no label', 'L_ACCOT2': 'no label', 'NAT_ACCOT2': 'no label', 'JALON': 'no label', 'LINEAIRE': 'no label', 'TRAFIC': 'no label', 'COMMENTAIR': 'no label', 'FONCTION': 'no label', 'AMGT_PRECO': 'no label', 'DIRECTION': 'no label', 'REVETEMT_C': 'no label', 'LARGEUR_AM': 'no label', 'TRAVAUX': 'no label', 'PROFIL_TYP': 'no label', 'PU€HT': 'no label', '.+/-VALUE': 'no label', 'TOTAL €': 'no label', 'ACQ_FONC': 'no label', 'MOE_ALEAS': 'no label', 'TOTAL_HT': 'no label', 'AMGT_PRE_1': 'no label', 'DIRECTION2': 'no label', 'REVETEMT2': 'no label', 'LARGEUR__1': 'no label', 'TRAVAUX2': 'no label', 'PROFIL_T_1': 'no label', 'PU€HT2': 'no label', '.+/-VALUE2': 'no label', 'TOTAL ��_1': 'no label', 'ACQ_FONC2': 'no label', 'MOE_ALEAS2': 'no label', 'TOTAL_HT2': 'no label', 'MO': 'no label', 'SOURCE': 'no label', });
lyr_LIAISONAMENAGEMENTSPRECONISES_6.set('fieldLabels', {'ID': 'inline label - always visible', 'PHOTO': 'inline label - always visible', 'COMMUNE': 'inline label - always visible', 'TYPE ITI': 'inline label - always visible', 'LIAISON': 'inline label - always visible', 'SDC': 'inline label - always visible', 'STATUT': 'inline label - always visible', 'AGGLO': 'inline label - always visible', 'EMPRISE': 'inline label - always visible', 'REVETEMENT': 'inline label - always visible', 'ETAT REV': 'inline label - always visible', 'PRATICABIL': 'inline label - always visible', 'LINEAIRE': 'inline label - always visible', 'TRAFIC': 'inline label - always visible', 'COMMENTAIR': 'inline label - always visible', 'FONCTION': 'inline label - always visible', 'AMGT_PRECO': 'inline label - always visible', 'DIRECTION': 'inline label - always visible', 'REVETEMT_C': 'inline label - always visible', 'LARGEUR_AM': 'inline label - always visible', 'TRAVAUX': 'inline label - always visible', 'PROFIL_TYP': 'inline label - always visible', 'PU€HT': 'inline label - always visible', '.+/-VALUE': 'inline label - always visible', 'TOTAL €': 'inline label - always visible', 'ACQ_FONC': 'inline label - always visible', 'MOE_ALEAS': 'inline label - always visible', 'TOTAL_HT': 'inline label - always visible', 'MO': 'inline label - always visible', 'SOURCE': 'inline label - always visible', });
lyr_LIAISONPOINTSDURS_7.set('fieldLabels', {'ID': 'inline label - always visible', 'PHOTO': 'inline label - always visible', 'COMMUNE': 'inline label - always visible', 'TYPE ITI': 'inline label - always visible', 'LIAISON': 'inline label - always visible', 'SDC': 'inline label - always visible', 'AGGLO': 'inline label - always visible', 'COMMENTAIR': 'inline label - always visible', 'AMGT_PRECO': 'inline label - always visible', 'DIRECTION': 'inline label - always visible', 'REVETEMT_C': 'inline label - always visible', 'LARGEUR_AM': 'inline label - always visible', 'TRAVAUX': 'inline label - always visible', 'PROFIL_TYP': 'inline label - always visible', 'PU€HT': 'inline label - always visible', '.+/-VALUE': 'inline label - always visible', 'TOTAL €': 'inline label - always visible', 'ACQ_FONC': 'inline label - always visible', 'MOE_ALEAS': 'inline label - always visible', 'TOTAL_HT': 'inline label - always visible', 'MO': 'inline label - always visible', 'SOURCE': 'inline label - always visible', });
lyr_LIAISONPOINTSDURS_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});