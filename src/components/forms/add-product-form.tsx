"use client";

import type { FC } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  UncontrolledFormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { productSchema } from "@/lib/validators/product";
import React from "react";
import { FileWithPreview } from "@/types";

type Inputs = z.infer<typeof productSchema>;

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

interface AddProductFormAbdullahProps {}

const AddProductForm: FC = ({}) => {
  const [files, setFiles] = React.useState<FileWithPreview[] | null>(null);

  const [isPending, startTransition] = React.useTransition();

  const { isUploading, startUpload } = useUploadThing("productImage");

  const form = useForm<Inputs>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      inventory: NaN,
      category: "skateboards",
      subcategory: "",
      images: [],
    },
  });

  return (
    <form>
      <div className="w-full space-x-4  grid grid-cols-3">
        {/* this is the first clomun */}
        <div className="w-full col-span-2 h-fit flex flex-col items-center">
          <Card className="w-full">
            <CardContent>
              <div className="grid w-full items-center gap-4 p-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Title</Label>
                  <Input id="name" placeholder="Name of your project" />
                  <Label htmlFor="name">Description</Label>
                  <Textarea placeholder="short sleeve shirts" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Media</CardTitle>
            </CardHeader>
            <CardContent>
              <FileDialog />
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Title</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Shipping</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Title</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Title</Label>
                  <Input id="name" placeholder="Name of your project" />
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
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full ">
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;
