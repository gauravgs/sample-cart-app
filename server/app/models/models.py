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
    discount_percent: int = Field(None, ge=1, le=100)
