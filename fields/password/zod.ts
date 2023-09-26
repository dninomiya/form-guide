import { z } from 'zod';
import isStrongPassword from 'validator/lib/isStrongPassword';

export default z
  .string()
  .nonempty({
    message: '名前を入力してください。',
  })
  .min(8, {
    message: '最小8文字以上です。',
  })
  .max(64, {
    message: '最大64文字までです。',
  })
  .refine(isStrongPassword, {
    message: '大文字を含む半角英数字と記号を含めてください。',
  });
