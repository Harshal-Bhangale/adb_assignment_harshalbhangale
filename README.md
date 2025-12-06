# Adbrew Test! 🧪
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Description 📝
This project sets up a Docker environment with a React frontend, a Django backend, and a MongoDB database. It provides a basic TODO application where users can create and view TODO items. The React frontend allows users to input TODO descriptions and submit them to the Django backend, which then stores the TODOs in MongoDB. The frontend also displays a list of TODOs fetched from the backend. This setup is designed to test Python, React, and web development skills, emphasizing Docker knowledge.



## Table of Contents 📚
1.  [Features](#features-%EF%B8%8F)
2.  [Tech Stack](#tech-stack-%E2%9A%96%EF%B8%8F)
3.  [Installation](#installation-%E2%9A%A1%EF%B8%8F)
4.  [Usage](#usage-%E2%8F%B0)
5.  [Project Structure](#project-structure-%F0%9F%93%91)
6.  [Contributing](#contributing-%F0%9F%A7%AA)
7.  [License](#license-%F0%9F%93%9C)
8.  [Important Links](#important-links-%E2%9B%BA)
9.  [Footer](#footer-%E2%9C%8D)



## Features ✨
-   **Dockerized Environment**: Sets up the application using Docker containers for easy deployment and consistency. 🐳
-   **React Frontend**: Provides a user interface for creating and viewing TODOs. ⚛️
-   **Django Backend**: Handles API requests and interacts with the MongoDB database. 🐍
-   **MongoDB Integration**: Uses MongoDB to store TODO items. 🍃
-   **TODO Creation**: Allows users to add new TODO items via a form. ✅
-   **TODO Listing**: Fetches and displays TODO items from the database. 📋



## Tech Stack 💻
-   **Frontend**: React, JavaScript, CSS, HTML 🖼️
-   **Backend**: Python, Django 🐍
-   **Database**: MongoDB 🍃
-   **Containerization**: Docker 🐳
-   **Other**: YAML ⚙️



## Installation 🚀
1.  **Clone the repository**:

    ```bash
    git clone https://github.com/Harshal-Bhangale/adb_assignment_harshalbhangale.git
    cd adb_assignment_harshalbhangale
    ```

2.  **Set the environment variable for the code path**:

    ```bash
    export ADBREW_CODEBASE_PATH="$(pwd)/src"
    ```

3.  **Build the Docker containers**:

    ```bash
    docker-compose build
    ```

4.  **Start the Docker containers**:

    ```bash
    docker-compose up -d
    ```

5.  **Verify the containers are running**:

    ```bash
    docker ps
    ```

    You should see three containers running: `api`, `app`, and `mongo`.

6.  **Access the application**:

    -   React App: `http://localhost:3000`
    -   Django API: `http://localhost:8000/todos`



## Usage 🕹️
1.  **Access the React application** at `http://localhost:3000`. 🌐
2.  **Use the form** to add a new TODO item. 📝
3.  **Submit the form** to create a TODO in the MongoDB database. ✅
4.  **The list of TODOs** will refresh and display the latest TODOs from the database. 🔄



### How to Use 💡
This project demonstrates a basic TODO application using a React frontend, a Django backend, and a MongoDB database, all containerized with Docker. You can use this project as a starting point for learning and experimenting with these technologies.  Here's a breakdown:

*   **React Frontend**:  Provides the user interface.  It allows you to create and view TODO items.
*   **Django Backend**: Serves as the API.  It receives requests from the frontend, interacts with the MongoDB database, and sends back responses.
*   **MongoDB**: Stores the TODO data.

You can extend this project by adding features such as:

*   User authentication
*   TODO item editing and deletion
*   More advanced UI components



## Project Structure 📂
```
.
├── Dockerfile
├── docker-compose.yml
├── README.md
├── src
│   ├── app
│   │   ├── package.json
│   │   ├── public
│   │   │   ├── index.html
│   │   │   ├── manifest.json
│   │   │   └── robots.txt
│   │   ├── README.md
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.js
│   │   │   ├── App.test.js
│   │   │   ├── index.css
│   │   │   ├── index.js
│   │   │   ├── logo.svg
│   │   │   ├── reportWebVitals.js
│   │   │   └── setupTests.js
│   ├── rest
│   │   ├── manage.py
│   │   ├── rest
│   │   │   ├── __init__.py
│   │   │   ├── asgi.py
│   │   │   ├── settings.py
│   │   │   ├── urls.py
│   │   │   ├── views.py
│   │   │   └── wsgi.py
│   └── requirements.txt
```

-   `Dockerfile`: Defines the Docker image for the application.
-   `docker-compose.yml`: Defines the services, networks, and volumes for the Docker application.
-   `src/app`: Contains the React frontend code.
-   `src/rest`: Contains the Django backend code.
-   `src/requirements.txt`: Lists the Python dependencies for the Django backend.


## Contributing 🤝
Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Submit a pull request.


## License 📜
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. ✅


## Important Links 🔗
-   **Repository**: [https://github.com/Harshal-Bhangale/adb_assignment_harshalbhangale](https://github.com/Harshal-Bhangale/adb_assignment_harshalbhangale) 🌐


## Footer 🏁
-   **Repository Name**: adb_assignment_harshalbhangale
-   **Repository URL**: [https://github.com/Harshal-Bhangale/adb_assignment_harshalbhangale](https://github.com/Harshal-Bhangale/adb_assignment_harshalbhangale)
-   **Author**: Harshal-Bhangale
-   **Email**: harshalbhangale90@gmail.com 

⭐️ Like it? Fork it, give it a star, or report issues! ⭐️


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**