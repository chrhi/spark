"use client";

import { orderSchema } from "@/lib/validators/order";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ALGERIASTATES } from "@/constants";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/zustand/store";
import axios from "axios";
import { Icons } from "../Icons";

export function OrderForm() {
  const products = useStore((state) => state.card);
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof orderSchema>) {
    setIsLoading(true);
    await axios.post("/api/store/order/create", {
      ...values,
      products,
    });
    setIsLoading(false);
  }

  const baladia = form.watch("willaya");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="abdellah" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="chehri" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="05......" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="h-12"
                  placeholder="example@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full h-fit grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="willaya"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Willaya</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ALGERIASTATES.map((item) => (
                        <SelectItem
                          key={item.name + "baladia"}
                          value={item.name}
                        >
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="baladia"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Baladia</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full h-12 ">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      {ALGERIASTATES.filter(
                        (item) => item.name === baladia
                      )[0]?.baladia?.map((baladia) => {
                        return (
                          <SelectItem key={baladia + "willaya"} value={baladia}>
                            {baladia}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="your address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={products.length === 0 || isLoading}
          className="w-full bg-black h-12 "
          type="submit"
        >
          {isLoading && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Update
          <span className="sr-only">create an order</span>
        </Button>
      </form>
    </Form>
  );
}
