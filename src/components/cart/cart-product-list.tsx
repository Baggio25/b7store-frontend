import { CartListItem } from "@/types/cart-list-item";
import { CartProductItem } from "./cart-product-item";

type Props = {
  initialList: CartListItem[];
};

export function CartProductList({ initialList }: Props) {
  return (
    <div className="bg-white border border-gray-200">
      {initialList.map((item) => (
        <CartProductItem item={item} key={item.product.id} />
      ))}
    </div>
  );
}
