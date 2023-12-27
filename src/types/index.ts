import { type FileWithPath } from "react-dropzone";

export type FileWithPreview = FileWithPath & {
  preview: string;
};

export interface DataTableSearchableColumn<TData> {
  id: keyof TData;
  title: string;
}

export interface DataTableFilterableColumn<TData>
  extends DataTableSearchableColumn<TData> {
  options: Option[];
}

export type Product = {
  id: string;
  price: number | string;
  name: string;
  description: string;
  images: any[];
  category: string;
  CompareAtPrice: string;
  CostPerItem: string;
  continue_selling_when_out_of_stock: boolean;
};

export interface StoredFile {
  id: string;
  name: string;
  url: string;
}

export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface Category {
  title: Product["category"];
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  subcategories: Subcategory[];
}

export interface Subcategory {
  title: string;
  description?: string;
  image?: string;
  slug: string;
}

export interface VarinatType {
  color: {
    enabled: boolean;
    variants: {
      name: string;
      price: number;
      in_stock: number;
    }[];
  };
  size: {
    enabled: boolean;
    variants: {
      name: string;
      price: number;
      in_stock: number;
    }[];
  };
  material: {
    enabled: boolean;
    variants: {
      name: string;
      price: number;
      in_stock: number;
    }[];
  };
  style: {
    enabled: boolean;
    variants: {
      name: string;
      price: number;
      in_stock: number;
    }[];
  };
}
