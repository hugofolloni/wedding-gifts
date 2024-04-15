# wedding-gifts 🎁

## Description 📝
**wedding-gifts** is a comprehensive web application with an API designed to streamline wedding gift management. Couples can easily add gifts to the list and track who has chosen to purchase each item. Guests have access to an organized list of gifts, allowing them to choose, purchase, and pay via an automatically generated PIX code.

## Technologies Used 💻
- **Front-end**: React, TypeWriter, MD5 Encryption
- **Back-end**: Node.js, Express, PostgreSQL, PixJS, dotenv
- **Database**: PostgreSQL, legacy version in MySql

## Installation Instructions 🛠️
1. Clone the git repository:
    ```bash
    git clone https://github.com/your-username/wedding-gifts.git
    ```
2. **Front-end**:
    ```bash
    cd wedding-gifts/website
    npm i
    npm start
    ```
3. **Back-end**:
    - Generate a PostgreSQL database and update the information in the `.env` file inside the `server` folder.
    - Run the table creation scripts available in the `database.js` file inside the `server/api` folder.
    ```bash
    cd wedding-gifts/server
    npm i
    npm start
    ```

## How to Use 🎉
### For Guests 👰🤵
1. Browse the beautiful and delicate layout.
2. Analyze the list of gifts and choose what you want to buy.
3. Click on the chosen gift to purchase.
4. Enter your name to be added to the list of buyers.
5. Complete the payment using the automatically generated PIX code.

### For Couples 👰🤵
1. Access the /admin tab to add new gifts.
2. Monitor the list of buyers for each gift.

## API Endpoints 🌐
- **/gifts**: Returns all registered gifts.
- **/buyers**: Returns the buyers for each gift.

## Live Version 
This project can be found at the following URLs:
- Web app: [Netlify](https://wedding-manager.netlify.app)
- API: [Vercel](https://wedding-gifts-seven.vercel.app)

## System Requirements 📋
- Node.js installed

## Contribution 🤝
Feel free to contribute to the project! Just fork the repository, implement your improvements, and submit a pull request.

## License 📜
This project is under the MIT license.

## Contact 📞
For support or to report issues, please contact us via email: [hugofollogua07@gmail.com](mailto:hugofollogua07@gmail.com)
