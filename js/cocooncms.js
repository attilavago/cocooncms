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
    //alert("Successfully processed!")
    console.log(data);
    //console.log(data[0].title);
    //$('.cms-article-title').append(data[0].title);
    //$('.cms-article-content').append(data[0].content);
    //$('.cms-article-author').append(data[0].author);
    //$('.cms-article-date').append(data[0].date);

    	for (i = 0; i < data.length; i++) { 
    		//console.log(data[i].title);
    		var title = data[i].title;
    		var content = data[i].content;
    		var author = data[i].author;
    		var date = data[i].date;
    		$('.cms-result').append('<h2 class="cms-article-title">'+title+'</h2>');
    		$('.cms-result').append('<p class="cms-article-content">'+content+'</p>');
    		$('.cms-result').append('<p>by: <span class="cms-article-author">'+author+'</span></p>');
    		$('.cms-result').append('<p>on: <span class="cms-article-date">'+date+'</span></p>');
    		$('.cms-result').append('<hr>');
		}

  }