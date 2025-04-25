from flask import Flask
import requests

app = Flask(__name__)

@app.route('/')
def make_request():
    try:
        response = requests.get('http://10.128.0.41:8081', timeout=30)
        response.raise_for_status()
        return (f"Request successful! Status code: {response.status_code}, Content: {response.text}", 200) # Successful request with 200 OK
    except requests.exceptions.Timeout:
        return ("Request timed out after 30 seconds.", 408) # 408 Request Timeout
    except requests.exceptions.RequestException as e:
        return (f"Request failed: {e}", 500) # 500 Internal Server Error (or another relevant 5xx code)

if __name__ == '__main__':
    app.run(debug=True)
