# Urban Green Lab Game Application

[![Netlify Status](https://api.netlify.com/api/v1/badges/d7812091-21b8-4a63-8044-a72b7a933934/deploy-status)](https://app.netlify.com/sites/uglapp/deploys)

[Development Site](https://uglapp.netlify.app)

This application is used to create quizzes that can be administered at events or on the internet.

There is a backend admin site as well as a user application for game play, which also includes a leaderboard.

## Get Started
Get started with local development. Create a branch for the issue you are working on and create all PRs against the `development` branch.

Once the feature has been fully tested with all other code, a PR is created against `main` and merged in to production.

### Clone the Repo
```
$ git clone git@github.com:Urban-Green-Lab/application.git
$ cd application
```

### Installs
#### Front-End Development
```shell
$ cd browser
$ npm i
$ npm start
```

#### Back-End Development
Start postgress server with DB name and username `postgress`

```shell
# Go to the API directory
$ cd api

# Create a virtual environment to isolate our package dependencies locally
$ python3 -m venv uglenv
$ source uglenv/bin/activate  # On Windows use `uglenv\Scripts\activate`

# install necessary dependencies
$ pip install -r requirements.txt

# Start server
$ python manage.py runserver

# Make migrations
$ python manage.py makemigrations

# Migrate
$ python manage.py migrate
```

### Deploy
<!-- TODO: Netlify  -->

## Data Structure/ERD
[![ERD](./ugl_erd.png)](https://dbdiagram.io/d/5f95f1fa3a78976d7b79179a)