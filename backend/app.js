// Required packages
const mongoose = require("mongoose");
const session = require("express-session");
// const flash = require("connect-flash"); // FIGURE OUT WHY THIS DOESN'T WORK LATER!!!!!!!!!!!!!!!!!!
const catchAsyncError = require("./utilities/catchAsyncErrors");
const { storeReturnTo } = require("./middleware");
const axios = require("axios").default;

// MongoDB Models
const User = require("./models/users");
const studentGroup = require("./models/groups");
const recGroup = require("./models/reacreationalGroups");

// Passport required packages
const localStrategyPassport = require("passport-local"); // local authentication for passport
const passport = require("passport");

// Express
const express = require("express");
const reacreationalGroups = require("./models/reacreationalGroups");
const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true })); // To get information from POST request body. Grants us parsing of req.body.

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
  res.send("test index page for eduGroups...");
});

app.get("/groups/eduGroups/:id", async (req, res) => {
  const { id } = req.params;
  const stuGroup = await studentGroup.findById(id);
  console.log(stuGroup);
  res.send(stuGroup);
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

app.get("/groups/recGroups", async (req, res) => {
  res.send("test index page for recGroups...");
});

app.get("/groups/recGroups/:id", async (req, res) => {
  const { id } = req.params;
  const athGroup = await recGroupGroup.findById(id);
  console.log(athGroup);
  res.send(athGroup);
});

//

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
