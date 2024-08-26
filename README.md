# ClassCircles: The Campus Connection You've Been Waiting For

## The Catalyst

We were students scattered in different time zones, frustrated by disconnected campus lives. This wasn't just our problem; it was a universal struggle. Having been in school during the pandemic we know how difficult it was to make meaningful connection and we felt like we had been robbed from that experience. That sparked the idea for ClassCircles—a one-stop platform to make campus community discovery a breeze.

## The Learnings
**Frontend:**
- React
- Bootstrap
- Vanilla css
- framer motion (animations)
- chart.js (data visuialization)
- email.js (contact form)
- MUI.js (react ui library)
- vite
- react-router

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)
- Passport local-session (auth)
- Postman (testing)

**Cloud:**
- AWS (backend)
- Netlify (Frontend) -> Note this deployment uses dummy data as will be explained why below. Its a few versions behind main so some assets may be different.

##Features
The project really begins with the user. Our home page attempts to be as ui friendly as possible by. We attempt to highlight why we exist, with an about us section and some information on the benefits of community. We then follow that up with a FAQ that contains some common questions users have and a testimonials section. Users can then look at the categories of groups we have and join our newsletter which saves to our newLetter table on the backend. Students can then register for an account or sign in to an existing one. For the sake of the MVP we couldn't roll out our authentication due to some issues with NGINX on our AWS server so we opted to use dummy authentication instead with the 
##**credentials:**
##**email: t@example.com**
##**password: Test123**
Once users are logged in they can perform the following: 
1) Send an email to the group members in their various groups
2) Edit their personal information
3) Join both educational and recreational groups
4) Create both educational and recreational groups   

These are the basic features of our MVP, we believe integrating a real-time chat api like song bird however that was not possible for us given the time constraints. 

##Future plans and Experience
We had an amazing time coming up with this idea because it is something we are all passionate about.  Our frontend team did a great job designing a user friendly website while our backend team built a scalable API that aligns with all the endpoints we need on the frontend. Although we had a group member dropout last minute, we still put in our best effort and hope our MVP proves so. 

## Issues
The most difficult issue that we ran into was in regards to http and https policy. We planned on deploying our frontend on netlify (uses HTTPS) and backend on AWS (HTTP). We realized too late that https websites require responses to originate from an https as well. We tried configuring a reverse proxy using NGINX but ran out of time after running into an abundance of errors. This was also the reason we had to fall back onto dummy auth. Because CORS policy enforces cross platform cookies be sent via HTTPS, we were unable to push this feature either. Our solution was again to use a reverse proxy to deploy the frontend on AWS as well so the frontend and backend can share the same top level domains but we ran out of time. However the authentication code base is still in the repo. Instead we opted to use dummy authentication. We also struggled with working together in a way that doesn't lead to merge conflicts. This is a lot of our first times having to use version control software in a group setting and so we ran into a couple merge conflicts that could have been avoided, and were avoided later on using branches. 
The frontend does work if you clone the repo and start the vite on your local machine.

## Conclusion
Overall, we had a really good time deploying this app. We are proud of the fact we were able to roll out the deployment of our backend and our frontend. Although we couldn't deploy our full frontend, we are very proud of the fact it still works in a local environment. We learned a lot and we believe that this MVP represents the basic functionality of our web app.
