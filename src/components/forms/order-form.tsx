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

export function OrderForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof orderSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [selectedWillaya, setSelectedWillaya] = useState("Chlef");

  useEffect(() => {
    setSelectedWillaya(form.getValues("willaya"));

    console.log(selectedWillaya);
  }, [form, selectedWillaya]);

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
                <Input className="h-12" placeholder="shadcn" {...field} />
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
                <Input className="h-12" placeholder="shadcn" {...field} />
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
                <Input className="h-12" placeholder="shadcn" {...field} />
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
                <Input className="h-12" placeholder="shadcn" {...field} />
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
                      <SelectValue placeholder="Alger" />
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
                    <SelectTrigger className="w-full h-12">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      {ALGERIASTATES.filter(
                        (item) => item.name === form.getValues("willaya")
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
          className="w-full h-12 bg-black font-bold text-xl"
          type="submit"
        >
          Confirme Order
        </Button>
      </form>
    </Form>
  );
}
