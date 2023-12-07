import React from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonToggle, IonList, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { chevronBackOutline, cardOutline, homeOutline, walkOutline, bicycleOutline } from 'ionicons/icons';
import './Checkout.css';

const Checkout: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="light">
                    <IonButton slot="start" color="light">
                        <IonIcon className="arrow" size="large" icon={chevronBackOutline} />
                    </IonButton>
                    <IonTitle className="checkout">Checkout</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    <IonItem className='method'
                        lines="none">
                        Payment method
                        <IonItem className='change' routerLink='paymentmethod' lines='none'>CHANGE</IonItem>
                    </IonItem>
                </IonList>
                <IonList>
                    <IonIcon className="card" font-size='16px' icon={cardOutline} />
                </IonList>
                <IonList>
                    <IonItem className='address'
                        lines="none">
                        Delivery address
                        <IonItem className='change' routerLink='deliveryaddress' lines='none'>CHANGE</IonItem>
                    </IonItem>
                </IonList>
                <IonList>
                    <IonIcon className="home" icon={homeOutline} />
                </IonList>
                <IonList>
                    <IonItem className='options'
                        lines="none">
                        Delivery options
                    </IonItem>
                </IonList>
                <IonList>
                    <IonIcon className="pickup" icon={walkOutline} />
                    I'll pick it up myself
                </IonList>
                <IonList>
                    <IonIcon className="courier" icon={bicycleOutline} />
                    By courier
                </IonList>
                <IonList>
                    <IonItem className='list'
                        lines="none">
                        <IonToggle enableOnOffLabels={true}
                            className="toggle"
                            color="success"
                            aria-label="Tertiary toggle"
                            justify="space-between"> Non-contact-delivery </IonToggle>
                    </IonItem>
                </IonList>
                <IonButton className="orderbutton" color="success">ORDER</IonButton>
            </IonContent>
        </IonPage >
    );
};

export default Checkout;