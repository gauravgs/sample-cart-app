import logging

from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter

from config.constants import PRODUCT_LIST, DISCOUNT_CODES, TOTAL_ORDER_SUMMARY
from models.models import DiscountCode

logger = logging.getLogger(__name__)

# initialize the router
router = InferringRouter()


@cbv(router)
class ShoppingCartServer:
    def __init__(self):
        """Default Constructor"""
        print("Initializing the CBV")

    @router.get("/products")
    def get_all_products(self):
        """
        :return:
        """
        logger.info("Getting all products from the db")
        # getting the value from constants (in-memory)
        products = PRODUCT_LIST
        return products

    @router.post("/discount_code", tags=["Admin API"])
    def create_discount_code(self, body: DiscountCode):
        """
        :param body:
        :return:
        """
        DISCOUNT_CODES.append(dict(body))
        return {"status": "created successfully!"}

    @router.get("/discount_codes", tags=["Admin API"])
    def get_all_discount_codes(self):
        """
        :return:
        """
        return DISCOUNT_CODES

    @router.get("/generate_report", tags=["Admin API"])
    def generate_a_report(self):
        """
        :return:
        """
        return TOTAL_ORDER_SUMMARY
