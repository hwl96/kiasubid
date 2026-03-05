from sqlalchemy import Column, Integer, String, DateTime
from database import Base

class User(Base):
    __tablename__ = "User"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String, nullable=False)
    active = Column(String, default="false", nullable=False)
    otp = Column(String, nullable=True)
    otp_last_sent_at = Column(DateTime(timezone=True))
    otp_expires_at = Column(DateTime(timezone=True))