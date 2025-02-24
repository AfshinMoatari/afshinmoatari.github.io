---
layout: post
title: Loneliness in Numbers | Economic Impact Calculator
categories:
- projects
---

The **Loneliness in Numbers** (Ensomhed i Tal) project is a web-based tool designed to calculate the economic impact of loneliness on society. Developed for a Webflow website, this plugin utilizes a .NET backend and is based on research conducted by experts from Copenhagen University and [Copenhagen Economics](https://copenhageneconomics.com/). The tool allows users to generate dynamic reports based on specific criteria and input figures, providing valuable insights into the economic effects of loneliness.

## Project Overview

The plugin serves as an interactive calculator that enables users to input various parameters related to loneliness and receive a detailed economic analysis. This project aims to raise awareness about the societal costs associated with loneliness and provide stakeholders with data-driven insights to inform policy and decision-making.

### Technical Details

#### Backend Development
- **Technology Stack**: The backend is built using **.NET**, providing a robust and scalable solution for handling user requests and calculations.
- **Containerization**: Utilized **Docker** to create a consistent development and production environment, ensuring that the application runs smoothly across different systems.
- **API Design**: The backend exposes a RESTful API that allows the frontend to communicate seamlessly with the server. This API handles data input, processing, and output of the economic impact calculations.
- **Data Processing**: The backend implements algorithms based on research findings to accurately calculate the economic effects of loneliness, including various parameters such as demographics, social factors, and economic indicators.

#### Frontend Development
- **Frameworks and Libraries**: The frontend is built using **React** with **Babel.js** for modern JavaScript features, and styled with **Material-UI (MUI)** for a responsive and user-friendly interface.
- **Webflow Integration**: Designed to integrate smoothly with Webflow, providing a user-friendly interface for inputting data and viewing results.
- **Dynamic Reporting**: Users can generate reports based on their inputs, which are dynamically created and presented in an easy-to-understand format.
- **Responsive Design**: The frontend is built with a mobile-first approach, ensuring accessibility and usability across all devices.

#### DevOps and Deployment
- **CI/CD Pipeline**: Implemented a **GitLab CI/CD pipeline** for automated testing and deployment, ensuring that updates are seamlessly integrated and delivered.
- **Cloud Storage**: Utilized **AWS S3** for storing static assets and reports, providing scalable and reliable storage solutions.
- **Database Management**: Integrated **AWS RDS** for managing relational databases, ensuring data persistence and reliability.

### Key Features
- **User Input**: Users can enter specific criteria related to loneliness, such as age, gender, and social factors, to tailor the economic impact calculations.
- **Dynamic Reports**: The tool generates comprehensive reports that outline the economic implications of loneliness based on user inputs.
- **Research-Based Algorithms**: The calculations are grounded in empirical research, ensuring that the results are reliable and relevant.

### Project Repositories
- **Backend Repository**: Explore the backend code and API implementation on [GitHub](https://github.com/AfshinMoatari/CECalculatorAPI).
- **Frontend Repository**: Check out the frontend code and Webflow integration on [GitHub](https://github.com/AfshinMoatari/CEWebPlugin).

### Screenshots
Here are some images from the plugin environment and the generated reports:

#### Plugin Environment
<div class="carousel-container" id="carousel1">
  <a class="carousel-button left" onclick="moveCarousel('carousel1', -1)">
    <i class="fa fa-solid fa-chevron-left fa-2x"></i>
  </a>
  <div class="image-carousel">
    <div class="image-gallery">
      <div class="image-row" id="imageRow1">
        <a href="/assets/images/2024/02/11/1.png" target="_blank">
          <img src="/assets/images/2024/02/11/1.png" alt="Plugin Environment 1" class="thumbnail">
        </a>
        <a href="/assets/images/2024/02/11/2.png" target="_blank">
          <img src="/assets/images/2024/02/11/2.png" alt="Plugin Environment 2" class="thumbnail">
        </a>
        <a href="/assets/images/2024/02/11/3.png" target="_blank">
          <img src="/assets/images/2024/02/11/3.png" alt="Plugin Environment 3" class="thumbnail">
        </a>
        <a href="/assets/images/2024/02/11/4.png" target="_blank">
          <img src="/assets/images/2024/02/11/4.png" alt="Plugin Environment 4" class="thumbnail">
        </a>
        <a href="/assets/images/2024/02/11/5.png" target="_blank">
          <img src="/assets/images/2024/02/11/5.png" alt="Plugin Environment 5" class="thumbnail">
        </a>
      </div>
    </div>
  </div>
  <a class="carousel-button right" onclick="moveCarousel('carousel1', 1)">
    <i class="fa fa-solid fa-chevron-right fa-2x"></i>
  </a>
</div>

#### Generated Reports
<div class="carousel-container" id="carousel2">
  <a class="carousel-button left" onclick="moveCarousel('carousel2', -1)">
    <i class="fa fa-solid fa-chevron-left fa-2x"></i>
  </a>
  <div class="image-carousel">
    <div class="image-gallery">
      <div class="image-row" id="imageRow2">
        <a href="/assets/images/2024/02/11/6.png" target="_blank">
          <img src="/assets/images/2024/02/11/6.png" alt="Generated Report 1" class="thumbnail">
        </a>
        <a href="/assets/images/2024/02/11/7.png" target="_blank">
          <img src="/assets/images/2024/02/11/7.png" alt="Generated Report 2" class="thumbnail">
        </a>
        <a href="/assets/images/2024/02/11/8.png" target="_blank">
          <img src="/assets/images/2024/02/11/8.png" alt="Generated Report 3" class="thumbnail">
        </a>
      </div>
    </div>
  </div>
  <a class="carousel-button right" onclick="moveCarousel('carousel2', 1)">
    <i class="fa fa-solid fa-chevron-right fa-2x"></i>
  </a>
</div>

This project not only highlights the technical capabilities of the development team but also addresses a significant social issue by providing tools for understanding and mitigating the economic impact of loneliness. You can visit the live site at [ensomhedital.dk](https://ensomhedital.dk/) to see the plugin in action.