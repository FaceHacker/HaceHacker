const constants = require('../constants');
const createError = require('http-errors');

module.exports.auth = (req, res, next) =>{    
    if (req.isAuthenticated()) {        
        next();
    } else{                
        res.status(401).redirect('/sessions/create');
    }
};

module.exports.notAuth = (req, res, next) =>{
    if (req.isAuthenticated()) {
        res.redirect(`/${req.user._id}`);
    } else {
        next();
    }
};

module.exports.isOwneredByOwnSession = (req, res, next) =>{
<<<<<<< HEAD
    if (req.isAuthenticated() && (req.params.userId == req.user._id || req.params.id == req.user._id || req.user.role === constants.user.ADMIN)) {
=======
    console.log(req.params.id);
    console.log(req.user._id);
    console.log(req.user._id);
    console.log(req.user._id);
    console.log(req.user._id);
    
    if (req.user && req.params.id === req.user._id) {
>>>>>>> 6362f268d5c986531193673bb19a667f7cfac32f
        console.log('OWNER IS LOGGED AND CONFIRMED IDENTIITY');
        next();     
    } else{
        console.log('NOT PRIVILAGES TO UPDATE');
        next(createError(403, `insufficient privilages ${req.user.name}`));    
    }
};

module.exports.checkRole = role =>{
    return(req, res, next) =>{
        if (req.user.role === role) {
            next();
            console.log('PASSED MIDDLEWARE TO DELETE USER');   
        } else{
            console.log('NOT PRIVILAGES  TO DELETE');
            next(createError(403, `insufficient privilages ${req.user.name}`));    
        }
    };
};

module.exports.checkFriendship = (req, res ,next) => {
    
};



