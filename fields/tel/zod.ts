import { z } from 'zod';

export default z
  .string()
  .nonempty({
    message: '電話番号を入力してください。',
  })
  .max(15, {
    message: '最大15文字までです。',
  })
  .transform((val) => val.replaceAll('-', ''));
