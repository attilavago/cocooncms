/*

cocooncms.js 
dependencies: jQuery, tabletop.js
author: attila vago [ attilavago.com | cocoonlabs.uk ]
description: A simple databaseless CMS built on JavaScript and Google Drive
release-date: 02-05-2015
licence: MIT
url: https://github.com/attilavago/cocooncms

*/


  var articles_db = 'https://docs.google.com/spreadsheets/d/1WirgJFgoLQJxNB7_2Gn2ull13B3cYyRVU5vPbzt5o78/pubhtml';

  function init_blog() {
    Tabletop.init( { key: articles_db,
                     callback: showBlogInfo,
                     simpleSheet: true } )
  }

  function showBlogInfo(article_data, tabletop) {
    
    console.log(article_data); // for testing article data only

    ;(function() {
      // simulates AJAX request
      var articleData = article_data,
          template = document.querySelector('#article-template').innerHTML,
          result = document.querySelector('.cms-article'),
          i = 0, len = articleData.length, 
          fragment = '';
       
      for ( ; i < len; i++ ) {
        fragment += template
          .replace( /\{\{title\}\}/, articleData[i].title )
          .replace( /\{\{slug\}\}/, articleData[i].slug )
          .replace( /\{\{image\}\}/, articleData[i].main_image )
          .replace( /\{\{image-one\}\}/, articleData[i].image_1 )
          .replace( /\{\{image-two\}\}/, articleData[i].image_2 )
          .replace( /\{\{image-three\}\}/, articleData[i].image_3 )
          .replace( /\{\{content\}\}/, articleData[i].content )
          .replace( /\{\{author\}\}/, articleData[i].author )
          .replace( /\{\{author-image\}\}/, articleData[i].author_image )
          .replace( /\{\{author-info\}\}/, articleData[i].author_info )
          .replace( /\{\{date\}\}/, articleData[i].date );  
      }
     
      result.innerHTML = fragment;
    })();

  }


  // calling front-page data

  var front_page_db = 'https://docs.google.com/spreadsheets/d/1J1U6BKpuuScm7hFPFsoQVuAm7sscLjB4PX4vJ1DAUfE/pubhtml';

  function init_front() {
    Tabletop.init( { key: front_page_db,
                     callback: showFrontInfo,
                     simpleSheet: true } )
  }

  function showFrontInfo(front_data, tabletop) {
    
    console.log(front_data); // for testing article data only

    ;(function() {
      // simulates AJAX request
      var frontData = front_data,
          frontTemplate = document.querySelector('#front-page-template').innerHTML,
          frontResult = document.querySelector('.cms-front'),
          i = 0, len = frontData.length, 
          frontFragment = '';
       
      for ( ; i < len; i++ ) {
        frontFragment += frontTemplate
          .replace( /\{\{front-page-title\}\}/, frontData[i].page_title );  
      }
     
      frontResult.innerHTML = frontFragment;
    })();

  }
