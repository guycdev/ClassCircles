module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnToUrl = req.originalUrl;
    // COME BACK TO IF WE HAVE TIME //
    // req.flash("error", "You must be signed in to do this...");
    //
    return res.redirect("/login");
  }
  next();
};

module.exports.storeReturnTo = (req, res, next) => {
  if (req.session.returnToUrl) {
    res.locals.returnToUrl = req.session.returnToUrl;
  }
  next();
};
