import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonButton  } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
    return (
    <IonPage>
        <IonContent >
            <div className="card-center">
                <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Food App</IonCardTitle>
                </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonInput label="Email" type="email" labelPlacement="stacked" placeholder="example@gmail.com"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput label="Password" type="password" labelPlacement="stacked" placeholder="*****"></IonInput>
                        </IonItem>
                        <IonButton expand="block">Log In</IonButton>
                        <IonCardSubtitle>Don't have an Account</IonCardSubtitle>
                        <IonButton fill="outline" expand="block" >Sign Up</IonButton>
                    </IonCardContent>
                    </IonCard>
            </div>
        </IonContent>
    </IonPage>
    );
  };
  
  export default Login;
  