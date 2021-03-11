echo launching project...

@echo off

IF exist learning-app (echo app already found, launching && start Yarn.bat) ELSE (echo no project found, building... && mkdir learning-app && cd learning-app && npx create-react-app my-app && npx install yarn && cd  my-app && start yarn.bat)

pause






