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

    ;(function() {
      // simulates AJAX request
      var articleData = data,
          template = document.querySelector('#article-template').innerHTML,
          result = document.querySelector('.cms-article'),
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

