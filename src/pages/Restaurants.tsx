import React, { useState } from 'react';
import { star, starHalf, starOutline } from 'ionicons/icons';
import {
  IonContent,IonHeader,IonPage,IonTitle,IonToolbar,IonCard,IonCardHeader,
  IonCardTitle,IonItem,IonGrid,IonRow, IonCol,IonButton,IonIcon,IonModal
} 
from '@ionic/react';
import './restaurants.css';

const Home: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedRestaurantInfo, setSelectedRestaurantInfo] = useState('');

  const handleInfoClick = (info: string) => {
    setSelectedRestaurantInfo(info);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRestaurantInfo('');
  };

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
         <IonButton expand="block" color="success" size="small" className='buttoninfo' onClick={() => handleInfoClick('Welcome to taste autenthic Fish&Chips straight from Brighton. Believe it or not we also have Vegan and Dairy free options')}>Info</IonButton>
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
          <IonButton expand="block" color="success" size="small" className='buttoninfo' 
          onClick={() => handleInfoClick('Jounis soup corner serves you good variety of mouth watering soups. We have Vegan, Dairy free and Gluten free options')}>Info</IonButton>
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
          <IonButton expand="block" color="success" size="small" className='buttoninfo' 
          onClick={() => handleInfoClick('Antalanya pizza was nominated for the best Pizza in Finland 2020. Fresh ingredients every day')}>Info</IonButton>
            <IonButton expand="block" color="tertiary" size="default" className='buttonmenu'>Menu</IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
            <IonCard className="cardsize">
              <img src='images/sushi.jpg' alt='sushi' className='images' />
          <IonCardHeader>
            <IonCardTitle className='headerSmall'>King sushi</IonCardTitle>
            
            <IonItem lines='none'>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'></IonIcon>
            <IonIcon icon={starOutline} size='small' className='tyhjaStara'></IonIcon>
          </IonItem>
          </IonCardHeader>
          <IonButton expand="block" color="success" size="small" className='buttoninfo' 
          onClick={() => handleInfoClick('We at King Sushi believe that customer is always right. Good variety of dishes and cheap buffet 10:00-15:00')}>Info</IonButton>
            <IonButton expand="block" color="tertiary" size="default" className='buttonmenu'>Menu</IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonCard className="cardsize">
            <img src='images/kahvila.jpg' alt='kahvila' className='images' />
          <IonCardHeader>
            <IonCardTitle className='headerSmall'>Cafe Ursus</IonCardTitle>
           
            <IonItem lines='none'>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'></IonIcon>
            <IonIcon icon={star} size='small' className='stara'></IonIcon>
          </IonItem>
          </IonCardHeader>
          
          <IonButton expand="block" color="success" size="small" className='buttoninfo' 
          onClick={() => handleInfoClick('Fresh pasteries and handmade Smoothies. Also fresh and absolutely best Coffee only 1€ 08:00-10:00')}>Info</IonButton>
            <IonButton expand="block" color="tertiary" size="default" className='buttonmenu'>Menu</IonButton>
              </IonCard>
            </IonCol>
            <IonCol>
            <IonCard className="cardsize">
              <img src='images/Tartarillas.jpeg' alt='Tartarilla' className='images' />
          <IonCardHeader>
            <IonCardTitle className='headerSmall'>Tartarilla's</IonCardTitle>
            <IonItem lines='none'>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'> </IonIcon>
            <IonIcon icon={star} size='small' className='stara'></IonIcon>
            <IonIcon icon={starOutline} size='small' className='stara'></IonIcon>
          </IonItem>
          </IonCardHeader>
          <IonButton expand="block" color="success" size="small" className='buttoninfo' 
          onClick={() => handleInfoClick('We serve real and tasty Mexican food made with love. We have Gluten free, Vegan and Dairy free options')}>Info</IonButton>
            <IonButton expand="block" color="tertiary" size="default" className='buttonmenu'>Menu</IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
          
        </IonGrid>
         {/* Render the RestaurantInfoModal */}
         <IonModal isOpen={showModal} className="custom-modal">
          <IonContent>
          <IonToolbar color="tertiary" className='popToolbar'>
          <div className="popCloseButton" onClick={handleCloseModal}>X</div>
          <h1 className='popHeader'>Information</h1>
        </IonToolbar>
            <p className='RestaurantInfo'>{selectedRestaurantInfo}</p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;



