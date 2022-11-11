# `Jarvis`

Jarvis is a software that allows one to write personalized cover letters while decreasing the amount of manual work and margin of error, saving 5- 10+ mins per cover letter, on average.

![image](./jarvis-cover.jpg)

## `What Issue Is Jarvis Solving?`
Well, it turns out that the average job seeker is requird to send out 100 - 200 applications during their job hunt to land a job, which ends up being about 10 weeks worth of their time. 

This is where Jarvis comes into place to `reduce the amount of work` required for each individual application, resulting in saving the job seeker `20 - 40 hours` of work during their job hunt.


## `Installing Jarvis`

### `Step 1`

Download "jarvis-cap" and "jarvis-cap-api" and make sure to create a .env file on the client side which includes a port where the server can run. Jarvis was running on port 4040 in production, therefore, we recommend using the same.


### `Step 2`

Run `npm install` on the client and server side to download all dependencies.


### `Step 3`

Run `npm run migrate` and `npm run seed` on the server side to populate the MySQL database "jarvis_cap" with some data.


### `Step 4`

You're almost done! On the client side run `npm start` to launch the application and `npx nodemon` on the server side to start the server. Welcome to Jarvis!

You are now able to fully navigate through the application to your liking. 

## `API`

Please make sure to download the API, [here](https://github.com/timohuennebeck/jarvis-cap-api) 

## `Importing Leads`

Want to import leads to the database? Make sure to use a `CSV file` which follows the following structure.

The first row of the file must match `EXACTLY` the following `naming convention`, first_name, last_name, position, email, phone, linked_in, company, street_name, city, state, postcode, country, icebreaker, paragraph_one, paragraph_two, paragraph_three, call_to_action, status.

You can also just download this [sample file](https://docs.google.com/spreadsheets/d/1qk9gSxsAPOP7cHvWGpGWX6rBkPpVtQ1pmisFdqNC7TA/edit#gid=1182257161) which contains the exact structure.
