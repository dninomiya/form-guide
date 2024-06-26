import { z } from 'zod';

export default z
  .string()
  .trim()
  .min(1, {
    message: '電話番号を入力してください。',
  })
  .max(15, {
    message: '最大15文字までです。',
  })
  .transform((val) => val.replace(/[\(\)-]/g, ''));
