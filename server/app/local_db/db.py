class ProductDB:
    def __init__(self):
        self.CURR_ORDER_COUNTER = 1
        self.PRODUCTS = [
            {
                "name": "iPhone 15",
                "price": "1000",
                "product_id": "12340",
                "image_url": "",
            },
            {
                "name": "iPhone 14",
                "price": "900",
                "product_id": "12340",
                "image_url": "",
            },
            {
                "name": "iPhone 13",
                "price": "800",
                "product_id": "12341",
                "image_url": "",
            },
            {
                "name": "iPhone 12",
                "price": "700",
                "product_id": "12342",
                "image_url": "",
            },
            {
                "name": "iPhone 11",
                "price": "600",
                "product_id": "12343",
                "image_url": "",
            },
            {
                "name": "iPhone 10",
                "price": "500",
                "product_id": "12344",
                "image_url": "",
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
