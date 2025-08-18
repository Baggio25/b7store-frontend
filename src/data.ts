export const data = {
  banners: [
    { img: "/assets/banners/banner-1.png", link: "" },
    { img: "/assets/banners/banner-2.png", link: "" },
    { img: "/assets/banners/banner-3.png", link: "" },
    { img: "/assets/banners/banner-4.png", link: "" },
  ],
  products: [
    {
      id: 1,
      label: "Camisa PHP",
      price: 49.9,
      image: "/assets/products/camiseta-php.png",
      liked: false,
    },
    {
      id: 2,
      label: "Camisa Laravel",
      price: 59.9,
      image: "/assets/products/camiseta-laravel-branca.png",
      liked: false,
    },
    {
      id: 3,
      label: "Camisa Node",
      price: 69.9,
      image: "/assets/products/camiseta-node.png",
      liked: false,
    },
    {
      id: 4,
      label: "Camisa React",
      price: 79.9,
      image: "/assets/products/camiseta-react-azul.png",
      liked: true,
    },
  ],
  product: {
    id: 4,
    label: "Camisa React",
    price: 79.9,
    images: [
      "/assets/products/camiseta-php",
      "/assets/products/camiseta-laravel-branca.png",
    ],
    liked: false,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words.",
  },
};
