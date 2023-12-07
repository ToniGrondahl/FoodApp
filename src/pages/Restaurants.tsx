import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Restaurants.css';

const Restaurants: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle className='restaurants'>Restaurants</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Restaurants</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="restaurants page" />
      </IonContent>
    </IonPage>
  );
};

export default Restaurants;
