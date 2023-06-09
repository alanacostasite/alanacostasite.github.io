# How do I (a non-software developer) make changes to the website

## Installing software

Install Git https://git-scm.com/download/win

Install node https://nodejs.org/en/download

## Setting up the development environment

1. Pick a folder you want the website files to live on your computer. Doesn't matter where but you will return to this area anytime you need to make a website update.
2. Now you are gonna need to open your command prompt. Do this by pressing Windows Key + R to open Run. In the run box type "cmd" and press enter.
3. In the command prompt navigate to the directory you want your files to live. Do this by typeing "cd PATH_TO_YOUR_FOLDER_HERE" for me that looks like "cd C:/Users/micro/Documents/code"
4. Now that you have navigated to this directly we are going to install the website files do this by using the command "git clone http://www.github.com/alanacostasite/alanacostasite.github.io"
   1. If you get an error that says the git command is missing then you didn't install Git correctly
   2. You may be prompted to login to github this is okay and expected
5. You now have the latest version of the project. Navigate to that directly with the command "cd alanacostasite.github.io"
6. Install the rest of the website components with "npm install"
   1. If you get an error here you didn't install node correctly
7. Let's see if it works. Run the command "npm run dev". This is how you will preview changes to the website without actually pushing them.
8. Open a web browser (firefox, chrome, etc) and navigate to "http://localhost:3066/" this is a website only you have access to. It should be what the website will look like after you publish it.
9. Let's make a change to the website. You will see a folder called "editable_files" which has a bunch of files with the extension ".json". These are just fancy text files. Open these with notepad and take a look at their contents, they show you all of the editable field in the website you can update.
10. In connect.json you are going to want to update your contact email to be an email that you won't use for anything else. It is likely that this email will get picked up by bots and is likely to receive spam.
11. After updating your email go back to your web browser and refresh the page. You should see your updated email in the connect page.
12. Before you get to excited making changes let's deploy this change to the live version of the site.
    1.  To get your command prompt back into a usable state use "ctrl + c" to kill your last command that was serving the development website
    2.  Commit your changes do this with "git commit -a"
        1.  You may need to put in a password, this is expected
        2.  Fill out the prompt about a commit message by putting in a few words to describe what you did in this case "added email" will suffice
    3.  Push your changes with "git push"
    4.  If every thing has been successful you are now ready to deploy your changes to the live site
    5.  Run command "npm run deploy"
    6.  If everything comes back a success you should see the live site update in a few minutes


## Making changes quick steps
1. "git