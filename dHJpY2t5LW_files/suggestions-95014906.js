!function(e){if(0!==e(".not-found-suggestion").length){var t=e(".not-found-suggestion"),o=location.pathname.split("/"),n=""===o.slice(-1)[0]?-2:-1,a=decodeURIComponent(o.slice(n)[0]).replace(/[\ \/\-\+]/g," "),s=algoliasearch(ALGOLIA_CONFIG.appId,ALGOLIA_CONFIG.apiKey).initIndex(ALGOLIA_CONFIG.indexName),i={path:location.href};window.Intercom&&__trackIntercomEvent("page-not-found",i),s.search(a,function(o,n){if(o)console.error(o);else if(n.hits&&n.hits.length>0){var a=n.hits.slice(0,5);location.hostname,n.params;t.empty(),t.append('<p class="text-center lead">We have the following suggestions:</p><ul class="suggestions"></ul><p class="text-center lead">or use the search bar to find what you are looking for</p>');for(var s=0;s<a.length;s++){var i=a[s],l=("localhost"===location.hostname?"":"https://docs.mendix.com")+i.url.replace(".html",""),c=e('<li><a href="'+l+'">'+i.space+" : "+i.title+"</a></li>");e(".suggestions",t).append(c)}t.removeClass("hidden")}})}}(jQuery);