const mongodb = require('./database')

exports.start = (io) => {
    const heartbeatFrequency = 1000
    
    let User = mongodb.models.User

    // Heartbeat
    setInterval(function() {
        // Désactivation des offres lorsqu'elles arrivent a expiration
        User.updateMany({ offers_end: { $lte: Date.now() } }, { offers_end: 0 }, () => {})

        // Reduction du temps pour les utilisateurs connectés ayant du temps restant et n'ayant pas d'offres
        User.updateMany({ 'status': 1, time_bank: {$gte: heartbeatFrequency}, offers_end: { $lt: Date.now() } }, { $inc: { time_bank: -heartbeatFrequency } }, () => {})

        // Envoi de la liste des utilisateurs connectés aux clients
        User.find({ $or: [ { 'status': 1 }, { 'status': 2 } ] }).sort({ status : 1 }).exec((err, arr) => {
            io.local.emit('sync', arr)
        })
    }, heartbeatFrequency)
}
