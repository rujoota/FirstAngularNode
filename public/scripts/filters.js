/**
 * Created by rujuraj on 8/23/16.
 */
myApp.filter("genderFilter", function () {
    return function (gender) {
        switch(gender)
        {
            case 1:
                return 'male';
            case 2:
                return 'female';
            case 3:
                return 'not disclosed'
        }
    }
});