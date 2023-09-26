'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';

export default function Component() {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="email"
      defaultValue=""
      render={({ field }) => (
        <FormItem>
          <FormLabel>メールアドレス</FormLabel>
          <FormControl>
            <Input type="email" autoComplete="email" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
