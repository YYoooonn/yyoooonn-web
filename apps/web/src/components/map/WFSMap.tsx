"use client";

import { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { bbox as bboxStrategy } from "ol/loadingstrategy";
import { fromLonLat } from "ol/proj";

function WFSMap() {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapElement.current) return;

    // === 배경 지도: OSM ===
    const baseLayer = new TileLayer({
      source: new OSM(),
    });

    // === WFS Vector Source 구성 ===
    const vectorSource = new VectorSource({
      format: new GeoJSON(),
      url: (extent) => {
        const params = new URLSearchParams({
          service: "WFS",
          version: "1.1.0",
          request: "GetFeature",
          typename: "lt_c_adsido_info",
          propertyName: "ctprvn_cd,cat_nam,ag_geom",
          output: "application/json",
          srsname: "EPSG:3857",
          bbox: "13987670,3912271,14359383,4642932",
          key: process.env.NEXT_PUBLIC_VWORLD_API_KEY as string,
          domain: "yyoooonn.com",
        });
        return `/api/wfs?${params.toString()}`;
      },
      strategy: bboxStrategy,
    });

    const wfsLayer = new VectorLayer({
      source: vectorSource,
    });

    // === 지도 객체 생성 ===
    const map = new Map({
      target: mapElement.current,
      layers: [wfsLayer],
      view: new View({
        center: fromLonLat([127.0276, 37.4979]), // 서울
        zoom: 13,
      }),
    });

    return () => map.setTarget(undefined);
  }, []);

  return <div ref={mapElement} style={{ width: "100%", height: "100vh" }} />;
}
