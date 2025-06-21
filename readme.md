# 📚 Library Management System

A comprehensive and scalable RESTful API designed to manage a library's book inventory and borrowing records. This backend is built with **Node.js**, **Express**, **TypeScript**, and **MongoDB** (utilizing Mongoose), ensuring a robust and type-safe application.

---

## 🚀 Core Features

- Add, view, update, and delete books
- Borrow books with stock validation
- Aggregated summary of borrowed books
- Clean structure with TypeScript and proper error handling

---

### 🛠️ Technology Stack

- **Backend Framework:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Programming Language:** TypeScript
- **Validation (Optional but Recommended):** Zod or Joi

---

### 📦 Installation and Setup

Follow these steps to get the project up and running on your local machine.

1.  **Clone the Repository**

    ```bash
    git clone [https://github.com/Sakebul-islam/library-management-backend](https://github.com/Sakebul-islam/library-management-backend)
    cd library-management-backend
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**

    Create a `.env` file in the root directory and add the following configuration. Replace the placeholder values with your actual database connection string and desired port.

    ```
    PORT=5000
    MONGO_URI=[Your mongobd URI]
    ```

4.  **Run the Development Server**

    ```bash
    npm run start:dev
    ```

    The server will start on the port specified in your `.env` file (e.g., `http://localhost:5000`).

---

### 📂 Simplified Folder Structure

```
src/
├── app/
│   ├── controllers/
│   │   ├── book.controller.ts
│   │   ├── borrow.controller.ts
│   ├── interfaces/
│   │   ├── book.interfaces.ts
│   │   ├── borrow.interfaces.ts
│   ├── modules/
│   │   ├── book.model.ts
│   │   ├── borrow.model.ts
├── app.ts
└── server.ts
```

---

### 🔗 API Endpoints

The base URL for all API endpoints is `/api`.

#### 📘 Book Endpoints

| Method   | Endpoint                                                       | Description                                   |
| :------- | :------------------------------------------------------------- | :-------------------------------------------- |
| `GET`    | `/api/books`                                                       | Retrieve a list of all books.                 |
| `GET`    | `/api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5` | Retrieve a list of filtered books.            |
| `POST`   | `/api/books`                                                       | Add a new book to the library.                |
| `GET`    | `/api/books/:id`                                                   | Get the details of a specific book by its ID. |
| `PATCH`  | `/api/books/:id`                                                   | Update the information for a specific book.   |
| `DELETE` | `/api/books/:id`                                                   | Remove a book from the library.               |

#### 📗 Borrowing Endpoints

| Method | Endpoint      | Description                   |
| :----- | :------------ | :---------------------------- |
| `POST` | `/api/borrow` | Borrow a book                 |
| `GET`  | `/api/borrow` | Get summary of borrowed books |

### 🧾 Borrowed Books Summary (GET `/api/borrow`) Request Body:

#### ✅ Response

```json
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    }
  ]
}
```

---

### 🧪 Testing

You can use **Postman** or **Thunder Client** to test the API. Make sure MongoDB is running locally or use a remote URI in `.env`.

> [Live link] (<https://library-management-backend-flame.vercel.app/borrow>)
