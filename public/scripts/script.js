/**
 * Created by rujuraj on 8/23/16.
 */
var myApp= angular.module("myModule",[])
    .controller("myController",function ($scope) {

    $scope.msg="hello angular";
    var employees=[{firstName:"Raj",lastName:"Jethva",salary:1000000,dob:new Date('8/20/1988'),gender:1},
                {firstName:"Rujoota",lastName:"Shah",salary:40000.50,dob:new Date('5/6/1987'),gender:2},
                {firstName:"Amity",lastName:"Joshi",salary:100000,dob:new Date('9/20/1988'),gender:3},
                {firstName:"eee",lastName:"fff",salary:600000.899,dob:new Date('3/20/1988'),gender:2},
                {firstName:"Vidhi",lastName:"Shah",salary:1000000,dob:new Date('12/20/1989'),gender:1}];
    $scope.employees=employees;
    var states = [{name:"Gujarat",
                    cities:[{name:"abad"},{name:"jam"},{name:"nadiyad"}]},{name:"Maharashtra",cities:[{name:"pune"},{name:"sangli"}]},
                    {name:"Punjab",cities:[{name:"chd"}]},{name:"Karnataka",cities:[{name:"mysore"},{name:"ooty"}]}];
    $scope.states=states;
    var techs=[{name:"asp.net",likes:0,dislikes:0},
        {name:"sql",likes:0,dislikes:0},
        {name:"java",likes:0,dislikes:0},
        {name:"python",likes:0,dislikes:0}]
    $scope.techs=techs;
    $scope.incrementLikes = function (tech) {
        tech.likes++;
    }
    $scope.incrementDislikes = function (tech) {
        tech.dislikes++;
    }
    $scope.rowLimit=1;
    $scope.sortColumn='firstName';
    $scope.reverseSort=false;
    $scope.sortData=function (col) {

        $scope.reverseSort = $scope.sortColumn==col ? !$scope.reverseSort : false
        $scope.sortColumn=col;
    };
    $scope.getSortClass=function (col) {
        if ($scope.sortColumn==col)
            return $scope.reverseSort? 'desc':'asc';
        else
            return ' '
    };
    $scope.searchMethod = function (item) {
        if ($scope.searchTerm==undefined)
            return true;
        else
        {
            if (item.firstName.toLowerCase().indexOf($scope.searchTerm.toLowerCase())!=-1 || item.lastName.toLowerCase().indexOf($scope.searchTerm.toLowerCase())!=-1)
                return true;
        }
        return false;
    }
});