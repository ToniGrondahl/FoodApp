import React from 'react';
import { star, starHalf, starOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonThumbnail, IonCardContent, IonPage, IonTitle, IonToolbar, IonTextarea, IonText, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Restaurant.css';

const Restaurant: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="tertiary">
                    <IonTitle className='Menu'>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>







            </IonContent>
        </IonPage>

    );
};

export default Restaurant;