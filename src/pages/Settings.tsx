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
    IonText,
} from '@ionic/react'

const Settings: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="tertiary">
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonToggle
                            color="tertiary"
                            aria-label="Tertiary toggle"
                            justify='space-between'>
                            Dark Mode
                        </IonToggle>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Settings;

