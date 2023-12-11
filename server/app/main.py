import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from api import api
from fastapi.middleware.cors import CORSMiddleware

# CORS configuration
origins = [
    "*",  # Ideally should be replaced with UI/client app's domain
]

from config.constants import APP_NAME, APP_DESCRIPTION

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    :param app:
    :return:
    """
    # todo: can be overwritten, if needed
    logger.info("Starting up......")
    yield
    logger.info("Shutting down......")


app = FastAPI(
    title=APP_NAME, description=APP_DESCRIPTION, docs_url="/", lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)


@app.get("/health")
async def health():
    """
    default health endpoint
    :return:
    """
    return {"message": "Ok! Up & Running."}


app.include_router(api.router)
