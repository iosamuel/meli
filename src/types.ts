type Items = {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
  }[];
};

type Item = {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  item: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
  };
};
