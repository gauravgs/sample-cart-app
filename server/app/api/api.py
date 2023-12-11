import logging

from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter

from config.constants import PRODUCT_LIST

logger = logging.getLogger(__name__)

# initialize the router
router = InferringRouter()


@cbv(router)
class ShoppingCartServer:
    def __init__(self):
        print("Initializing the CBV")

    @router.get("/products")
    def get_all_products(self):
        logger.info("Getting all products from the db")
        # getting the value from constants (in-memory)
        products = PRODUCT_LIST
        return products

