var appModule = angular.module('app');
appModule.component('tree', {
    templateUrl: 'app/components/tree/tree.template.html',
    controller: TreeComponent,
    bindings: {
        fs: '<',
        text: '<'
    }
});

appModule.component('menu', {
    template: '<div ng-if="$ctrl.item">Menu of {{$ctrl.item.name}}</div>',
    controller: function () {

    },
    bindings: {
        item: '<'
    }
})

appModule.directive('ngContextmenu', [function () {
    return {
        restrict: 'A',
        scope: {
            ngContextmenu: '&'
        },
        link: function (scope, element, attrs) {
            element[0].addEventListener('contextmenu', function (e) {
                console.log(attrs);
                scope.ngContextmenu();
                scope.$apply();
                e.preventDefault();
            });
        }
    }
}]);

function TreeComponent($rootScope, $scope) {
    this.$onInit = function () {
        console.log(this.fs);
    }

    this.sendBroadcast = function () {
        $rootScope.$broadcast('tree.refresh', 'this is id');
    }

    this.contextMenu = function (folder) {
        this.selectedFolder = folder;
    }

    this.hideMe = function (folder) {
        folder.hide = true;
    }
}