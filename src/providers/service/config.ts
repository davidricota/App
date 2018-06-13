import { Injectable } from '@angular/core'; 
import { URLSearchParams } from '@angular/http';
import { Headers } from '@angular/http';

declare var oauthSignature: any;
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

@Injectable()
export class Config {

    url: any = 'http://cruzdiabloestudio.com.ar/woocommerce';
    consumerKey: any = 'ck_015fe8b82ab936ea5457e579d715786141abcd59';
    consumerSecret: any = 'cs_1a6036d2e1afd01a33d5119dba135b7735890e71';
    oneSignalAppId: any = 'f2aafbcd-9b7b-4879-b583-635db30f3942';
    googleProjectId: any = '978427489263';
    webClientId: any = '456352511209-fbam1kgj6350b5ddsf4vfidbs1.apps.googleusercontent.com';
    appDir: any = 'ltr';

    appRateIosAppId: any = '12345678';
    appRateAndroidLink: any = 'https://play.google.com/store/apps/details?id=com.mstoreapp.wootab0002&hl=en';
    appRateWindowsId: any = '12345678';
    shareAppMessage: any = 'Hi Check this app and download it';
    shareAppSubject: any = 'Hi';
    shareAppURL: any = 'https://play.google.com/store/apps/details?id=com.mstoreapp.wootab0002&hl=en';
    shareAppChooserTitle: any = 'Pick an app';
    supportEmail: any = 'support@mstoreapp.com';

    oauth: any;
    signedUrl: any;
    randomString: any;
    oauth_nonce: any;
    oauth_signature_method: any;
    encodedSignature: any;
    searchParams: any;
    customer_id: any;
    params: any;
    options: any = {};
    optionstwo: any = {};
    constructor() {
        this.options.withCredentials = true;
        this.options.headers = headers;
        this.optionstwo.withCredentials = false;
        this.optionstwo.headers = headers;
        this.oauth = oauthSignature;
        this.oauth_signature_method = 'HMAC-SHA1';
        this.searchParams = new URLSearchParams();
        this.params = {};
        this.params.oauth_consumer_key = this.consumerKey;
        this.params.oauth_signature_method = 'HMAC-SHA1';
        this.params.oauth_version = '1.0';
    }
    setOauthNonce(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }
    setUrl(method, endpoint, filter) {
        var key;
        var unordered = {};
        var ordered = {};
        if (this.url.indexOf('https') >= 0) {
            unordered = {};
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            unordered['consumer_key'] = this.consumerKey;
            unordered['consumer_secret'] = this.consumerSecret;
            Object.keys(unordered).sort().forEach(function(key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new URLSearchParams();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            return this.url + endpoint + this.searchParams.toString();
        }
        else {
            var url = this.url + endpoint;
            this.params['oauth_consumer_key'] = this.consumerKey;
            this.params['oauth_nonce'] = this.setOauthNonce(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            this.params['oauth_timestamp'] = new Date().getTime() / 1000;
            for (key in this.params) {
                unordered[key] = this.params[key];
            }
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            Object.keys(unordered).sort().forEach(function(key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new URLSearchParams();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            this.encodedSignature = this.oauth.generate(method, url, this.searchParams.toString(), this.consumerSecret);
            return this.url + endpoint + this.searchParams.toString() + '&oauth_signature=' + this.encodedSignature;
        }
    }
}