import React from 'react';
import { cartOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonCardContent, IonPage, IonButton, IonTitle, IonToolbar, IonItem, IonCard, IonIcon, IonLabel } from '@ionic/react';
import './Menu.css';

const Tartarillas: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>

                <IonHeader>
                    <img className='kuva' alt="keittoa" src='images/Tartarillas.jpeg' />
                    <IonToolbar color="tertiary">
                        <IonTitle className='Menu'>Tartarillas</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>1. Two Taco's</IonLabel>
                            <IonLabel> 9,99€</IonLabel>
                            <IonButton routerLink='/checkout' color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>2. Chicken burrito</IonLabel>
                            <IonLabel> 10,99€</IonLabel>
                            <IonButton routerLink='/checkout' color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>


                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>3. Beef burrito</IonLabel>
                            <IonLabel> 11,99€</IonLabel>
                            <IonButton routerLink='/checkout' color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>4. Quesadilla's</IonLabel>
                            <IonLabel> 7,99€</IonLabel>
                            <IonButton routerLink='/checkout' color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>5. Cheesy fries</IonLabel>
                            <IonLabel> 3,99€</IonLabel>
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

export default Tartarillas;