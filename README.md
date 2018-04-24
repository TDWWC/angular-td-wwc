# Prerequisites 
### 1. Install Node.js and NPM
Visit the downloads section of Nodejs.org and download/run the appropriate installer based on your OS. Follow through the   installation steps with default settings, which will install NPM by default. 
Verify that you are running at least node 6.9.x and npm 3.x.x by running the following commands in terminal/console:
```
node -v
npm –v
```
Older versions produce errors, but newer versions are fine.

### 2. Install Angular CLI globally
The Angular CLI (Command Line Interface) is the quickest and easiest way to get started with a brand new Angular 5 project. 
We're going to use NPM to install the Angular CLI through the following command:
```
npm install @angular/cli –g
```
Once installed, you can access the CLI tool by typing `ng`.  To check the version of your Angular CLI, type:
```
ng –v
```
It should return a response like this:
```
    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
    
Angular CLI: 1.7.4
Node: 8.9.4
OS: darwin x64
Angular: 
...
```
