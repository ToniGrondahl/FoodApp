import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  } from '@ionic/react';
import {IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonButton  } from '@ionic/react';
import './Login.css';
import { useState } from 'react';

const Login: React.FC = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function LogInUser() {
        console.log(email, password);
    }

    return (
    <IonPage>
        <IonContent >
            <div className="flex-center">
                <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Food App</IonCardTitle>
                </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonInput label="Email" type="email" labelPlacement="stacked" placeholder="example@gmail.com" onIonChange={(e: any) => setEmail(e.target.value)} required></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput label="Password" type="password" labelPlacement="stacked" placeholder="*****" onIonChange={(e: any) => setPassword(e.target.value)} required></IonInput>
                        </IonItem>
                        <IonButton id='button' expand="block" type='submit' onClick={() => logInWithEmailAndPassword(email, password)}>Log In</IonButton>
                        <p>Don't have an Account</p>
                        <IonButton id='button' fill="outline" expand="block" routerLink='./register'>Sign Up</IonButton>
                    </IonCardContent>
                    </IonCard>
            </div>
        </IonContent>
    </IonPage>
    );
  };
  
  export default Login;

