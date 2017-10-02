import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from './settings.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { Ng2BootstrapModule, ModalModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
  ],
  declarations: [ConfirmationComponent],
  exports: [ConfirmationComponent],
  providers: [SettingsService]
})
export class SharedModule { }
