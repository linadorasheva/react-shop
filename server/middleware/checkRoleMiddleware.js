const jwt = require('jsonwebtoken')

module.exports = function(role) {
 return function(req, res, next) {
   if (req.method === "OPTIONS") {
     next()
   }

   try {
     const token = req.headers.authorization.split(' ')[1]

     if (!token || token === 'null') {
       return res.status(401).json({ message: 'The user have not authorized.' })
     }

     const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY)

     if (decoded.role !== role) {
       return res.status(403).json({ message: 'Access denied.' })
     }

     req.user = decoded
     next()
   } catch (e) {
     res.status(401).json({ message: 'The user have not authorized.' })
   }
 }
}