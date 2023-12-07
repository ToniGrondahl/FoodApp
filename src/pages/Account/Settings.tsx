import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonToggle, IonButton, IonBackButton, IonIcon, } from '@ionic/react'
import { moonOutline, notificationsOutline, textOutline, chevronBackOutline } from 'ionicons/icons';
import './Settings.css';

const Settings: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="light">
                    <IonButton routerLink='/account' slot="start" color="light">
                        <IonIcon className="arrow" size="large" icon={chevronBackOutline} />
                    </IonButton>
                    <IonTitle className='settings'>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonButton slot='start'>
                    <IonBackButton defaultHref="/account" />
                </IonButton>
                <IonList>
                    <IonItem className='DarkMode'>
                        <IonToggle
                            color="tertiary"
                            aria-label="Tertiary toggle"
                            justify='space-between'>
                            <IonIcon className='dark-mode-icon' icon={moonOutline} ></IonIcon>
                            Dark Mode
                        </IonToggle>
                    </IonItem>
                    <IonItem className='enable'>
                        <IonToggle
                            color="tertiary"
                            aria-label='Tertiary toggle'
                            justify='space-between'>
                            <IonIcon className='notifications' icon={notificationsOutline} ></IonIcon>
                            Enable push notifications
                        </IonToggle>
                    </IonItem>
                    <IonItem className='BiggerFont'>
                        <IonToggle
                            color="tertiary"
                            aria-label='Tertiary toggle'
                            justify='space-between'>
                            <IonIcon className='font-icon' icon={textOutline} ></IonIcon>
                            Bigger font
                        </IonToggle>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Settings;

