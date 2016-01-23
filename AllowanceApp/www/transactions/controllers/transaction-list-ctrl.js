(function() {

	'use strict';

	angular.module('Allowance').controller('TransactionListCtrl', function($scope, $ionicPopup) {

		//set reference to controller
		var vm = this;

		
		//measure height to set scrolling list view
		$scope.initUI = function() {

			setTransactionListHeight();
		}

		$scope.openTransactionModal = function() {
			$ionicPopup.show({
				templateUrl: '/transactions/views/add-transaction-view.html',
				title:'Enter a transaction',
				scope: $scope,
				buttons: [{
					text: 'Cancel',
					type: 'button-default',
					onTap: $scope.closeTransactionModal
				},
				{
					text: 'OK',
					type:'button-positive',
				}]
			});
		}


		$scope.closeTransactionModal = function() {

		}


		var setTransactionListHeight = function() {

			//get the parts needed to measure the height
			var view = document.getElementsByClassName('allowance-transactionList')
			var viewHeader = document.getElementsByClassName('bar-header');
			var bottomFooter = document.getElementsByClassName('bar-footer');
			var transactionsHeader = document.getElementsByClassName('transactionList-topPart');
			var transactionList = document.getElementsByClassName('transactionList-list');

			if (view.length === 1 && transactionList.length === 1 && bottomFooter.length === 1 && transactionsHeader.length === 1 && transactionList.length === 1 ) {
				//if you have all the parts you need, set the height of the list view
				var listHeight = view[0].offsetHeight - (viewHeader[0].offsetHeight + transactionsHeader[0].offsetHeight + bottomFooter[0].offsetHeight);
				transactionList[0].setAttribute('style', 'height:' + listHeight + 'px');

			}


		}


		//run the init UI function after you've defined all the methods
		$scope.initUI();




	});
})();