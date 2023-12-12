"""
Data Model declarations
"""
from typing import List

from pydantic import BaseModel, HttpUrl, Field


class ProductModel(BaseModel):
    """this is the schema for a product object"""

    name: str
    price: int
    product_id: int
    image_url: HttpUrl


class DiscountCode(BaseModel):
    """this is the schema for discount code creation API"""

    code: str
    discount_percent: int = Field(10, ge=1, le=100)


class CartModel(BaseModel):
    """this is the schema for an order/cart payload"""

    amount: int
    item_count: int
    discount_code: str


class CheckoutResponse(BaseModel):
    """this is the checkout response schema"""

    total_amount: float
    discount_value: float
