# GitHub Search Engine
Created a Github user finder application that takes a text input and immediately renders the user's data and top 5 repositories.

This project is made purely in JavaScript and showcase advance ES6+ features like arrow functions, Fetch API, Promises, Async-await, Classes etc.

Live version of app: 

## Table of Contents
1. [Pre-requisite Tools](#pre-requisite-tools)
1. [Implementation](#implementation)
1. [Demo](#demo)
1. [Technologies Used](#technologies-used)
1. [Deployment](#deployment)
## Deployment

## Pre-requisite Tools
- None
- npm
- React

## Implementation
- Clone the repository.
- Open the GitHub APIs Developer settings with this link: https://github.com/settings/tokens
- Click on "Generate new token".
- Write a Note on why you want to create this token and select the "public_repo" option as shown in the image below and submit. This will create a personal access token. You need this token so that you can make GitHub API calls to retrieve user profiles without providing your actual username and password to API (a very bad practice).

<!-- <img src="https://raw.githubusercontent.com/kirito-k/realtime-chat-app/main/demo/1.gif" title="Token generation tutorial" /> -->

- Copy the token key shown. We will use it in the next step. 
- Replace your Token key in the config.json file.
```config.json
{
    "token": "Your Token Key"
}
```
- Your all set. Open "index.html" and you have a working Github Search Engine.
- Enjoy.

## Demo
<img src="https://raw.githubusercontent.com/kirito-k/realtime-chat-app/main/demo/1.gif" title="Short Demo gif" />

## Technologies Used
- Arrow functions
- Fetch API
- Promises
- Async-await
- Classes

## Deployment
- Heroku