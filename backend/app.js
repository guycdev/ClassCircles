// Required packages
const mongoose = require("mongoose");
const session = require("express-session");
// const flash = require("connect-flash"); // FIGURE OUT WHY THIS DOESN'T WORK LATER!!!!!!!!!!!!!!!!!!
const catchAsyncError = require("./utilities/catchAsyncErrors");
const { storeReturnTo } = require("./middleware");
const axios = require("axios").default;

// MongoDB Models
const User = require("./models/users");
const studentGroup = require("./models/eduGroups");
const recGroup = require("./models/recGroups");

// Passport required packages
const localStrategyPassport = require("passport-local"); // local authentication for passport
const passport = require("passport");

// Express
const express = require("express");
const eduGroups = require("./models/eduGroups");
const port = 3000;
const app = express();

//Cors
const cors = require("cors");

app.use(express.urlencoded({ extended: true })); // To get information from POST request body. Grants us parsing of req.body.
app.use(cors());

const sessionConfiguration = {
  secret: "changeThisSecretLater!", // This will be changed prior to deployment.
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // Expire a week from now, ms, seconds, minutes, hour, days.
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfiguration)); // Pass in configuration for session.
// app.use(flash());

// Set view engine, using react DOM
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(passport.initialize()); // Initialize passport library.
app.use(passport.session()); // middleware for persistent logins.
passport.use(new localStrategyPassport(User.authenticate())); // Tells passport to use local strategy, auth located in user Model.

passport.serializeUser(User.serializeUser()); // Tells passport how to store a user in a session.
passport.deserializeUser(User.deserializeUser()); // Tells passport how to un-store a user in a session)

// COME BACK TO IF WE HAVE THE TIME //
// Define middleware for successful flash-connect prompt. Must be set before express-router.
// app.use((req, res, next) => {
//   res.locals.returnToUrl = req.originalUrl; // Store originalUrl into returnToUrl, such that after login a user is properly redirected.
//   res.locals.signedInUser = req.user; // req.user contains deserialized information about the session. Now, in all templates, we have access to signedInUser.
//   res.locals.success = req.flash("success"); // keyword: success
//   res.locals.error = req.flash("error"); // keyword, error
//   next();
// });
// COME BACK TO IF WE HAVE THE TIME //

// Establish connection to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/classcircles");
    console.log("MongoDB connection was successful!");
  } catch (err) {
    console.log("There was an error...");
    console.log(err);
  }
};
connectDB();

app.get("/", (req, res) => {
  res.send("This is just a test...");
});

app.get("/login", (req, res) => {
  res.render("users/login");
});

// Passport provides us with 'authenticate' middleware, takes strategy,
app.post(
  "/login",
  storeReturnTo,
  passport.authenticate("local", {
    // failureFlash: true, // causing error.....
    failureRedirect: "/login",
  }),
  (req, res) => {
    // If this block is executed, user was authenticated and logged in.
    console.log("LOGGED IN");
    const redirectedUrl = res.locals.returnToUrl || "/"; // upon success
    if (redirectedUrl == "/login") {
      // If the user clicks the login prompt, devise way to not redirect back to 'login, go to / instead.
      res.redirect("/");
      return delete req.session.returnToUrl; // Delete object data after user is successfully logged in.
    }
    delete req.session.returnToUrl; // Delete object data after user is successfully logged in.
    res.redirect(redirectedUrl);
  }
);

// app.get("/dashboard/education", (req, res) => {
//   const {id} = req.
// });

// async function getAvatar() {
//   try {
//     const response = await axios.get("https://robohash.org/1212?set=set4");
//     console.log("IT WORKED...");
//     return response;
//   } catch (err) {
//     console.log("THERE WAS A FATAL ERROR WITH AXIOS...");
//   }
// }

// USERS //

app.get("/users", (req, res) => {
  res.send("test index page where all user are shown, toss this if not needed");
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log(user);
  res.send(user);
});

// USERS //

// GROUPS //

app.get("/groups", (req, res) => {
  res.send("test groups index page");
});

app.get("/groups/eduGroups", async (req, res) => {
  // res.send("test index page for eduGroups...");
  // Return an array of objects (groups, contains group name, dept, class, group name, school name)
  const allEduGroups = await studentGroup.find({});
  res.send(allEduGroups);
  console.log("You found all the edu groups!");
  return allEduGroups;
});

app.get("/groups/recGroups", async (req, res) => {
  const allRecGroups = await recGroup.find({});
  res.send(allRecGroups);
  console.log("Found all the rec groups!");
  return allRecGroups;

  // return an array of objects (school name, activity, sport group name)
});

