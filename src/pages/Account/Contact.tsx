import { IonButton, IonBackButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar, IonIcon, IonLabel } from '@ionic/react';
import { callOutline, locationOutline, mailOutline, chevronBackOutline } from 'ionicons/icons';
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
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Contact</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    <IonItem className="phone"> <IonIcon className="phone-icon" aria-hidden="true" icon={callOutline} /> Phone Support </IonItem>
                    <IonItem className='email'> <IonIcon className="email-icon" aria-hidden="true" icon={mailOutline} />  Email </IonItem>
                    <IonItem className='mail'> <IonIcon className="mail-icon" aria-hidden="true" icon={locationOutline} /> Mail Address </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Contact;