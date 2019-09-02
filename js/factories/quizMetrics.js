(function(){
   angular
     .module('turtlefacts')
     .factory('quizMetrics',QuizMetrics);

     QuizMetrics.$inject = ['dataService'];

     function QuizMetrics(dataService){
     	var quizObj = {
     		quizActive:false,
            resultsActive:false,
     		changeState:changeState,
            numCorrect:0,
            markQuiz:markQuiz,
            correctAnswers:[]
     	};

     	return quizObj;

     	function changeState(metrics,state){
           if(metrics === 'quiz'){
               quizObj.quizActive = state;
     	   }else if(metrics === 'results'){
            quizObj.resultsActive = state;
           }else{
              return false; 
           }
        }

        function  markQuiz(){
            quizObj.correctAnswers = dataService.correctAnswers;

            for(var i = 0;i < dataService.quizQuestions.length;i++){
                if(dataService.quizQuestions[i].selected === dataService.correctAnswers[i]){
                    quizObj.numCorrect++;
                    dataService.quizQuestions[i].correct = true;
                }else{
                    dataService.quizQuestions[i].correct = false
                }
            }
        }
     }
})();