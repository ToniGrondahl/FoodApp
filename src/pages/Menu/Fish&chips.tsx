import React from 'react';
import { star, starHalf, starOutline, cartOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonThumbnail, IonCardContent, IonPage, IonButton, IonTitle, IonToolbar, IonTextarea, IonText, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonList, IonLabel } from '@ionic/react';
import './Menu.css';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>

                <IonHeader>
                    <img className='kuva' alt="kalasipsi" src='images/kalasipsi.jpeg' />
                    <IonToolbar color="tertiary">
                        <IonTitle className='Menu'>Authentic fish&chips</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>1. Classic fish and chips</IonLabel>
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
                            <IonLabel>2. Grilled Lemon Herb Salmon</IonLabel>
                            <IonLabel> 15,99€</IonLabel>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>


                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>3. Seafood Platter</IonLabel>
                            <IonLabel> 17,99€</IonLabel>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>4. Fish Tacos</IonLabel>
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
                            <IonLabel>5. Vegetarian Fish and Chips</IonLabel>
                            <IonLabel> 13,99€</IonLabel>
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

export default Home;
