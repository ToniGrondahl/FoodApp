import React from 'react';
import { star, starHalf, starOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonThumbnail, IonCardContent, IonPage, IonTitle, IonToolbar, IonTextarea, IonText, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon } from '@ionic/react';


import './Menu.css';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="tertiary">
                    <IonTitle className='Menu'>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <IonCard>
                    <img src='images/keittoa.jpeg' alt='keittoa' />
                    <IonCardHeader color="tertiary">
                        <IonCardTitle>Jouni's soup corner</IonCardTitle>
                    </IonCardHeader>
                </IonCard>





            </IonContent>
        </IonPage>

    );
};

export default Home;