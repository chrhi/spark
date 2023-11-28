/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

interface Props {
  title: string;
}

export default function ProductsLine({ title }: Props) {
  return (
    <div className="bg-white">
      <div className="mx-auto my-4 w-full flex items-center justify-start  ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
      </div>
      <div className="w-full h-[400px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="md:w-[200px] md:h-[200px] w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] bg-black "></div>
  );
}
