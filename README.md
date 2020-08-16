# Table of Contents
- [Overview](#overview)
- [Updating Guide](#updating-guide)
- [Uploading Files](#uploading-files)
- [Configuration File](#configuration-file)
- [SendGrid](#sendgrid)

---
### Overview

Site content is rendered based on the contents of two things:
- [Configuration File](https://github.com/sohncompositions/sohn-compositions-portfolio/blob/master/client/src/app/config.json)
- [Assets Folder](https://github.com/sohncompositions/sohn-compositions-portfolio/tree/master/client/src/assets)

There is also a separate [Email Server](https://github.com/sohncompositions/sohn-compositions-emailer) hosted by [Heroku](https://www.heroku.com) which the application communicates with. 

##### Applications Required
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com/downloads)
- [VS Code](https://code.visualstudio.com/)

---
### Updating Guide

##### Initial Setup (You probably only need to do these once)
- Clone the [Repository](https://github.com/sohncompositions/sohn-compositions-portfolio) onto your machine
- Open project in VS Code and run the task `Setup Sohn Compositions Portfolio`. This installs the necessary tools to run the application from within a Docker container

##### Testing Changes
- Run the task `Run Sohn Compositions Portfolio`. This starts the development server which serves the app locally on your machine.
- Visit [Localhost](http://localhost:4200) in a browser. This make take a few moments to load. Check the docker dashboard to view the development build status.
- Start making changes:
    - [Assets Folder](https://github.com/sohncompositions/sohn-compositions-portfolio/tree/master/client/src/assets)
        - Contains image and audio files.
        - See [below](#Uploading-Files) for more details.
        
    - [Configuration File](https://github.com/sohncompositions/sohn-compositions-portfolio/blob/master/client/src/app/config.json)
        - Contains settings for site content.
        - See [below](#Configuration-File) for more details.

- Once you're happy with your changes you will need to commit them. Use VS code Source Control extension to make a commit with a specific message stating what changes were made. Using the master branch is fine.

##### Deploying
- Run the task `Build Sohn Compositions Portfolio`. This compiles the source code into a production ready format. You should see a new folder created called `dist`, which contains another folder called `sohn-compositions-portfolio`. Upload `sohn-compositions-portfolio` and all its contents to whatever hosting service you are using. *Don't upload `dist` itself!*

---

### Uploading Files
Uploading files is pretty straightforward but there are a couple important things to remember:
- The [Assets Folder](https://github.com/sohncompositions/sohn-compositions-portfolio/tree/master/client/src/assets) contains 3 folders, all of which may be updated: 
    - [Audio](https://github.com/sohncompositions/sohn-compositions-portfolio/tree/master/client/src/assets/audio)
        - Contains `.mp3` files which are used by the site's audio player.
    - [Icons](https://github.com/sohncompositions/sohn-compositions-portfolio/tree/master/client/src/assets/icons) 
        - *Warning: Currently `sohn-logo.svg` is the only file that is customizeable. Any additional `.svg` files added here won't do anything.*
    - [Images](https://github.com/sohncompositions/sohn-compositions-portfolio/tree/master/client/src/assets/images)
        - Every image on the site reads from this location. Any file (with a few exceptions listed later below) can be added here and referenced in the [Configuration File](https://github.com/sohncompositions/sohn-compositions-portfolio/blob/master/client/src/app/config.json).
- Use a consistent naming convention. I recommend `lowercase` with `hyphens` (e.g. example-file.png).
- All image files (except for icons) should be `.png` and all audio files should be `.mp3`.
- There are several files that are not referenced in the [Configuration File](https://github.com/sohncompositions/sohn-compositions-portfolio/blob/master/client/src/app/config.json) because they are simply harded code into the site:
    - [assets/icons/sohn-logo.svg](https://github.com/sohncompositions/sohn-compositions-portfolio/blob/master/client/src/assets/icons/sohn-logo.svg)
    - [assets/images/sohn-wallpaper.png](https://github.com/sohncompositions/sohn-compositions-portfolio/blob/master/client/src/assets/images/sohn-wallpaper.png)
    - [assets/images/sohn-headshot.png](https://github.com/sohncompositions/sohn-compositions-portfolio/blob/master/client/src/assets/images/sohn-headshot.png)
    
     You are welcome to replace a file from this list, but if you do, just make sure to retain the same filename. Otherwise the site will not be able to find it.
---
### Configuration File
The [Configuration File](https://github.com/sohncompositions/sohn-compositions-portfolio/blob/master/client/src/app/config.json) contains all the settings/metadata you need for customizing site content. You can reference new audio tracks and images that you've uploaded, edit page titles, and customize labels and subtitles. 
- [JSON Syntax](https://www.w3schools.com/js/js_json_syntax.asp)
- [JSON Formatter/Validator](https://jsonformatter.org/)

```js
/* Example Template */
{
    "audioPlayer": {
        // Adds buttons to home page which randomly plays a song matching the selected category
        "categories": [
            "Demo",
            "Test"
        ],
        // All the playable tracks. Displayed in playlist menu.
        "tracks": [
            {
                "title": "Track 1",
                "category": "Demo",
                "filename": "track1.mp3"
            },
            {
                "title": "Track 2",
                "category": "Test",
                "filename": "track2.mp3"
            }
        ]
    },
    "header": {
        // No configuration available
    },
    "footer": {
        // Displays at the bottom on page load while no song is selected
        "welcomeMessage": "Welcome to my site!"
    },
    "homePage": {
        // You can remove text by leaving it blank:
        "title": "",
        "subtitle": "Subtitle"
    },
    // (New for version 2.1.0) Page config for music services
    "musicServicesPage":{
        "title": "Title",
        "subtitle": "Subtitle",
        "services": [
            {
                "title": "Service 1",
                "content": "service 1 content",
                "imgFilename": "service1.png",
                "option": "Service 1 Option", // Must match to a value specified in contactPage.selections[]
                "actionText": "Get a Quote!"
            },
            {
                "title": "Service 2",
                "content": "service 2 content",
                "imgFilename": "service2.png",
                "option": "Service 2 Option",
                "actionText": "Get a Quote!"
            }
        ],
        "sellingPointSection": {
            "title": "Selling Points Title",
            "sellingPoints": [
                {
                    "title": "Title 1",
                    "content": "Selling point 1 content"
                },
                {
                    "title": "Title 2",
                    "content": "Selling point 2 content"
                }
            ]
        }
    },
    "bioPage": {
        "title": "Title",
        "subtitle": "Subtitle",
        // Contains an array of strings which represent each new paragraph containing a line break:
        "bio": [
            "Paragraph 1",
            "Paragraph 2",
            "Paragraph 3",
        ],
        "referralTitle": "Referral Title",
        "referrals": [
            {
                "name": "Test",
                "company": "Test, Inc.",
                "avatarFilename": "referral1.png",
                "quote": "lorem ipsum..."
            }
        ]
    },
    "contactPage": {
        "title": "Title",
        "subtitle": "Subtitle",
        // This is the email :mailto address that will be linked to from the email form:
        "email": "example@gmail.com",
        // You can make a link from the email by using {email} anywhere in the caption message:
        "formCaption": "Send an email to {email} or fill below",
        // (updated for Version 2.1.0) Add services to your list of dropdown options on the contact page email form. These are now the 'Subject' field values.
        "selections":[
            "Other",
            "Service 1",
            "Service 2"
        ],
        "emailServer": {
            // API endpoint for sending emails
            "url": "https://<your-node-emailer-domain>.com/api/emailer"
            // Status messages which display after email has been sent:
            "successMessage": "Your email has been sent!",
            "errorMessage": "Sorry! There was a problem sending the email."
        },
        // For version 1.0.0 this is not fully configurable. 'required' field can be toggled to enforce whether or not the form can be submitted without having to enter data for that specific field.
        "fields": {
            "name": {
                "type": "text",
                "required": true,
                // (Updated for version 2.1.0) You can add custom labels to each of the email form fields
                "label": "Your Name"
            },
            "sender": {
                "type": "text",
                "required": true,
                "email": true,
                "label":"Your Email"
            },
            "subject": {
                "type": "text",
                "required": true,
                "label": "Select A Service"
            },
            "message": {
                "type": "text",
                "required": true,
                "label": "Your Message"
            }
        }
    },
    // 'iconLabel' field is a special name that is associated with a particular icon from the Font Awesome Icon Library. To choose a different social media icon you can copy a name from any icon listed here https://fontawesome.com/icons?d=gallery&s=brands. **Only icons from the 'fab' fontset will work**
    "socialMediaLinks": [
        {
            "url": "https://<link-to-social-media-site>",
            "iconLabel": "facebook"
        }
    ]
}
```

### SendGrid
This site uses [SendGrid](https://sendgrid.com/) to send emails to your account. If you decide in the future to change your email there are a couple steps you'll have to perform:
- Register the new address in your SendGrid account.
- Ensure that you still have a valid sendgrid API key. You can find these listed in your SendGrid account.
- From [Heroku](https://heroku.com/), under the Settings tab, open the 'Config Vars' section. You'll need to update the `EMAIL` configuration variable to the new email address.
- Check that the `SENDGRID_API_KEY` configuration variable matches the one registered to your SendGrid account. If not you'll have to update it.
- Update the email address property in the "contactPage" section of the [Configuration File](https://github.com/sohncompositions/sohn-compositions-portfolio/blob/master/client/src/app/config.json).