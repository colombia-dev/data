# 2018 salaries survey

## Creating and publishing the survey

1. go to the src directory of the poll i.e. `cd /salaries/2018/src`
1. run `npm install`
1. install clasp `npm install @google/clasp -g`
1. login `clasp login`
1. go to https://script.google.com/u/1/home/usersettings and enable Google Apps Script API
1. Create the project `clasp create colombiadev-salaries-2018-survey`
1. `clasp push`
1. `clasp deploy`
1. `clasp open`
1. in the Google app script console in the function dropdown select "createForm" and then press Run
1. in the Google app script console, go to View > Logs and copy and paste the form URL
