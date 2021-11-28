import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './pages/landing/landing.component';
import { FooterComponent } from './components/common/footer/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CONSTANTS } from 'src/constants';
import { LocaleControler } from './controler/locale.controler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  availableLng = CONSTANTS.SETTINGS.FRONTEND.AVAILABLELANGS;
  localeControler: LocaleControler;

  constructor(translateService: TranslateService) {
    this.localeControler = new LocaleControler(translateService);

    //defines the default language
    let tmpLng = this.availableLng[0];

    //gets the default browser language
    const currentLng = this.localeControler.browserDefaultLang;

    if (this.availableLng.includes(currentLng)) {
      tmpLng = currentLng;
    }

    translateService.setDefaultLang(tmpLng);
  }
}
