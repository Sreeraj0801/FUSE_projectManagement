# FUSE - Flexible Unified Solution for Efficiency

---

## Overview
FUSE is a basic project management platform that allows users to create workspaces, projects, and tasks. To get started, users must create a workspace and then add projects within it. Members can be added to projects via email, and tasks can be assigned to specific members with priority and status settings. 

---

## Installation
1. Clone the project from GitHub using the following command
    `git clone https://github.com/Sreeraj0801/FUSE_projectManagement.git `

2.To set up the frontend, navigate to the "frontend" directory and run the following command to install all npm modules

      npm install

3. Firebase is used for Google sign up and sign in, so you will need to configure your Firebase credentials. To do so, navigate to the "src/firebase" directory and update the "config.js" file with your Firebase project details. You can refer to the official Firebase documentation for more information: 

`https://console.firebase.google.com/`

4. Once Firebase and npm modules are installed, start the project by running the following command:
    `npm run dev`

This will launch the project using Vite.

5. To set up the backend, navigate to the "backend" directory and run the following command to install all npm modules:
    `npm install`

6. Nodemailer is used for sending email notifications to project members. To configure Nodemailer, navigate to the "src/Verification/Email" directory and update the configuration files in the three sub-directories as required.

7. When inviting new members to a project, an email notification will be sent. To update the content of this email, navigate to the "src/Verification/Email/projectInvitation" directory and modify the URL as required.

---


## Deployment
The site is hosted on AWS and can be accessed at the following URL:
   ` https://fuse-official.online/`

---


## Contributing
We welcome contributions from the community!

---


## Authors
    Sreeraj R (sreeraj.r.0801@gmail.com)
