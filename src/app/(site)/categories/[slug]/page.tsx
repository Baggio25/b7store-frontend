import Link from "next/link";

import { ProductListFilter } from "@/components/categories/product-list-filter";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const filters = await searchParams;

  console.log(filters);
  return (
    <div>
      <div className="text-gray-500 mb-4">
        <Link href={""}>Categoria</Link> &gt; Temporário
      </div>

      <ProductListFilter />
    </div>
  );
}
