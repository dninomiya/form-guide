import { FieldMeta } from '@/types/field-meta';

export const FIELDS: FieldMeta[] = [
  {
    id: 'name',
    title: '名前',
    discussionId: '1',
    lastUpdatedAt: new Date('2023-09-24'),
  },
  {
    id: 'email',
    title: 'メールアドレス',
    discussionId: '2',
    lastUpdatedAt: new Date('2023-09-24'),
  },
  {
    id: 'tel',
    title: '電話番号',
    discussionId: '',
    lastUpdatedAt: new Date('2023-09-24'),
  },
  {
    id: 'address',
    title: '住所',
    discussionId: '3',
    lastUpdatedAt: new Date('2023-09-24'),
  },
  {
    id: 'password',
    title: 'パスワード',
    discussionId: '4',
    lastUpdatedAt: new Date('2023-09-24'),
  },
];
