import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { callOutline, locationOutline, logOutOutline, mailOutline, } from 'ionicons/icons';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <IonPage>
            <IonHeader >
                <IonToolbar color="tertiary">
                    <IonTitle className="contact" >Contact</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Contact</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    <IonItem> <IonIcon className="phone" aria-hidden="true" icon={callOutline} /> Phone Support </IonItem>
                    <IonItem> <IonIcon className="email" aria-hidden="true" icon={mailOutline} />  Email </IonItem>
                    <IonItem> <IonIcon className="mail" aria-hidden="true" icon={locationOutline} /> Mail </IonItem>
                </IonList>
            </IonContent>
            <IonButton className="logout-button" color="danger">
                <IonIcon className="logout" aria-hidden="true" icon={logOutOutline} />
                Logout
            </IonButton>
        </IonPage>
    );
};

export default Contact;