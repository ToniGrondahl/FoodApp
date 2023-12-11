import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonButton,
    IonIcon,
    IonInput,
    IonRow,
    IonCol,
    IonLabel
} from '@ionic/react'
import { useState, } from 'react';
import { chevronBackOutline } from 'ionicons/icons';

const Deliveryaddress: React.FC = () => {
    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleSubmit = () => {
        console.log('Name:', name);
        console.log('Street:', street);
        console.log('City:', city);
        console.log('Zip Code:', zipCode);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start" color="light" routerLink='/checkout'>
                        <IonIcon className="arrow" size="large" icon={chevronBackOutline} />
                    </IonButton>
                    <IonTitle>Delivery address</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRow>
                    <IonCol >
                        <IonItem lines='none'>
                            <IonLabel position="stacked">Name</IonLabel>
                            <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem lines='none'>
                            <IonLabel position="stacked">Street</IonLabel>
                            <IonInput value={street} onIonChange={e => setStreet(e.detail.value!)} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem lines='none'>
                            <IonLabel position="stacked">City</IonLabel>
                            <IonInput value={city} onIonChange={e => setCity(e.detail.value!)} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem lines='none'>
                            <IonLabel position="stacked">Zip Code</IonLabel>
                            <IonInput value={zipCode} onIonChange={e => setZipCode(e.detail.value!)} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonButton className="addressbutton" color="success" expand="block" onClick={handleSubmit}>USE THIS ADDRESS</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Deliveryaddress;

