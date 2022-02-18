export class PRODUCT_SCHEMA {
    id: number;
    name: string;
    displayedName: string;
    description: string;
    images: Array<string>;
    comments: Array<string>;
    sizes: Array<string>;
    rating: number;
    price: number;
    quantity: number;
    added: boolean;
}


export const PRODUCTS: PRODUCT_SCHEMA[] = [
    {
        "id": 0,
        "name": "STAP_Sweater_Blue", 
        "displayedName": "STAP Sweater - Blue",
        "description": "",
        "images": [
            "/assets/images/Steve.jpg",
            "/assets/images/Steve.jpg",
            "/assets/images/Steve.jpg",
            "/assets/images/Steve.jpg"
        ],
        "comments": [
            "",
            "",
            ""
        ],
        "sizes": [
            "Small",
            "Medium",
            "Large"
        ],
        "rating": 0,
        "price": 0,
        "quantity": 1,
        "added": false
    },
    {
        "id": 1,
        "name": "STAP_Sweater_Red",
        "displayedName": "STAP Sweater - Red",
        "description": "",
        "images": [
            "/assets/images/Steve.jpg",
            "",
            "",
            ""
        ],
        "comments": [
            "",
            "",
            ""
        ],
        "sizes":[
            "Small",
            "Medium",
            "Large"
        ],
        "rating": 0,
        "price": 0,
        "quantity": 1,
        "added": false
    },
    {
        "id": 2,
        "name": "STAP_Sweater_Pink", 
        "displayedName": "STAP Sweater - Pink",
        "description": "",
        "images": [
            "/assets/images/Steve.jpg",
            "",
            "",
            ""
        ],
        "comments": [
            "",
            "",
            ""
        ],
        "sizes": [
            "Small",
            "Medium",
            "Large"
        ],
        "rating": 0,
        "price": 0,
        "quantity": 1,
        "added": false
    },
    {
        "id": 3,
        "name": "T_Shirt_Black", 
        "displayedName": "T-Shirt - Black",
        "description": "Sample description",
        "images": [
            "/assets/images/Steve.jpg",
            "",
            "",
            ""
        ],
        "comments": [
            "",
            "",
            ""
        ],
        "sizes": [
            "Small",
            "Medium",
            "Large"
        ],
        "rating": 0,
        "price": 0,
        "quantity": 1,
        "added": false
    },
    {
        "id": 4,
        "name": "Stap_Bumper", 
        "displayedName": "STAP Bumper Sticker",
        "description": "",
        "images": [
            "/assets/images/Steve.jpg",
            "",
            "",
            ""
        ],
        "comments": [
            "",
            "",
            ""
        ],
        "sizes": [],
        "rating": 0,
        "price": 0,
        "quantity": 1,
        "added": false
    }
]