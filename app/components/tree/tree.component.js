var appModule = angular.module('app');
appModule.component('tree', {
    templateUrl: 'app/components/tree/tree.template.html',
    controller: TreeComponent,
    bindings: {
        fs: '<',
        text: '<'
    }
});

appModule.directive('ng-con')

function TreeComponent($rootScope) {
    this.$onInit = function () {
        console.log(this.fs);
    }

    this.sendBroadcast = function () {
        $rootScope.$broadcast('tree.refresh', 'this is id');
    }

    this.contextMenu = function (folder) {
        console.log(folder);
    }

    this.hideMe = function (folder) {
        folder.hide = true;
    }
}