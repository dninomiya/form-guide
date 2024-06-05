import { z } from 'zod';

export default z
  .string()
  .trim()
  .min(1, {
    message: 'メールアドレスを入力してください。',
  })
  .email({
    message: 'メールアドレスの形式で入力してください。',
  })
  .max(254, {
    message: '最大254文字までです。',
  });
