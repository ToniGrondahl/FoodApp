import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {IonCardContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonButton  } from '@ionic/react';
import './Register.css';
import { useState } from 'react';
import { registerUserValidation } from './firebase'
import { Link } from 'react-router-dom';

const Register: React.FC = () => {

    
    const [password, setPassword] = useState('')
    const [Cpassword, setCPassword] = useState('')
    const [email, setEmail] = useState('')

    async function registerUser() {
        if (password !== Cpassword){
            //return  toast('Password do not match!')
    } if (email.trim() === '' || password.trim() === '') {
        //return toast('Email and password are required')
    }

    const res = await registerUserValidation(email, password)
    if (res === true) {
        console.log("account created")
    } else {
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