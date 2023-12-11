class ProductDB:
    def __init__(self):
        self.CURR_ORDER_COUNTER = 1
        self.PRODUCTS = [
            {
                "name": "iPhone 15",
                "price": "1000",
                "product_id": "12340",
                "image_url": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972",
            },
            {
                "name": "iPhone 14",
                "price": "900",
                "product_id": "12341",
                "image_url": "https://assets.sangeethamobiles.com/product_img/6978/1663134562_IX4.jpg",
            },
            {
                "name": "iPhone 13",
                "price": "800",
                "product_id": "12342",
                "image_url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg",
            },
            {
                "name": "iPhone 12",
                "price": "700",
                "product_id": "12343",
                "image_url": "https://assets.sangeethamobiles.com/product_img/8490/1667548560_lGW.jpg",
            },
            {
                "name": "iPhone 11",
                "price": "600",
                "product_id": "12344",
                "image_url": "https://assets.sangeethamobiles.com/product_img/8530/1667548639_LmA.jpg",
            },
            {
                "name": "iPhone 10",
                "price": "500",
                "product_id": "12345",
                "image_url": "https://s3no.cashify.in/pd-admin/a90dd7d71c874fd8a76e41347f4a80b5.jpg?p=es5sq&s=es",
            },
        ]

        self.DISCOUNT_CODES = [{"code": "FLAT10", "discount_percent": 10}]

        # Lists count of items purchased, total purchase amount, list of discount codes and total discount amount.
        self.TOTAL_ORDER_SUMMARY = {
            "total_items": 0,
            "total_amount": 0,
            "discount_codes": [],
            "discount_amount": 0,
        }
