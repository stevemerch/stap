export interface PRODUCT {
    readonly id: number;
    readonly name: string;
    readonly displayed_name: string;
    readonly images: Array<string>;
    readonly sizes: Array<string>;
    readonly rating: number;
    readonly price: number;
    quantity: number;
    added: boolean;
}

export interface ITEM {
    readonly id: number;
    readonly name: string;
    price: number;
    quantity: number;
}

export const Products: PRODUCT[] = [
    // the order matters!! id needs to be consecutive
    { id: 1, name: "STAP_Sweater_Blue", displayed_name: "STAP Sweater - Blue", images: ["../assets/images/Steve.jpg", "../assets/images/Steve.jpg","../assets/images/Steve.jpg","../assets/images/Steve.jpg"], sizes: ["Small", "Medium", "Large"], rating: 5, price: 0, quantity: 1, added: false },
    { id: 2, name: "STAP_Sweater_Red", displayed_name: "STAP Sweater - Red", images: ["../assets/images/Steve.jpg", "../assets/images/Steve.jpg","../assets/images/Steve.jpg","../assets/images/Steve.jpg"], sizes: ["Small", "Medium", "Large"], rating: 5, price: 0, quantity: 1, added: false },
    { id: 3, name: "STAP_Sweater_Pink", displayed_name: "STAP Sweater - Pink", images: ["../assets/images/Steve.jpg", "../assets/images/Steve.jpg","../assets/images/Steve.jpg","../assets/images/Steve.jpg"], sizes: ["Small", "Medium", "Large"], rating: 5, price: 0, quantity: 1, added: false },
    { id: 4, name: "T_Shirt_Black", displayed_name: "STAP T-Shirt - Black", images: ["../assets/images/Steve.jpg", "../assets/images/Steve.jpg","../assets/images/Steve.jpg","../assets/images/Steve.jpg"], sizes: ["Small", "Medium", "Large"], rating: 5, price: 0, quantity: 1, added: false },
    { id: 4, name: "Stap_Bumper", displayed_name: "STAP Bumper Sticker", images: ["../assets/images/Steve.jpg", "../assets/images/Steve.jpg","../assets/images/Steve.jpg","../assets/images/Steve.jpg"], sizes: ["Small", "Medium", "Large"], rating: 5, price: 0, quantity: 1, added: false },
]
