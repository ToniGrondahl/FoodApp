import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonButton,
    IonIcon,
} from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons';
import './Paymentmethod.css'
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import React, { useState, } from 'react';
import Cards from "react-credit-cards-2";

const PaymentMethod = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt: { target: { name: any; value: any; }; }) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt: { target: { name: any; value: any; }; }) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar color="light">
                    <IonButton slot="start" color="light" routerLink='/checkout'>
                        <IonIcon className="arrow" size="large" icon={chevronBackOutline} />
                    </IonButton>
                    <IonTitle className="payment method">Payment method</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='content'>
                <IonList>
                    <IonItem className='method'
                        lines="none">
                        Credit / Debit card
                    </IonItem>
                </IonList>
                <div className='div'>
                    <Cards
                        number={state.number}
                        expiry={state.expiry}
                        cvc={state.cvc}
                        name={state.name}
                        focused={state.focus}
                    />
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
                    <IonButton className='cardbutton' expand="block" color='success'>USE THIS CARD</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default PaymentMethod;

