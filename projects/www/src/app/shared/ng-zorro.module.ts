import { NgModule } from '@angular/core';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import {
  BarsOutline,
  CommentOutline,
  EditOutline,
  EditTwoTone,
  EyeOutline,
  DeleteOutline,
  FormOutline,
  HeartFill,
  HeartTwoTone,
  HomeOutline,
  LeftOutline,
  LinkOutline,
  InfoCircleTwoTone,
  LoginOutline,
  LogoutOutline,
  MenuOutline,
  PlusCircleTwoTone,
  ProjectTwoTone,
  QrcodeOutline,
  RightOutline,
  RocketTwoTone,
  SaveOutline,
  SettingOutline,
  SoundTwoTone,
  StarOutline,
  StarFill,
  UserOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
  BarsOutline,
  CommentOutline,
  EditOutline,
  EditTwoTone,
  EyeOutline,
  DeleteOutline,
  FormOutline,
  HeartFill,
  HeartTwoTone,
  HomeOutline,
  LeftOutline,
  LinkOutline,
  InfoCircleTwoTone,
  LoginOutline,
  LogoutOutline,
  MenuOutline,
  PlusCircleTwoTone,
  ProjectTwoTone,
  QrcodeOutline,
  RightOutline,
  RocketTwoTone,
  SaveOutline,
  SettingOutline,
  SoundTwoTone,
  StarOutline,
  StarFill,
  UserOutline,
];


@NgModule({
  imports: [
    NzIconModule.forRoot(icons),
  ],
  exports: [
    NzAffixModule,
    NzAnchorModule,
    NzBackTopModule,
    NzButtonModule,
    NzCommentModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzImageModule,
    NzLayoutModule,
    NzListModule,
    NzMenuModule,
    NzMessageModule,
    NzModalModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzPopoverModule,
    NzPopconfirmModule,
    NzSkeletonModule,
    NzSpinModule,
    NzTagModule,
    NzTypographyModule
  ]
})
export class NgZorroModule { }
