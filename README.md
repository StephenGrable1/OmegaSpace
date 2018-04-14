<h1>OmegaSpace</h1>

<img src="./assets/OmegaSpace.png"/>

<h3>Project Overview</h3>
<p>We took inspiration for this project from <a href="csbin.io">Csbin.io</a> and Google Docs. It's a real-time
notepad editor that allows multiple people to edit documents 
at the same time. We used a host of different technologies including 
<a href="https://socket.io/">Socket.io</a>, <a href="https://reactjs.org/">React</a>, <a href="https://expressjs.com/en/api.html">Express</a>, <a href="https://www.mongodb.com/">MongoDB</a> and <a href="https://webpack.js.org/">Webpack</a> to name a few.</p>

<h3>Technical Challenges</h3>
<p>There were a few challenges we encountered while building this app.
One of them involved the use of websockets and proxying requests to 
multiple servers. If you view the source code for this project, you will see that our <code>npm run dev</code> script inside package.json is running 3 different servers at the same time 
using a handy tool called <a href="https://www.npmjs.com/package/concurrently">Concurrently.</a> We initially had just two servers running in parallel. This worked beautifully for proxying request from our Webpack dev server to 
our Express server to save data to our MongoDB database. However, once we 
tried to implement websockets on our express server, we ran into problems.
</p>

<p> 
Our websocket listeners on the front end were unable to find the correct connection within our server on the backend. We found that socket.io and express were conflicting when trying to listen to connections on the same port. We finally resolved this issue by creating another server 
for our websockets that ran on a different port. 
</p>

<p>Once we had the websockets
running, we encountered another problem in our front end logic that 
created a feedback loop when trying to update our React component's state when clients were editing the document. We fixed this problem by creating a condition in our component to distinguish whether a client was writing or listening to changes in the document. This separation of concerns allowed us to handle state changes differently depending if the client
was editing or listening to changes on the document.
 </p>

<h3>Get the app running</h3>
<ol>

<li>Go to an empty folder on your computer and in your terminal run <code>git clone https://github.com/StephenGrable1/OmegaSpace</code> to copy the repo onto your machine</li>

<li>In your terminal, navigate inside the client folder and run <code>npm install</code></li>

<li>Navigate back out into the root folder and then run <code>npm install</code></li>

<li>Then run <code>npm install nodemon -g</code></li>

<li>Finally run <code>npm run dev</code> and the app should open on localhost port 8080</li>

<li>Hack Away!!</li>
</ol>