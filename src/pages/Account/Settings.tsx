import { useState, useEffect, } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonToggle, IonButton, IonIcon } from '@ionic/react'
import type { ToggleCustomEvent } from '@ionic/react';
import { moonOutline, notificationsOutline, textOutline, chevronBackOutline } from 'ionicons/icons';
import './Settings.css';

function Settings() {
    const [themeToggle, setThemeToggle] = useState(false);

    // Listen for the toggle check/uncheck to toggle the dark theme
    const toggleChange = (ev: ToggleCustomEvent) => {
        toggleDarkTheme(ev.detail.checked);
    };

    // Add or remove the "dark" class on the document body
    const toggleDarkTheme = (shouldAdd: boolean) => {
        document.body.classList.toggle('dark', shouldAdd);
    };

    // Check/uncheck the toggle and update the theme based on isDark
    const initializeDarkTheme = (isDark: boolean) => {
        setThemeToggle(isDark);
        toggleDarkTheme(isDark);
    };

    useEffect(() => {
        // Use matchMedia to check the user preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        // Initialize the dark theme based on the initial
        // value of the prefers-color-scheme media query
        initializeDarkTheme(prefersDark.matches);

        // Listen for changes to the prefers-color-scheme media query
        prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));
    }, []);

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
                <IonList inset={true}>
                    <IonItem className='DarkMode'>
                        <IonToggle checked={themeToggle} onIonChange={toggleChange}
                            justify="space-between"
                            color="tertiary">
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
    );
}

export default Settings;

