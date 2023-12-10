import React from 'react';
import { star, starHalf, starOutline, cartOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonThumbnail, IonCardContent, IonPage, IonButton, IonTitle, IonToolbar, IonTextarea, IonText, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonList, IonLabel } from '@ionic/react';
import './Menu.css';

const Antalanya: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>

                <IonHeader>
                    <img className='kuva' alt="pizza" src='images/pizzza.jpeg' />
                    <IonToolbar color="tertiary">
                        <IonTitle className='Menu'>Antalanya pizzeria</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>1. Pizza marhgerita</IonLabel>
                            <IonLabel> 10,99€</IonLabel>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>2. Pepperoni deluxe</IonLabel>
                            <IonLabel> 12,99€</IonLabel>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>


                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>3. Vegetarian supreme</IonLabel>
                            <IonLabel> 11,99€</IonLabel>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>4. Pizza diavola</IonLabel>
                            <IonLabel> 13,99€</IonLabel>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>5. Meat lovers' feast</IonLabel>
                            <IonLabel> 14,99€</IonLabel>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

            </IonContent >
        </IonPage >
    );
};

export default Antalanya;
