import { IonContent, IonHeader, IonNav, IonItem, IonLabel, IonButton, IonPage, IonTitle, IonToolbar, IonCol, IonRow, IonInput, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Search.css';
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';
import { useRef, useState, useEffect } from 'react';

const MAX_ZOOM = 17;

const Search: React.FC = () => {

  const mapElement = useRef<HTMLDivElement>(null);
  const [mapLongitude, setMapLongitude] = useState<string>();
  const [mapLatitude, setMapLatitude] = useState<string>();
  const [mapZoom, setMapZoom] = useState<number>(13);
  const [map, setMap] = useState<tt.Map | null>(null);

  const increaseZoom = () => {
    if (mapZoom < MAX_ZOOM) {
      setMapZoom(mapZoom + 1);
    }
  };

  const decreaseZoom = () => {
    if (mapZoom > 1) {
      setMapZoom(mapZoom - 1);
    }
  };

  const updateMap = () => {
    if (map && mapLongitude !== undefined && mapLatitude !== undefined) {
      const longitude = parseFloat(mapLongitude);
      const latitude = parseFloat(mapLatitude);

      if (!isNaN(longitude) && !isNaN(latitude)) {
        map.setCenter([longitude, latitude]);
        map.setZoom(mapZoom);
      }
    }
  };

  useEffect(() => {
    if (!mapElement.current || mapLongitude === undefined || mapLatitude === undefined) return;

    const longitude = parseFloat(mapLongitude);
    const latitude = parseFloat(mapLatitude);

    if (!isNaN(longitude) && !isNaN(latitude)) {
      const mapInstance = tt.map({
        key: "CGoGHo5RDTCcZxTNXdJaivJQAmyZBFbK",
        container: mapElement.current,
        center: [longitude, latitude],
        zoom: mapZoom,
      });

      setMap(mapInstance);

      return () => mapInstance.remove();
    }
  }, [mapElement, mapLongitude, mapLatitude, mapZoom]);

  return (
    <IonPage>
      <IonHeader>
        <IonNav color="primary">
          <IonToolbar>
            <IonTitle>TomTom Maps + React = 😃</IonTitle>
          </IonToolbar>
        </IonNav>
      </IonHeader>
      <IonContent>
        <IonItem className="mapContainer">
          <IonRow>
            <IonCol size="4">
              <h4>Map Controls</h4>
              <IonLabel>Longitude</IonLabel>
              <IonInput type="text" value={mapLongitude} onIonChange={(e) => setMapLongitude(e.detail.value!)} />

              <IonLabel>Latitude</IonLabel>
              <IonInput type="text" value={mapLatitude} onIonChange={(e) => setMapLatitude(e.detail.value!)} />

              <IonCol size="12">
                <IonRow>Zoom</IonRow>
                <IonRow>
                  <IonButton fill="outline" color="primary" onClick={decreaseZoom}>
                    -
                  </IonButton>
                  <div className="mapZoomDisplay">{mapZoom}</div>
                  <IonButton fill="outline" color="primary" onClick={increaseZoom}>
                    +
                  </IonButton>
                </IonRow>
              </IonCol>

              <IonCol size="12">
                <IonRow className="updateButton">
                  <IonButton color="primary" onClick={updateMap}>
                    Update Map
                  </IonButton>
                </IonRow>
              </IonCol>
            </IonCol>

            <IonCol size="8">
              <div ref={mapElement} className="mapDiv" />
            </IonCol>
          </IonRow>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Search;


// const Search: React.FC = () => {
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar color="tertiary">
//           <IonTitle className='search'>Search</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">Search</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <ExploreContainer name="search page" />
//       </IonContent>
//     </IonPage>
//   );
// };
