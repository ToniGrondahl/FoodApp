import React from 'react';
import { star, starHalf, starOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon } from '@ionic/react';
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
          <IonTitle className='recommend'>Recommended Restaurants</IonTitle>
        </IonToolbar>

        <IonCard routerLink='/fish&chips'>
          <IonCardHeader>
            <img className='cardimage' src='images/kalasipsi.jpeg' alt='fishChips' />
          </IonCardHeader>
          <IonCardTitle className='cardtitle'>Authentic Fish&Chips</IonCardTitle>
          <IonCardSubtitle className='cardsubtitle' color="tertiary">Feels like you are in UK</IonCardSubtitle>
          <IonItem className='cardrating' lines='none'>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='tyhjaStara' icon={starOutline} > </IonIcon>
            <IonIcon className='tyhjaStara' icon={starOutline} > </IonIcon>
          </IonItem>
        </IonCard>

        <IonCard routerLink='/jouninkeitto'>
          <IonCardHeader>
            <img className='cardimage' src='images/keittoa.jpeg' alt='keitto' />
          </IonCardHeader>
          <IonCardTitle className='cardtitle'>Jouni's soup corner</IonCardTitle>
          <IonCardSubtitle className='cardsubtitle' color="tertiary">Mouth watering soups since 1998</IonCardSubtitle>
          <IonItem className='cardrating' lines='none'>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='puoliStara' icon={starHalf} ></IonIcon>
            <IonIcon className='tyhjaStara' icon={starOutline} > </IonIcon>
          </IonItem>
        </IonCard>

        <IonCard routerLink='/antalanya'>
          <IonCardHeader>
            <img className='cardimage' src='images/pizzza.jpeg' alt='pizza' />
          </IonCardHeader>
          <IonCardTitle className='cardtitle'>Antalanya Pizzeria</IonCardTitle>
          <IonCardSubtitle className='cardsubtitle' color="tertiary">Best pizza in Finland</IonCardSubtitle>
          <IonItem className='cardrating' lines='none'>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
          </IonItem>
        </IonCard>

        <IonCard routerLink='/kingsushi'>
          <IonCardHeader>
            <img className='cardimage' src='images/sushi.jpg' alt='sushi' />
          </IonCardHeader>
          <IonCardTitle className='cardtitle'>King sushi</IonCardTitle>
          <IonCardSubtitle className='cardsubtitle' color="tertiary">Fresh everyday</IonCardSubtitle>
          <IonItem className='cardrating' lines='none'>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='tyhjaStara' icon={starOutline}></IonIcon>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage >
  );
};

export default Home;
