import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfazNoticia';
import { ActionSheetController } from '@ionic/angular';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia!: Article;

  constructor(private actionSheetCtrl: ActionSheetController, private localDataService: LocalDataService) { }

  ngOnInit() { }

  onClick() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      // header: 'Albums',
      // subHeader: 'Example subheader',
      cssClass: 'my-custom-class',
      // backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'rojo',
          data: {
            action: 'delete',
          },
          handler: () => {
            this.removeNoticia();
          },
        },
        {
          text: 'Share',
          icon: 'share-outline',
          data: {
            action: 'share',
          },
        },
        // {
        //   text: 'Play (open modal)',
        //   icon: 'caret-forward-circle-outline',
        //   data: {
        //     action: 'play',
        //   },
        // },
        {
          text: 'Favourite',
          icon: 'heart',
          data: {
            action: 'favourite',
          },
          handler: () => {
            this.setNoticia();
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close-outline',
          cssClass: 'rojo',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  setNoticia() {
    this.localDataService.setNoticia(this.noticia);
  }

  removeNoticia() {
    this.localDataService.removeNoticia(this.noticia);
  }

}
