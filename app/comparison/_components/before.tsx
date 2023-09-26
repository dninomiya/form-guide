'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.object({
    body: z.string().min(2).max(50),
    domain: z.string().min(2).max(50),
  }),
  tel: z.object({
    first: z.string().min(2).max(50),
    second: z.string().min(2).max(50),
    third: z.string().min(2).max(50),
  }),
  address: z.object({
    postalCode: z.object({
      first: z.string().min(2).max(50),
      last: z.string().min(2).max(50),
    }),
  }),
});

export default function Before() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: {
        body: '',
        domain: '',
      },
      tel: {
        first: '',
        second: '',
        third: '',
      },
      address: {
        postalCode: {
          first: '',
          last: '',
        },
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">Before</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="姓" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="名" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <h3 className="text-muted-foreground text-sm mb-3">電話番号</h3>
            <div className="flex items-center gap-2">
              <FormField
                control={form.control}
                name="tel.first"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              -
              <FormField
                control={form.control}
                name="tel.second"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              -
              <FormField
                control={form.control}
                name="tel.third"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div>
            <h3 className="text-muted-foreground text-sm mb-3">
              メールアドレス
            </h3>
            <div className="flex items-center gap-2">
              <FormField
                control={form.control}
                name="email.body"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="foo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              @
              <FormField
                control={form.control}
                name="email.domain"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div>
            <h3 className="text-muted-foreground text-sm mb-3">住所</h3>
            <div className="flex items-center gap-2">
              〒
              <FormField
                control={form.control}
                name="address.postalCode.first"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              -
              <FormField
                control={form.control}
                name="address.postalCode.last"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit">送信</Button>
        </form>
      </Form>
    </div>
  );
}
