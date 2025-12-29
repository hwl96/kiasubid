from pydantic import BaseModel, EmailStr
from fastapi import HTTPException

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    email: EmailStr

    class Config:
        from_attributes = True

#Exception
class UserAlreadyExistsException(HTTPException):
    def __init__(self):
        super().__init__(status_code=400, detail="Email already registered!")