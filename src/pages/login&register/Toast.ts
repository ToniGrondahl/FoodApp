export function toast(message: string) {
    const toast = document.createElement('ion-toast')
    toast.message = message
    toast.duration = 5000
    toast.position = 'middle'

    
    document.body.appendChild(toast)
    return toast.present();
  }