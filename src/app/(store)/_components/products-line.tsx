interface Props {
  title: string;
}

export default function ProductsLine({ title }: Props) {
  return (
    <div className="bg-white mx-auto w-full my-4">
      <div className="w-ful max-w-7xl mx-auto h-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Product />
        <Product />
        <Product />
        <Product />
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
    <div className="md:w-[200px] md:h-[200px] w-[170px] h-[170px] lg:w-[290px] lg:h-[290px] bg-black "></div>
  );
}
