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
      name="tel"
      defaultValue=""
      render={({ field }) => (
        <FormItem>
          <FormLabel>電話番号</FormLabel>
          <FormControl>
            <Input type="tel" autoComplete="tel" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
