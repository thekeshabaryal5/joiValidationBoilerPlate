# Joi Validation BoilerPlate

> A simple boilerplate setup using Joi for schema validation in Node.js projects.

---

## 🚀 Features

- Clean project structure inside the `src` folder
- Joi-based schema validation for various data types
- MongoDB connection setup using Mongoose
- Reusable middleware and controller logic
- Easy to extend and integrate into your own project

---

## 📁 Project Structure

```
src/
├── connectToMongoDb/   # MongoDB connection logic
├── const/              # Constant values/data
├── controller/         # Controller functions
├── middleware/         # Reusable middleware logic
├── model/              # Mongoose models
├── route/              # Express route definitions
├── schema/             # Mongoose schema design
├── validation/         # Joi validation logic

index.js                # Main entry point
```

---

## 🛠️ Installation

```bash
git clone https://github.com/keshab-aryal5/joiValidationBoilerPlate.git
cd joiValidationBoilerPlate
npm install
```

If needed:

```bash
npm i express
```

---

## 🧪 Usage

To start the server in development:

```bash
npm run dev
```

To start normally:

```bash
npm start
```

---

## 📦 Dependencies

- [Express](https://expressjs.com/)
- [Joi](https://joi.dev/)
- [Mongoose](https://mongoosejs.com/)
- [express-async-handler](https://www.npmjs.com/package/express-async-handler)

---

## 🔧 What This Project Includes

- A sample **Person schema** demonstrating the use of:
  - `String`
  - `Number`
  - `Boolean`
  - `Date`
  - `Array`
  - `Objects`
  - `Array of Objects`
- Validation for all these types using **Joi**
- You can customize or extend the schema as per your project's need.

---

## 📂 Folder Descriptions

| Folder              | Description                           |
| ------------------- | ------------------------------------- |
| `src/`              | Root folder containing all subfolders |
| `connectToMongoDb/` | MongoDB connection function           |
| `const/`            | Constant values and config            |
| `controller/`       | Business logic and handlers           |
| `middleware/`       | Reusable middleware functions         |
| `model/`            | Mongoose data models                  |
| `route/`            | All application routes                |
| `schema/`           | Schema design for Mongoose            |
| `validation/`       | Joi validation logic                  |

---

## 🙋‍♂️ Author

- **Keshab Aryal** – [@thekeshabaryal5](https://github.com/thekeshabaryal5)

---

## 📄 License

This project is licensed under the MIT License.
