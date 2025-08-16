import Link from "next/link";

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

      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div className="text-3xl">
          <strong>99</strong> Produtos
        </div>
        <div className="flex flex-row w-full md:max-w-70 gap-5">
          <select className="flex-1 flex items-center px-6 h-14 bg-white border border-gray-200 rounded-sm text-gray-500">
            <option value="">Ordenar por</option>
          </select>
          <div className="flex-1 md:hidden flex items-center px-6 h-14 bg-white border border-gray-200 rounded-sm text-gray-500">
            Filtrar por
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="flex-1 md:max-w-70">Filtro</div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
          <div>Produto</div>
          <div>Produto</div>
          <div>Produto</div>
          <div>Produto</div>
        </div>
      </div>
    </div>
  );
}
