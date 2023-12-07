import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonButton,
    IonBackButton,
} from '@ionic/react'

const About: React.FC = () => {
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
                    diibadaaba
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default About;