app.get("/groups/eduGroups", async (req, res) => {
  res.send("test index page for eduGroups...");
});

app.get("/groups/eduGroups/:id", async (req, res) => {
  const { id } = req.params;
  const stuGroup = await studentGroup.findById(id);
  console.log(stuGroup);
  res.send(stuGroup);
});

app.get("/groups/addEduGroup", (req, res) => {
  res.send("this page will render a form to add an educational group");
});

app.post("/groups/addEduGroup/:userId", async (req, res) => {
  // where userID is an existing mongoDB userID
  try {
    console.log("TESTING...");
    const { userId } = req.params;
    const { school, department, classInput, groupName } = req.body;
    const user = await User.findById(userId);
    console.log("RETURNING USER...");
    console.log(user);

    // Check if user exists...
    if (!user) {
      return res.status(400).json({ message: "User not found..." });
    }

    // Create new group
    const newGroup = new eduGroups({
      title: groupName,
      school,
      department,
      class: classInput,
      users: [userId], // Adding the user ID by default
      memberCount: 1, // Since there's 1 user by default
    });

    await newGroup.save();
    return res.status(200).json({ status: "Success" });

    // Send response
  } catch (err) {
    console.log("ERROR: Could not fetch page...");
    console.log(err.message);
    res.status(500).send("Server Error...");
  }
});

app.post("/groups/addRecGroup/:userId", async (req, res) => {
  // where userID is an existing mongoDB userID
  try {
    console.log("TESTING REC GROUP POST...");
    const { userId } = req.params;
    const { school, type, activity, groupName } = req.body;
    const user = await User.findById(userId);
    console.log("RETURNING USER...");
    console.log(user);

    // Check if user exists...
    if (!user) {
      return res.status(400).json({ message: "User not found..." });
    }

    // Create new group
    const newGroup = new eduGroups({
      title: groupName,
      school,
      type,
      activity,
      users: [userId], // Adding the user ID by default
      memberCount: 1, // Since there's 1 user by default
    });

    await newGroup.save();
    return res.status(200).json({ status: "Success recGroup" });

    // Send response
  } catch (err) {
    console.log("ERROR: Could not fetch page...");
    console.log(err.message);
    res.status(500).send("Server Error...");
  }
});

// app.post("/groups/addEduGroup", async (req, res) => {
// the following is an idea on how to get the form of the edu student group posted on /groups/eduGroup/GROUPID
// const newGroup = new Group(req.body.eduGroup)
// await newGroup.save()
// res.redirect('/groups/eduGroups/${newGroup._id})
// });

app.get("/groups/recGroups", async (req, res) => {
  res.send("test index page for recGroups...");
});

app.get("/groups/recGroups/:id", async (req, res) => {
  const { id } = req.params;
  const athGroup = await recGroupGroup.findById(id);
  console.log(athGroup);
  res.send(athGroup);
});

app.post("/groups/addEduGroup/:userId", async (req, res) => {
  try {
    console.log("TESTING...");
    const { userId } = req.params;
    const { school, department, classInput, groupName } = req.body;
    const user = await User.findById(userId);
    console.log("RETURNING USER...");
    console.log(user);

    if (!user) {
      return res.status(400).json({ message: "User not found..." });
    }

    const newGroup = new eduGroups({
      title: groupName,
      school,
      department,
      class: classInput,
      users: [userId], // Adding the user ID by default
      memberCount: 1, // Since there's 1 user by default
    });

    await newGroup.save();
    return res.status(200).json({ status: "Success" });
  } catch (err) {
    console.log("ERROR: Could not fetch page...");
    console.log(err.message);
    res.status(500).send("Server Error...");
  }
});

app.post("/groups/addRecGroup/:userId", async (req, res) => {
  try {
    console.log("TESTING REC GROUP POST...");
    const { userId } = req.params;
    const { school, type, activity, groupName } = req.body;
    const user = await User.findById(userId);
    console.log("RETURNING USER...");
    console.log(user);

    // Check if user exists...
    if (!user) {
      return res.status(400).json({ message: "User not found..." });
    }

    // Create new group
    const newGroup = new eduGroups({
      title: groupName,
      school,
      type,
      activity,
      users: [userId], // Adding the user ID by default
      memberCount: 1, // Since there's 1 user by default
    });

    await newGroup.save();
    return res.status(200).json({ status: "Success recGroup" });

    // Send response
  } catch (err) {
    console.log("ERROR: Could not fetch page...");
    console.log(err.message);
    res.status(500).send("Server Error...");
  }
});

