module.exports = {
    usersOnly: (req, res, next) => {
        if(!req.session.user) {
            return res.status(401).send('Ye be Not Logged in, Log Ye In')
        }
        next()
    },
    adminOnly: (req, res, next) => {
        if(!req.session.user.isAdmin){
            return res.status(403).send('Ye be Not an Admin, Leave Now or walk the plank')
        }
        next()
    }
}