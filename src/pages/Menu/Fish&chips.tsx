import React from 'react';
import { cartOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonCardContent, IonPage, IonButton, IonTitle, IonToolbar, IonItem, IonCard, IonIcon, IonLabel } from '@ionic/react';
import './Menu.css';

const FishAndChips: React.FC = () => {
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
                            <IonLabel>1. Classic F&C</IonLabel>
                            <IonLabel> 12,99€</IonLabel>
                            <IonButton routerLink='/checkout' color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>2. Lemon Salmon</IonLabel>
                            <IonLabel> 15,99€</IonLabel>
                            <IonButton routerLink='/checkout' color='success'>
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
                            <IonButton routerLink='/checkout' color='success'>
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
                            <IonButton routerLink='/checkout' color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>5. Vegetarian F&C</IonLabel>
                            <IonLabel> 13,99€</IonLabel>
                            <IonButton routerLink='/checkout' color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

            </IonContent >
        </IonPage >
    );
};

export default FishAndChips;
