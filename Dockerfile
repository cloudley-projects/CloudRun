FROM python:slim

WORKDIR /app

COPY requirements.txt .
# Install production dependencies.
RUN pip install -r requirements.txt;

COPY . .

EXPOSE 8080

CMD exec gunicorn --bind :8080 --workers 2 app:app
