//Centers

const centerSource = new ol.source.Vector({
  url: 'data/accidentsVaudFiltered/accidentsVaudClustering.geojson',
  format: new ol.format.GeoJSON(),
})

const centerStyle = new ol.style.Style({
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

const centerLayer = new ol.layer.Vector({
  source: centerSource,
  style: centerStyle,
})


//Set P
const pointSource = new ol.source.Vector({
  url: 'data/accidentsVaudFiltered/accidentsVaudP.geojson',
  format: new ol.format.GeoJSON(),
})

const pointStyle = new ol.style.Style({
  image: new ol.style.Circle({
    radius: 2,
    fill: new ol.style.Fill({
      color: 'blue',
    }),
  }),
})

const allPointsLayer = new ol.layer.Vector({
  source: pointSource,
  style: pointStyle,
})

const map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    centerLayer,
    allPointsLayer,
  ],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 1,
  }),
})

map.updateSize()
