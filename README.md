# Northwind Viewer

A Node.js Express application for viewing data from the Northwind database.

## Features

- Express.js web server
- SQLite database integration
- RESTful API endpoints for Northwind data
- Simple web interface for browsing data
- Health check endpoint

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Development mode (with auto-reload):
```bash
npm run dev
```

#### Production mode:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

- `GET /` - Home page with navigation links
- `GET /api/customers` - Get customers data (limited to 10 records)
- `GET /api/products` - Get products data (limited to 10 records)
- `GET /api/orders` - Get orders data (limited to 10 records)
- `GET /api/employees` - Get employees data (limited to 10 records)
- `GET /health` - Health check endpoint

## Database

The application uses the Northwind SQLite database located in the `data/` directory.

## Project Structure

```
northwind-viewer/
├── app.js              # Main Express application
├── package.json        # Project dependencies and scripts
├── public/             # Static files (CSS, images, etc.)
│   └── style.css       # Basic styling
├── data/               # Database files
│   └── northwind.db    # Northwind SQLite database
└── README.md           # This file
```

## License

ISC
