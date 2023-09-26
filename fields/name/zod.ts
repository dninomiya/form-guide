import { z } from 'zod';

export default z
  .string()
  .nonempty({
    message: '名前を入力してください。',
  })
  .regex(/^[A-Za-zぁ-んァ-ン一-龠々〆ヵヶー\s'-]+$/, {
    message: '不正な文字が含まれています。',
  })
  .max(60, {
    message: '最大60文字までです。',
  });
