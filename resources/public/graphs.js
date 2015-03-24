(function() {
	
	// Helper functions. Thank you, John Resig.
    Array.max = function(array) {
    	return Math.max.apply(Math, array);
    };
     
    Array.min = function(array) {
        return Math.min.apply(Math, array);
    };
	
    // Month
	var byMonthDomain = document.getElementById('date-read-month-keys').innerHTML.split(',');
	var byMonthRange =  document.getElementById('date-read-month-values').innerHTML.split(',');
	
	for(var i=0; i < byMonthRange.length; i++) { byMonthRange[i] = +byMonthRange[i]; }

	var data = {
			labels : byMonthDomain,
			datasets : [{
				fillColor : "rgba(166, 72, 72, 0.5)",
				strokeColor : "rgba(166, 72, 72, 1)",
				pointColor : "rgba(166, 72, 72, 1)",
				pointStrokeColor : "#fff",
				data : byMonthRange
			}]
	};

	var monthCtx = document.getElementById("byMonthChart").getContext("2d");
	var byMonthChart = new Chart(monthCtx).Line(data, {
		scaleOverride: true,
		scaleSteps: 2,
		scaleStepWidth: Math.ceil(Array.max(byMonthRange) / 2),
		scaleStartValue: 1});

	// Year
	var byYearDomain = document.getElementById('date-read-year-keys').innerHTML.split(',');
	var byYearRange =  document.getElementById('date-read-year-values').innerHTML.split(',');

	for(var i=0; i < byYearRange.length; i++) { byYearRange[i] = +byYearRange[i]; }

	var data = {
			labels : byYearDomain,
			datasets : [{
				fillColor : "rgba(166, 114, 72, 0.5)",
				strokeColor : "rgba(166, 114, 72, 1)",
				pointColor : "rgba(166, 114, 72, 1)",
				pointStrokeColor : "#fff",
				data : byYearRange
		}]
	};
	
	var yearCtx = document.getElementById("byYearChart").getContext("2d");
	var byYearChart = new Chart(yearCtx).Bar(data, {
		scaleOverride: true,
		scaleSteps: 3,
		scaleStepWidth: Math.ceil(Array.max(byYearRange) / 3),
		scaleStartValue: 0});
	
	// Author
	var byAuthorDomain = document.getElementById('date-read-author-keys').innerHTML.split(',');
	var byAuthorRange =  document.getElementById('date-read-author-values').innerHTML.split(',');

	for(var i=0; i < byAuthorRange.length; i++) { byAuthorRange[i] = +byAuthorRange[i]; }

	var data = {
			labels : byAuthorDomain,
			datasets : [{
				fillColor : "rgba(64, 149, 149, 0.5)",
				strokeColor : "rgba(64, 149, 149, 1)",
				pointColor : "rgba(64, 149, 149, 1)",
				pointStrokeColor : "#fff",
				data : byAuthorRange
			}]
	};

	var authorCtx = document.getElementById("byAuthorChart").getContext("2d");
	var byAuthorChart = new Chart(authorCtx).Bar(data, {
		scaleOverride: true,
		scaleSteps: 3,
		scaleStepWidth: Math.ceil(Array.max(byYearRange) / 3),
		scaleStartValue: 0});
	
	// Shelves
	var byShelfDomain = document.getElementById('date-read-shelf-keys').innerHTML.split('!@#');
	var byShelfRange =  document.getElementById('date-read-shelf-values').innerHTML.split(',');

	for(var i=0; i < byShelfRange.length; i++) { byShelfRange[i] = +byShelfRange[i]; }

	var data = {
			labels : byShelfDomain,
			datasets : [{
				fillColor : "rgba(67, 92, 152, 0.5)",
				strokeColor : "rgba(67, 92, 152, 1)",
				pointColor : "rgba(67, 92, 152, 1)",
				pointStrokeColor : "#fff",
				data : byShelfRange
			}]
	};

	var shelfCtx = document.getElementById("byShelfChart").getContext("2d");
	var byShelfChart = new Chart(shelfCtx).Radar(data
		, {
		scaleOverride: true,
		scaleSteps: 3,
		scaleStepWidth: Math.ceil(Array.max(byShelfRange) / 3),
		scaleStartValue: 0});

	// Publisher
	var byPublisherDomain = document.getElementById('date-read-publisher-keys').innerHTML.split(',');
	var byPublisherRange =  document.getElementById('date-read-publisher-values').innerHTML.split(',');

	for(var i=0; i < byPublisherRange.length; i++) { byPublisherRange[i] = +byPublisherRange[i]; }

	var data = {
			labels : byPublisherDomain,
			datasets : [{
				fillColor : "rgba(166, 72, 72, 0.5)",
				strokeColor : "rgba(166, 72, 72, 1)",
				pointColor : "rgba(166, 72, 72, 1)",
				pointStrokeColor : "#fff",
				data : byPublisherRange
		}]
	};
	
	var publisherCtx = document.getElementById("byPublisherChart").getContext("2d");
	var byPublisherChart = new Chart(publisherCtx).Bar(data, {
		scaleOverride: true,
		scaleSteps: 3,
		scaleStepWidth: Math.ceil(Array.max(byPublisherRange) / 3),
		scaleStartValue: 0});
	
	// Publish Year
	var byPublishedYearDomain = document.getElementById('date-read-published-year-keys').innerHTML.split(',');
	var byPublishedYearRange =  document.getElementById('date-read-published-year-values').innerHTML.split(',');

	for(var i=0; i < byPublishedYearRange.length; i++) { byPublishedYearRange[i] = +byPublishedYearRange[i]; }

	var data = {
			labels : byPublishedYearDomain,
			datasets : [{
				fillColor : "rgba(166, 114, 72, 0.5)",
				strokeColor : "rgba(166, 114, 72, 1)",
				pointColor : "rgba(166, 114, 72, 1)",
				pointStrokeColor : "#fff",
				data : byPublishedYearRange
		}]
	};
	
	var publishedYearCtx = document.getElementById("byPublishedYearChart").getContext("2d");
	var byPublishedYearChart = new Chart(publishedYearCtx).Bar(data, {
		scaleOverride: true,
		scaleSteps: 3,
		scaleStepWidth: Math.ceil(Array.max(byPublishedYearRange) / 3),
		scaleStartValue: 0});
})();
