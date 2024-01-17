 // TDD
var novoMapa = new Map();

class HistoryMap {

}

// 11/11/2011 as 11 da noite
novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Título do site', url: 'Url sozinha'});
//novoMapa.set('11/11/2011 - 23:30 - URL', {});
novoMapa.set('11/11/2011 - 23:31 - URL', {});

 var resultado = novoMapa.get('11/11/2011 - 23:30 - URL');
 console.log(resultado)