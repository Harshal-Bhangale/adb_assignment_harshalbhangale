# Base image
FROM python:3.8-bullseye

# Use bash as default shell
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Basic utilities (curl, git, etc.)
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
    curl nano wget nginx git gnupg && \
    rm -rf /var/lib/apt/lists/*

# Yarn repo + key
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian stable main" | tee /etc/apt/sources.list.d/yarn.list

# MongoDB 4.4 (uses Debian "buster" repo, which works fine on bullseye)
RUN ln -s /bin/echo /bin/systemctl && \
    wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add - && \
    echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.4 main" \
    | tee /etc/apt/sources.list.d/mongodb-org-4.4.list && \
    apt-get update -y && \
    apt-get install -y mongodb-org && \
    rm -rf /var/lib/apt/lists/*

# Install Yarn
RUN apt-get update -y && \
    apt-get install -y yarn && \
    rm -rf /var/lib/apt/lists/*

# Environment variables for the app
ENV ENV_TYPE=staging
ENV MONGO_HOST=mongo
ENV MONGO_PORT=27017

# Add /src to PYTHONPATH
ENV PYTHONPATH=$PYTHONPATH:/src/

# Work inside /src (this is where docker-compose mounts your code)
WORKDIR /src

# Install Python dependencies
COPY src/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Default command (docker-compose usually overrides this with its own command)
CMD ["bash"]
