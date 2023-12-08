import React from 'react';
import { star } from 'ionicons/icons';
import {
  IonContent,IonHeader,IonPage,IonTitle,IonToolbar,IonCard,IonCardHeader,
  IonCardTitle,IonCardSubtitle,IonIcon,IonGrid,IonRow, IonCol,IonButton} 
from '@ionic/react';
import './restaurants.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle className='restaurants'>Restaurants</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard className="cardsize">
              <img src='images/kalasipsi.jpeg' alt='fishChips' className='images' />
          <IonCardHeader>
            <IonCardTitle className='header'>Authentic Fish&Chips</IonCardTitle>
            <IonCardSubtitle color="tertiary" className='desc'>Feels like you are in UK</IonCardSubtitle>
         </IonCardHeader>
            <IonButton expand="block" color="success" size="small" className='buttoninfo'>Info</IonButton>
            <IonButton expand="block" color="tertiary" size="default" className='buttonmenu'>Menu</IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
            <IonCard className="cardsize">
              <img src='images/keittoa.jpeg' alt='keittoa' className='images' />
          <IonCardHeader>
            <IonCardTitle className='header'>Jouni's soup corner</IonCardTitle>
            <IonCardSubtitle color="tertiary" className='desc'>Mouth watering soups since 1998</IonCardSubtitle>
          </IonCardHeader>
            <IonButton expand="block" color="success" size="small" className='buttoninfo'>Info</IonButton>
            <IonButton expand="block" color="tertiary" size="default" className='buttonmenu'>Menu</IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonCard className="cardsize">
              <img src='images/pizzza.jpeg' alt='pizza' className='images' />
          <IonCardHeader>
            <IonCardTitle className='header'>Antalanya pizzeria</IonCardTitle>
            <IonCardSubtitle color="tertiary" className='desc'>Best pizza in Finland</IonCardSubtitle>
          </IonCardHeader>
            <IonButton expand="block" color="success" size="small" className='buttoninfo'>Info</IonButton>
            <IonButton expand="block" color="tertiary" size="default" className='buttonmenu'>Menu</IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
            <IonCard className="cardsize">
              <img src='images/sushi.jpg' alt='sushi' className='images' />
          <IonCardHeader>
            <IonCardTitle className='header'>King sushi</IonCardTitle>
            <IonCardSubtitle color="tertiary" className='desc'>Fresh everyday</IonCardSubtitle>
          </IonCardHeader>
            <IonButton expand="block" color="success" size="small" className='buttoninfo'>Info</IonButton>
            <IonButton expand="block" color="tertiary" size="default" className='buttonmenu'>Menu</IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonCard className="cardsize">
            <img src='images/kahvila.jpg' alt='kahvila' className='images' />
          <IonCardHeader>
            <IonCardTitle className='header'>Cafe Ursus</IonCardTitle>
            <IonCardSubtitle color="tertiary" className='desc'>Hot coffee and fresh pasteries</IonCardSubtitle>
          </IonCardHeader>
            <IonButton expand="block" color="success" size="small" className='buttoninfo'>Info</IonButton>
            <IonButton expand="block" color="tertiary" size="default" className='buttonmenu'>Menu</IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
            <IonCard className="cardsize">
              <img src='images/Tartarillas.jpeg' alt='Tartarilla' className='images' />
          <IonCardHeader>
            <IonCardTitle className='header'>Tartarilla's</IonCardTitle>
            <IonCardSubtitle color="tertiary" className='desc'>Spicy Mexican Food</IonCardSubtitle>
          </IonCardHeader>
            <IonButton expand="block" color="success" size="small" className='buttoninfo'>Info</IonButton>
            <IonButton expand="block" color="tertiary" size="default" className='buttonmenu'>Menu</IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;



