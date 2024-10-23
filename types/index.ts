type Plan = {
    title: string;
    priceM: number;
    priceY: number;
}

type finalList = {
    planTitle: string;
    planPrice: number;
    additionalThings: {
        title: string;
        price: number;
    }[];
    period: string;
    name: string;
    email: string;
    phone: string;
  };

type AdditionThings = {
    id: number;
    addTitle: string;
    addPriceM: number;
    addPriceY: number;
    description: string;
}