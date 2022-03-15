const produkts = [
  {
    id: "1",
    ProductName: 'Kanken Art Laptop 15" Special Edition Backpack',
    Company: "Fjallraven",
    Price: "119",
    Stock: 10,
    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/1.png",
    LinkShop: "https://amzn.to/32MmHgL",
  },
  {
    id: "2",
    ProductName: "Swing Arm Wood Desk Lamp",
    Company: "Tomons",
    Price: "36",
    Stock: 0,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/d2.png",
    LinkShop: "https://amzn.to/2WX7vtD",
  },
  {
    id: "3",
    ProductName: "Hajo Backpack",
    Company: "Ucon Acrobatics",
    Price: "89",
    Stock: 15,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/u6.png",
    LinkShop: "https://amzn.to/2I3WvXM",
  },
  {
    id: "4",
    ProductName: "Zed Bamboo Longboard",
    Company: "Retrospec",
    Price: "60",
    Stock: 25,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/u10.png",
    LinkShop: "https://amzn.to/2YX3043",
  },
  {
    id: "5",
    ProductName: "Electric Pour-Over Kettle",
    Company: "Fellow",
    Price: "149",
    Stock: 30,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/u9.png",
    LinkShop: "https://amzn.to/2KfP3ee",
  },

  {
    id: "6",
    ProductName: "Logo Modernism",
    Company: "Taschen",
    Price: "60",
    Stock: 50,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/c3.png",
    LinkShop:
      "https://www.bookdepository.com/Logo-Modernism-Jens-Muller-R-Roger-Remington/9783836545303/?a_aid=1991",
  },
  {
    id: "7",
    ProductName: "Dieter Rams: As Little Design as Possible",
    Company: "Sophie Lovell",
    Price: "150",
    Stock: 9,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/d7.png",
    LinkShop: "https://amzn.to/2YQLnCV",
  },
  {
    id: "8",
    ProductName: "The Eye",
    Company: "Nathan Williams",
    Price: "28",
    Stock: 5,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/c6.png",
    LinkShop: "https://amzn.to/2I3lbQ7",
  },
  {
    id: "9",
    ProductName: "Gather Desk Organizer",
    Company: "Ugmonk",
    Price: "149",
    Stock: 9,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/h13.png",
    LinkShop: "https://amzn.to/2IifSvA",
  },
  {
    id: "10",
    ProductName: "Dipped Canteen",
    Company: "Corkcicle.",
    Price: "28",
    Stock: 11,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/h8.png",
    LinkShop: "https://amzn.to/2G84CiT",
  },
  {
    id: "11",
    ProductName: "Sayl Office Chair White",
    Company: "Herman Miller",
    Price: "599",
    Stock: 20,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/h2.png",
    LinkShop: "https://amzn.to/2YWPz3N",
  },
  {
    id: "12",
    ProductName: "Three Cherry Wood Notebook",
    Company: "Field Notes",
    Price: "13",
    Stock: 9,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/d5.png",
    LinkShop: "https://amzn.to/2KhwTsz",
  },
  {
    id: "13",
    ProductName: "From Japan",
    Company: "Counter Print",
    Price: "16",
    Stock: 41,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/c5.png",
    LinkShop:
      "https://www.bookdepository.com/From-Japan/9780957081659?a_aid=1991",
  },
  {
    id: "14",
    ProductName: "Arigato Desk Lamp",
    Company: "Grupa",
    Price: "380",
    Stock: 10,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/h6.png",
    LinkShop: "http://www.grupaproducts.com/arigato/",
  },
  {
    id: "15",
    ProductName: "Winston Regal Watch",
    Company: "Komono",
    Price: "58",
    Stock: 13,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/u7.png",
    LinkShop: "https://amzn.to/2CZiPxO",
  },
  {
    id: "16",
    ProductName: "Letter H Poster",
    Company: "Hey Studio",
    Price: "45",
    Stock: 0,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/d4.png",
    LinkShop: "https://heyshop.es/collections/home/products/h-hey",
  },
  {
    id: "17",
    ProductName: "Coffee Can",
    Company: "Blue Bottle Company",
    Price: "11",
    Stock: 58,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/u11.png",
    LinkShop: "https://amzn.to/2UGLHEQ",
  },
  {
    id: "18",
    ProductName: "Beoplay H4",
    Company: "Bang & Olufsen",
    Price: "160",
    Stock: 10,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/h9.png",
    LinkShop: "https://amzn.to/2UFjEWp",
  },
  {
    id: "19",
    ProductName: "Make It Now",
    Company: "Anthony Burrill",
    Price: "22",
    Stock: 40,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/p2.png",
    LinkShop: "https://amzn.to/2OTHEQg",
  },
  {
    id: "20",
    ProductName: "Black Side Chair",
    Company: "Eames Style",
    Price: "54",
    Stock: 22,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/h4.png",
    LinkShop: "https://amzn.to/2UFHfGt",
  },
  {
    id: "21",
    ProductName: "Min: The New Simplicity in Graphic Design",
    Company: "Thames & Hudson",
    Price: "28",
    Stock: 0,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/c22.png",
    LinkShop: "https://amzn.to/2Ij1IKA",
  },
  {
    id: "22",
    ProductName: "Grid systems in graphic design",
    Company: "Josef Müller-Brockmann",
    Price: "42",
    Stock: 19,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/c1.png",
    LinkShop: "https://amzn.to/2UxtLww",
  },
  {
    id: "23",
    ProductName: "Card Wallet",
    Company: "Herschel",
    Price: "15",
    Stock: 90,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/u12.png",
    LinkShop: "https://amzn.to/2I5vxiq",
  },
  {
    id: "24",
    ProductName: "Classic Advice Print Black",
    Company: "Good Fucking Design Advice",
    Price: "30",
    Stock: 70,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/p3.png",
    LinkShop:
      "https://goodfuckingdesignadvice.com/products/classic-advice-print",
  },
  {
    id: "25",
    ProductName: "Magic Mouse 2",
    Company: "Apple",
    Price: "92",
    Stock: 70,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/life-15.png",
    LinkShop: "https://amzn.to/2D3yZWX",
  },
  {
    id: "26",
    ProductName: "Travel Tumbler",
    Company: "Kinto",
    Price: "34",
    Stock: 110,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/life-17.png",
    LinkShop: "https://amzn.to/2WTbsPL",
  },
  {
    id: "27",
    ProductName: "Magic Keyboard",
    Company: "Apple",
    Price: "139",
    Stock: 0,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/life-16.png",
    LinkShop: "https://amzn.to/2GbCf4A",
  },
  {
    id: "28",
    ProductName: "Bottle Grinder",
    Company: "Menu",
    Price: "75",
    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/u8.png",
    LinkShop: "https://amzn.to/2WMJbdy",
  },
  {
    id: "29",
    ProductName: "Geo Thermos",
    Company: "Normann Copenhagen",
    Price: "62",
    Stock: 40,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/home-8.png",
    LinkShop: "https://amzn.to/2JLtxvk",
  },
  {
    id: "30",
    ProductName: "Womb Chair & Ottoman",
    Company: "Kardiel",
    Price: "799",
    Stock: 0,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/home-10.png",
    LinkShop: "https://amzn.to/2YdSBPy",
  },
  {
    id: "31",
    ProductName: "Water Filter Glass Carafe",
    Company: "Soma",
    Price: "30",
    Stock: 30,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/home-9.png",
    LinkShop: "https://amzn.to/2LCEfGP",
  },
  {
    id: "32",
    ProductName: "Woodie Vintage Car",
    Company: "Candylab Toys",
    Price: "35",
    Stock: 40,

    ProductLink:
      "https://elainewo.github.io/project-design-shop/assets/img/h17.png",
    LinkShop: "https://amzn.to/2FYB3zT",
  },
];

module.exports = produkts;
