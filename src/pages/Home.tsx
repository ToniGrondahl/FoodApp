import React from 'react';
import { star } from 'ionicons/icons';
import { IonContent, IonHeader, IonCardContent, IonPage, IonTitle, IonToolbar, IonTextarea, IonText, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonToolbar>
          <IonTitle>Recomended Restaurants</IonTitle>
        </IonToolbar>

        <IonCard>
          <img src='images/kalasipsi.jpeg' alt='fishChips' />
          <IonCardHeader>
            <IonCardTitle>Authentic Fish&Chips</IonCardTitle>
            <IonCardSubtitle color="tertiary">Feels like you are in UK</IonCardSubtitle>
            <IonIcon icon={star} color="gold"> </IonIcon>
            <IonIcon icon={star} color="gold"> </IonIcon>
            <IonIcon icon={star} color="gold"> </IonIcon>


          </IonCardHeader>
        </IonCard>

        <IonCard>
          <img src='images/keittoa.jpeg' alt='keittoa' />
          <IonCardHeader>
            <IonCardTitle>Jouni's soup corner</IonCardTitle>
            <IonCardSubtitle color="tertiary">Mouth watering soups since 1998</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <img src='images/pizzza.jpeg' alt='pizza' />
          <IonCardHeader>
            <IonCardTitle>Antalanya pizzeria</IonCardTitle>
            <IonCardSubtitle color="tertiary">Best pizza in Finland</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <img src='images/sushi.jpg' alt='sushi' />
          <IonCardHeader>
            <IonCardTitle>King sushi</IonCardTitle>
            <IonCardSubtitle color="tertiary">Fresh everyday</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <img src='images/kahvila.jpg' alt='kahvila' />
          <IonCardHeader>
            <IonCardTitle>Cafe Ursus</IonCardTitle>
            <IonCardSubtitle color="tertiary">Hot coffee and fresh pasteries</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>






      </IonContent>
    </IonPage>
  );
};

export default Home;
