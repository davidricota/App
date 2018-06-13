import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';
import { Values } from './values';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class Functions {
    loader: any;
    lan: any = {};
    constructor(private alert: AlertController, private loadingController: LoadingController, private values: Values, public translate: TranslateService) {
    }
    showAlert(title, text) {
        this.translate.get([title, text, 'OK']).subscribe(translations => {
            this.lan.title = translations[title];
            this.lan.text = translations[text];
            this.lan.ok = translations.OK;
        })
        let alert = this.alert.create({
            title: this.lan.title,
            subTitle: this.lan.text,
            buttons: [this.lan.ok]
        });
        alert.present();
    }
    presentLoading() {
        this.loader = this.loadingController.create({
            content: this.values.lan.WaitTitle
        })
        this.loader.present();
    }
    dismissLoading() {
        this.loader.dismiss();
    }
}