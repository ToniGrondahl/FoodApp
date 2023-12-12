import React from 'react';
import { cartOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonCardContent, IonPage, IonButton, IonTitle, IonToolbar, IonItem, IonCard, IonIcon, IonLabel } from '@ionic/react';
import './Menu.css';

const Cafeursus: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>

                <IonHeader>
                    <img className='kuva' alt='kahvila' src='images/kahvila.jpg' />
                    <IonToolbar color="tertiary">
                        <IonTitle className='Menu'>Cafe Ursus</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>1. Croisant</IonLabel>
                            <IonLabel> 2,50€</IonLabel>
                            <IonButton routerLink='/checkout' color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>2. Cinnamon bun</IonLabel>
                            <IonLabel> 2,99€</IonLabel>
                            <IonButton routerLink='/checkout' color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>


                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>3. Berry Smoothie</IonLabel>
                            <IonLabel> 4,99€</IonLabel>
                            <IonButton routerLink='/checkout' color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>4. Latte</IonLabel>
                            <IonLabel> 3,99€</IonLabel>
                            <IonButton routerLink='/checkout' color='success'>
                                <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
                            </IonButton>
                        </IonItem>

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>

                        <IonItem>
                            <IonLabel>5. American Coffee</IonLabel>
                            <IonLabel> 2,99€</IonLabel>
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

export default Cafeursus;
