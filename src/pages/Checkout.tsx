import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonToggle, IonList, IonPage, IonTitle, IonText, IonToolbar, IonIcon, IonFooter } from '@ionic/react';
import { chevronBackOutline, cardOutline, homeOutline, walkOutline, bicycleOutline } from 'ionicons/icons';
import './Checkout.css';


const Checkout: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option === selectedOption ? null : option);
    };
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
                    <IonItem className='options' lines="none">
                        Delivery options
                    </IonItem>
                    <IonList className='pickup'>
                        <IonText
                            onClick={() => handleOptionClick('pickup')}
                            style={{ color: selectedOption === 'pickup' ? 'blueviolet' : 'black' }}>
                            <IonIcon className="pickup-icon" icon={walkOutline} />
                            I'll pick it up myself
                        </IonText>
                    </IonList>
                    <IonList className='courier'>
                        <IonText
                            onClick={() => handleOptionClick('courier')}
                            style={{ color: selectedOption === 'courier' ? 'blueviolet' : 'black' }}>
                            <IonIcon className="courier-icon" icon={bicycleOutline} />
                            By courier
                        </IonText>
                    </IonList>
                    <IonItem className='list'
                        lines="none">
                        <IonToggle enableOnOffLabels={true}
                            className="toggle"
                            color="success"
                            aria-label="Tertiary toggle"
                            justify="space-between"> Non-contact-delivery </IonToggle>
                    </IonItem>
                </IonList>
                <IonFooter className="center-button">
                    <IonButton className="order-button" color="success">ORDER</IonButton>
                </IonFooter>
            </IonContent>
        </IonPage >
    );
};

export default Checkout;