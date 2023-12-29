//Centers

const firstTrySourceCenter = 'data/accidents/cantonVaud/accidentsVaudClustering.geojson'
const firstTrySourcePoints = 'data/accidents/cantonVaud/accidentsVaudP.geojson'

const cantonBernSourcePoints = 'data/accidents/cantonBern/BernPoints.geojson'

// Clustering for Thun with k = 20:
const thunSourceCenter = 'data/accidents/cantonBern/ThunRegionClustering.geojson'

//Clustering for Interlaken:
const interlakenSourceCenter = 'data/accidents/cantonBern/InterlakenRegionClustering.geojson'

//Clustering for Bern city:
const bernSourceCenter = 'data/accidents/cantonBern/BernRegionClustering.geojson'

//Clustering for Biel:
const bielSourceCenter = 'data/accidents/cantonBern/BielRegionClustering.geojson'


const thunCenterSource = new ol.source.Vector({
  url: thunSourceCenter,
  format: new ol.format.GeoJSON(),
})

const interlakenCenterSource = new ol.source.Vector({
  url: interlakenSourceCenter,
  format: new ol.format.GeoJSON(),
})

const bernCenterSource = new ol.source.Vector({
  url: bernSourceCenter,
  format: new ol.format.GeoJSON(),
})

const bielCenterSource = new ol.source.Vector({
  url: bielSourceCenter,
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
      color: 'rgba(255, 0, 0, 0.6)',
    }),
    stroke: new ol.style.Stroke({
      color: '#ff0000',
      width: 1,
    }),
  }),
})

const thunCenterLayer = new ol.layer.Vector({
  source: thunCenterSource,
  style: centerStyle,
})

const interlakenCenterLayer = new ol.layer.Vector({
  source: interlakenCenterSource,
  style: centerStyle,
})

const bernCenterLayer = new ol.layer.Vector({
  source: bernCenterSource,
  style: centerStyle,
})

const bielCenterLayer = new ol.layer.Vector({
  source: bielCenterSource,
  style: centerStyle,
})


//Set P
const cantonBernPointSource = new ol.source.Vector({
  url: cantonBernSourcePoints,
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
  source: cantonBernPointSource,
  style: pointStyle,
})

const map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    allPointsLayer,
    thunCenterLayer,
    interlakenCenterLayer,
    bernCenterLayer,
    bielCenterLayer,
  ],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 1,
  }),
})

map.updateSize()
