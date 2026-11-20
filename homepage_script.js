'use strict';

/*global angular */
/*global alert */
/*jslint white:true */

//var app = angular.module('homepage', ['ngSanitize']);
var app = angular.module('homepage', []);

app.controller('HomepageController', function ($scope, $rootScope)
{
    // set to true to enable ajax checks for each link
    // missing links will be logged to the console
    $scope.performUrlChecks = false;
    $scope.checkRemoteUrls = false; // checks remote urls using jsonp (will cause parse errors)
    $scope.numChecked = 0;
    $scope.numSuccess = 0;
    
    $scope.checkUrlAlertDone = false;
    
    $scope.checkBibUrl = function(pub)
    {
         var filename = "papers/" + pub.key + ".bib";
         $scope.checkUrl(filename);
    };
    
    // check if a url exists (not a 404 link)
    $scope.checkUrl = function(filename)
    {
        if ($scope.performUrlChecks)
        {
            if ($scope.checkUrlAlertDone !== true)
            {
                $scope.checkUrlAlertDone = true;
                alert('checkUrl() debug function was called ($scope.performUrlChecks == true)');
            }
            
            var urlErrorFunc = function(jqXHR, textStatus, errorThrown) 
            {
                if (textStatus !== 'parsererror')
                {
                    console.log('URL Error (' + textStatus + '): ' + filename);
                }
                else
                {
                    // parse error means the download succeeded
                    $scope.numSuccess += 1;
                    
                    console.log("URL Success Count: " + $scope.numSuccess + "/" + $scope.numChecked); 
                }
            };
            
            var successFunc = function()
            {
                $scope.numSuccess += 1;
                    
                console.log("Url Sucesses: " + $scope.numSuccess + "/" + $scope.numChecked);
            };
          
            if (filename.startsWith('http'))
            {
                if ($scope.checkRemoteUrls)
                {
                    $scope.numChecked += 1;
                    
                    // 'jsonp' works for remote urls, but it's parsed as a <script> so it will have parse errors
                    $.ajax(
                        {
                            dataType: "jsonp",
                            url: filename,
                            error: urlErrorFunc,
                            cache: false,
                            timeout: 15000
                        });
                }
            }
            else
            {
                $scope.numChecked += 1;
                
                $.ajax({
                    url: filename,
                    error: urlErrorFunc,
                    success: successFunc,
                    cache: false,
                    timeout: 15000
                    });
            }
        }
    };
    
	$scope.makeEmail = function()
	{
		var str = "tubomfz/cbl";
		var rv = "";
		
		for (var x = 0; x < str.length; ++x)
			rv += String.fromCharCode(str.charCodeAt(x) - 1);
		
		return rv + "@";
	};
	
	$scope.$on('onRepeatLast', function(scope, element, attrs){
		  $rootScope.$broadcast('scrollspy.refresh');
      });
      
    $scope.modal_link = ""; // assigned when they press the "bib" link

    $scope.updateBibtex = function(pub)
    {
        var filename = "papers/" + pub.key + ".bib";
        
        $scope.modal_link = filename;
        
        $('#modal_bibtex').text('');
        $('#modal_bibtex').load(filename);
    };

    var data = getGeneratedData();

    $scope.gs_citations = data[0];
    $scope.gs_hindex = data[1];
    $scope.gs_date = data[2];
    $scope.publications = data[3];
    $scope.committees = data[4];
    $scope.grants = data[5];
    $scope.awards = data[6];
});

app.directive('onLastRepeat', function() {
	return function(scope, element, attrs) {
		if (scope.$last) setTimeout(function(){
			scope.$emit('onRepeatLast', element, attrs);
		}, 1);
	};
});

app.directive('scrollSpy', ['$window', '$timeout', '$rootScope', function($window, $timeout, $rootScope) {
	
	  var targets,
	      spies = [];

	  var refresh = function(attrs) {
	    var slice = Array.prototype.slice;

	    targets = $(attrs.target).children();
		spies = [];
		
	    $timeout(function() {
	      slice.call(targets).forEach(function(el) {
	        spies.push($(el.querySelector('a:first-child').getAttribute('href')));
			
	      });
	    }, 0);
	  };

	  var activate = function(scope, $element, attrs) {
	    
	   if ($element != null)
	   {
	      $(attrs.target + ' > .active').removeClass('active');
	      $element.addClass('active');
	    }
	  };

	  var process = function(scope, element, attrs) {
	    var windowHeight = $window.innerHeight,
	        windowTop = $window.scrollY,
	        $activeTarget;
			
	    spies.map(function(item, index) {
	      var pos = item.offset().top - windowTop;
		  
		  // made this 0 instead of (windowHeight/2) and index == 0
	      if (pos <= 0 || index == 0) 
	        $activeTarget = targets.eq(index);
	    });
	    
	    activate(scope, $activeTarget, attrs);
	  };

	  return {
	    link: function(scope, element, attrs) {
	      targets = [];
	      spies = [];

	      refresh(attrs);

	      angular.element($window).bind("scroll", function() {
	        process(scope, element, attrs);

	        scope.$apply();
	      });

	      // When DOM changes, refresh with a broadcast like this $rootScope.$broadcast('scrollspy.refresh');
	      $rootScope.$on('scrollspy.refresh', function() {
		    
	        refresh(attrs);
	      });

	    }
	  };
	}]);
