import { z } from 'zod';

export default z
  .string()
  .nonempty({
    message: '名前を入力してください。',
  })
  .max(60, {
    message: '最大60文字までです。',
  });
