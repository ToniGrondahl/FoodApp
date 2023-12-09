import { IonButton, IonBackButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar, IonIcon, IonLabel, IonText } from '@ionic/react';
import { callOutline, locationOutline, mailOutline, chevronBackOutline, } from 'ionicons/icons';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <IonPage>
            <IonHeader >
                <IonToolbar color="light">
                    <IonButton routerLink='/account' slot="start" color="light">
                        <IonIcon className="arrow" size="large" icon={chevronBackOutline} />
                    </IonButton>
                    <IonTitle className="contact">Contact</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    <IonItem className="phone" lines='none'> <IonIcon className="phone-icon" aria-hidden="true" icon={callOutline} /> Phone Support </IonItem>
                    <IonText className='number'>050 1234567</IonText>
                    <IonItem className='email' lines='none'> <IonIcon className="email-icon" aria-hidden="true" icon={mailOutline} />  Email </IonItem>
                    <IonText className='email-address'>support@foodapp.com</IonText>
                    <IonItem className='mail' lines='none'> <IonIcon className="mail-icon" aria-hidden="true" icon={locationOutline} /> Mail Address </IonItem>
                    <IonText className='street'>123 Imaginary street</IonText>
                    <div><IonText className='city'>Helsinki, 00100 Finland</IonText></div>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Contact;