import { Product } from "@/types/product";

type Props = {
  data: Product;
};

export function ProductItem({ data }: Props) {
  return <div>{data.label}</div>;
}
