var wms_layers = [];

var lyr_VoltaCatalunya2024_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.infraestructures.cat/geoserver/fo/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "VOLTA",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Volta Catalunya 2024',
                            popuplayertitle: 'Volta Catalunya 2024',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VoltaCatalunya2024_0, 0]);
var format_Municipis_1 = new ol.format.GeoJSON();
var features_Municipis_1 = format_Municipis_1.readFeatures(json_Municipis_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipis_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipis_1.addFeatures(features_Municipis_1);
var lyr_Municipis_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipis_1, 
                style: style_Municipis_1,
                popuplayertitle: ' Municipis',
                interactive: true,
                title: '<img src="styles/legend/Municipis_1.png" />  Municipis'
            });
var format_Comarques_2 = new ol.format.GeoJSON();
var features_Comarques_2 = format_Comarques_2.readFeatures(json_Comarques_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comarques_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comarques_2.addFeatures(features_Comarques_2);
var lyr_Comarques_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comarques_2, 
                style: style_Comarques_2,
                popuplayertitle: ' Comarques',
                interactive: true,
                title: '<img src="styles/legend/Comarques_2.png" />  Comarques'
            });
var format_Cap_Municipis_3 = new ol.format.GeoJSON();
var features_Cap_Municipis_3 = format_Cap_Municipis_3.readFeatures(json_Cap_Municipis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cap_Municipis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cap_Municipis_3.addFeatures(features_Cap_Municipis_3);
var lyr_Cap_Municipis_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cap_Municipis_3, 
                style: style_Cap_Municipis_3,
                popuplayertitle: ' Cap_Municipis',
                interactive: true,
                title: '<img src="styles/legend/Cap_Municipis_3.png" />  Cap_Municipis'
            });
var lyr_Ortofotocolor2024provisional_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_provisional",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto color 2024 (provisional)',
                            popuplayertitle: 'Ortofoto color 2024 (provisional)',
                            opacity: 0.700000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotocolor2024provisional_4, 0]);
var lyr_Topografia_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserveis.icgc.cat/servei/catalunya/topografia-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "topografia-territorial",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Topografia',
                            popuplayertitle: 'Topografia',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Topografia_5, 0]);
var lyr_FluvialT500aos_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
                              attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood.FluvialT500",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Fluvial T = 500 años',
                            popuplayertitle: 'Fluvial T = 500 años',
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_FluvialT500aos_6, 0]);
var lyr_FluvialT100aos_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
                              attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood.FluvialT100",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Fluvial T = 100 años',
                            popuplayertitle: 'Fluvial T = 100 años',
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_FluvialT100aos_7, 0]);
var lyr_FluvialT10aos_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones",
                              attributions: ' ',
                              params: {
                                "LAYERS": "NZ.Flood.FluvialT10",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Fluvial T = 10 años',
                            popuplayertitle: 'Fluvial T = 10 años',
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_FluvialT10aos_8, 0]);
var lyr_XarxaNatura2000_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://sig.gencat.cat/ows/ESPAIS_NATURALS/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ESPAISNATURALS_XARNAT_2000",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Xarxa Natura 2000',
                            popuplayertitle: 'Xarxa Natura 2000',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_XarxaNatura2000_9, 0]);
var format_Fites_10 = new ol.format.GeoJSON();
var jsonSource_Fites_10 = new ol.source.Vector({
    attributions: ' ',
    format: format_Fites_10
});var lyr_Fites_10 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Fites_10, 
    style: style_Fites_10,
    interactive: true,
    title: 'Fites'
});

function getFites_10Json(geojson) {
    var features_Fites_10 = format_Fites_10.readFeatures(geojson);
    jsonSource_Fites_10.addFeatures(features_Fites_10);
}
var format_PCCFL24099_FE_11 = new ol.format.GeoJSON();
var features_PCCFL24099_FE_11 = format_PCCFL24099_FE_11.readFeatures(json_PCCFL24099_FE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCCFL24099_FE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCCFL24099_FE_11.addFeatures(features_PCCFL24099_FE_11);
var lyr_PCCFL24099_FE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PCCFL24099_FE_11, 
                style: style_PCCFL24099_FE_11,
                popuplayertitle: 'PC-CFL-24099_FE',
                interactive: true,
                title: '<img src="styles/legend/PCCFL24099_FE_11.png" /> PC-CFL-24099_FE'
            });
