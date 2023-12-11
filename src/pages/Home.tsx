import React from 'react';
import { star, starHalf, starOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonThumbnail, IonCardContent, IonPage, IonCol, IonRow, IonList, IonTitle, IonToolbar, IonTextarea, IonText, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon } from '@ionic/react';
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

        <IonCol>
          <IonRow className='rivi'>
            <IonItem className='imageitem' lines='none'>
              <img src='images/kalasipsi.jpeg' alt='fishChips' />
            </IonItem>
            <IonList className='listitem'>
              <IonText className='title'>
                Authentic Fish&Chips
              </IonText>
              <div></div>
              <IonText className='subtitle' color='tertiary'>Feels like you are in UK</IonText>
              <div></div>
              <IonItem className='icons' lines='none'>
                <IonIcon className='stara' icon={star} > </IonIcon>
                <IonIcon className='stara' icon={star} > </IonIcon>
                <IonIcon className='stara' icon={star} > </IonIcon>
                <IonIcon className='tyhjaStara' icon={starOutline} > </IonIcon>
                <IonIcon className='tyhjaStara' icon={starOutline} > </IonIcon>
              </IonItem>
            </IonList>
          </IonRow>
        </IonCol>

        <IonCard>
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

        <IonCard className="custom-card">
          <div className="flex-container">
            <div className="left-column">
              <img src='images/kalasipsi.jpeg' alt='fishChips' />
            </div>
            <div className="right-column">
              <IonCardHeader>
                <IonCardTitle>Authentic Fish&Chips</IonCardTitle>
              </IonCardHeader>
              <IonCardSubtitle className='alaotsikko' color="tertiary">Feels like you are in UK</IonCardSubtitle>
              <IonItem lines='none' className='starat'>
                <IonIcon className='stara' icon={star} />
                <IonIcon className='stara' icon={star} />
                <IonIcon className='stara' icon={star} />
                <IonIcon className='tyhjaStara' icon={starOutline} />
                <IonIcon className='tyhjaStara' icon={starOutline} />
              </IonItem>
            </div>
          </div>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src='images/keittoa.jpeg' alt='keittoa' />
            <IonCardTitle>Jouni's soup corner</IonCardTitle>
            <IonCardSubtitle color="tertiary">Mouth watering soups since 1998</IonCardSubtitle>
          </IonCardHeader>
          <IonItem className='rating' lines='none'>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='puoliStara' icon={starHalf} ></IonIcon>
            <IonIcon className='tyhjaStara' icon={starOutline}></IonIcon>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <img src='images/pizzza.jpeg' alt='pizza' />
            <IonCardTitle>Antalanya pizzeria</IonCardTitle>
            <IonCardSubtitle color="tertiary">Best pizza in Finland</IonCardSubtitle>
          </IonCardHeader>
          <IonItem lines='none'>
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
          <IonItem lines='none'>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='stara' icon={star} > </IonIcon>
            <IonIcon className='tyhjaStara' icon={starOutline} > </IonIcon>
          </IonItem>
        </IonCard>








      </IonContent>
    </IonPage >
  );
};

export default Home;
