import React from 'react';
import { star, starHalf, starOutline, cartOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonThumbnail, IonCardContent, IonPage, IonButton, IonTitle, IonToolbar, IonTextarea, IonText, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonList, IonLabel } from '@ionic/react';
import './Menu.css';

const Tartarillas: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>

                <IonHeader>
                    <img className='kuva' alt="tartarillas" src='images/Tartarillas.jpeg' />
                    <IonToolbar color="tertiary">
                        <IonTitle className='Menu'>Tartarilla's</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>1. Nigiri sushi</IonLabel>
                            <IonLabel> 2,50€ per piece</IonLabel>
                            <IonButton color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>2. Sashimi platter</IonLabel>
                            <IonLabel> 18,99€</IonLabel>
                            <IonButton color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>


                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>3. Dragon roll</IonLabel>
                            <IonLabel> 14,99€</IonLabel>
                            <IonButton color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>4. Vegetarian Maki</IonLabel>
                            <IonLabel> 10,99€</IonLabel>
                            <IonButton color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>5. Chef's Special Roll</IonLabel>
                            <IonLabel> 16,99€</IonLabel>
                            <IonButton color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

            </IonContent >
        </IonPage >
    );
};

export default Tartarillas;
