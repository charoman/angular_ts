var appModule = angular.module('app');
appModule.component('content', {
    templateUrl: 'app/components/content/content.template.html',
    controller: ContentComponent,
    bindings: {
        text: '='
    }
});

function ContentComponent($scope, $element) {
    var $ctrl = this;

    this.$onInit = function () {
        $scope.$on('tree.refresh', this.onRefresh);
    }
}