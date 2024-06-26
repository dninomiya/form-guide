import { z } from 'zod';

export default z
  .string()
  .trim()
  .min(1, {
    message: '名前を入力してください。',
  })
  .max(60, {
    message: '最大60文字までです。',
  });
