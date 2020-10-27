# Urban Green Lab Gameventify
<a href="https://urban-green-lab-app.netlify.app/"><img src="https://raw.githubusercontent.com/Urban-Green-Lab/h4tc-ugl-app-fe/master/documentation/images/placeholder-banner.png" title="UGL App H4TC" alt="UGL App H4TC Banner"></a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/d7812091-21b8-4a63-8044-a72b7a933934/deploy-status)](https://app.netlify.com/sites/uglapp/deploys)

[Development Site](https://uglapp.netlify.app)

[Team Notes](https://docs.google.com/document/d/1jD16iYyyfLIwJWif1GmEZSLwIdyAaQgOXpkWttVGTV8/edit#)

This application is used to create quizzes that can be administered at events or on the internet.

There is a backend admin site as well as a user application for game play, which also includes a leaderboard.

## Table of Contents

- [Get Started Developing](#get-started)
- [Clone Repo](#clone-the-repo)
- [Installs](#installs)
- [Code Reviews](#code-reviews)
- [Deployment](#deployment)
- [Data Structure/ERD](#data-structureerd)
- [Features](#features)
- [Contributors](#contributors)

## Get Started
Get started with local development. 

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
Start postgres server with DB name and username `postgres`

```shell
# Go to the API directory
$ cd api

# Create a virtual environment to isolate our package dependencies locally
$ python3 -m venv uglenv
$ source uglenv/bin/activate  # On Windows use `uglenv\Scripts\activate`

# install necessary dependencies
$ pip install -r requirements.txt

# install postgres
$ brew install postgres
$ ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents

# Create two new aliases to start and stop your postgres server. They could look something like this:
# alias pg_start="launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist"
# alias pg_stop="launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist"

# Refresh New Settings
$ source ~/.zshrc # source ~/.bashrc if using bash

# Use this command to start your database service.
$ pg_start 

# Create database
$ createdb postgres

# Create user postgres on database
$ createuser -s postgres

# Start server
$ python manage.py runserver

# Make migrations
$ python manage.py makemigrations

# Migrate
$ python manage.py migrate
```
***Be sure to stop your db server when developing use this command***
```shell
$ pg_stop
```

### Code Reviews
- Create a branch for the issue you are working on and create all PRs against the `development` branch.
  - A preview deploy will be created for testing
  - Once approved by 2 reviewers, you can merge into development
- Once the feature has been fully tested with all other code, a PR is created against `master` and merged into production.

### Deployment
<!-- TODO: Netlify  -->
COMING SOON

### Data Structure/ERD
[![ERD](./ugl_erd.png)](https://dbdiagram.io/d/5f95f1fa3a78976d7b79179a)

## Features

COMING SOON

## Contributors
### Team Leads
| <a href="https://github.com/drteresavasquez" target="_blank">**Dr. Teresa Vasquez <br />Tech Lead**</a> | <a href="#" target="_blank">**Meg Underwood <br />Project Manager**</a> |
| :---: |:---:|
| [![Dr. Teresa Vasquez](https://avatars1.githubusercontent.com/u/29741570?v=3&s=200)](https://github.com/drteresavasquez) | [![Meg Underwood](https://raw.githubusercontent.com/Urban-Green-Lab/h4tc-ugl-app-fe/master/documentation/images/avatar.png)](#) 

### UX/UI
| <a href="https://github.com/bdoves" target="_blank">**Bodhi Stewart**</a> |
| :---: |
| [![Bodhi Stewart](https://avatars1.githubusercontent.com/u/60450642?v=3&s=200)](#) |

### Designers
| <a href="#" target="_blank">**Ryan Firm**</a> | <a href="#" target="_blank">**Nick	Miller**</a> |
| :---: |:---:|
| [![Ryan Firm](https://raw.githubusercontent.com/Urban-Green-Lab/h4tc-ugl-app-fe/master/documentation/images/avatar.png?v=3&s=200)](#) | [![NIck	Miller](https://raw.githubusercontent.com/Urban-Green-Lab/h4tc-ugl-app-fe/master/documentation/images/avatar.png?v=3&s=200)](#) 

### Front End Developers
| <a href="https://github.com/prafullatass" target="_blank">**Prafullata	Sonawane**</a> | <a href="https://github.com/jeremybdavis" target="_blank">**Jeremy	Davis**</a> | <a href="https://github.com/vieraruben" target="_blank">**Ruben Viera**</a> |
| :---: |:---:| :---:|
| [![Prafullata	Sonawane](https://avatars1.githubusercontent.com/u/43792249?v=3&s=200)](https://github.com/prafullatass)    | [![Jeremy	Davis](https://avatars1.githubusercontent.com/u/13025274?v=3&s=200)](https://github.com/jeremybdavis) | [![Ruben Viera](https://avatars1.githubusercontent.com/u/25134906?v=3&s=200)](https://github.com/vieraruben)  |

### Back End Developers
| <a href="https://github.com/RefreshingChi" target="_blank">**Chiitra Tibbs**</a> | <a href="https://github.com/hannahhall" target="_blank">**Hannah Hall**</a> | <a href="https://github.com/TrinityTerry" target="_blank">**Trinity Christiana**</a> |
| :---: |:---:| :---:|
| [![Chiitra Tibbs](https://avatars1.githubusercontent.com/u/5008978?v=3&s=200)](https://github.com/RefreshingChi)    | [![Hannah Hall](https://avatars1.githubusercontent.com/u/18269696?v=3&s=200)](https://github.com/hannahhall) | [![TrinityTerry](https://avatars1.githubusercontent.com/u/31781724?v=3&s=200)](https://github.com/TrinityTerry)  |

### QA
| <a href="#" target="_blank">**Ankaj	Goel**</a> | <a href="#" target="_blank">**Summer	Perkey**</a> |
| :---: |:---:|
| [![Ankaj Goel](https://raw.githubusercontent.com/Urban-Green-Lab/h4tc-ugl-app-fe/master/documentation/images/avatar.png?v=3&s=200)](#)    | [![Summer	Perkey](https://raw.githubusercontent.com/Urban-Green-Lab/h4tc-ugl-app-fe/master/documentation/images/avatar.png?v=3&s=200)](#)
