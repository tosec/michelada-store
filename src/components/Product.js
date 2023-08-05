import Link from "next/link";
import Image from "next/image";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { toast } from "react-hot-toast";

export default function Product({ product, index }) {
  const { addItem } = useShoppingCart();

  function addItemToCart(event) {
    event.preventDefault();
    const id = toast.loading("Added item...");
    addItem(product);
    toast.success(`${product.name} added!`, { id });
  }

  return (
    <Link
      href={`/products/${product.id}`}
      className="border-4 border-zinc-300 rounded-lg group overflow-hidden"
    >
      <div className="relative w-full h-72">
        <Image
          priority={index === 0}
          src={product.image}
          alt={product.name}
          fill
          sizes="100%"
          style={{
            objectFit: "contain",
          }}
        ></Image>
      </div>
      <div className="p-6 bg-zinc-300">
        <p className="font-semibold text-lg">{product.name}</p>
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            <p className="text-zinc-500 font-extrabold">Price</p>
            <p className="text-lg font-semibold">
              {formatCurrencyString({
                currency: product.currency,
                value: product.price,
              })}
            </p>
          </div>
          <button
            onClick={addItemToCart}
            className="bg-white text-zinc-500 font-extrabold rounded-md py-2 px-4"
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}
