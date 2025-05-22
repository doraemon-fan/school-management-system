# 📘 School Management API

A Node.js + Express + MySQL backend application to manage schools and retrieve a list of schools sorted by geographical proximity to a user's location.

---

## 🔧 Features

* ✅ Add a new school with name, address, latitude, and longitude
* ✅ Retrieve schools sorted by distance to a user's latitude & longitude
* ✅ Input validation using middleware
* ✅ Modular code structure (controllers, routes, middlewares, utils)
* ✅ Configurable through environment variables

---

## 📁 Project Structure

```
├── controllers/
│   └── schoolController.js
├── db/
│   └── index.js
├── middleware/
│   └── validateSchoolInput.js
├── routes/
│   └── schoolRoutes.js
├── utils/
│   └── calculateDistance.js
├── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 📆 API Endpoints

### ➕ Add School

**Endpoint**: `POST /api/addSchool`

**Request Body:**

```json
{
  "name": "Greenwood High",
  "address": "Sarjapur Road, Bangalore",
  "latitude": 12.9121,
  "longitude": 77.6446
}
```

**Response:**

```json
{
  "message": "School added successfully"
}
```

---

### 📍 List Schools by Proximity

**Endpoint**: `GET /api/listSchools`

**Query Parameters:**

```
?latitude=12.9716&longitude=77.5946
```

**Response:**

```json
[
  {
    "id": 3,
    "name": "Greenwood High",
    "address": "Sarjapur Road, Bangalore",
    "latitude": 12.9121,
    "longitude": 77.6446,
    "distance": 8.23
  },
  ...
]
```

---

## 🚀 Deployment

The app is deployed using [Railway](https://railway.app). You can connect your GitHub repository, set environment variables, and deploy your app with ease.

### Environment Variables (in `.env`)

```
DB_HOST=your_host
DB_USER=your_user
DB_PASS=your_password
DB_NAME=your_database
DB_PORT=3306
DB_TABLE=your_table
PORT=3000
```

> These values are provided by the MySQL plugin in Railway.

---

## 🧰 Postman Collection

A Postman Collection is created to help test the API.

### Steps to Import:

1. Open [Postman](https://www.postman.com)
2. Click **Import** > **Link / File**
3. Upload or paste the shared collection link
4. Use the deployed URL in all requests

### Includes:

* Example request for `POST /api/addSchool`
* Example request for `GET /api/listSchools`
* Expected request/response formats

> Collection: [Postman Collection](https://www.postman.com/ayushmanparida/school-management-system/request/37eqyo2/list-schools)

---

## 🛠️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/school-management-api.git
cd school-management-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=school_db
DB_PORT=3306
DB_TABLE=your_table
PORT=3000
```

### 4. Run the Server

```bash
node index.js
```

---



## 👤 Author

**Developed By:** Ayushman Parida
[GitHub](https://github.com/doraemon-fan)

---

## 🎯 License

This project is licensed under the MIT License.
