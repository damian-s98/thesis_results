// import 'ol/ol.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import VectorLayer from 'ol/layer/Vector';
// import OSM from 'ol/source/OSM';
// import VectorSource from 'ol/source/Vector';
// import GeoJSON from 'ol/format/GeoJSON';
// import { Style, Fill, Stroke, Circle } from 'ol/style';


const vectorSource = new VectorSource({
  url: 'data/test.geojson',
  format: new GeoJSON(),
});


const vectorStyle = new Style({
  fill: new Fill({
    color: 'rgba(255, 255, 255, 0.6)',
  }),
  stroke: new Stroke({
    color: '#319FD3',
    width: 1,
  }),
  image: new Circle({
    radius: 5,
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.6)',
    }),
    stroke: new Stroke({
      color: '#319FD3',
      width: 1,
    }),
  }),
});


const vectorLayer = new VectorLayer({
  source: vectorSource,
  style: vectorStyle,
});


const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    vectorLayer,
  ],
  target: 'map',
  view: new View({
    center: [0, 0], // Koordinaten anpassen
    zoom: 1,
  }),
});

map.updateSize()