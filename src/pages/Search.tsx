import React, { useRef, useEffect, useState } from 'react';
import {
  IonCol,
  IonRow,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonButton,
  useIonViewWillEnter,
} from '@ionic/react';
import { GoogleMap } from '@capacitor/google-maps';

interface Coordinate {
  lat: number;
  lng: number;
}

interface Marker {
  coordinate: Coordinate;
  title: string;
  snippet?: string;
}

const Search: React.FC = (): React.ReactNode => {
  const mapRef = useRef<HTMLElement>()
  let newMap: GoogleMap;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null)

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
              lat: 60.203029283626684,
              lng: 24.93236395359312,
            },
            zoom: 11,
          },
        });

        await addMarkers();

      }

      async function addMarkers() {
        const markers: Marker[] = [
          {
            coordinate: {
              lat: 60.29223978221889,
              lng: 25.040839265977787,
            },
            title: 'Tartarillas',
            snippet: 'random paskaa',
          },
          {
            coordinate: {
              lat: 60.18213301692835,
              lng: 24.95154923126749,
            },
            title: 'Cafe Ursus',
            snippet: 'jotain',
          },
          {
            coordinate: {
              lat: 60.19784439457986,
              lng: 24.929327189896302,
            },
            title: 'Authentic fish&chips',
            snippet: 'random paskaa',
          },
          {
            coordinate: {
              lat: 60.16875558971479,
              lng: 24.93869689256547,
            },
            title: 'Antalanya Pizza',
            snippet: 'random paskaa',
          },
          {
            coordinate: {
              lat: 60.251041820868124,
              lng: 25.013384702552923,
            },
            title: 'King sushi',
            snippet: 'random paskaa',
          },
          {
            coordinate: {
              lat: 60.17854965757714,
              lng: 24.923268848561836,
            },
            title: 'Jounis soup corner',
            snippet: 'random paskaa',
          }
        ];


        markers.forEach(async (marker) => {
          await newMap?.addMarker({
            coordinate: marker.coordinate,
            title: marker.title,
            snippet: marker.snippet,
          });
        });
      }

      async function initializeMap() {
        await createMap();
        await addMarkers();
      }

      initializeMap();
    }, 1000);


    newMap?.setOnMarkerClickListener((clickedMarker) => {
      const clickedPosition = clickedMarker.getPosition();
      const selectedMarker = markers.find(
        (m) => m.lat === clickedPosition.lat() && m.lng === clickedPosition.lng()
      );

      if (selectedMarker) {
        setSelectedMarker(selectedMarker);
        setIsModalOpen(true);
      }
    });


    return () => {

    };
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
        {/* Modal for displaying marker details */}
        <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
          <IonCard>
            <IonCardHeader>
              <IonTitle>{selectedMarker?.title}</IonTitle>
            </IonCardHeader>
            <IonCardContent>
              {/* You can display additional details of the selected marker here */}
              {selectedMarker?.snippet && <p>{selectedMarker.snippet}</p>}
            </IonCardContent>
            <IonButton onClick={() => setIsModalOpen(false)}>Close Modal</IonButton>
          </IonCard>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Search;
