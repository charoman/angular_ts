var appModule = angular.module('app');
appModule.component('fileBrowser', {
    templateUrl: 'app/components/filebrowser/filebrowser.template.html',
    controller: FileBrowserComponent
});

function FileBrowserComponent() {
    this.$onInit = function () {
        this.fs = [
            {
                id: 0, name: 'root', children: [
                    {
                        id: 1, name: 'sub1', children: [
                            { id: 2, name: 'sub2', children: [] },
                            { id: 3, name: 'sub3', children: [] }
                        ]
                    }
                ]
            }
        ];

        this.addFolder = function () {
            this.fs.push({ id: 6, name: 'new Folder' });
        }
    }
}

