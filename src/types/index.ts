import { type FileWithPath } from "react-dropzone";

export type FileWithPreview = FileWithPath & {
  preview: string;
};

export type Product = {
  id: string;
  price: number | string;
  name: string;
  description: string;
  images: string[];
  category: string;
};

export interface Option {
  label: string;
  value: string;
}
