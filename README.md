# Cocoon-CMS
A simple databaseless CMS built on JavaScript and Google Drive [currently under development]

## Why?

* because I can!
* because some people don't have the technical ability to work with PHP and SQL
* because spreadsheets are a lot easier to understand than many CMSs out there, thus the learning curve for the user is next to none
* because for developers it takes a lot less time to develop than using the traditional methods: less time spent on development => product becomes cheaper = client happier
* because using traditional databases is often an overkill
* because you can host the site on any web-reachable platform, ex: Dropbox, so nobody needs to pay for hosting
* because having a back-up of all your data is as simple as copy-pasting or downloading your spreadsheet
* because it comes with Google's security, so unless you delete your own data or give access to someone else to do it, it's safe

## When?

#### Stay tuned! The following versions are to be launched very soon:

* v.1 jquery + tabletop.js
* v.1 angular.js + tabletop.js
* v.1 ember.js + tabletop.js
* v.1 vanilla JavaScript + tabletop.js

#### Check out the [live development version](http://attilavago.ddns.net/cocooncms/index.html) - running from a Raspberry Pi server! 

## Who is CocoonCMS for?

Well, let's put it this way. If you're not planning to load tens of thousands of posts, articles and whatnot, then this is for you.

If you're not gathering or hosting sensitive information, again, this is for you. A quick note on that: while most people use SQL databases, they very often use it for nothing else than storing data they themselves wrote and published online, in which case hiding the source database with intricate security measures provided by both PHP and SQL is both an overhead, and an overkill, not to mention completely useless. 
If you are a blogger, a web designer or any other person wanting to have a manageable online presence in the form a modern website, then this is definitely for you.

If you are a front - end developer, especially a junior one that needs an easily editable, customisable CMS, and is fairly good at writing HTML, CSS and jQuery, then this will definitely be up your alley.

If you do not want to pay for hosting then CocoonCMS is your golden ticket as this will work from a lot of free cloud solutions such as Dropbox, or social code platforms like Github. 

## You may want to know...

That this is NOT a flat-file CMS. Your Google Spreadsheet acts as a database, very much like an SQL database would, except that you do not need to specify the data types for each column, and that your database is publicly available to VIEW (only!), on the web (for people who go through the trouble of viewing your site's JavaScript).

That all data autosaves! Thanks to Google Drive’s autosave feature, you don’t have to worry about your data not being saved after new or edited data input. 

That while at this stage of its development we do not encourage adopting CocoonCMS for large blogs or sites that produce thousands of posts per year, the CMS itself IS capable of loading up to 1000 rows of data/sheet by default. That already allows for circa 3 posts/day/sheet for about 1 year. Honestly, that's a lot! I have managed content of news sites that posted around 5 news articles a day (up to 1M visitors/month) and even that would work for over 4 months. Based on our experience, most bloggers post up to 3 articles a week. That would allow for over 6 years’ worth of content/sheet! On top of that, the number of rows/sheet can be extended to a staggering 40.000/sheet!!! By the time you will need that kind of loading capacity, we'll have long implemented lazy-loading and other neat functions.

The templating system we use is NOT handlebars or moustache, it's actually a lot lighter, hardly 20 lines of code and has the sole function of generating templates for this CMS and is part of cocooncms.js. The "{{ }}" notation comes from our experience with and love for Angular.js and since there an upcoming version of CocoonCMS in an Angular form as well, we thought it's probably a good idea to be consistent and also reuse as much code as we can.

CocoonCMS is built on voluntary effort and out of passion for web design and development. It is free to use, copy, edit, but we forbid anyone to turn it into a paid commercial product without asking us first. Should that ever be the case, we shall either ask for a flat licence fee, or a modest percentage of each sale. 

[This actual site](http://attilavago.ddns.net/cocooncms/index.html) is built on CocoonCMS and everything you just seen and read comes from a spreadsheet. Now, you may want to know that the code that connects your site to the spreadsheet is in fact a clever plugin called tabletop.js which returns us the data we then cleverly shape and mould into manageable templates for your content management convenience. The spreadsheet database recipe is also ours and is based on a number of common web content types. If you feel that we have missed something, feel free to drop us a note at cocoonlabsuk@gmail.com 
