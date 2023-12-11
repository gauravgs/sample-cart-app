from pydantic import BaseModel, HttpUrl, Field


class ProductModel(BaseModel):
    """this is the schema for a product object"""
    name: str
    price: int
    product_id: int
    image_url: HttpUrl

