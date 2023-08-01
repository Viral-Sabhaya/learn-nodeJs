function age_detector(req, res, next) {
  if (req.query.age > 18) {
    res.send("You are great you can enter this website");
    next();
  } else {
    res.send("u can not acces this website");
    next();
  }
}

module.exports = age_detector;
