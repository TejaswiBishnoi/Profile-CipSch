# Profile-CipSch

It is a replica of CipherSchools website's profile page, with a database and backend to ensure that the Profile page can function on its own. The front-end is written in React.js and is styled with the help of React-MUI library, providing Material-UI components and theming system. The backend is Express.js based server with custom token based authentication and a MongoDB based database to manage the data for the site.<br/><br/>
A screenshot of the web-app:<br/>
<img src="https://github.com/TejaswiBishnoi/Profile-CipSch/blob/main/TestData/Screenshots/HomeTop.png?raw=true" height=400 height="auto" align="center">
<br/>Almost all the controls in the original are replicated and are functioning. To see the functioning of app without running it, you can find video-recording inside <code>TestData/Videos</code> folder

<h3>How to Set-Up</h3>
To set-up this full-stack project, the user must install MongoDB server and NodeJs. MongoDB community server can be downloaded from <a href="https://www.mongodb.com/try/download/community">here</a>. NodeJs can be installer can be acquired from it's <a href="https://nodejs.org/en/download/">website</a>. Once both softwares are installed, clone this repo using: </br>
<br/>
<code>$ git clone https://github.com/TejaswiBishnoi/Profile-CipSch.git</code>
</br>
</br>
Then move to frontend folder:
</br>
<code>$ cd ./frontend</code></br>
</br>
and run:</br>
<code>$ npm install</code></br></br>
Then go to the backend folder:
</br><code>$ cd ../backend</code></br></br>
Run the <code>npm install</code> here too. Now the packages for frontend and backend are installed and hence backend and frontend are ready.
The only thing left to set-up is the database.</br>
</br>
For database, go to MongoDB shell or Compass and create a database with name <code>Profile</code>. Now create collections as follows:</br>
<ol>
<li><code>followers</code></li>
<li><code>profinfo</code></li>
<li><code>tokens</code></li>
<li><code>users</code></li>
<li><code>webprofiles</code></li>
</ol>
</br>
The sample data for the tables can be acquired from the <code>TestData</code> folder in this repo and can be imported using the shell or the compass. The files are <code>.json</code> files.
</br>
<h3>Running the app</h3>
To run the app, open two different shells and in one shell open the frontend folder and in other open the backend folder.
</br>
<b>Make sure the MongoDB server is running.</b></br>
Now in the backend shell, type the following command:</br>
<code>$ node server.js</code></br></br>
The server will now start running on port 5000 of localhost.</br>
In the shell with the frontend folder as PWD, run the following command:</br>
<code>$ npm start</code></br></br>
Now the frontend app will start running on the port 3000.</br></br>
If all the steps were followed properly, the website is now accesible on</br> <code><a href="http://localhost:3000">http://localhost:3000</a></code>

<br/>
<h3>Project Structure</h3>
<ol>
  <li><b>backend</b>: Contains the server/backend code.</li>
  <li><b>frontend</b>: Contains frontend code and files.</li>
  <li><b>TestData</b>: Contains the test data for the db setup and also houses the screenshots and video recording of the app.</li>
</ol>

<h3>Contents of backend folder:</h3>
<ol>
  <li><b>package.json and package-lock.json</b>: Contains the configuration of the app, including Node.js/npm settings and package dependencies.</li>
  <li><b>server.js</b>: It is the starting-point of the server and includes the code to set-up and run the server and also contains the code to set-up API endpoints.</li>
  <li><b>testdatagen.js</b>: It contains code to load some basic test data into db. <b>Not an alternative to previously described steps to set-up DB.</b></li>
  <li><b>api</b>: It contains the logic implemented by the API endpoints in form of code. Each file in this folder is a logic for API endpoint.</li>
  <li><b>avatars</b>: Stores the avatars/profile pictures of the users.</li>
</ol>
    