var group_NoPrint = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'NoPrint'});
var group_topografiaterritorial_20250526_082011 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'topografia-territorial_20250526_082011'});
var group_LOT1 = new ol.layer.Group({
                                layers: [lyr_PCCFL24099_FE_11,],
                                fold: 'open',
                                title: 'LOT 1'});
var group_04Actuacions = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '04-Actuacions'});
var group_05Inventaris = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '05-Inventaris'});
var group_XarxaTransports = new ol.layer.Group({
                                layers: [lyr_Fites_10,],
                                fold: 'open',
                                title: 'Xarxa Transports'});
var group_EspaisNaturals = new ol.layer.Group({
                                layers: [lyr_XarxaNatura2000_9,],
                                fold: 'close',
                                title: 'Espais Naturals'});
var group_MediAmbient = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Medi Ambient'});
var group_ZonesInundables = new ol.layer.Group({
                                layers: [lyr_FluvialT500aos_6,lyr_FluvialT100aos_7,lyr_FluvialT10aos_8,],
                                fold: 'open',
                                title: 'Zones Inundables'});
var group_MapaUrbanistic = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mapa Urbanistic'});
var group_CartografiaBase = new ol.layer.Group({
                                layers: [lyr_Ortofotocolor2024provisional_4,lyr_Topografia_5,],
                                fold: 'open',
                                title: 'Cartografia Base'});
var group_LimitsAdministratius = new ol.layer.Group({
                                layers: [lyr_Municipis_1,lyr_Comarques_2,lyr_Cap_Municipis_3,],
                                fold: 'close',
                                title: 'Limits Administratius'});
var group_XarxaFibraptica = new ol.layer.Group({
                                layers: [lyr_VoltaCatalunya2024_0,],
                                fold: 'close',
                                title: 'Xarxa Fibra Òptica'});
var group_07TramitAudiencia = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '07-Tramit Audiencia'});

