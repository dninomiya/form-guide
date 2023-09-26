'use client';

import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export default function Component() {
  const form = useFormContext();
  const [visible, setVisible] = useState(false);

  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>パスワード</FormLabel>
          <div className="relative">
            <FormControl className="pr-10">
              <Input
                defaultValue=""
                type={visible ? 'text' : 'password'}
                minLength={8}
                maxLength={64}
                autoComplete="new-password"
                {...field}
              />
            </FormControl>
            <Button
              type="button"
              className="absolute top-1 right-1"
              onClick={() => setVisible((v) => !v)}
              variant="ghost"
              size="smIcon"
            >
              {visible ? <EyeOff size={16} /> : <Eye size={16} />}
            </Button>
          </div>
          <FormDescription>
            大文字を含む半角英数字と記号を含めてください
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
