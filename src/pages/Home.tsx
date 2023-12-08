import React from 'react';
import { star, starHalf, starOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonThumbnail, IonCardContent, IonPage, IonTitle, IonToolbar, IonTextarea, IonText, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle className='home'>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonToolbar>
          <IonTitle>Recommended Restaurants</IonTitle>
        </IonToolbar>

        <IonCard>
          <IonCardHeader>
            <img src='images/kalasipsi.jpeg' alt='fishChips' />
            <IonCardTitle>Authentic Fish&Chips</IonCardTitle>
            <IonCardSubtitle color="tertiary">Feels like you are in UK</IonCardSubtitle>
          </IonCardHeader>
          <IonItem>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='tyhjaStara' icon={star} > </IonIcon>
            <IonIcon className='tyhjaStara' icon={star} > </IonIcon>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src='images/keittoa.jpeg' alt='keittoa' />
            <IonCardTitle>Jouni's soup corner</IonCardTitle>
            <IonCardSubtitle color="tertiary">Mouth watering soups since 1998</IonCardSubtitle>
          </IonCardHeader>
          <IonItem>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='puoliStara' icon={starHalf} ></IonIcon>
            <IonIcon className='tyhjaStara' icon={star}></IonIcon>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src='images/pizzza.jpeg' alt='pizza' />
            <IonCardTitle>Antalanya pizzeria</IonCardTitle>
            <IonCardSubtitle color="tertiary">Best pizza in Finland</IonCardSubtitle>
          </IonCardHeader>
          <IonItem>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src='images/sushi.jpg' alt='sushi' />
            <IonCardTitle>King sushi</IonCardTitle>
            <IonCardSubtitle color="tertiary">Fresh everyday</IonCardSubtitle>
          </IonCardHeader>
          <IonItem>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='tyhjaStara' icon={star} > </IonIcon>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src='images/kahvila.jpg' alt='kahvila' />
            <IonCardTitle>Cafe Ursus</IonCardTitle>
            <IonCardSubtitle color="tertiary">Hot coffee and fresh pasteries</IonCardSubtitle>
          </IonCardHeader>
          <IonItem>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
          </IonItem>
        </IonCard>






      </IonContent>
    </IonPage >
  );
};

export default Home;
