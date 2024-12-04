# Use the official Python 3.13 base image
FROM python:3.13-slim

ENV UV_SYSTEM_PYTHON=1
ENV PYTHONUNBUFFERED 1
ENV PIP_ROOT_USER_ACTION=ignore

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

WORKDIR /backend

# Add this to apt-get install dependency
# for CMD [ "ping", "1.1.1.1" ] to work
# iputils-ping \

RUN apt-get update -y && apt-get install -y \
  default-libmysqlclient-dev \
  gcc \
  pkg-config \
  && apt-get clean

COPY pyproject.toml *.lock ./

RUN uv pip install -r pyproject.toml

COPY . /backend/

EXPOSE 8000

# Command to initialize the continuously running container
# only needed before uv init && uv add <deps[]>
# CMD [ "ping", "1.1.1.1" ]

CMD ["uv", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]