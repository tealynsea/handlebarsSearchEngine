$(function() {






var languageTemplate = $('#user-input').html();
	console.log(languageTemplate)
var languageText = Handlebars.compile(languageTemplate);
	console.log('language input:', languageText);

	$('#language-input').submit(function(e){
		e.preventDefault();
		console.log('clicked');

		//'data' is what  comes back from the server on the server side
		$('#results').empty()

		$.post('/search', {data:$('.text').val()}, function(data){
			console.log(data);
			$('#results').append(languageText(data));
		})
	})



});