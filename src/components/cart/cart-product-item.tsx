import Image from "next/image";
import { formatter } from "@/libs/number-formatter";
import { useCartStore } from "@/store/cart";
import { CartListItem } from "@/types/cart-list-item";
import { setCartState } from "@/actions/set-cart-state";

type Props = {
  item: CartListItem;
};

export function CartProductItem({ item }: Props) {
  const cartStore = useCartStore((state) => state);

  async function updateCookie() {
    const updatedCart = useCartStore.getState().cart;
    await setCartState(updatedCart);
  }

  async function handleMinus() {
    if (item.quantity > 1) {
      cartStore.updateQuantity(item.product.id, item.quantity - 1);
      await updateCookie();
    } else {
      await handleRemove();
    }
  }

  async function handlePlus() {
    cartStore.updateQuantity(item.product.id, item.quantity + 1);
    await updateCookie();
  }

  async function handleRemove() {
    cartStore.removeItem(item.product.id);
    await updateCookie();
  }

  return (
    <div className="flex items-center p-6 gap-4 md:gap-8 border-0 md:border-b border-gray-200">
      <div className="border border-gray-200 p-1">
        <Image
          src={item.product.image}
          alt={item.product.label}
          width={96}
          height={96}
          className="size-24 md:size-16"
        />
      </div>
      <div className="flex-1 flex flex-col md:flex-row justify-between md:items-center">
        <div>
          <div className="text-sm mb-2">{item.product.label}</div>
          <div className="hidden md:block text-xs text-gray-500">
            CÓD. {item.product.id}
          </div>
        </div>
        <div className="w-30 flex border border-gray-200 rounded-sm text-center text-gray-500">
          <div
            onClick={handleMinus}
            className="flex text-2xl justify-center items-center size-10 cursor-pointer"
          >
            -
          </div>
          <div className="flex justify-center items-center size-10 text-lg border-x border-gray-200">
            {item.quantity}
          </div>
          <div
            onClick={handlePlus}
            className="flex text-2xl justify-center items-center size-10 cursor-pointer"
          >
            +
          </div>
        </div>
      </div>
      <div className="w-24 md:w-40 flex flex-col md:flex-row justify-between items-end md:items-center">
        <div className="text-lg text-blue-600">
          {formatter.format(item.product.price)}
        </div>
        <div>
          <div
            onClick={handleRemove}
            className="cursor-pointer size-12 border border-gray-200 flex justify-center items-center rounded-sm"
          >
            <Image src={"/assets/ui/trash.png"} alt="" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
