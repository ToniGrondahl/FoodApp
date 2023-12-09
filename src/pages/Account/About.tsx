import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonButton,
    IonIcon
} from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons';
import './About.css';

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="light">
                    <IonButton routerLink='/account' slot="start" color="light">
                        <IonIcon className="arrow" size="large" icon={chevronBackOutline} />
                    </IonButton>
                    <IonTitle className='about'>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='content'>
                <IonList className='yapping'>Our restaurant app is designed to find restaurants and place orders in them.
                    It was founded and created by four friends who wanted to make finding restaurants and ordering from them more convenient.
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default About;

