const mongoose=require('mongoose');

const URI='mongodb://localhost/rental';

mongoose.connect(URI)
    .then(db => console.log('DB is connect'))
    .catch(err => console.err(err));

module.exports = mongoose;