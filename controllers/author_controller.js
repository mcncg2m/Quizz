exports.author = function(req, res){
	 res.render('author', {
    'author': {
        name: 'Javier Campos',
        image: '/images/autor.jpg'
      }
  });
}