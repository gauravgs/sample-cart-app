"""API module"""
import logging

from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter

from local_db.db import ProductDB
from models.models import DiscountCode, CartModel

logger = logging.getLogger(__name__)

# initialize the router
router = InferringRouter()
db_connection = ProductDB()


@cbv(router)
class ShoppingCartServer:
    def __init__(self):
        """Default Constructor"""
        self.db = db_connection

    @router.get("/products")
    def get_all_products(self):
        """
        :return:
        """
        logger.info("Getting all products from the db")
        # getting the value from constants (in-memory)
        products = self.db.PRODUCTS
        return products

    @router.post("/checkout")
    def checkout_cart(self, body: CartModel):
        """
        :param body:
        :return:
        """
        order_num = self.get_current_order_number()
        print(f"{order_num} :: {body.discount}")
        is_offer_applicable = self.is_discount_valid(body.discount, order_num)
        print(is_offer_applicable)
        amount = body.amount
        discount_value = 0  # initialize as 0, update if valid
        if is_offer_applicable:
            # update order value (subtracting discount)
            discount_value = amount * body.discount.discount_percent / 100
            amount = body.amount - discount_value
            # add as USED codes in order summary
            print(self.db.TOTAL_ORDER_SUMMARY)
            self.db.TOTAL_ORDER_SUMMARY[
                "discount_codes"
            ] = self.db.TOTAL_ORDER_SUMMARY.get("discount_codes", [])
            # using a list, if we need unique codes only, we should use a set and typecast to a list
            self.db.TOTAL_ORDER_SUMMARY["discount_codes"].append(body.discount.code)
            # remove from usable codes
            for discount in self.db.DISCOUNT_CODES:
                if discount.get("code") == body.discount.code:
                    self.db.DISCOUNT_CODES.remove(discount)
                    if not self.db.DISCOUNT_CODES:
                        self.db.DISCOUNT_CODES = []
                    break

        # update order summary with amount, item count and discount value
        self.db.TOTAL_ORDER_SUMMARY["total_items"] = (
            self.db.TOTAL_ORDER_SUMMARY.get("total_items", 0) + body.item_count
        )
        self.db.TOTAL_ORDER_SUMMARY["total_amount"] = (
            self.db.TOTAL_ORDER_SUMMARY.get("total_amount", 0) + amount
        )
        self.db.TOTAL_ORDER_SUMMARY["discount_amount"] = (
            self.db.TOTAL_ORDER_SUMMARY.get("discount_amount", 0) + discount_value
        )

        response = {
            "order_id": order_num,
            "offer_applicable": is_offer_applicable,
            "amount": amount,
        }
        print(self.db.TOTAL_ORDER_SUMMARY)
        print("----------------------------------- ")
        return response

    @router.post("/discount_code", tags=["Admin API"])
    def create_discount_code(self, body: DiscountCode):
        """
        :param body:
        :return:
        """
        # store the value in memory
        self.db.DISCOUNT_CODES.append(dict(body))
        result = {"status": "created successfully!"}
        result.update(**dict(body))
        return result

    @router.get("/discount_codes", tags=["Admin API"])
    def get_all_discount_codes(self):
        """
        :return:
        """
        return self.db.DISCOUNT_CODES

    @router.get("/generate_report", tags=["Admin API"])
    def generate_a_report(self):
        """
        :return:
        """
        return self.db.TOTAL_ORDER_SUMMARY

    """Helper Methods"""

    def is_discount_valid(self, discount: DiscountCode, order_num: int):
        """
        Discount is Valid only if discount code is known &
        order_num is a multiple of 3 --> ASSUMPTION for nth order clause
        :param discount:
        :param order_num:
        :return:
        """
        for code in self.db.DISCOUNT_CODES:
            print(f"O# {order_num} && {discount.code} && {code.get('code')}")
            if code.get("code") == discount.code and order_num % 3 == 0:
                return True
        return False

    def get_current_order_number(self):
        """
        :return:
        """
        order_number = int(self.db.CURR_ORDER_COUNTER)
        self.db.CURR_ORDER_COUNTER = self.db.CURR_ORDER_COUNTER + 1
        return order_number
