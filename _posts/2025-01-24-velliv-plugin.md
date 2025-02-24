---
layout: post
title: Mental Health at Workplace | Calculator Plugin
categories:
- projects
---

The **Mental Health at Workplace** project is a web-based tool designed to assess and measure mental health in workplace environments. Developed in collaboration with researchers from Copenhagen University and [Velliv Forsikring](https://www.velliv.dk/dk/privat), this plugin serves as a calculator that provides valuable insights into the mental well-being of employees. The tool is integrated into Velliv's website, which is built on an Ubuntu server.

## Project Overview

This plugin allows users to input various parameters related to workplace conditions and personal well-being, generating a comprehensive assessment of mental health. The project aims to promote awareness of mental health issues in the workplace and provide organizations with data-driven insights to improve employee well-being.

### Technical Details

#### Backend Development
- **Technology Stack**: The backend is built using **.NET**, providing a robust and scalable solution for handling user requests and calculations.
- **Containerization**: Utilized **Docker** to create a consistent development and production environment, ensuring that the application runs smoothly across different systems.
- **API Design**: The backend exposes a RESTful API that allows the frontend to communicate seamlessly with the server. This API handles data input, processing, and output of the mental health assessments.
- **Data Processing**: The backend implements algorithms based on research findings to accurately assess mental health in the workplace, considering various parameters such as work conditions, stress levels, and employee feedback.

#### Frontend Development
- **Frameworks and Libraries**: The frontend is built using **React** with **Babel.js** for modern JavaScript features, and styled with **Material-UI (MUI)** for a responsive and user-friendly interface.
- **Web Integration**: Designed to integrate smoothly with the existing Velliv website, providing a user-friendly interface for inputting data and viewing results.
- **Dynamic Reporting**: Users can generate reports based on their inputs, which are dynamically created and presented in an easy-to-understand format.
- **Responsive Design**: The frontend is built with a mobile-first approach, ensuring accessibility and usability across all devices.

#### DevOps and Deployment
- **CI/CD Pipeline**: Implemented a **GitLab CI/CD pipeline** for automated testing and deployment, ensuring that updates are seamlessly integrated and delivered.
- **Cloud Storage**: Utilized **AWS S3** for storing static assets and reports, providing scalable and reliable storage solutions.
- **Database Management**: Integrated **AWS RDS** for managing relational databases, ensuring data persistence and reliability.

### Key Features
- **User Input**: Users can enter specific criteria related to workplace conditions, such as workload, support systems, and personal stress levels, to tailor the mental health assessment.
- **Dynamic Reports**: The tool generates comprehensive reports that outline the mental health implications based on user inputs.
- **Research-Based Algorithms**: The calculations are grounded in empirical research, ensuring that the results are reliable and relevant.

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
        <a href="/assets/images/2025/01/24/1.png" target="_blank">
          <img src="/assets/images/2025/01/24/1.png" alt="Plugin Environment 1" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/24/2.png" target="_blank">
          <img src="/assets/images/2025/01/24/2.png" alt="Plugin Environment 2" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/24/3.png" target="_blank">
          <img src="/assets/images/2025/01/24/3.png" alt="Plugin Environment 3" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/24/4.png" target="_blank">
          <img src="/assets/images/2025/01/24/4.png" alt="Plugin Environment 4" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/24/5.png" target="_blank">
          <img src="/assets/images/2025/01/24/5.png" alt="Plugin Environment 5" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/24/6.png" target="_blank">
          <img src="/assets/images/2025/01/24/6.png" alt="Plugin Environment 6" class="thumbnail">
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
        <a href="/assets/images/2025/01/24/7.png" target="_blank">
          <img src="/assets/images/2025/01/24/7.png" alt="Generated Report 1" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/24/8.png" target="_blank">
          <img src="/assets/images/2025/01/24/8.png" alt="Generated Report 2" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/24/9.png" target="_blank">
          <img src="/assets/images/2025/01/24/9.png" alt="Generated Report 3" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/24/10.png" target="_blank">
          <img src="/assets/images/2025/01/24/10.png" alt="Generated Report 4" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/24/11.png" target="_blank">
          <img src="/assets/images/2025/01/24/11.png" alt="Generated Report 5" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/24/12.png" target="_blank">
          <img src="/assets/images/2025/01/24/12.png" alt="Generated Report 6" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/24/13.png" target="_blank">
          <img src="/assets/images/2025/01/24/13.png" alt="Generated Report 7" class="thumbnail">
        </a>
        <a href="/assets/images/2025/01/24/14.png" target="_blank">
          <img src="/assets/images/2025/01/24/14.png" alt="Generated Report 8" class="thumbnail">
        </a>
      </div>
    </div>
  </div>
  <a class="carousel-button right" onclick="moveCarousel('carousel2', 1)">
    <i class="fa fa-solid fa-chevron-right fa-2x"></i>
  </a>
</div>

This project not only highlights the technical capabilities of the development team but also addresses a significant social issue by providing tools for understanding and improving mental health in the workplace. The collaboration with researchers ensures that the assessments are based on sound scientific principles. 

You can learn more about Velliv and their commitment to mental health at [Velliv Forsikring](https://www.velliv.dk/dk/privat).