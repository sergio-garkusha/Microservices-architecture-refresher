FROM python:3.13-slim

ENV PYTHONUNBUFFERED 1
ENV PIP_ROOT_USER_ACTION=ignore

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

WORKDIR /core

# Add this to apt-get install dependency
# for CMD [ "ping", "1.1.1.1" ] to work:
# iputils-ping \
RUN apt-get update -y && apt-get install -y \
  default-libmysqlclient-dev \
  gcc \
  pkg-config \
  && apt-get clean

COPY pyproject.toml *.lock ./

ENV UV_SYSTEM_PYTHON=1
RUN uv pip install -r pyproject.toml

COPY . /core/

EXPOSE 8001

# Command to initialize the continuously running container
# only needed before uv init && uv add <deps[]>
# CMD [ "ping", "1.1.1.1" ]

ENV FLASK_APP=core.py
ENV FLASK_DEBUG=1

CMD ["uv", "run", "flask", "run", "--host=0.0.0.0", "--port=5000"]