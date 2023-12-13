import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonToggle, IonList, IonInput, IonCol, IonRow, IonLabel, IonPage, IonTitle, IonText, IonToolbar, IonIcon, IonFooter } from '@ionic/react';
import { chevronBackOutline, cardOutline, homeOutline, walkOutline, bicycleOutline } from 'ionicons/icons';
import './Checkout.css';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import Cards from "react-credit-cards-2";

const Checkout: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const [deliveryAddress, setDeliveryAddress] = useState({
        name: '',
        street: '',
        city: '',
        zipCode: '',
    });

    const handleOptionClick = (option: string) => {
        setSelectedOption(option === selectedOption ? null : option);
    };

    const handleInputChange = (evt: { target: { name: any; value: any } }) => {
        const { name, value } = evt.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleInputFocus = (evt: { target: { name: any; value: any } }) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    };

    const handleDeliveryInputChange = (evt: { target: { name: any; value: any } }) => {
        const { name, value } = evt.target;
        setDeliveryAddress((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log('Delivery Address:', deliveryAddress);
    };

    const handlePaymentSubmit = () => {
        console.log('Payment Information:', state);
    };


    return (

        <IonPage>
            <IonHeader>
                <IonToolbar color="light">
                    <IonButton routerLink="/restaurants" slot="start" color="light">
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
                    </IonItem>
                </IonList>
                <IonList>
                    <IonItem className='cardtext'
                        lines="none"> <IonIcon className="card" font-size='16px' icon={cardOutline} />
                        Credit / Debit card
                    </IonItem>
                </IonList>
                <IonItem lines='none' className='carditem'>
                    <Cards
                        number={state.number}
                        expiry={state.expiry}
                        cvc={state.cvc}
                        name={state.name}
                        focused={state.focus}
                    />
                </IonItem>
                <IonItem lines='none' className='cardform'>
                    <form>
                        <input
                            type="number"
                            name="number"
                            placeholder="Card Number"
                            value={state.number}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                        <input
                            type="name"
                            name="name"
                            placeholder="Card Name"
                            value={state.name}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                        <input
                            type="expiry"
                            name="expiry"
                            placeholder="Card Expiry"
                            value={state.expiry}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                        <input
                            type="cvc"
                            name="cvc"
                            placeholder="Card Cvc"
                            value={state.cvc}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </form>
                </IonItem>
                <IonList>
                    <IonItem className='address'
                        lines="none"><IonIcon className="home" icon={homeOutline} />
                        Delivery address
                    </IonItem>
                </IonList>
                <IonRow className='addressrow'>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="stacked">Name</IonLabel>
                            <IonInput
                                value={deliveryAddress.name}
                                onIonChange={(e) => handleDeliveryInputChange({ target: { name: 'name', value: e.detail.value! } })}
                            />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className='addressrow'>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="stacked">Street</IonLabel>
                            <IonInput
                                value={deliveryAddress.street}
                                onIonChange={(e) => handleDeliveryInputChange({ target: { name: 'street', value: e.detail.value! } })}
                            />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className='addressrow'>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="stacked">City</IonLabel>
                            <IonInput
                                value={deliveryAddress.city}
                                onIonChange={(e) => handleDeliveryInputChange({ target: { name: 'city', value: e.detail.value! } })}
                            />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className='addressrow'>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="stacked">Zip Code</IonLabel>
                            <IonInput
                                value={deliveryAddress.zipCode}
                                onIonChange={(e) => handleDeliveryInputChange({ target: { name: 'zipCode', value: e.detail.value! } })}
                            />
                        </IonItem>
                    </IonCol>
                </IonRow>

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