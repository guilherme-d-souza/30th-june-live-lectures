## INSTALLATION

1. nodemon - for hot reload (update the package.json scripts)
2. express - library to create APIs
3. cors - avoid communication issues with different domains
4. db connector - mongo connector (mongoose)

## CODING

0. (OPTIONAL) add type: "module" into the package.json (ES6 - import export)
1. install a linter
2. import express
3. create the express app
4. call the listen function
5. always remember to add the json middleware
6. add CORS
7. add database connection
8. add error 404 middleware
9. add internal errors middleware
10. add the routes/endpoints/paths (after the middlewares)

## FOLDER STRUCTURE

index.js
-- routes (endpoint definition -> (POST, GET, PUT, DELETE...))
-- -- controllers (endpoint behaviour -> call the database through models)
-- -- -- models (schema instance)
-- -- -- -- schemas (database data structure for each collection)

-- middlewares (index.js / routes)
-- errorHandling (index.js / routes)
-- utils (anywhere -> libs [validation, jsonwebtoken, ...] )
