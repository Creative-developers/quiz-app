(function(){
  angular
    .module('turtlefacts')
    .controller('listCtrl',ListController);

    ListController.$inject = ['quizMetrics','dataService'];

    function ListController(quizMetrics,dataService){
    	var vm =  this;

        vm.quizMetrics = quizMetrics;
    	vm.data = dataService.turtlesData;
    	vm.activeTurtle = {};
    	vm.changeActiveTurtle = changeActiveTurtle;
    	vm.search = '';
    	// vm.quizActive =  false;
    	vm.activateQuiz =  activateQuizfunction;

    	function changeActiveTurtle(index){
           vm.activeTurtle =  index;
    	}

    	function activateQuizfunction(){
    		//vm.quizActive = true;
           quizMetrics.changeState('quiz',true);
    	}
    }
})();