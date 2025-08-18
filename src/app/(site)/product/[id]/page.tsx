import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <div className="text-gray-500 mb-4">
        <Link href={"/"}>Home</Link> &gt; Categoria
      </div>
    </div>
  );
}
