import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {IonCardContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonButton, useIonToast  } from '@ionic/react';
import './Register.css';
import { useState } from 'react';
import { registerUserValidation } from './firebase'
import { Link } from 'react-router-dom';

const Register: React.FC = () => {

    const [password, setPassword] = useState('')
    const [Cpassword, setCPassword] = useState('')
    const [email, setEmail] = useState('')

    const [present] = useIonToast();

    const presentToast = (message: string) => {
    present({
      message: message,
      duration: 5000,
      position:'bottom',
    });
  };

    async function registerUser() {
        if (password !== Cpassword){
            presentToast('Passwords do not match')
            console.log("Passwords do not match")
    } if (email.trim() === '' || password.trim() === '') {
            presentToast('Email and password are required')
            console.log("Passwords do not match")
    }

    const res = await registerUserValidation(email, password)
    if (res === true) {
        presentToast('account created')
        console.log("account created")
    } else {
        presentToast('creating account failed')
        console.log("creating account failed")
    }
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
                            <IonInput label="Email" type="email" labelPlacement="stacked" placeholder="example@gmail.com" onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput label="Password" type="password" labelPlacement="stacked" placeholder="*****" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput label="Password again" type="password" labelPlacement="stacked" placeholder="*****" onIonChange={(e: any) => setCPassword(e.target.value)}></IonInput>
                        </IonItem>
                        <IonButton id='button' expand="block" type='submit' onClick={registerUser}>Sign Up</IonButton>
                        <p>Already have an account?  <Link to="./login"> Login</Link></p>
                    </IonCardContent>
                    </IonCard>
            </div>
        </IonContent>
    </IonPage>
    );
  };
  
  export default Register;