import { z } from 'zod';

export default z.object({
  postalCode: z
    .string()
    .nonempty({
      message: '郵便番号を入力してください。',
    })
    .transform((val) => val.replaceAll('-', '')),
  prefecture: z
    .string()
    .nonempty({
      message: '都道府県を入力してください。',
    })
    .max(3, {
      message: '最大3文字までです。',
    }),
  address: z
    .string()
    .nonempty({
      message: '住所を入力してください。',
    })
    .max(161, {
      message: '最大161文字までです。',
    }),
});
