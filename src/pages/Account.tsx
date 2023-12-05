import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';
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
                    <IonItem routerLink='/account/settings' expand="full"> Settings </IonItem>
                    <IonItem routerLink='/account/contact' expand="full"> Contact </IonItem>
                    <IonItem routerLink='/account/about' expand="full"> About </IonItem>
                </IonList>
            </IonContent>
            <IonButton color="danger">
                <IonIcon aria-hidden="true" icon={logOutOutline} />
                Logout
            </IonButton>
        </IonPage>
    );
};

export default Account;