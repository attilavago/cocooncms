/*

cocooncms.js 
dependencies: jQuery, tabletop.js
author: attila vago [ attilavago.com | cocoonlabs.uk ]
description: A simple databaseless CMS built on JavaScript and Google Drive
release-date: 02-05-2015
licence: MIT
url: https://github.com/attilavago/cocooncms

*/


  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1WirgJFgoLQJxNB7_2Gn2ull13B3cYyRVU5vPbzt5o78/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    
    console.log(data); // for testing only

    /* old loop - non-templatised

    	for (i = 0; i < data.length; i++) { // article template repeater
    		//console.log(data[i].title);
    		var title = data[i].title;
        var image = data[i].image;
    		var content = data[i].content;
    		var author = data[i].author;
    		var date = data[i].date;
    		$('.cms-article').append('<h2 class="cms-article-title">'+title+'</h2>');
        $('.cms-article').append('<img class="cms-article-image" src="'+image+'">');
    		$('.cms-article').append('<p class="cms-article-content">'+content+'</p>');
    		$('.cms-article').append('<p>by: <span class="cms-article-author">'+author+'</span></p>');
    		$('.cms-article').append('<p>on: <span class="cms-article-date">'+date+'</span></p>');
    		$('.cms-article').append('<hr>');

	    }

      */


    ;(function() {
      // simulates AJAX request
      var articleData = data,
          template = document.querySelector('#template').innerHTML,
          result = document.querySelector('.cms-result'),
          i = 0, len = articleData.length, 
          fragment = '';
       
      for ( ; i < len; i++ ) {
        fragment += template
          .replace( /\{\{title\}\}/, articleData[i].title )
          .replace( /\{\{image\}\}/, articleData[i].image )
          .replace( /\{\{content\}\}/, articleData[i].content )
          .replace( /\{\{author\}\}/, articleData[i].author )
          .replace( /\{\{date\}\}/, articleData[i].date );  
      }
     
      result.innerHTML = fragment;
    })();



  }

