E-commerce Backend:
This is completed api backend for both (admin sie and frontend) with node.js, express, mongoose, and mongodb for database.

Tech and Packages we use in this project:

    1. Node.js framework Express.js.
    2. Mongodb use for database .
    3. Mongoose for all schema validation and database connection.
    4. JsonwebToken for create jsonwebtoken.
    5. BcryptJs for password encryption.
    6. Day.js for data format.
    7. Dotenv for use environment variable.
    8. Nodemon for run on dev server.
    9. Cors and Body parser

Getting Started & Installation:

    Step 1 : Configure your .env file
    Step 2 : Running the npm install for installing all packages
    Step 3 : npm run start:dev for running in development mode (nodemon used)

Folder Structure & Customization:

    ⦁ In index.js file you will find all declared api endpoint for different route
    ⦁ /config : Auth for signInToken and isAuth middleware
    ⦁ /models: All model create with mongoose schema validation
    ⦁ /routes: All route like admin, category, product, coupon, user, userOrder route
    ⦁ /controller: All different route controller function
