basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    '../../js/angular/angular.js',
    '../../js/angular/angular-*.js',
    '../lib/angular-mocks.js',
    '../../templates/angular/app/js/**/*.js',
    'unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
