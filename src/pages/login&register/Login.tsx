import { IonCard, IonContent, IonHeader, IonPage, IonRedirect, IonRouterLink, IonTitle, IonToolbar,  } from '@ionic/react';
import {IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonButton  } from '@ionic/react';
import './Login.css';

import { useState } from 'react';
import {loginUser} from './firebase'
import { toast } from './Toast';
const Login: React.FC = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
        const res = await loginUser(email, password)
        
        if (res === true) {
            toast("login succesful")
            console.log("login succesful")
            
        } else {
            toast("login failed")
        }
    }

    return (
    <IonPage>
        <IonContent >
            <div className="flex-center" id='redirect'>
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
                        <IonButton id='button' expand="block" type='submit' onClick={login}>Log In</IonButton>
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

