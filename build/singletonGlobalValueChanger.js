'use strict';

var _singleton = require('./singleton');

var _modifier = require('./modifier2');

setInterval(function () {
    (0, _modifier.double)(_singleton.singletonObject);
    console.log('I5.0: ' + _singleton.singletonObject.value);
}, 5000);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaW5nbGV0b25HbG9iYWxWYWx1ZUNoYW5nZXIuanMiXSwibmFtZXMiOlsic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBRUFBLFlBQVksWUFBTTtBQUNkO0FBQ0FDLFlBQVFDLEdBQVIsWUFBcUIsMkJBQWdCQyxLQUFyQztBQUNILENBSEQsRUFHSSxJQUhKIiwiZmlsZSI6InNpbmdsZXRvbkdsb2JhbFZhbHVlQ2hhbmdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2luZ2xldG9uT2JqZWN0fSBmcm9tICcuL3NpbmdsZXRvbic7XG5pbXBvcnQge2RvdWJsZX0gZnJvbSAnLi9tb2RpZmllcjInO1xuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgZG91YmxlKHNpbmdsZXRvbk9iamVjdCk7XG4gICAgY29uc29sZS5sb2coYEk1LjA6ICR7c2luZ2xldG9uT2JqZWN0LnZhbHVlfWApO1xufSAsIDUwMDApIl19