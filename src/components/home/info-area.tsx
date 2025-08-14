import { Info } from "./info";

export function InfoArea() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-12">
      <Info
        srcImg="/assets/ui/truck-line.png"
        altImg="Caminhão"
        title="Frete Grátis"
        text="Para todo o país"
      />
      <Info
        srcImg="/assets/ui/discount-percent-line.png"
        altImg="Percentual"
        title="Muitas Ofertas"
        text="Ofertas imbatíveis"
      />
      <Info
        srcImg="/assets/ui/arrow-left-right-line.png"
        altImg="Setas"
        title="Troca Fácil"
        text="No período de 30 dias"
      />
    </div>
  );
}
