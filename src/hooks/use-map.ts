import { MutableRefObject, useEffect, useRef, useState } from 'react';

import { LatLng, Map, TileLayer } from 'leaflet';

import { LocationType } from '../types/booking';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, location: LocationType): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const { coords } = location;
  const [latitude, longitude] = coords;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude
        },
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
    if (mapRef.current !== null) {
      if (map) {
        map.setView(new LatLng(latitude, longitude));
      }
    }
  }, [mapRef, map, latitude, longitude]);

  return map;
}

export default useMap;
