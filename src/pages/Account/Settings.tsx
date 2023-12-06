import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonToggle,
    IonButton,
    IonBackButton,
    IonIcon,
} from '@ionic/react'
import { moonOutline, notificationsOutline, textOutline } from 'ionicons/icons';

const Settings: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="tertiary">
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonButton slot='start'>
                    <IonBackButton defaultHref="/account" />
                </IonButton>
                <IonList>
                    <IonItem>
                        <IonToggle
                            color="tertiary"
                            aria-label="Tertiary toggle"
                            justify='space-between'>
                            <IonIcon className='dark-mode' icon={moonOutline} ></IonIcon>
                            Dark Mode
                        </IonToggle>
                    </IonItem>
                    <IonItem>
                        <IonToggle
                            color="tertiary"
                            aria-label='Tertiary toggle'
                            justify='space-between'>
                            <IonIcon className='notificiations' icon={notificationsOutline} ></IonIcon>
                            Enable push notifications
                        </IonToggle>
                    </IonItem>
                    <IonItem>
                        <IonToggle
                            color="tertiary"
                            aria-label='Tertiary toggle'
                            justify='space-between'>
                            <IonIcon className='bigger-font' icon={textOutline} ></IonIcon>
                            Bigger font
                        </IonToggle>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Settings;

