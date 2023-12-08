import React from 'react';
import { star, starHalf, starOutline } from 'ionicons/icons';
import {
  IonContent,IonHeader,IonPage,IonTitle,IonToolbar,IonCard,IonCardHeader,
  IonCardTitle,IonCardSubtitle,IonItem,IonGrid,IonRow, IonCol,IonButton,IonIcon} 
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
            <IonItem lines='none'>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={starOutline} size='small' className='tyhjaStara'></IonIcon>
            <IonIcon icon={starOutline} size='small' className='tyhjaStara'></IonIcon>
          </IonItem>
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
            <IonItem lines='none'>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={starHalf} size='small' className='puoliStara'></IonIcon>
            <IonIcon icon={starOutline} size='small' className='tyhjaStara'></IonIcon>
          </IonItem>
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
          <IonCardTitle className='header'>Antalanya Pizza</IonCardTitle>
          <IonItem lines='none'>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'></IonIcon>
            <IonIcon icon={star} size='small' className='stara'></IonIcon>
          </IonItem>
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
            <IonItem lines='none'>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'></IonIcon>
            <IonIcon icon={starOutline} size='small' className='tyhjaStara'></IonIcon>
          </IonItem>
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
           
            <IonItem lines='none'>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'></IonIcon>
            <IonIcon icon={star} size='small' className='stara'></IonIcon>
          </IonItem>
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
            <IonItem lines='none'>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'></IonIcon>
            <IonIcon icon={starOutline} size='small' className='tyhjaStara'></IonIcon>
          </IonItem>
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



