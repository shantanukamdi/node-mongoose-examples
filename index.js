const mongoose = require('mongoose');

var Author = require('./models/author');
var Book = require('./models/book');

const URL = 'mongodb://localhost/test';
const options = {
    user: 'admin',
    password: 'admin123'
};
mongoose.connect(URL, err => {
    if (err) {
      throw err;
    }
    console.log('Connection is successfull');

    let jamieAuthor = new Author({
      _id: new mongoose.Types.ObjectId(),
      name: {
        firstName: 'Jamie',
        lastName: 'Munro'
      },
      biography:
        'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
      twitter: 'https://twitter.com/endyourif',
      facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
    });

    jamieAuthor.save(err => {
      if (err) throw err;
      console.log('Author successfully saved');

      var mvcBook = new Book({
        _id: new mongoose.Types.ObjectId(),
        title: 'ASP.NET MVC 5 with Bootstrap and Knockout.js',
        author: jamieAuthor._id,
        ratings: [
          {
            summary: 'Great read'
          }
        ]
      });

      mvcBook.save(err => {
        if (err) throw err;

        console.log('Book successfully saved.');
      });

      var knockoutBook = new Book({
        _id: new mongoose.Types.ObjectId(),
        title: 'Knockout.js: Building Dynamic Client-Side Web Applications',
        author: jamieAuthor._id
      });

      knockoutBook.save(function(err) {
        if (err) throw err;

        console.log('Book successfully saved.');
      });
    });
  }
);
