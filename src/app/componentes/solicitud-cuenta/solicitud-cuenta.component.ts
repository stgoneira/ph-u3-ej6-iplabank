import { Component, OnInit } from '@angular/core'
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
cedulaFront: string = "/assets/cedula-chilena-front.jpg"
cedulaBack: string = "/assets/cedula-chilena-back.jpg"

  constructor() {
    addIcons({
      idCardOutline,
      journalOutline
    })
  }

  ngOnInit() {}

}
