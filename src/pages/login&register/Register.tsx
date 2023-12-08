import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {IonCardContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonButton  } from '@ionic/react';
import './Register.css';
import { useState } from 'react';

const Register: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [Cpassword, setCPassword] = useState('')
    const [email, setEmail] = useState('')

    function LogInUser() {
        console.log(email, password, Cpassword, username);
    }

    return (
      <IonPage>
        <IonContent >
            <div className="flex-center">
                <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Create account</IonCardTitle>
                </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonInput label="Username" type="text" labelPlacement="stacked" placeholder="username" onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput label="Email" type="email" labelPlacement="stacked" placeholder="example@gmail.com" onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput label="Password" type="password" labelPlacement="stacked" placeholder="*****" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput label="Password" type="password" labelPlacement="stacked" placeholder="*****" onIonChange={(e: any) => setCPassword(e.target.value)}></IonInput>
                        </IonItem>
                        <IonButton id='button' expand="block" type='submit' onClick={LogInUser}>Sign Up</IonButton>
                        
                    </IonCardContent>
                    </IonCard>
            </div>
        </IonContent>
    </IonPage>
    );
  };
  
  export default Register;
  