# RoadReady - A Car Rental Web Application

**RoadReady** is a car rental web application that provides users with a platform to rent cars for personal or business use. The website allows users to search, compare, and reserve vehicles easily through a user-friendly interface. It offers a wide selection of vehicles based on make, model, size, and price.

## Features

- **Authentication**: Secure sign-in and sign-up functionality for users.
- **JWT Authentication**: Secure pages that require authentication using JSON Web Tokens (JWT).
- **Car Listings**: A listing of available cars for rent.
- **Reservations**: Users can make reservations for cars and manage their profiles.
- **Search and Filter**: Users can search for specific cars using filters such as location, pickup and drop-off dates, and vehicle type.
  
## Screenshots

Below is the screenshot of the platform's home page:

![Home Page](./Screenshots/Home.png)

## Getting Started

To get the application up and running locally, follow the steps below:

### Prerequisites

- **Frontend**: This project uses **React** for the frontend.
- **Backend**: The backend is developed using **Java** and **Spring Boot**.
  
### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Reseraju/RoadReady.git

2. Frontend Setup (React):
    - **Navigate to the `frontend` directory**:
       ```bash
       cd RoadReady/frontend
    - **Install dependencies using npm**:
       ```bash
       npm install
    - **Start the frontend development server**:
       ```bash
       npm start

3. Backend Setup (Spring Boot):
    - **Navigate to the backend directory**:
       ```bash
       cd ../backend
    - **Open the project in your preferred IDE (e.g., IntelliJ IDEA, Eclipse).**
4. Database Setup:
    - **Ensure that you have a running MySQL or PostgreSQL database.**
    - **Create a new database for the application (e.g., roadready)**
    - **Update the database credentials in the `application.properties` file located in `backend/src/main/resources/application.properties`**
      
    - **Example**:
      
       ```bash
       spring.datasource.url=jdbc:mysql://localhost:3306/roadready
       
       spring.datasource.username=YOUR_USERNAME
       
       spring.datasource.password=YOUR_PASSWORD
    - **Run the Spring Boot application**



- **React app: `http://localhost:3000`**
- **Spring Boot API: `http://localhost:8081`**
