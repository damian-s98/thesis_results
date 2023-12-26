const vectorSource = new ol.source.Vector({
  url: 'data/test.geojson',
  format: new ol.format.GeoJSON(),
})

const vectorStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'rgba(255, 255, 255, 0.6)',
  }),
  stroke: new ol.style.Stroke({
    color: '#319FD3',
    width: 1,
  }),
  image: new ol.style.Circle({
    radius: 5,
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 0.6)',
    }),
    stroke: new ol.style.Stroke({
      color: '#319FD3',
      width: 1,
    }),
  }),
})

const vectorLayer = new ol.layer.Vector({
  source: vectorSource,
  style: vectorStyle,
})

const map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    vectorLayer,
  ],
  target: 'map',
  view: new ol.View({
    center: [0, 0], // Koordinaten anpassen
    zoom: 1,
  }),
})

map.updateSize()
