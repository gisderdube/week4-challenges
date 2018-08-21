# Server Promises

1. clone this repository
2. optional: run `npm install` to install all necessary packages (hint: there is currently dependencies installed, so it wont to mucht, but it is always good to just run it after you cloned something)
3. To start your server, run 'node server.js' (you have to restart it when you make changes to server.js)
4. Create a new route called '/about' with a new about.html and send it when requesting that route. (Don't forget to also include the stylesheet and the javascript file)
5. Add links on index.html and about.html to go back and forth between the pages.
6. Create a utils.js file (next to your server). This file should have a function `createRandomWord` and export this function.
7. `require` that function in the server.js file and make a new route `/randomWord` to send a random word.
8. In your client/index.js file, make a axios-`get`-request (you do not have to install the package, you can just reference `axios`) to your server and get a random word from your newly created route.
9. Do that 5 times. You can choose to either chain the promises or use `Promise.all` to wait for all responses.
10. When you have those 5 words, create a new `<ul>` with a `<li>` containing one of the random words and append it to the index.html. (You may use jQuery here).
