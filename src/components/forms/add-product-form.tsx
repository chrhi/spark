"use client";

import type { FC } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import "cropperjs/dist/cropper.css";
import { FileDialog } from "@/components/file-dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  UncontrolledFormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { productSchema } from "@/lib/validators/product";
import React, { useState } from "react";
import { FileWithPreview, VarinatType } from "@/types";
import { z } from "zod";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import { toast } from "sonner";
import { catchError, isArrayOfFile } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Icons } from "../Icons";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Zoom } from "../zoom-image";
import Image from "next/image";
import { categories } from "@/constants/CATEGORIES";
import { Switch } from "../ui/switch";
import { getSubcategories, productCategories } from "@/constants/products";

type Inputs = z.infer<typeof productSchema>;

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

const AddProductForm: FC = ({}) => {
  const [files, setFiles] = React.useState<FileWithPreview[] | null>(null);
  const router = useRouter();

  const { isUploading, startUpload } = useUploadThing("imageUploader");

  const form = useForm<Inputs>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      inventory: NaN,
      images: [],
    },
  });

  const subcategories = getSubcategories(form.watch("category"));

  const { mutate, error, mutateAsync, isPending } = useMutation({
    mutationFn: async (data: Inputs) => {
      try {
        if (isArrayOfFile(data.images)) {
          toast.promise(
            startUpload(data.images)
              .then((res) => {
                const formattedImages = res?.map((image) => ({
                  id: image.key,
                  name: image.key.split("_")[1] ?? image.key,
                  url: image.url,
                }));
                return formattedImages ?? null;
              })
              .then(async (images) => {
                await axios.post("/api/admin/products/add", {
                  ...data,

                  images,
                });
                router.push("/admin/products");
              }),

            {
              loading: "Creating new product...",
              success: "Product added successfully.",
              error: "Error creating product.",
            }
          );
        } else {
          await axios.post("/api/admin/products/add", {
            ...data,

            images: null,
          });

          toast.success("Product added successfully.");
        }

        // form.reset();
        // setFiles(null);
      } catch (err) {
        catchError(err);
      }
    },
  });

  async function onSubmit(data: Inputs) {
    console.log("this is the data");
    console.log(data);
    await mutateAsync(data);

    // here redirect the user to the products page
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
            <Card className="w-full my-8 p-2">
              <CardContent>
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col gap-1.5">
                      <FormLabel>Images</FormLabel>
                      {files?.length ? (
                        <div className="flex items-center gap-2">
                          {files.map((file, i) => (
                            <Zoom key={i}>
                              <Image
                                src={file.preview}
                                alt={file.name}
                                className="h-20 w-20 shrink-0 rounded-md object-cover object-center"
                                width={80}
                                height={80}
                              />
                            </Zoom>
                          ))}
                        </div>
                      ) : null}
                      <FormControl>
                        <FileDialog
                          setValue={form.setValue}
                          name="images"
                          maxFiles={3}
                          maxSize={1024 * 1024 * 4}
                          files={files}
                          setFiles={setFiles}
                          isUploading={isUploading}
                          disabled={isPending}
                        />
                      </FormControl>
                      <UncontrolledFormMessage
                        message={form.formState.errors.images?.message}
                      />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardContent>
                <div className="grid w-full items-center gap-2 p-2">
                  <div className="flex flex-col space-y-1.5">
                    <div className="w-full ">
                      <Label>Pricing</Label>
                      <div className="w-full p-2">
                        <>
                          <div className="w-full h-[60px] grid grid-cols-2 gap-2">
                            <div className="w-full h-[50px] flex flex-col items-start gap-y-1">
                              <Label>Price</Label>
                              <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        id="price"
                                        placeholder="DZD 0.00"
                                        value={field.value}
                                        onChange={field.onChange}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className="w-full h-[50px] flex flex-col items-start gap-y-1">
                              <Label>Compare-at price</Label>
                              <FormField
                                control={form.control}
                                name="CompareAtPrice"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        id="price"
                                        placeholder="DZD 0.00"
                                        value={field.value}
                                        onChange={field.onChange}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                          <div className="w-full h-[60px] grid grid-cols-3 mt-4 gap-2">
                            <div className="w-full h-[50px] flex flex-col items-start gap-y-1">
                              <Label>Cost per item</Label>
                              <FormField
                                control={form.control}
                                name="CostPerItem"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        id="price"
                                        placeholder="DZD 0.00"
                                        value={field.value}
                                        onChange={field.onChange}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className="w-full h-[50px] flex flex-col items-start gap-y-1">
                              <Label>Profit</Label>

                              <Input id="price" placeholder="DZD 0.00" />
                            </div>
                            <div className="w-full h-[50px] flex flex-col items-start gap-y-1">
                              <Label>Margin</Label>

                              <Input id="price" placeholder="DZD 0.00" />
                            </div>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full my-4 ">
              <CardContent>
                <div className="grid w-full items-center gap-2 p-2">
                  <div className="flex flex-col space-y-1.5">
                    <>
                      <FormField
                        control={form.control}
                        name="inventory"
                        render={({ field }) => (
                          <FormItem className="w-full ">
                            <FormLabel>Invantory</FormLabel>
                            <FormControl className="w-full">
                              <Input
                                type="number"
                                inputMode="numeric"
                                id="invantory"
                                placeholder="how much times do you have in stock"
                                value={
                                  Number.isNaN(field.value) ? "" : field.value
                                }
                                onChange={(e) =>
                                  field.onChange(e.target.valueAsNumber)
                                }
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="continue_selling_when_out_of_stock"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>
                                Continue selling when out of stock
                              </FormLabel>
                              <FormDescription>
                                Receive emails about new products, features, and
                                more.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
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
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <Card className="w-full p-2 ">
                  <CardContent>
                    <div className="grid w-full items-center gap-2">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Status</Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger defaultValue={"ACTIVE"} id="framework">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="ACTIVE">Active</SelectItem>
                            <SelectItem value="DRAFT">Draft</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <Card className="w-full my-4 p-2">
                  <CardContent>
                    <div className="grid w-full items-center gap-2">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">category</Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger id="framework">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            {productCategories.map((item) => {
                              return (
                                <SelectItem key={item.title} value={item.title}>
                                  {item.title}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            />

            <FormField
              control={form.control}
              name="subcategory"
              render={({ field }) => (
                <Card className="w-full my-4 p-2">
                  <CardContent>
                    <div className="grid w-full items-center gap-2">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">sub category</Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger id="framework">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            {subcategories.map((item) => {
                              return (
                                <SelectItem key={item.value} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            />
          </div>
        </div>
        <div className="w-full h-[100px] bg-white rounded-lg shadow p-2 flex items-center justify-end">
          <Button
            type="submit"
            onClick={() =>
              void form.trigger(["name", "description", "price", "inventory"])
            }
            className="w-fit"
            disabled={isPending}
          >
            {isPending && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Publish
            <span className="sr-only">Add Product</span>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddProductForm;
