import { useState, useRef, useEffect, } from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar, useIonActionSheet, IonIcon, IonModal } from '@ionic/react';
import { callOutline, helpCircleOutline, logOutOutline, settingsOutline, } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './Account.css';


function Account() {
    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(null);
    const history = useHistory();

    const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
    const [present] = useIonActionSheet();

    useEffect(() => {
        setPresentingElement(page.current);
    }, []);

    function dismiss() {
        modal.current?.dismiss();
    }

    function canDismiss() {
        return new Promise<boolean>((resolve, reject) => {
            present({
                header: 'Are you sure you want to log out?',
                buttons: [
                    {
                        text: 'Yes',
                        role: 'confirm',
                    },
                    {
                        text: 'No',
                        role: 'cancel',
                    },
                ],
                onWillDismiss: (ev) => {
                    if (ev.detail.role === 'confirm') {
                        resolve(true);
                    } else {
                        reject();
                    }
                },
            }
            );
        }).then(() => {
            // Redirect to the desired page after clicking "Yes"
            history.push('/login');
        });
    }

    return (
        <IonPage ref={page}>
            <IonHeader >
                <IonToolbar color="tertiary">
                    <IonTitle className="account" >Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                </IonHeader>
                <IonList>
                    <IonItem routerLink='/account/settings'> <IonIcon className="settings" aria-hidden="true" icon={settingsOutline} /> Settings </IonItem>
                    <IonItem routerLink='/account/contact'> <IonIcon className="contact" aria-hidden="true" icon={callOutline} />  Contact </IonItem>
                    <IonItem routerLink='/account/about'> <IonIcon className="about" aria-hidden="true" icon={helpCircleOutline} /> About </IonItem>
                </IonList>
            </IonContent>


            <IonModal ref={modal} trigger="open-modal" canDismiss={canDismiss} presentingElement={presentingElement!}></IonModal>
            <IonButton onClick={() => dismiss()} className="logout-button" expand="block" color="danger">
                <IonIcon className="logout" aria-hidden="true" icon={logOutOutline} />
                Logout
            </IonButton>

        </IonPage>
    );
};

export default Account;