lyr_VoltaCatalunya2024_0.setVisible(true);lyr_Municipis_1.setVisible(true);lyr_Comarques_2.setVisible(true);lyr_Cap_Municipis_3.setVisible(true);lyr_Ortofotocolor2024provisional_4.setVisible(true);lyr_Topografia_5.setVisible(true);lyr_FluvialT500aos_6.setVisible(true);lyr_FluvialT100aos_7.setVisible(true);lyr_FluvialT10aos_8.setVisible(true);lyr_XarxaNatura2000_9.setVisible(true);lyr_Fites_10.setVisible(true);lyr_PCCFL24099_FE_11.setVisible(true);
var layersList = [group_XarxaFibraptica,group_LimitsAdministratius,group_CartografiaBase,group_ZonesInundables,group_EspaisNaturals,group_XarxaTransports,group_LOT1];
lyr_Municipis_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIMUNI': 'CODIMUNI', 'NOMMUNI': 'NOMMUNI', 'CAPMUNI': 'CAPMUNI', 'AREAM5000': 'AREAM5000', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'CODIVEGUE': 'CODIVEGUE', 'NOMVEGUE': 'NOMVEGUE', 'CAPVEGUE': 'CAPVEGUE', 'CODIPROV': 'CODIPROV', 'NOMPROV': 'NOMPROV', 'CAPPROV': 'CAPPROV', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Comarques_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODICOMAR': 'CODICOMAR', 'NOMCOMAR': 'NOMCOMAR', 'CAPCOMAR': 'CAPCOMAR', 'AREAC5000': 'AREAC5000', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Cap_Municipis_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NOMCAP': 'NOMCAP', 'TIPUSCAP': 'TIPUSCAP', 'CAPVEGUE': 'CAPVEGUE', 'CAPPROV': 'CAPPROV', 'CODIMUNI': 'CODIMUNI', 'CODICOMAR': 'CODICOMAR', 'CODIPROV': 'CODIPROV', 'DATAALTA': 'DATAALTA', });
lyr_Fites_10.set('fieldAliases', {'CODIVIA': 'CODIVIA', 'SENTIT': 'SENTIT', 'VALOR': 'VALOR', 'PROVEIDORFITES': 'PROVEIDORFITES', 'DATAACTUALITZACIO': 'DATAACTUALITZACIO', 'ID': 'ID', 'IDFITA': 'IDFITA', });
lyr_PCCFL24099_FE_11.set('fieldAliases', {'fid': 'fid', });
lyr_Municipis_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'CODIMUNI': 'TextEdit', 'NOMMUNI': 'TextEdit', 'CAPMUNI': 'TextEdit', 'AREAM5000': 'TextEdit', 'CODICOMAR': 'TextEdit', 'NOMCOMAR': 'TextEdit', 'CAPCOMAR': 'TextEdit', 'CODIVEGUE': 'TextEdit', 'NOMVEGUE': 'TextEdit', 'CAPVEGUE': 'TextEdit', 'CODIPROV': 'TextEdit', 'NOMPROV': 'TextEdit', 'CAPPROV': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Comarques_2.set('fieldImages', {'fid': '', 'OBJECTID': 'Range', 'CODICOMAR': 'TextEdit', 'NOMCOMAR': 'TextEdit', 'CAPCOMAR': 'TextEdit', 'AREAC5000': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Cap_Municipis_3.set('fieldImages', {'fid': '', 'OBJECTID': 'Range', 'NOMCAP': 'TextEdit', 'TIPUSCAP': 'TextEdit', 'CAPVEGUE': 'TextEdit', 'CAPPROV': 'TextEdit', 'CODIMUNI': 'TextEdit', 'CODICOMAR': 'TextEdit', 'CODIPROV': 'TextEdit', 'DATAALTA': 'TextEdit', });
lyr_Fites_10.set('fieldImages', {'CODIVIA': 'TextEdit', 'SENTIT': 'TextEdit', 'VALOR': 'TextEdit', 'PROVEIDORFITES': 'TextEdit', 'DATAACTUALITZACIO': 'DateTime', 'ID': 'TextEdit', 'IDFITA': 'TextEdit', });
lyr_PCCFL24099_FE_11.set('fieldImages', {'fid': '', });
lyr_Municipis_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIMUNI': 'no label', 'NOMMUNI': 'no label', 'CAPMUNI': 'no label', 'AREAM5000': 'no label', 'CODICOMAR': 'no label', 'NOMCOMAR': 'no label', 'CAPCOMAR': 'no label', 'CODIVEGUE': 'no label', 'NOMVEGUE': 'no label', 'CAPVEGUE': 'no label', 'CODIPROV': 'no label', 'NOMPROV': 'no label', 'CAPPROV': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Comarques_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODICOMAR': 'no label', 'NOMCOMAR': 'no label', 'CAPCOMAR': 'no label', 'AREAC5000': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Cap_Municipis_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NOMCAP': 'no label', 'TIPUSCAP': 'no label', 'CAPVEGUE': 'no label', 'CAPPROV': 'no label', 'CODIMUNI': 'no label', 'CODICOMAR': 'no label', 'CODIPROV': 'no label', 'DATAALTA': 'no label', });
lyr_Fites_10.set('fieldLabels', {'CODIVIA': 'no label', 'SENTIT': 'no label', 'VALOR': 'no label', 'PROVEIDORFITES': 'no label', 'DATAACTUALITZACIO': 'no label', 'ID': 'no label', 'IDFITA': 'no label', });
lyr_PCCFL24099_FE_11.set('fieldLabels', {'fid': 'no label', });
lyr_PCCFL24099_FE_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});