describe('listPages', function() {

  beforeEach(module('databus.listPages'));

  describe('controllers', function() {

    it('should properly execute ListIndexCtrl', inject(function($rootScope, $controller) {
      var lists = [1,2,3];
      var ctrl = $controller('ListIndexCtrl',{
        $scope : $rootScope,
        lists : lists
      });
      expect($rootScope.lists).toBe(lists);
    }));

    it('should properly execute ListShowCtrl', inject(function($rootScope, $controller) {
      var lists = [
        { $id : 10, title : '...' },
        { $id : 5, title : 'abc' }
      ];

      lists.remove = function() {
        lists.pop();
      }

      var ctrl = $controller('ListShowCtrl',{
        $scope : $rootScope,
        $routeParams : {
          list_id : 10
        },
        lists : lists
      });

      expect($rootScope.lists).toBe(lists);
      expect($rootScope.list).toBe(lists[0]);

      expect($rootScope.lists.length).toBe(2);

      $rootScope.destroy();

      expect($rootScope.lists.length).toBe(1);
    }));

    it('should properly execute ListFormCtrl', 
      inject(function($rootScope, $controller, $location) {

      var lists = [
        { $id : 10, title : '...' },
        { $id : 5, title : 'abc' }
      ];

      var created, updated;
      lists.add = function() { created = true; };
      lists.update = function() { updated = true; };

      var $scope = $rootScope.$new();
      var ctrl = $controller('ListFormCtrl',{
        $scope : $scope,
        lists : lists
      });

      expect($scope.lists).toBe(lists);

      $scope.list = {};
      $scope.listForm = {
        $valid : true
      };

      $scope.submit();
      expect(created).toBe(true);

      $scope.list.$id = 5;
      $scope.submit();
      expect(updated).toBe(true);

      expect($location.path()).toBe('/lists/5');
    }));

  });

});
