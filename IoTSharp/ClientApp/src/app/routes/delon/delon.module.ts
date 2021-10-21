import { NgModule } from '@angular/core';
import { DownFileModule } from '@delon/abc/down-file';
import { FullContentModule } from '@delon/abc/full-content';
import { QRModule } from '@delon/abc/qr';
import { SharedModule } from '@shared';

import { DelonRoutingModule } from './delon-routing.module';

import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { ACLComponent } from './acl/acl.component';
import { CacheComponent } from './cache/cache.component';
import { DownFileComponent } from './downfile/downfile.component';
import { DelonFormComponent } from './form/form.component';
import { GuardAdminComponent } from './guard/admin.component';
import { GuardAuthComponent } from './guard/auth.component';
import { CanLeaveProvide } from './guard/can-leave.provide';
import { GuardComponent } from './guard/guard.component';
import { GuardLeaveComponent } from './guard/leave.component';
import { PrintComponent } from './print/print.component';
import { QRComponent } from './qr/qr.component';
import { STDemoComponent } from './st/st.component';
import { UtilComponent } from './util/util.component';
import { XlsxComponent } from './xlsx/xlsx.component';
import { ZipComponent } from './zip/zip.component';

const COMPONENTS = [
  STDemoComponent,
  UtilComponent,
  PrintComponent,
  ACLComponent,
  GuardComponent,
  GuardLeaveComponent,
  GuardAdminComponent,
  GuardAuthComponent,
  CacheComponent,
  DownFileComponent,
  XlsxComponent,
  ZipComponent,
  DelonFormComponent,
  QRComponent,
];

@NgModule({
  imports: [SharedModule, DelonRoutingModule, DownFileModule, FullContentModule, QRModule, G2MiniBarModule],
  providers: [CanLeaveProvide],
  declarations: COMPONENTS,
})
export class DelonModule {}
