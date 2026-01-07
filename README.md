# URL Health Check API

A simple API built with Express.js that checks the health status of URLs.

## Features

- Check URL availability and response status
- Returns HTTP status code and timestamp
- Error handling for network issues and invalid URLs
- ES6 modules support
- Unit tests with Jest

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
npm start
```

The server will run on `http://localhost:3000` (or the port specified in the `PORT` environment variable).

## API Endpoints

### POST /check-url

Check the health status of a URL.

**Request Body:**
```json
{
  "url": "https://example.com"
}
```

**Response (Success):**
```json
{
  "url": "https://example.com",
  "status": 200,
  "checkedAt": 1704672000000
}
```

**Response (Error):**
```json
{
  "error": "Network error or invalid URL"
}
```

## Testing

Run tests:

```bash
npm test
```

## Technologies

- Node.js
- Express.js
- Axios
- Jest
- Supertest

## License

ISC