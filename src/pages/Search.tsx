import React, { useState, useRef, FC, Dispatch, SetStateAction } from 'react';
import {
  IonCol,
  IonRow,
  IonContent,
  IonHeader,
  IonPage,
  useIonModal,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import './Search.css';
import { GoogleMap } from '@capacitor/google-maps';
import { markers } from '../data';
import MarkerInfoWindow from '../MarkerInfoWindow';

interface MapConfig {
  zoom: number;
  center: {
    lat: number;
    lng: number;
  };
}

const Search: FC = () => {
  const key = "AIzaSyAbQz_bURj7AJOTMy2Izq8nXjSq599L7uU";
  let newMap: GoogleMap | null = null;
  const mapRef = useRef<HTMLElement>(null);
  const [selectedMarker, setSelectedMarker] = useState<{
    lat: number;
    lng: number;
    title: string;
    description: string;
    address: string;
    website: string;
    phone: string;
  } | null>(null);

  const [present, dismiss] = useIonModal(MarkerInfoWindow, {
    marker: selectedMarker,
  });

  const modalOptions = {
    initialBreakpoint: 0.4,
    breakpoints: [0, 0.4],
    backdropBreakpoint: 0,
    onDidDismiss: () => dismiss(),
  };

  const [mapConfig, setMapConfig] = useState<MapConfig>({
    zoom: 10,
    center: {
      lat: markers[0].lat,
      lng: markers[0].lng,
    },
  });

  const markerClick = (marker: { latitude: number; longitude: number }) => {
    const foundMarker = markers.find(
      (m) => m.lat === marker.latitude && m.lng === marker.longitude
    );
    setSelectedMarker(foundMarker || null);
    present(modalOptions);
  };


  const addMapMarker = async (marker: { lat: number; lng: number; title: string }) => {
    if (newMap) {
      await newMap.addMarker({
        coordinate: {
          lat: marker.lat,
          lng: marker.lng,
        },
        title: marker.title,
      });
    }
  };

  const addMapMarkers = () => markers.forEach((marker) => addMapMarker(marker));

  const createMap = async () => {
    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: 'google-map',
      element: mapRef.current,
      apiKey: key,
      config: mapConfig,
    });

    if (newMap) {
      newMap.setOnMarkerClickListener((marker) => markerClick(marker));
      addMapMarkers();
    }
  };

  useIonViewWillEnter(() => {
    (async () => {
      await createMap();
    })();
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol size="12">
            <capacitor-google-map ref={mapRef} id="map"></capacitor-google-map>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Search;
