import { NgModule } from '@angular/core';
import { ShareModule } from '../shared/share.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderSidebarComponent } from './components/header-sidebar/header-sidebar.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HeaderOperationComponent } from './components/header-operation/header-operation.component';
import { HeaderPersonComponent } from './components/header-person/header-person.component';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


import {
  MenuOutline,
  SearchOutline,
  PlusCircleOutline,
  UserOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
  MenuOutline,
  SearchOutline,
  PlusCircleOutline,
  UserOutline,
];

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
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
    NzMenuModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzIconModule.forRoot(icons),
  ]
})
export class FrameworkModule { }