async function getEmailsOfGroupMembers(userID) {
  try {
    const user = await User.findById(userID);

    if (!user) {
      return Promise.reject("User not found....");
    }

    const eduGroupMembers = await eduGroups.find();
    const recGroupMembers = await recGroups.find();

    const groupMembers = eduGroupMembers.concat(recGroupMembers);

    const userGroupMembers = groupMembers.filter((group) => {
      return group.users.some((groupUser) => groupUser.equals(userID));
    });

    const emailsMap = new Map();

    userGroupMembers.forEach((group) => {
      group.users.forEach((groupUser) => {
        emailsMap.set(groupUser.email, groupUser);
      });
    });

    return Array.from(emailsMap.keys());
  } catch (err) {
    return Promise.reject("Error fetching group member emails...");
  }
}

// Use the above defined async function for fetching emails in this route
app.get("/getGroupMemberEmails", async (req, res) => {
  const { userID } = req.query; // get userID from URL parameter

  // Check if the userID exists
  if (!userID) {
    return res.status(400).json({ error: "User ID parameter is missing..." });
  }

  try {
    // Use function to fetch user emails
    const emails = await getEmailsOfGroupMembers(userID);
    res.json(emails);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error..." });
  }
});

app.get("/groups/addRecGroup", (req, res) => {
  res.send("this page will render a form to add an educational group");
});

app.post("/groups/addRecGroupP", async (req, res) => {
  // the following is an idea on how to get the form of the edu student group posted on /groups/recGroup/RECGROUPID
  // const recGroup = new Group(req.body.eduGroup)
  // await recGroup.save()
  // res.redirect('/groups/recGroups/${recGroup._id})
});

// Unsure of JOIN ; I know that this is utilized in SQL DB's, but I believe mongoDB does not have an equivalent...

// GROUPS //

app.get("/register", (req, res) => {
  res.render("users/register");
});

app.post(
  "/register",
  catchAsyncError(async (req, res, next) => {
    try {
      const {
        username,
        email,
        password,
        university,
        department,
        subjects,
        hobbies,
      } = req.body;
      const user = new User({
        email,
        username,
        university,
        department,
        subjects,
        hobbies,
      }); // Pass in email and username from destructuring.
      const registeredUser = await User.register(user, password); // Will hash the password, store the salts and hash result on the new user.
      req.login(registeredUser, (err) => {
        if (err) return next(err);
        // Establishes login session after the user has registered, pass in registeredUser.
        // COME BACK TO IF WE HAVE TIME //
        // req.flash("success", "Welcome to (FILL ME IN WITH NAME)!");
        res.redirect("/");
      });
    } catch (err) {
      console.log("error...");
      console.log(err); // GET RID OF THIS LOG BEFORE DEPLOYING
      // COME BACK TO IF WE HAVE TIME //
      // req.flash("error", err.message);
      res.redirect("/register");
    }
  })
);

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    // Passport provides logout in request.
    // COME BACK TO IF WE HAVE TIME //
    // flash successful logout message.
    res.redirect("/");
  });
});

app.get("/dashboard/", (req, res) => {
  res.send("dashboard");
});

app.get("/dashboard/studentGroups", (req, res) => {
  res.send(
    "PLACE THE INDEX PAGE FOR THE STUDENT GROUPS, PAGE THAT DISPLAYS STUDENT GROUPS"
  );
});

app.get("/dashboard/studentGroups/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const group = await studentGroup.findById(id).populate("users");
    console.log(id.author);
    console.log(group);
    // res.render(frontend/page, { pass in the group object here - from })
    res.send("I MADE IT TO THE SHOW PAGE FOR A PARTICULAR STUDENT GROUP");
  } catch (err) {
    console.log("ERROR ON THE SHOW PAGE!!!");
    console.log(err);
  }
});

app.get("/dashboard/recGroups", (req, res) => {
  res.send(
    "PLACE THE INDEX PAGE FOR THE REC GROUPS, PAGE THAT DISPLAYS REC GROUPS"
  );
});

app.get("/dashboard/recGroups/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const group = await recGroup.findById(id).populate("users");
    console.log(id.author);
    console.log(group);
    // res.render(frontend/page, { pass in the group object here - from })
    res.send("I MADE IT TO THE SHOW PAGE FOR A PARTICULAR REC GROUP");
  } catch (err) {
    console.log("ERROR ON THE SHOW PAGE!!!");
    console.log(err);
  }
});

// Testing functionality of creating a user account. Ensuring that password is salted and hashed.

app.listen(port, () => console.log(`Listening on port ${port}`));
