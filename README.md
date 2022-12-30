# Upload System App
This App allows user uploading files to server by specifying files type accpted by server.

Nbr: In our case the App accpets pictures and videos 

## build: 
This app created by:
* front: React js framework 18.2.0
* back: Node Js 16.13.1
___
## Folder Structure:
```
   src
    | - components
          ButtonsArea
          Error
          peace
          progress
          welcom
    | - custom
          reader
          upload
             form
    | - icons
    | - config.js
```
## UI components:
 Our App handle files uploaded by user from an input file:

 * It allows to read files before uploading them

In this process we will detect events like:

         Progress
         Success Reading files
         Failed Reading Files
 * Then the user dispatch upload files to server.
  
in this process our App component take care to upload state and realse component confortable to upload state :
        
         Error 
         Progress
         success

## Hooks.
### useListReaders:

This hook allows to make a preview of uploaded file before moving them to server.
### useUpload Hook:

This hook is built to handle upload file state, it allows to upload multiple files 

___
## Server handling uploaded files 

In this [Respository](') you will have the explanation how the server handle uploaded files.




