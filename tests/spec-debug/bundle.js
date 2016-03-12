/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _zapBaseJsClass = __webpack_require__(1);

	var _zapBaseJsClass2 = _interopRequireDefault(_zapBaseJsClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	describe('zap-base-js-class', function () {
	    var Animal = function (_ZapClass) {
	        _inherits(Animal, _ZapClass);

	        function Animal() {
	            _classCallCheck(this, Animal);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(Animal).apply(this, arguments));
	        }

	        _createClass(Animal, [{
	            key: 'getEyesCount',
	            value: function getEyesCount() {
	                return this.options.eyes;
	            }
	        }, {
	            key: 'makeSound',
	            value: function makeSound(sound) {
	                return sound;
	            }
	        }]);

	        return Animal;
	    }(_zapBaseJsClass2.default);

	    Animal.defaultOptions = {
	        eyes: 2
	    };


	    beforeEach(function () {});

	    afterEach(function () {});

	    describe('zap-base-js-class should export the following', function () {
	        it('ZapClass', function () {
	            expect(_zapBaseJsClass2.default).toEqual(jasmine.any(Function));
	        });
	    });

	    describe('testing basics about class', function () {
	        var AnimalWithEvent = function (_ZapClass2) {
	            _inherits(AnimalWithEvent, _ZapClass2);

	            function AnimalWithEvent() {
	                _classCallCheck(this, AnimalWithEvent);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(AnimalWithEvent).apply(this, arguments));
	            }

	            _createClass(AnimalWithEvent, [{
	                key: 'getEyesCount',
	                value: function getEyesCount() {
	                    return this.options.eyes;
	                }
	            }, {
	                key: 'makeSound',
	                value: function makeSound(sound) {
	                    this.fireEvent('sound', [sound]);

	                    return sound;
	                }
	            }]);

	            return AnimalWithEvent;
	        }(_zapBaseJsClass2.default);

	        var ContaminatedFish = function (_Animal) {
	            _inherits(ContaminatedFish, _Animal);

	            function ContaminatedFish() {
	                _classCallCheck(this, ContaminatedFish);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(ContaminatedFish).apply(this, arguments));
	            }

	            return ContaminatedFish;
	        }(Animal);

	        ContaminatedFish.defaultOptions = {
	            eyes: 3
	        };


	        var animalInstance = new Animal();
	        var animal2Instance = new Animal({
	            eyes: 3
	        });

	        var animal3Instance = new ContaminatedFish();
	        var animal4Instance = new ContaminatedFish({
	            eyes: 4
	        });

	        it('testing if Class options work, setting options = {eyes: 2}, new Animal()', function () {
	            var eye = animalInstance.getEyesCount();

	            expect(eye).toEqual(2);
	        });

	        it('testing if setOptions() work, new Animal({eyes: 3})', function () {
	            var eye = animal2Instance.getEyesCount();

	            expect(eye).toEqual(3);
	        });

	        it('testing if setOptions() work, new ContaminatedFish()', function () {
	            var eye = animal3Instance.getEyesCount();

	            expect(eye).toEqual(3);
	        });

	        it('testing if setOptions() work, new ContaminatedFish({eyes: 4})', function () {
	            var eye = animal4Instance.getEyesCount();

	            expect(eye).toEqual(4);
	        });

	        it('testing if method works, animalInstance.makeSound(\'moo\') ', function () {
	            var sound = animalInstance.makeSound('moo');

	            expect(sound).toEqual('moo');
	        });

	        it('testing if fireEvent(\'..\') works inside the Class', function (done) {
	            var onSoundEventSpy = jasmine.createSpy('onSoundEventSpy');
	            var animalInstance = new AnimalWithEvent({
	                onSound: onSoundEventSpy
	            });

	            animalInstance.makeSound('moo');

	            setTimeout(function () {
	                expect(onSoundEventSpy).toHaveBeenCalled();
	                done();
	            }, 20);
	        });

	        it('testing if fireEvent(\'..\') works inside the Class and passes correct arguments', function (done) {
	            var onSoundEventSpy = jasmine.createSpy('onSoundEventSpy');
	            var animalInstance = new AnimalWithEvent({
	                onSound: onSoundEventSpy
	            });

	            animalInstance.makeSound('moo');

	            setTimeout(function () {
	                expect(onSoundEventSpy).toHaveBeenCalledWith('moo');
	                done();
	            }, 20);
	        });

	        it('testing if fireEvent(\'..\') works outside the Class', function (done) {
	            var onSoundEventSpy = jasmine.createSpy('onSoundEventSpy');
	            var animalInstance = new AnimalWithEvent({
	                onSound: onSoundEventSpy
	            });

	            animalInstance.fireEvent('sound', ['moo']);

	            setTimeout(function () {
	                expect(onSoundEventSpy).toHaveBeenCalled();
	                done();
	            }, 20);
	        });

	        it('testing if fireEvent(\'..\') works outside the Class and returns arguments', function (done) {
	            var onSoundEventSpy = jasmine.createSpy('onSoundEventSpy');
	            var animalInstance = new AnimalWithEvent({
	                onSound: onSoundEventSpy
	            });

	            animalInstance.fireEvent('sound', ['moo']);

	            setTimeout(function () {
	                expect(onSoundEventSpy).toHaveBeenCalledWith('moo');
	                done();
	            }, 20);
	        });

	        it('testing if removeEvent(\'..\') works inside the Class', function (done) {
	            var onSoundEventSpy = jasmine.createSpy('onSoundEventSpy');

	            var AnimalWithEvent2 = function (_ZapClass3) {
	                _inherits(AnimalWithEvent2, _ZapClass3);

	                function AnimalWithEvent2() {
	                    _classCallCheck(this, AnimalWithEvent2);

	                    return _possibleConstructorReturn(this, Object.getPrototypeOf(AnimalWithEvent2).apply(this, arguments));
	                }

	                _createClass(AnimalWithEvent2, [{
	                    key: 'getEyesCount',
	                    value: function getEyesCount() {
	                        return this.options.eyes;
	                    }
	                }, {
	                    key: 'makeSound',
	                    value: function makeSound(sound) {
	                        animalInstance.removeEvent('sound', onSoundEventSpy);
	                        animalInstance.fireEvent('sound', ['moo']);

	                        return sound;
	                    }
	                }]);

	                return AnimalWithEvent2;
	            }(_zapBaseJsClass2.default);

	            AnimalWithEvent2.defaultOptions = {
	                eyes: 2
	            };


	            var animalInstance = new AnimalWithEvent2({
	                onSound: onSoundEventSpy
	            });

	            animalInstance.makeSound('moo');

	            setTimeout(function () {
	                expect(onSoundEventSpy).not.toHaveBeenCalled();
	                done();
	            }, 20);
	        });

	        it('testing if removeEvent(\'..\') works outside the Class', function (done) {
	            var onSoundEventSpy = jasmine.createSpy('onSoundEventSpy');
	            var animalInstance = new AnimalWithEvent({
	                onSound: onSoundEventSpy
	            });

	            animalInstance.removeEvent('sound', onSoundEventSpy);
	            animalInstance.fireEvent('sound', ['moo']);

	            setTimeout(function () {
	                expect(onSoundEventSpy).not.toHaveBeenCalled();
	                done();
	            }, 20);
	        });
	    });

	    describe('testing simple inheritance (one level)', function () {
	        var ContaminatedFish = function (_Animal2) {
	            _inherits(ContaminatedFish, _Animal2);

	            function ContaminatedFish() {
	                _classCallCheck(this, ContaminatedFish);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(ContaminatedFish).apply(this, arguments));
	            }

	            _createClass(ContaminatedFish, [{
	                key: 'makeSound',
	                value: function makeSound(sound) {
	                    var parentSound = _get(Object.getPrototypeOf(ContaminatedFish.prototype), 'makeSound', this).call(this, 'parentSound1');

	                    return parentSound + ' - ' + sound;
	                }
	            }]);

	            return ContaminatedFish;
	        }(Animal);

	        ContaminatedFish.defaultOptions = {
	            eyes: 3
	        };


	        var pig = new Animal();
	        var oneEyedPig = new Animal({
	            eyes: 1
	        });
	        var spider = new Animal({
	            eyes: 8
	        });
	        var contaminatedFish = new ContaminatedFish();

	        it('pig.makeSound(\'oink oink\') should return \'oink oink\'', function () {
	            var pigSound = pig.makeSound('oink oink');

	            expect(pigSound).toEqual('oink oink');
	        });

	        it('pig.getEyesCount() should return 2', function () {
	            var pigEye = pig.getEyesCount();

	            expect(pigEye).toEqual(2);
	        });

	        it('oneEyedPig.getEyesCount() should return 1', function () {
	            var oneEyedPigEye = oneEyedPig.getEyesCount();

	            expect(oneEyedPigEye).toEqual(1);
	        });

	        it('spider.getEyesCount() should return 8', function () {
	            var spiderEye = spider.getEyesCount();

	            expect(spiderEye).toEqual(8);
	        });

	        it('contaminatedFish.getEyesCount() should return 3', function () {
	            var contaminatedFishEye = contaminatedFish.getEyesCount();

	            expect(contaminatedFishEye).toEqual(3);
	        });

	        it('super.makeSound(\'parentSound1\')', function () {
	            var contaminatedFishSound = contaminatedFish.makeSound('blubb');

	            expect(contaminatedFishSound).toEqual('parentSound1 - blubb');
	        });
	    });

	    describe('testing inheritance (two level)', function () {
	        var ContaminatedFish = function (_Animal3) {
	            _inherits(ContaminatedFish, _Animal3);

	            function ContaminatedFish() {
	                _classCallCheck(this, ContaminatedFish);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(ContaminatedFish).apply(this, arguments));
	            }

	            _createClass(ContaminatedFish, [{
	                key: 'makeSound',
	                value: function makeSound(sound) {
	                    var parentSound = _get(Object.getPrototypeOf(ContaminatedFish.prototype), 'makeSound', this).call(this, 'parentSound1');

	                    return parentSound + ' - ' + sound;
	                }
	            }]);

	            return ContaminatedFish;
	        }(Animal);

	        ContaminatedFish.defaultOptions = {
	            eyes: 3
	        };

	        var ContaminatedFish2 = function (_ContaminatedFish) {
	            _inherits(ContaminatedFish2, _ContaminatedFish);

	            function ContaminatedFish2() {
	                _classCallCheck(this, ContaminatedFish2);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(ContaminatedFish2).apply(this, arguments));
	            }

	            _createClass(ContaminatedFish2, [{
	                key: 'makeSound',
	                value: function makeSound(sound) {
	                    var parentSound = _get(Object.getPrototypeOf(ContaminatedFish2.prototype), 'makeSound', this).call(this, 'parentSound2');

	                    return parentSound + ' - ' + sound;
	                }
	            }]);

	            return ContaminatedFish2;
	        }(ContaminatedFish);

	        ContaminatedFish2.defaultOptions = {
	            eyes: 4
	        };


	        var contaminatedFish = new ContaminatedFish();
	        var contaminatedFish2 = new ContaminatedFish2();

	        it('contaminatedFish.getEyesCount() should return 3', function () {
	            var contaminatedFishEye = contaminatedFish.getEyesCount();

	            expect(contaminatedFishEye).toEqual(3);
	        });

	        it('super.makeSound(\'parentSound1\')', function () {
	            var contaminatedFishSound = contaminatedFish.makeSound('blubb');

	            expect(contaminatedFishSound).toEqual('parentSound1 - blubb');
	        });

	        it('super.makeSound(\'parentSound2\')', function () {
	            var contaminatedFish2Sound = contaminatedFish2.makeSound('blubb');

	            expect(contaminatedFish2Sound).toEqual('parentSound1 - parentSound2 - blubb');
	        });
	    });

	    describe('testing inheritance (two level - fallback to first level)', function () {
	        var TestExtended = function (_Animal4) {
	            _inherits(TestExtended, _Animal4);

	            function TestExtended() {
	                _classCallCheck(this, TestExtended);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(TestExtended).apply(this, arguments));
	            }

	            _createClass(TestExtended, [{
	                key: 'makeSound',
	                value: function makeSound(sound) {
	                    var parentSound = _get(Object.getPrototypeOf(TestExtended.prototype), 'makeSound', this).call(this, 'parentSound1');

	                    return parentSound + ' - ' + sound;
	                }
	            }]);

	            return TestExtended;
	        }(Animal);

	        // no overwrites ... testing if its correctly falling back to extended values


	        TestExtended.defaultOptions = {
	            eyes: 4
	        };

	        var TestExtended2 = function (_TestExtended) {
	            _inherits(TestExtended2, _TestExtended);

	            function TestExtended2() {
	                _classCallCheck(this, TestExtended2);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(TestExtended2).apply(this, arguments));
	            }

	            return TestExtended2;
	        }(TestExtended);

	        var testExtended = new TestExtended();
	        var testExtended2 = new TestExtended2();

	        // testing if testExtended2 options correctly falls back to testExtended
	        it('testExtended2.getEyesCount() should return 4', function () {
	            var testExtended2Eye = testExtended2.getEyesCount();

	            expect(testExtended2Eye).toEqual(4);
	        });

	        it('testExtended.makeSound(\'abc\')', function () {
	            var testExtendedSound = testExtended.makeSound('abc');

	            expect(testExtendedSound).toEqual('parentSound1 - abc');
	        });

	        // testing if testExtended2.makeSound correctly falls back to testExtended.makeSound
	        it('testExtended2.makeSound(\'xyz\')', function () {
	            var testExtended2Sound = testExtended2.makeSound('xyz');

	            expect(testExtended2Sound).toEqual('parentSound1 - xyz');
	        });
	    });

	    describe('testing inheritance of initialize (two level)', function () {
	        var TestExtended = function (_Animal5) {
	            _inherits(TestExtended, _Animal5);

	            function TestExtended() {
	                var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	                _classCallCheck(this, TestExtended);

	                var _this10 = _possibleConstructorReturn(this, Object.getPrototypeOf(TestExtended).call(this, options));

	                _this10.options.eyes = 10;
	                return _this10;
	            }

	            return TestExtended;
	        }(Animal);

	        TestExtended.defaultOptions = {
	            eyes: 4
	        };

	        var TestExtended2 = function (_TestExtended2) {
	            _inherits(TestExtended2, _TestExtended2);

	            function TestExtended2() {
	                var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	                _classCallCheck(this, TestExtended2);

	                var _this11 = _possibleConstructorReturn(this, Object.getPrototypeOf(TestExtended2).call(this, options));

	                _this11.options.eyes = 1;
	                return _this11;
	            }

	            return TestExtended2;
	        }(TestExtended);

	        // testing if testExtended2 options correctly falls back to testExtended


	        it('testExtended.getEyesCount() should return 10', function () {
	            var testExtended = new TestExtended();
	            var testExtendedEye = testExtended.getEyesCount();

	            expect(testExtendedEye).toEqual(10);
	        });

	        // testing if testExtended2 options correctly falls back to testExtended
	        it('testExtended2.getEyesCount() should return 10', function () {
	            var testExtended2 = new TestExtended2();
	            var testExtended2Eye = testExtended2.getEyesCount();

	            expect(testExtended2Eye).toEqual(1);
	        });
	    });

	    describe('testing inheritance of initialize (two level - fallback to first level)', function () {
	        var TestExtended = function (_Animal6) {
	            _inherits(TestExtended, _Animal6);

	            function TestExtended() {
	                var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	                _classCallCheck(this, TestExtended);

	                var _this12 = _possibleConstructorReturn(this, Object.getPrototypeOf(TestExtended).call(this, options));

	                _this12.options.eyes = 10;
	                return _this12;
	            }

	            return TestExtended;
	        }(Animal);

	        // no overwrites ... testing if its correctly falling back to extended values


	        TestExtended.defaultOptions = {
	            eyes: 4
	        };

	        var TestExtended2 = function (_TestExtended3) {
	            _inherits(TestExtended2, _TestExtended3);

	            function TestExtended2() {
	                _classCallCheck(this, TestExtended2);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(TestExtended2).apply(this, arguments));
	            }

	            return TestExtended2;
	        }(TestExtended);

	        var testExtended = new TestExtended();
	        var testExtended2 = new TestExtended2();

	        // testing if testExtended2 options correctly falls back to testExtended
	        it('testExtended.getEyesCount() should return 10', function () {
	            var testExtendedEye = testExtended.getEyesCount();

	            expect(testExtendedEye).toEqual(10);
	        });

	        // testing if testExtended2 options correctly falls back to testExtended
	        it('testExtended2.getEyesCount() should return 10', function () {
	            var testExtended2Eye = testExtended2.getEyesCount();

	            expect(testExtended2Eye).toEqual(10);
	        });

	        it('initTest being called', function () {
	            var methodSpy = jasmine.createSpy('methodSpy');

	            var InitTest = function (_ZapClass4) {
	                _inherits(InitTest, _ZapClass4);

	                function InitTest() {
	                    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	                    _classCallCheck(this, InitTest);

	                    var _this14 = _possibleConstructorReturn(this, Object.getPrototypeOf(InitTest).call(this, options));

	                    _this14.initTest();
	                    return _this14;
	                }

	                _createClass(InitTest, [{
	                    key: 'initTest',
	                    value: function initTest() {
	                        methodSpy();
	                    }
	                }]);

	                return InitTest;
	            }(_zapBaseJsClass2.default);

	            InitTest.defaultOptions = {
	                eyes: 4
	            };


	            new InitTest();

	            expect(methodSpy).toHaveBeenCalled();
	        });

	        it('initTest of parent being called', function () {
	            var methodSpy = jasmine.createSpy('methodSpy');

	            var InitTest = function (_ZapClass5) {
	                _inherits(InitTest, _ZapClass5);

	                function InitTest() {
	                    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	                    _classCallCheck(this, InitTest);

	                    var _this15 = _possibleConstructorReturn(this, Object.getPrototypeOf(InitTest).call(this, options));

	                    _this15.initTest();
	                    return _this15;
	                }

	                _createClass(InitTest, [{
	                    key: 'initTest',
	                    value: function initTest() {
	                        methodSpy();
	                    }
	                }]);

	                return InitTest;
	            }(_zapBaseJsClass2.default);

	            InitTest.defaultOptions = {
	                eyes: 4
	            };

	            var InitTestExtended = function (_InitTest) {
	                _inherits(InitTestExtended, _InitTest);

	                function InitTestExtended() {
	                    _classCallCheck(this, InitTestExtended);

	                    return _possibleConstructorReturn(this, Object.getPrototypeOf(InitTestExtended).apply(this, arguments));
	                }

	                return InitTestExtended;
	            }(InitTest);

	            new InitTestExtended();

	            expect(methodSpy).toHaveBeenCalled();
	        });

	        it('initTest of parents parent being called', function () {
	            var methodSpy = jasmine.createSpy('methodSpy');

	            var InitTest = function (_ZapClass6) {
	                _inherits(InitTest, _ZapClass6);

	                function InitTest() {
	                    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	                    _classCallCheck(this, InitTest);

	                    var _this17 = _possibleConstructorReturn(this, Object.getPrototypeOf(InitTest).call(this, options));

	                    _this17.initTest();
	                    return _this17;
	                }

	                _createClass(InitTest, [{
	                    key: 'initTest',
	                    value: function initTest() {
	                        methodSpy();
	                    }
	                }]);

	                return InitTest;
	            }(_zapBaseJsClass2.default);

	            InitTest.defaultOptions = {
	                eyes: 4
	            };

	            var InitTestExtended = function (_InitTest2) {
	                _inherits(InitTestExtended, _InitTest2);

	                function InitTestExtended() {
	                    _classCallCheck(this, InitTestExtended);

	                    return _possibleConstructorReturn(this, Object.getPrototypeOf(InitTestExtended).apply(this, arguments));
	                }

	                _createClass(InitTestExtended, [{
	                    key: 'initTest',
	                    value: function initTest() {
	                        _get(Object.getPrototypeOf(InitTestExtended.prototype), 'initTest', this).call(this);
	                    }
	                }]);

	                return InitTestExtended;
	            }(InitTest);

	            var InitTestExtended2 = function (_InitTestExtended) {
	                _inherits(InitTestExtended2, _InitTestExtended);

	                function InitTestExtended2() {
	                    _classCallCheck(this, InitTestExtended2);

	                    return _possibleConstructorReturn(this, Object.getPrototypeOf(InitTestExtended2).apply(this, arguments));
	                }

	                return InitTestExtended2;
	            }(InitTestExtended);

	            new InitTestExtended2();

	            expect(methodSpy).toHaveBeenCalled();
	        });
	    });

	    describe('testing inheritance (three level - fallback to first level)', function () {
	        var AnimalExtended = function (_Animal7) {
	            _inherits(AnimalExtended, _Animal7);

	            function AnimalExtended() {
	                _classCallCheck(this, AnimalExtended);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(AnimalExtended).apply(this, arguments));
	            }

	            _createClass(AnimalExtended, [{
	                key: 'makeSound',
	                value: function makeSound(sound) {
	                    var parentSound = _get(Object.getPrototypeOf(AnimalExtended.prototype), 'makeSound', this).call(this, 'parentSound1');

	                    return parentSound + ' - ' + sound;
	                }
	            }]);

	            return AnimalExtended;
	        }(Animal);

	        // no overwrites ... testing if its correctly falling back to extended values


	        AnimalExtended.defaultOptions = {
	            eyes: 4
	        };

	        var AnimalExtended2 = function (_AnimalExtended) {
	            _inherits(AnimalExtended2, _AnimalExtended);

	            function AnimalExtended2() {
	                _classCallCheck(this, AnimalExtended2);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(AnimalExtended2).apply(this, arguments));
	            }

	            return AnimalExtended2;
	        }(AnimalExtended);

	        var AnimalExtended3 = function (_AnimalExtended2) {
	            _inherits(AnimalExtended3, _AnimalExtended2);

	            function AnimalExtended3() {
	                _classCallCheck(this, AnimalExtended3);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(AnimalExtended3).apply(this, arguments));
	            }

	            _createClass(AnimalExtended3, [{
	                key: 'makeSound',
	                value: function makeSound(sound) {
	                    var parentSound = _get(Object.getPrototypeOf(AnimalExtended3.prototype), 'makeSound', this).call(this, 'parentSound2');

	                    return parentSound + ' - ' + sound;
	                }
	            }]);

	            return AnimalExtended3;
	        }(AnimalExtended2);

	        var animalExtended = new AnimalExtended();
	        var animalExtended2 = new AnimalExtended2();
	        var animalExtended3 = new AnimalExtended3();

	        // testing if testExtended2 options correctly falls back to testExtended
	        it('testExtended2.getEyesCount() should return 4', function () {
	            var testExtended2Eye = animalExtended2.getEyesCount();

	            expect(testExtended2Eye).toEqual(4);
	        });

	        it('testExtended.makeSound(\'abc\') -> \'parentSound1 - abc\'', function () {
	            var testExtendedSound = animalExtended.makeSound('abc');

	            expect(testExtendedSound).toEqual('parentSound1 - abc');
	        });

	        // testing if testExtended2.makeSound correctly falls back to testExtended.makeSound
	        it('testExtended2.makeSound(\'xyz\') -> \'parentSound1 - xyz\'', function () {
	            var testExtended2Sound = animalExtended2.makeSound('xyz');

	            expect(testExtended2Sound).toEqual('parentSound1 - xyz');
	        });

	        // testing if testExtended3.makeSound correctly falls back to testExtended.makeSound
	        it('testExtended3.makeSound(\'xxx\') -> \'parentSound1 - xxx\'', function () {
	            var testExtended3Sound = animalExtended3.makeSound('xxx');

	            expect(testExtended3Sound).toEqual('parentSound1 - parentSound2 - xxx');
	        });
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _zapBaseJsObject = __webpack_require__(2);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var removeOn = function removeOn(string) {
	    return string.replace(/^on([A-Z])/, function (full, first) {
	        return first.toLowerCase();
	    });
	};

	var _class = function () {

	    /**
	     * @param {Object} [options]
	     */


	    /**
	     * @type {Object}
	     */

	    function _class() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        _classCallCheck(this, _class);

	        this.options = {};
	        this.$events = {};

	        this.setOptions(options);
	    }

	    /**
	     * @access public
	     * @param {Object} options
	     * @returns void
	     */


	    /**
	     * @type {Object}
	     */

	    /**
	     * @type {Object}
	     */


	    _createClass(_class, [{
	        key: 'setOptions',
	        value: function setOptions(options) {
	            this.options = _extends({}, this.constructor.defaultOptions, options);

	            for (var option in this.options) {
	                if (this.options.hasOwnProperty(option) && typeof this.options[option] === 'function' && /^on[A-Z]/.test(option)) {
	                    this.addEvent(removeOn(option), this.options[option]);
	                    delete this.options[option];
	                }
	            }
	        }

	        /**
	         * @access public
	         * @param {String} type
	         * @param {Function} fn
	         * @returns void
	         */

	    }, {
	        key: 'addEvent',
	        value: function addEvent(type, fn) {
	            var eventType = removeOn(type);

	            if (!this.$events) {
	                this.$events = {};
	            }

	            var events = this.$events[eventType] || [];

	            if (events.indexOf(fn) === -1) {
	                events.push(fn);
	                this.$events[eventType] = events;
	            }
	        }

	        /**
	         * @access public
	         * @param {Object} events
	         * @returns void
	         */

	    }, {
	        key: 'addEvents',
	        value: function addEvents(events) {
	            for (var type in events) {
	                if (events.hasOwnProperty(type)) {
	                    this.addEvent(removeOn(type), events[type]);
	                }
	            }
	        }

	        /**
	         * @access public
	         * @param {String} type
	         * @param {Array} args
	         * @returns void
	         */

	    }, {
	        key: 'fireEvent',
	        value: function fireEvent(type) {
	            var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	            var eventType = removeOn(type);
	            var events = this.$events && this.$events[eventType];

	            if (events) {
	                events.forEach(function (fn) {
	                    fn.apply(undefined, _toConsumableArray(args));
	                });
	            }
	        }

	        /**
	         * @access public
	         * @param {String} type
	         * @param {Function} fn
	         * @returns void
	         */

	    }, {
	        key: 'removeEvent',
	        value: function removeEvent(type, fn) {
	            var eventType = removeOn(type);
	            var events = this.$events[eventType];

	            if (events) {
	                var index = events.indexOf(fn);

	                if (index !== -1) {
	                    events.splice(index, 1);

	                    if (!(0, _zapBaseJsObject.length)(this.$events[eventType])) {
	                        delete this.$events[eventType];
	                    }
	                }
	            }
	        }

	        /**
	         * @access public
	         * @param {Object} [events]
	         * @returns void
	         */

	    }, {
	        key: 'removeEvents',
	        value: function removeEvents(events) {
	            if (typeof events === 'undefined') {
	                var $events = this.$events;

	                for (var type in $events) {
	                    if ($events.hasOwnProperty(type)) {
	                        var length = $events[type].length;

	                        for (var i = 0; i < length; ++i) {
	                            this.removeEvent(type, $events[type][i]);
	                        }
	                    }
	                }
	            } else {
	                for (var _type in events) {
	                    if (events.hasOwnProperty(_type)) {
	                        this.removeEvent(_type, events[_type]);
	                    }
	                }
	            }
	        }

	        /**
	         * @access public
	         * @returns void
	         */

	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            this.removeEvents();
	        }
	    }]);

	    return _class;
	}();

	_class.defaultOptions = {};
	exports.default = _class;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.assign = assign;
	exports.clone = clone;
	exports.each = each;
	exports.length = length;

	/**
	 * @param {...Object} [obj]
	 * @returns {Object}
	 */
	function assign() {
	  return _extends.apply(undefined, [{}].concat(Array.prototype.slice.call(arguments)));
	}

	/**
	 * @param {Object} obj
	 * @returns {Object}
	 */
	function clone(obj) {
	  return _extends({}, obj);
	}

	/**
	 * @alias of assign
	 * @param {...Object} [obj]
	 * @returns {Object}
	 */
	exports.extend = assign;

	/**
	 * @param {object} obj
	 * @param {Function} fn
	 */

	function each(obj, fn) {
	  Object.keys(obj).forEach(function (key) {
	    fn(obj[key], key);
	  });
	}

	/**
	 * @alias of each
	 * @param {object} obj
	 * @param {Function} fn
	 */
	exports.forEach = each;

	/**
	 * @param {Object} obj
	 * @returns {Number}
	 */

	function length(obj) {
	  return Object.keys(obj).length;
	}

/***/ }
/******/ ]);