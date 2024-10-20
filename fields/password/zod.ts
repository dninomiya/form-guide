// https://www.npmjs.com/package/validator
import isStrongPassword from 'validator/lib/isStrongPassword';
import { z } from 'zod';

export default z
  .string()
  .trim()
  .min(8, {
    message: '最小8文字以上です。',
  })
  .refine(isStrongPassword, {
    message: '大文字、小文字、数字、記号を含む半角英数字を入力してください。',
  });
