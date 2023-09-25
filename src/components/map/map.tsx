import 'leaflet/dist/leaflet.css';

import { useEffect, useRef } from 'react';

import { Icon, layerGroup, Marker } from 'leaflet';

import { UrlMarker } from '../../const/map';
import useMap from '../../hooks/use-map';
import { ScheduleType } from '../../types/booking';

type MapProps = {
  bookings: ScheduleType[];
  activeBookingsId?: string | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.Current,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ bookings, activeBookingsId }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, bookings[0].location);

  useEffect(() => {

    if (map) {
      const markerLayer = layerGroup().addTo(map);

      bookings.forEach((booking) => {
        const { coords } = booking.location;
        const [latitude, longitude] = coords;
        const marker = new Marker({
          lat: latitude,
          lng: longitude
        });

        const activeCustomIcon = activeBookingsId && booking.id === activeBookingsId
          ? currentCustomIcon
          : defaultCustomIcon;

        marker
          .setIcon(
            activeCustomIcon
          ).addTo(markerLayer);

      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [activeBookingsId, bookings, map]);
  return (
    <section className={'map'} ref={mapRef}>
    </section >
  );
}

export default Map;
