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
      name="name"
      defaultValue=""
      render={({ field }) => (
        <FormItem>
          <FormLabel>名前</FormLabel>
          <FormControl>
            <Input placeholder="山田 太郎" autoComplete="name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
