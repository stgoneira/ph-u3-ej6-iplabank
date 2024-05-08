import { Component, OnInit } from '@angular/core'
import { Camera, CameraResultType } from '@capacitor/camera'
import { IonicModule } from '@ionic/angular'
import { addIcons } from 'ionicons'
import { idCardOutline, journalOutline } from 'ionicons/icons'

@Component({
  selector: 'app-solicitud-cuenta',
  templateUrl: './solicitud-cuenta.component.html',
  styleUrls: ['./solicitud-cuenta.component.scss'],
  standalone: true,
  imports: [ IonicModule ]
})
export class SolicitudCuentaComponent  implements OnInit {
  cedulaFrontDefault: string = "/assets/cedula-chilena-front.jpg"
  cedulaBackDefault: string = "/assets/cedula-chilena-back.jpg"
  cedulaFront: string = this.cedulaFrontDefault
  cedulaBack: string = this.cedulaBackDefault

  constructor() {
    addIcons({
      idCardOutline,
      journalOutline
    })
  }

  ngOnInit() {}

  async tomarFotoCedulaFrontal() {
    this.cedulaFront = "data:image/png;base64, "
    this.cedulaFront += (await this.tomarFoto()).base64String ?? this.cedulaFrontDefault
  }

  async tomarFotoCedulaTrasera() {
    this.cedulaBack = "data:image/png;base64, "
    this.cedulaBack += (await this.tomarFoto()).base64String ?? this.cedulaBackDefault
  }

  async tomarFoto() {
    return await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64
    })
  }

}
