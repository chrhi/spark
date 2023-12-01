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
import { FileDialog } from "@/app/(admin)/_components/file-uploader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { productSchema } from "@/lib/validators/product";
import React from "react";
import { FileWithPreview } from "@/types";
import { z } from "zod";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import { toast } from "sonner";
import { catchError, isArrayOfFile } from "@/lib/utils";

import { Icons } from "../Icons";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

type Inputs = z.infer<typeof productSchema>;

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

const AddProductForm: FC = ({}) => {
  const [files, setFiles] = React.useState<FileWithPreview[] | null>(null);

  const [isPending, startTransition] = React.useTransition();

  const { isUploading, startUpload } = useUploadThing("imageUploader");

  const form = useForm<Inputs>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      inventory: NaN,
      category: ["whates"],

      images: [],
    },
  });

  const { mutate, error, mutateAsync } = useMutation({
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
                console.log(formattedImages);
                return formattedImages ?? null;
              })
              .then(async (images) => {
                await axios.post("/api/admin/products/add", {
                  ...data,

                  images,
                });
              }),

            {
              loading: "Uploading images...",
              success: "Product added successfully.",
              error: "Error uploading images.",
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
                <div className="grid w-full items-center gap-4 p-4">
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
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem className="w-full my-4">
                  <FormControl className="w-full">
                    <Card className="w-full ">
                      <CardHeader>
                        <CardTitle>Media</CardTitle>
                      </CardHeader>
                      <CardContent>
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
                      </CardContent>
                    </Card>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Card className="w-full">
              <CardContent>
                <div className="grid w-full items-center gap-4 p-4">
                  <div className="flex flex-col space-y-1.5">
                    <>
                      <FormField
                        control={form.control}
                        name="price"
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

            <Card className="w-full my-4 ">
              <CardContent>
                <div className="grid w-full items-center gap-4 p-4">
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
                    </>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* this is the second clomun */}
          <div className="w-full h-fit flex flex-col items-center">
            <Card className="w-full ">
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Status</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Active</SelectItem>
                        <SelectItem value="sveltekit">Draft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full my-4 ">
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Category</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Active</SelectItem>
                        <SelectItem value="sveltekit">Draft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="w-full h-[100px] bg-white rounded-lg shadow p-4 flex items-center justify-end">
          <Button
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
