mummyApp.controller('mainCtrl' , function($scope) {

	//messege to show which view your on
	$scope.title = "Table of Contents";
	$scope.table = [

	{"name": "Whoa, Mummy!"},
	{"name": "Mummy Making"},
	{"name": "Natural Mummies"},
	{"name": "Man-made Mummies"},
	{"name": "How To Make a Mummy"},
	{"name": "Tomb of Treasures"},
	{"name": "A Mummy's Curse"},
	{"name": "Animal Wraps"},
	{"name": "Lovely Lady Mummy"},
	{"name": "Mummies Today"},
	{"name": "Secrets Unwrapped"},
	{"name": "Glossary"},

	];

$scope.CurrChapter = null;

function setCurrChapter(chapter) {
	$scope.setCurrChapter = chapter;
}

function isCurrChapter(chapter) {
	return $scope.currChapter != null && chapter.name === $scope.currChapter.name;
}

//Make available to the view via $scope
$scope.setCurrChapter = setCurrChapter;
$scope.isCurrChapter =isCurrChapter;

});