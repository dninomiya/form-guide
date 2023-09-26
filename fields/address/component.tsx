'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useFormContext } from 'react-hook-form';

export default function Component() {
  const form = useFormContext();

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="address.postalCode"
        defaultValue=""
        render={({ field }) => (
          <FormItem>
            <FormLabel>郵便番号</FormLabel>
            <FormControl>
              <Input
                type="text"
                className="w-32"
                autoComplete="postal-code"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="address.prefecture"
        defaultValue=""
        render={({ field }) => (
          <FormItem>
            <FormLabel>都道府県</FormLabel>
            <FormControl>
              <Input
                type="text"
                className="w-32"
                autoComplete="address-level1"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="address.address"
        defaultValue=""
        render={({ field }) => (
          <FormItem>
            <FormLabel>住所</FormLabel>
            <FormControl>
              <Textarea autoComplete="address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
