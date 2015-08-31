// Possible/typical Answers


// simplest but not a pretty result and doesn't handle possible race conditions
$.get('/api/1.0/services/', function(data) {
	$('.services-list').html(data);
});


// iterative answer, formats response but poor performance for DOM manipulation, not async ready
$.get('/api/1.0/services/', function(data) {
	$.('.services-list').html('<ul></ul>');
	var services = data.services;
	var s;
	for (s = 0; s < services.length; s+=1) {
		$('.services-list ul').append('<li>' + services[s] + '</li>');
	}
});


// better of above, would show knowledge of newer array methods and a single DOM injection
$.get('/api/1.0/services/', function(data) {
    var services = data.services;
    var servicesList;
    services.forEach(function(service) {
        servicesList += '<li>' + service + '</li>';
    });
    $('.services-list').html('<ul>' + servicesList + '</ul>');
});


// simple array handling, single DOM injection, async ready
$.get('/api/1.0/services/')
    .done(function(data) {
        $('.services-list').html('<ul><li>' + data.services.join('</li><li>') + '</li></ul>');
    });