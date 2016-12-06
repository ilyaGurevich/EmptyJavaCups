# English At Home Application 

An app, available in both iOS and Android platforms, that provides accessible and organized resources for the volunteer tutors of New American Pathways to assist them in teaching refugees English. New American Pathways is a non-profit organization located in the Atlanta area that assists refugees imigrating to Georgia. This application is part of a capstone project through the College of Computing at The Georgia Institute of Technology.

## Release Notes

* New software features for this release: Android, iOS, & Web application deployment.
* Bug fixes made since the last release: Firebase backend not compatible with Nativescript - switched to Telerik backend services
* Known bugs and defects: No search functionality included for applications. 

## Install Guide

* Pre-requisites: Must have Android or iOS smartphone. Applications located on their respective stores under the title of "English At Home". For Android consider searching "New American Pathways".
* Website link for uploading content: http://www.prism.gatech.edu/~igurevich3/newAmericanPathways/
* Run instructions: Download Application from Google Play Store or iOS store - tap on icon to run.
* Troubleshooting: Some images may take some time to load on the application due to their size. Cannot add a student on android version

## Third-party services

* Username: englishathomeapp@gmail.com
* Password: administrator password. 

* https://www.filestack.com/ - FileStack filehosting service - Need to buy 9$/month service
* https://platform.telerik.com - Telerik Backend service - Free trial ends after 30 days. Need to pay 39$/month afterward
* https://itunesconnect.apple.com - iOS account for App - password is capitalized on first letter. Developer license must be renewed after one year.  
* https://play.google.com/apps/publish - Android Account for app
* https://www.nativescript.org/ - Nativescript - cross development platform created for Android and iOS dual-development. Refer to their guide on how to change, manipulate, or edit source code. 

## Web Application Use
* Login Screen
![Alt text](/images/login.png?raw=true)
* Add Document Screen
![Alt text](/images/documentUpload.png?raw=true)
* Filestack UI
![Alt text](/images/fileStack.png?raw=true)
* Add Youtube Video
![Alt text](/images/youtubeUpload.png?raw=true)
* Add Student 
![Alt text](/images/addStudent.png?raw=true)
* Delete Page 
![Alt text](/images/deleteScreen.png?raw=true)

# Running the Web Application Locally

## If you want to run the web interface locally on your machine, you can do so as follows:

1) Ensure that Python is installed on your machine

* Open [Command Prompt](https://www.lifewire.com/how-to-open-command-prompt-2618089) on Windows or [Terminal](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line) on Mac.

* Enter the following into your command line:

```
python -V
```

* If you receive the following error on windows:

```
'python' is not recognized as an internal or external command, operable or batch file.
```

* Or this error on mac:

```
-bash: python: command not found
```

* Then you need to install [Python](https://www.python.org/downloads/). Make sure to install Python 2.7.x, not Python 3.5.x

* Otherwise, if you see something like this, you're good to go:

![Alt text](/images/goodPythonOutput.png?raw=true)

2) Use the Python local WebServer to launch the web interface

* Open your respective command line as explained above

* navigate to your EmptyJavaCup/website folder. For example, if you cloned this repository to your Documents folder, you would enter

```
cd ~/Documents/EmptyJavaCup/website
```

![Alt text](/images/directory_change.png?raw=true)

* Then, in your command line window enter:

```
python -m SimpleHTTPServer 8000
```

![Alt text](/images/http_server.png?raw=true)


* Leave your commandline window open, then in your favorite browser enter:


```
localhost:8000
```

* in your browser's URL bar.

![Alt text](/images/website_example.png?raw=true)

* Now you should see the New American Pathways upload portal website


3) Perform whatever tasks you like, even when running the website locally you will have full access to all of the features including: uploading documents, videos, and student information to the remote database as well as removing any items from it.

