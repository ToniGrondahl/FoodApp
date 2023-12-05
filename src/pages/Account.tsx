import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { callOutline, helpCircleOutline, logOutOutline, settingsOutline } from 'ionicons/icons';
import './Account.css';

const Account: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Account</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    <IonItem routerLink='/account/settings' expand="full"> <IonIcon className="settings" aria-hidden="true" icon={settingsOutline} /> Settings </IonItem>
                    <IonItem routerLink='/account/contact' expand="full"> <IonIcon className="contact" aria-hidden="true" icon={callOutline} />  Contact </IonItem>
                    <IonItem routerLink='/account/about' expand="full"> <IonIcon className="about" aria-hidden="true" icon={helpCircleOutline} /> About </IonItem>
                </IonList>
            </IonContent>
            <IonButton className="logout-button" color="danger">
                <IonIcon className="logout" aria-hidden="true" icon={logOutOutline} />
                Logout
            </IonButton>
        </IonPage>
    );
};

export default Account;