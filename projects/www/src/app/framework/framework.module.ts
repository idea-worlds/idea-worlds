import { NgModule } from '@angular/core';
import { ShareModule } from '../shared/share.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSidebarComponent } from './components/header-sidebar/header-sidebar.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HeaderOperationComponent } from './components/header-operation/header-operation.component';
import { HeaderPersonComponent } from './components/header-person/header-person.component';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopoverModule } from 'ng-zorro-antd/popover';


import {
  LoginOutline,
  LogoutOutline,
  HomeOutline,
  MenuOutline,
  SearchOutline,
  SettingOutline,
  PlusCircleOutline,
  UserOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
  LoginOutline,
  LogoutOutline,
  HomeOutline,
  MenuOutline,
  SearchOutline,
  SettingOutline,
  PlusCircleOutline,
  UserOutline,
];

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderNavComponent,
    HeaderOperationComponent,
    HeaderPersonComponent,
    HeaderSidebarComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    ShareModule,
    NzIconModule,
    NzIconModule.forRoot(icons),
    NzButtonModule,
    NzInputModule,
    NzMenuModule,
    NzPopoverModule,
  ]
})
export class FrameworkModule { }
