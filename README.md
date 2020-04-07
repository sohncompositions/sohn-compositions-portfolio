# Table of Contents
- [Overview](#overview)
- [Updating Guide](#updating-guide)
- [Uploading Files](#uploading-files)
- [Configuration File](#configuration-file)
- [SendGrid](#sendgrid)

---
### Overview
Customize the content of the site by either uploading audio/image files to the [Assets Folder](https://github.com/sohncompositions/sohn-compositions-portfolio/tree/master/client/src/assets) or directly editting the [Configuration File](https://github.com/sohncompositions/sohn-compositions-portfolio/blob/master/client/src/app/config.json).

After making desired changes, the site must be redeployed via the [Heroku](https://www.heroku.com) dashboard.

Changes with the company email address must be done via SendGrid, and then referenced in Heroku and GitHub.

---
### Updating Guide
- Always make sure that you are on the `dev` branch before making changes. This ensures that if you make any typos or change your mind, the `master` branch remains in its previous, stable state.
- Start making edits/uploading files as desired. There are only two places where you will likely be making changes:
    - [Assets Folder](https://github.com/sohncompositions/sohn-compositions-portfolio/tree/master/client/src/assets)
        - Contains image and audio files.
        - See [below](#Uploading-Files) for more details.
        
    - [Configuration File](https://github.com/sohncompositions/sohn-compositions-portfolio/blob/master/client/src/app/config.json)
        - Contains settings for site content.
        - See [below](#Configuration-File) for more details.

- Once you're happy with your changes you will need to commit them. At the bottom of the file you are editing simply write a short, specific message that tells your future self what changes you've made. You will need to do this for each file you are editing/uploading.
- When you are done making changes it may be wise to test them out before officially deploying to the `master` branch. To do this, go to your [Heroku](https://www.heroku.com) dashboard and click on the 'Deploy' tab. At the bottom under 'Manual Deploys' select 'Dev' from the options. Then click 'Deploy'. This will build/compile your changes and serve up your site from the `dev` branch, which contains the pending changes you've made.
- Once you are happy with the result you will need to make it 'official'. From the [GitHub repository](https://github.com/sohncompositions/sohn-compositions-portfolio) create a pull request and make sure the base branch is `master` and the compare branch is `dev`. Follow the steps to complete the merge. Now you can deploy the site following the previous step, only this time select the `master` branch.
- That's it!
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
    "homePage": {
        // You can remove text by leaving it blank:
        "title": "",
        "subtitle": "Subtitle"
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
        "emailServer": {
            // Status messages which display after email has been sent:
            "successMessage": "Your email has been sent!",
            "errorMessage": "Sorry! There was a problem sending the email."
        },
        // For version 1.0.0 this is not fully configurable. 'required' field can be toggled to enforce whether or not the form can be submitted without having to enter data for that specific field.
        "fields": {
            "name": {
                "type": "text",
                "required": true
            },
            "sender": {
                "type": "text",
                "required": true,
                "email": true
            },
            "subject": {
                "type": "text",
                "required": true
            },
            "message": {
                "type": "text",
                "required": true
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