module.exports = (req, res, next) => {
    if (req.session && req.session.logged) {
      next()
    } else {
      res.redirect('/login')
    }
  }