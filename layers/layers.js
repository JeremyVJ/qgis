var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RBI25K_ADMINISTRASI_AR_1 = new ol.format.GeoJSON();
var features_RBI25K_ADMINISTRASI_AR_1 = format_RBI25K_ADMINISTRASI_AR_1.readFeatures(json_RBI25K_ADMINISTRASI_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_ADMINISTRASI_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_ADMINISTRASI_AR_1.addFeatures(features_RBI25K_ADMINISTRASI_AR_1);
var lyr_RBI25K_ADMINISTRASI_AR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RBI25K_ADMINISTRASI_AR_1, 
                style: style_RBI25K_ADMINISTRASI_AR_1,
                interactive: true,
    title: 'RBI25K_ADMINISTRASI_AR<br />\
    <img src="styles/legend/RBI25K_ADMINISTRASI_AR_1_0.png" /> <br />\
    <img src="styles/legend/RBI25K_ADMINISTRASI_AR_1_1.png" /> Banyuwangi<br />\
    <img src="styles/legend/RBI25K_ADMINISTRASI_AR_1_2.png" /> Bondowoso<br />\
    <img src="styles/legend/RBI25K_ADMINISTRASI_AR_1_3.png" /> Jember<br />\
    <img src="styles/legend/RBI25K_ADMINISTRASI_AR_1_4.png" /> Lumajang<br />\
    <img src="styles/legend/RBI25K_ADMINISTRASI_AR_1_5.png" /> Probolinggo<br />\
    <img src="styles/legend/RBI25K_ADMINISTRASI_AR_1_6.png" /> Situbondo<br />'
        });
var format_jalan_tes2_2 = new ol.format.GeoJSON();
var features_jalan_tes2_2 = format_jalan_tes2_2.readFeatures(json_jalan_tes2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_tes2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_tes2_2.addFeatures(features_jalan_tes2_2);
var lyr_jalan_tes2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_tes2_2, 
                style: style_jalan_tes2_2,
                interactive: true,
                title: '<img src="styles/legend/jalan_tes2_2.png" /> jalan_tes2'
            });
var format_RBI25K_PEMERINTAHAN_PT_3 = new ol.format.GeoJSON();
var features_RBI25K_PEMERINTAHAN_PT_3 = format_RBI25K_PEMERINTAHAN_PT_3.readFeatures(json_RBI25K_PEMERINTAHAN_PT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_PEMERINTAHAN_PT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_PEMERINTAHAN_PT_3.addFeatures(features_RBI25K_PEMERINTAHAN_PT_3);
var lyr_RBI25K_PEMERINTAHAN_PT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RBI25K_PEMERINTAHAN_PT_3, 
                style: style_RBI25K_PEMERINTAHAN_PT_3,
                interactive: true,
                title: '<img src="styles/legend/RBI25K_PEMERINTAHAN_PT_3.png" /> RBI25K_PEMERINTAHAN_PT'
            });
var format_RBI25K_KESEHATAN_PT_4 = new ol.format.GeoJSON();
var features_RBI25K_KESEHATAN_PT_4 = format_RBI25K_KESEHATAN_PT_4.readFeatures(json_RBI25K_KESEHATAN_PT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_KESEHATAN_PT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_KESEHATAN_PT_4.addFeatures(features_RBI25K_KESEHATAN_PT_4);
var lyr_RBI25K_KESEHATAN_PT_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RBI25K_KESEHATAN_PT_4, 
                style: style_RBI25K_KESEHATAN_PT_4,
                interactive: true,
                title: '<img src="styles/legend/RBI25K_KESEHATAN_PT_4.png" /> RBI25K_KESEHATAN_PT'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RBI25K_ADMINISTRASI_AR_1.setVisible(true);lyr_jalan_tes2_2.setVisible(true);lyr_RBI25K_PEMERINTAHAN_PT_3.setVisible(true);lyr_RBI25K_KESEHATAN_PT_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RBI25K_ADMINISTRASI_AR_1,lyr_jalan_tes2_2,lyr_RBI25K_PEMERINTAHAN_PT_3,lyr_RBI25K_KESEHATAN_PT_4];
lyr_RBI25K_ADMINISTRASI_AR_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_jalan_tes2_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_PEMERINTAHAN_PT_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_RBI25K_KESEHATAN_PT_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_RBI25K_ADMINISTRASI_AR_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_jalan_tes2_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_LENG': '', 'SHAPE_LEN': '', });
lyr_RBI25K_PEMERINTAHAN_PT_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_RBI25K_KESEHATAN_PT_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', });
lyr_RBI25K_ADMINISTRASI_AR_1.set('fieldLabels', {'NAMOBJ': 'inline label', 'FCODE': 'no label', 'REMARK': 'inline label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_jalan_tes2_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_PEMERINTAHAN_PT_3.set('fieldLabels', {'NAMOBJ': 'inline label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_RBI25K_KESEHATAN_PT_4.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'inline label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_RBI25K_KESEHATAN_PT_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});