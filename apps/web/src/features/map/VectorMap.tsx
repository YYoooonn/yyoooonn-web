import { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import MVT from "ol/format/MVT";
import { Style, Stroke, Fill } from "ol/style";

export default function VectorTileMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const apiKey = process.env.NEXT_PUBLIC_VWORLD_API_KEY;

    if (!apiKey) {
      console.error("VWorld API key is not set");
      return;
    }

    const vectorTileLayer = new VectorTileLayer({
      source: new VectorTileSource({
        format: new MVT(),
        url: `https://api.vworld.kr/req/wmts/vector/getTile/${apiKey}/traffic/{z}/{x}/{y}.pbf`, // ← 수정 필요
        maxZoom: 14,
      }),
      style: new Style({
        stroke: new Stroke({
          color: "#000000",
          width: 1,
        }),
        fill: new Fill({
          color: "rgba(0, 153, 255, 0.1)",
        }),
      }),
    });

    console.log("VectorTileLayer created:", vectorTileLayer);

    const map = new Map({
      target: mapRef.current,
      layers: [vectorTileLayer],
      view: new View({
        center: fromLonLat([127.0276, 37.4979]), // 서울
        zoom: 12,
      }),
    });

    return () => map.setTarget(undefined);
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100vh" }} />;
}
