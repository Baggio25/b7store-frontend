import Image from "next/image";

type Props = {
  srcImg: string;
  altImg: string;
  title: string;
  text: string;
};

export function Info({ srcImg, altImg, text, title }: Props) {
  return (
    <div className="flex-1 py-6 border border-gray-200 rounded-sm flex">
      <div className="w-32 border-r border-gray-200 flex justify-center items-center">
        <Image src={srcImg} alt={altImg} width={40} height={40} />
      </div>
      <div className="flex-1 pl-8">
        <div className="font-bold text-xl">{title}</div>
        <div className="text-gray-400">{text}</div>
      </div>
    </div>
  );
}
