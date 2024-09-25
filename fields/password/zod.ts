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
    message: '大文字を含む半角英数字と記号を含めてください。',
  });
