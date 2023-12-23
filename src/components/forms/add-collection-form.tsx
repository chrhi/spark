"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { collectionSchema } from "@/lib/validators/collection";
import { Product } from "@prisma/client";
import { MultiSelect } from "../multi-select";
import { Option } from "@/types";
import React from "react";

export function AddCollectionForm({ products }: { products: Product[] }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof collectionSchema>>({
    resolver: zodResolver(collectionSchema),
    defaultValues: {
      description: "",
      name: "",
      products: [],
      status: "",
    },
  });

  const [selectedCategories, setSelectedCategories] = React.useState<
    Option[] | null
  >(null);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof collectionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="w-full space-x-4  grid  grid-cols-3">
          {/* this is the first clomun */}
          <div className="w-full col-span-2 h-fit flex flex-col items-center">
            <Card className="w-full">
              <CardContent>
                <div className="grid w-full items-center gap-2 p-2">
                  <div className="flex flex-col space-y-1.5">
                    <>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full ">
                            <FormLabel>Name</FormLabel>
                            <FormControl className="w-full">
                              <Input
                                id="name"
                                placeholder="Name of your project"
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem className="w-full ">
                            <FormLabel>Description</FormLabel>
                            <FormControl className="w-full h-fit min-h-[100px]">
                              <Textarea
                                id="description"
                                rows={3}
                                placeholder="short sleeve shirts"
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full my-8">
              <CardContent>
                <div className="grid w-full items-center gap-2 p-2">
                  <div className="flex flex-col space-y-1.5">
                    <>
                      <FormField
                        control={form.control}
                        name="products"
                        render={({ field }) => (
                          <FormItem className="w-full ">
                            <FormLabel>Price</FormLabel>
                            <FormControl className="w-full">
                              <Input
                                id="price"
                                placeholder="Name of your project"
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* this is the second clomun */}
          <div className="w-full h-fit flex flex-col items-center">
            <Card className="w-full p-2 ">
              <CardContent>
                <div className="grid w-full items-center gap-2">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">select products</Label>
                    <MultiSelect
                      selected={selectedCategories}
                      setSelected={setSelectedCategories}
                      options={products.map((item) => ({
                        label: item.name,
                        value: item.id.toString(),
                      }))}
                      placeholder="Select categories"
                    />
                    <FormMessage />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
