// -------------------------------------------------------------
    // Counter Section(Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart_1st').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#b31515',
            trackColor: '#f7f7f7',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 150,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    (function () {

        $('.chart_2nd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#b31515',
            trackColor: '#f7f7f7',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 150,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart_3rd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#b31515',
            trackColor: '#f7f7f7',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 150,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart_4th').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#b31515',
            trackColor: '#f7f7f7',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 150,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());
	