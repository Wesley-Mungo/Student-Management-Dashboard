import uvicorn
from fastapi import FastAPI
from app import create_app
from app.api import api
from app.data.database import create_tables


# adding cors headers
from fastapi.middleware.cors import CORSMiddleware

app = create_app()
# adding cors urls
origins =[
    'https://localhost:3000' # React frontend
 ]

create_tables()

app.include_router(api.router)

# add middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],  # Allow request from these origins
    allow_credentials = True,  # Allow cookies to be sent
    allow_methods = ["*"],      # Allow all HTTP methods ( GET, POST, DELETE)
    allow_headers = ["*"],       # Allow all headers
    expose_headers = ["*"]
) 

if __name__ == "__main__":
    uvicorn.run("main:app", reload=True, port=9000)