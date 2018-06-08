/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _klondike_scoring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/klondike/scoring.js");
/* harmony import */ var _klondike_scoring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_klondike_scoring__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _klondike_klondike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/klondike/klondike.js");
/* harmony import */ var _klondike_klondike__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_klondike_klondike__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _klondike_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/klondike/board.js");
/* harmony import */ var _klondike_board__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_klondike_board__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _klondike_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/klondike/game.js");
/* harmony import */ var _klondike_game__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_klondike_game__WEBPACK_IMPORTED_MODULE_3__);




angular.module("solitaire", ["klondike", "ngDraggable"]);

/***/ }),

/***/ "./app/klondike/board.js":
/***/ (function(module, exports) {

(function () {
  "use strict";

  angular.module("klondike.board", ["ngRoute", "klondike.game"]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/board", {
      templateUrl: "klondike/board.html",
      controller: "KlondikeController"
    }).otherwise({
      redirectTo: "/board"
    });
  }]).controller("KlondikeController", ["$scope", "klondikeGame", "scoring", function KlondikeController($scope, klondikeGame, scoring) {
    klondikeGame.newGame();
    $scope.game = klondikeGame;
    $scope.scoring = scoring;
  }]).directive("sNoPile", function () {
    return {
      restrict: "E",
      template: "<div class=\"no-pile\"></div>"
    };
  }).directive("sTableau", function () {
    return {
      restrict: "E",
      templateUrl: "klondike/piles/tableau.html"
    };
  }).directive("sFoundation", function () {
    return {
      restrict: "E",
      templateUrl: "klondike/piles/foundation.html"
    };
  }).directive("sCard", function () {
    return {
      restrict: "A",
      templateUrl: "cards/card.html",
      scope: {
        card: "="
      }
    };
  }).directive("sRemainder", function () {
    return {
      restrict: "E",
      templateUrl: "klondike/piles/remainder.html"
    };
  }).directive("sWaste", function () {
    return {
      restrict: "E",
      templateUrl: "klondike/piles/waste.html"
    };
  });
})();

/***/ }),

/***/ "./app/klondike/game.js":
/***/ (function(module, exports) {

(function () {
  "use strict";

  angular.module("klondike.game", []).service("klondikeGame", ["scoring", KlondikeGame]);

  function KlondikeGame(scoring) {
    this.newGame = function newGame() {
      var cards = new Deck().shuffled();
      this.newGameFromDeck(cards);
    };

    this.newGameFromDeck = function (cards) {
      scoring.newGame();
      turnAllCardsDown(cards);
      this.tableaus = dealTableaus(cards);
      this.foundations = buildFoundations();
      this.remainder = dealRemainder(cards);
    };

    function turnAllCardsDown(cards) {
      cards.forEach(function (card) {
        card.turnDown();
      });
    }

    function dealTableaus(cards) {
      var tableaus = [new TableauPile(cards.slice(0, 1), scoring), new TableauPile(cards.slice(1, 3), scoring), new TableauPile(cards.slice(3, 6), scoring), new TableauPile(cards.slice(6, 10), scoring), new TableauPile(cards.slice(10, 15), scoring), new TableauPile(cards.slice(15, 21), scoring), new TableauPile(cards.slice(21, 28), scoring)];
      tableaus.forEach(function (tableau) {
        tableau.turnTopCardUp();
      });
      return tableaus;
    }

    function buildFoundations() {
      console.log('hello');
      return _.range(1, 5).map(function () {
        return new FoundationPile([], scoring);
      });
    }

    function dealRemainder(cards) {
      return new RemainderPile(cards.slice(28), scoring);
    }
  }

  KlondikeGame.prototype.tryMoveTopCardToAnyFoundation = function (sourcePile) {
    if (sourcePile.isEmpty()) {
      return;
    }

    var foundationThatWillAccept = _.find(this.foundations, function (foundation) {
      return foundation.willAcceptCard(sourcePile.topCard());
    });

    if (foundationThatWillAccept) {
      foundationThatWillAccept.moveCardsFrom(sourcePile);
    }
  };
})();

/***/ }),

/***/ "./app/klondike/klondike.js":
/***/ (function(module, exports) {

angular.module("klondike", ["klondike.game", "klondike.board", "klondike.scoring"]);

/***/ }),

/***/ "./app/klondike/scoring.js":
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bulle = function bulle(kaka) {
  _classCallCheck(this, bulle);

  this.senap = kaka;
};

function Scoring() {
  "use strict";

  this.score = 0;

  this.newGame = function () {
    this.score = 0;
  };

  this.tableauCardTurnedUp = function () {
    this.score += 5;
  };

  this.dropped = function (source, destionation) {
    this.score += scoreForMoving(source, destionation) || 0;
  };

  this.wasteRecycled = function () {
    this.score = Math.max(this.score - 100, 0);
  };

  function scoreForMoving(source, destionation) {
    if (destionation.name === "TableauPile") {
      if (source.name === "FoundationPile") {
        return -15;
      }

      return 5;
    }

    if (destionation.name === "FoundationPile") {
      if (source.name === "TableauPile" || source.name === "WastePile") {
        return 10;
      }
    }
  }
}

console.log('before test of variables');
console.log("production");

if (false) {}

if (false) { var newScoringService, actualService, injector, doc; }

angular.module("klondike.scoring", []).service("scoring", [Scoring]);

/***/ })

/******/ });