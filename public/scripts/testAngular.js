/**
 * Created by rujuraj on 8/23/16.
 */
var myApp= angular.module("myModule",[]).controller("myController",function ($scope) {

    $scope.msg="hello angular";
    var employees=[{firstName:"Raj",lastName:"Jethva",salary:1000000,dob:new Date('8/20/1988')},{firstName:"aaa",lastName:"bbb",salary:40000.50,dob:new Date('5/6/1987')},
        {firstName:"ccc",lastName:"ddd",salary:100000,dob:new Date('9/20/1988')},{firstName:"eee",lastName:"fff",salary:600000.899,dob:new Date('3/20/1988')}];
    $scope.employees=employees;

    $scope.rowLimit=1;

});