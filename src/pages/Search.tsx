import React, { useRef, useEffect } from 'react';
import {
  IonCol,
  IonRow,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { GoogleMap } from '@capacitor/google-maps';

const Search: React.FC = () => {
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  useEffect(() => {
    setTimeout(() => {
      async function createMap() {
        if (!mapRef.current) return;

        newMap = await GoogleMap.create({
          id: 'my-cool-map',
          element: mapRef.current,
          apiKey: 'AIzaSyAbQz_bURj7AJOTMy2Izq8nXjSq599L7uU',
          config: {
            center: {
              lat: 60.293508960349065,
              lng: 25.038473304410385,
            },
            zoom: 12,
          },
        });
      }

      createMap();
    }, 1000);
  }, []);

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar className="toolbar" color="tertiary">
          <IonTitle className="account" >Search</IonTitle>
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
            <capacitor-google-map
              ref={mapRef}
              style={{ display: 'inline-block', width: '100%', height: '100vh' }}
            ></capacitor-google-map>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Search;
