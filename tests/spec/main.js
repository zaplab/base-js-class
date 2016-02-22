
import ZapClass from 'zap-base-js-class';

describe('zap-base-js-class', () => {
    class Animal extends ZapClass {
        static defaultOptions = {
            eyes: 2,
        };

        getEyesCount() {
            return this.options.eyes;
        }

        makeSound(sound) {
            return sound;
        }
    }

    beforeEach(() => {});

    afterEach(() => {});

    describe('zap-base-js-class should export the following', () => {
        it('ZapClass', () => {
            expect(ZapClass).toEqual(jasmine.any(Function));
        });
    });

    describe('testing basics about class', () => {
        class AnimalWithEvent extends ZapClass {
            getEyesCount() {
                return this.options.eyes;
            }

            makeSound(sound) {
                this.fireEvent('sound', [sound]);

                return sound;
            }
        }

        class ContaminatedFish extends Animal {
            static defaultOptions = {
                eyes: 3,
            };
        }

        const animalInstance = new Animal();
        const animal2Instance = new Animal({
            eyes: 3,
        });

        const animal3Instance = new ContaminatedFish();
        const animal4Instance = new ContaminatedFish({
            eyes: 4,
        });

        it('testing if Class options work, setting options = {eyes: 2}, new Animal()', () => {
            const eye = animalInstance.getEyesCount();

            expect(eye).toEqual(2);
        });

        it('testing if setOptions() work, new Animal({eyes: 3})', () => {
            const eye = animal2Instance.getEyesCount();

            expect(eye).toEqual(3);
        });

        it('testing if setOptions() work, new ContaminatedFish()', () => {
            const eye = animal3Instance.getEyesCount();

            expect(eye).toEqual(3);
        });

        it('testing if setOptions() work, new ContaminatedFish({eyes: 4})', () => {
            const eye = animal4Instance.getEyesCount();

            expect(eye).toEqual(4);
        });

        it('testing if method works, animalInstance.makeSound(\'moo\') ', () => {
            const sound = animalInstance.makeSound('moo');

            expect(sound).toEqual('moo');
        });

        it('testing if fireEvent(\'..\') works inside the Class', function (done) {
            const onSoundEventSpy = jasmine.createSpy('onSoundEventSpy');
            const animalInstance = new AnimalWithEvent({
                onSound: onSoundEventSpy,
            });

            animalInstance.makeSound('moo');

            setTimeout(function () {
                expect(onSoundEventSpy).toHaveBeenCalled();
                done();
            }, 20);
        });

        it('testing if fireEvent(\'..\') works inside the Class and passes correct arguments', function (done) {
            const onSoundEventSpy = jasmine.createSpy('onSoundEventSpy');
            const animalInstance = new AnimalWithEvent({
                onSound: onSoundEventSpy,
            });

            animalInstance.makeSound('moo');

            setTimeout(function () {
                expect(onSoundEventSpy).toHaveBeenCalledWith('moo');
                done();
            }, 20);
        });

        it('testing if fireEvent(\'..\') works outside the Class', function (done) {
            const onSoundEventSpy = jasmine.createSpy('onSoundEventSpy');
            const animalInstance = new AnimalWithEvent({
                onSound: onSoundEventSpy,
            });

            animalInstance.fireEvent('sound', ['moo']);

            setTimeout(function () {
                expect(onSoundEventSpy).toHaveBeenCalled();
                done();
            }, 20);
        });

        it('testing if fireEvent(\'..\') works outside the Class and returns arguments', function (done) {
            const onSoundEventSpy = jasmine.createSpy('onSoundEventSpy');
            const animalInstance = new AnimalWithEvent({
                onSound: onSoundEventSpy,
            });

            animalInstance.fireEvent('sound', ['moo']);

            setTimeout(function () {
                expect(onSoundEventSpy).toHaveBeenCalledWith('moo');
                done();
            }, 20);
        });

        it('testing if removeEvent(\'..\') works inside the Class', function (done) {
            const onSoundEventSpy = jasmine.createSpy('onSoundEventSpy');

            class AnimalWithEvent2 extends ZapClass {
                static defaultOptions = {
                    eyes: 2,
                };

                getEyesCount() {
                    return this.options.eyes;
                }

                makeSound(sound) {
                    animalInstance.removeEvent('sound', onSoundEventSpy);
                    animalInstance.fireEvent('sound', ['moo']);

                    return sound;
                }
            }

            const animalInstance = new AnimalWithEvent2({
                onSound: onSoundEventSpy,
            });

            animalInstance.makeSound('moo');

            setTimeout(function () {
                expect(onSoundEventSpy).not.toHaveBeenCalled();
                done();
            }, 20);
        });

        it('testing if removeEvent(\'..\') works outside the Class', function (done) {
            const onSoundEventSpy = jasmine.createSpy('onSoundEventSpy');
            const animalInstance = new AnimalWithEvent({
                onSound: onSoundEventSpy,
            });

            animalInstance.removeEvent('sound', onSoundEventSpy);
            animalInstance.fireEvent('sound', ['moo']);

            setTimeout(function () {
                expect(onSoundEventSpy).not.toHaveBeenCalled();
                done();
            }, 20);
        });
    });

    describe('testing simple inheritance (one level)', () => {
        class ContaminatedFish extends Animal {
            static defaultOptions = {
                eyes: 3,
            };

            makeSound(sound) {
                var parentSound = super.makeSound('parentSound1');

                return parentSound + ' - ' + sound;
            }
        }

        const pig = new Animal();
        const oneEyedPig = new Animal({
            eyes: 1,
        });
        const spider = new Animal({
            eyes: 8,
        });
        const contaminatedFish = new ContaminatedFish();

        it('pig.makeSound(\'oink oink\') should return \'oink oink\'', () => {
            const pigSound = pig.makeSound('oink oink');

            expect(pigSound).toEqual('oink oink');
        });

        it('pig.getEyesCount() should return 2', () => {
            const pigEye = pig.getEyesCount();

            expect(pigEye).toEqual(2);
        });

        it('oneEyedPig.getEyesCount() should return 1', () => {
            const oneEyedPigEye = oneEyedPig.getEyesCount();

            expect(oneEyedPigEye).toEqual(1);
        });

        it('spider.getEyesCount() should return 8', () => {
            const spiderEye = spider.getEyesCount();

            expect(spiderEye).toEqual(8);
        });

        it('contaminatedFish.getEyesCount() should return 3', () => {
            const contaminatedFishEye = contaminatedFish.getEyesCount();

            expect(contaminatedFishEye).toEqual(3);
        });

        it('super.makeSound(\'parentSound1\')', () => {
            const contaminatedFishSound = contaminatedFish.makeSound('blubb');

            expect(contaminatedFishSound).toEqual('parentSound1 - blubb');
        });
    });

    describe('testing inheritance (two level)', () => {
        class ContaminatedFish extends Animal {
            static defaultOptions = {
                eyes: 3,
            };

            makeSound(sound) {
                var parentSound = super.makeSound('parentSound1');

                return parentSound + ' - ' + sound;
            }
        }

        class ContaminatedFish2 extends ContaminatedFish {
            static defaultOptions = {
                eyes: 4,
            };

            makeSound(sound) {
                var parentSound = super.makeSound('parentSound2');

                return parentSound + ' - ' + sound;
            }
        }

        const contaminatedFish = new ContaminatedFish();
        const contaminatedFish2 = new ContaminatedFish2();

        it('contaminatedFish.getEyesCount() should return 3', () => {
            const contaminatedFishEye = contaminatedFish.getEyesCount();

            expect(contaminatedFishEye).toEqual(3);
        });

        it('super.makeSound(\'parentSound1\')', () => {
            const contaminatedFishSound = contaminatedFish.makeSound('blubb');

            expect(contaminatedFishSound).toEqual('parentSound1 - blubb');
        });

        it('super.makeSound(\'parentSound2\')', () => {
            const contaminatedFish2Sound = contaminatedFish2.makeSound('blubb');

            expect(contaminatedFish2Sound).toEqual('parentSound1 - parentSound2 - blubb');
        });
    });

    describe('testing inheritance (two level - fallback to first level)', () => {
        class TestExtended extends Animal {
            static defaultOptions = {
                eyes: 4,
            };

            makeSound(sound) {
                const parentSound = super.makeSound('parentSound1');

                return parentSound + ' - ' + sound;
            }
        }

        // no overwrites ... testing if its correctly falling back to extended values
        class TestExtended2 extends TestExtended {}

        const testExtended = new TestExtended();
        const testExtended2 = new TestExtended2();

        // testing if testExtended2 options correctly falls back to testExtended
        it('testExtended2.getEyesCount() should return 4', () => {
            const testExtended2Eye = testExtended2.getEyesCount();

            expect(testExtended2Eye).toEqual(4);
        });

        it('testExtended.makeSound(\'abc\')', () => {
            const testExtendedSound = testExtended.makeSound('abc');

            expect(testExtendedSound).toEqual('parentSound1 - abc');
        });

        // testing if testExtended2.makeSound correctly falls back to testExtended.makeSound
        it('testExtended2.makeSound(\'xyz\')', () => {
            const testExtended2Sound = testExtended2.makeSound('xyz');

            expect(testExtended2Sound).toEqual('parentSound1 - xyz');
        });
    });

    describe('testing inheritance of initialize (two level)', () => {
        class TestExtended extends Animal {
            static defaultOptions = {
                eyes: 4,
            };

            constructor(options = {}) {
                super(options);

                this.options.eyes = 10;
            }
        }

        class TestExtended2 extends TestExtended {
            constructor(options = {}) {
                super(options);

                this.options.eyes = 1;
            }
        }

        // testing if testExtended2 options correctly falls back to testExtended
        it('testExtended.getEyesCount() should return 10', () => {
            const testExtended = new TestExtended();
            const testExtendedEye = testExtended.getEyesCount();

            expect(testExtendedEye).toEqual(10);
        });

        // testing if testExtended2 options correctly falls back to testExtended
        it('testExtended2.getEyesCount() should return 10', () => {
            const testExtended2 = new TestExtended2();
            const testExtended2Eye = testExtended2.getEyesCount();

            expect(testExtended2Eye).toEqual(1);
        });
    });

    describe('testing inheritance of initialize (two level - fallback to first level)', function () {
        class TestExtended extends Animal {
            static defaultOptions = {
                eyes: 4,
            };

            constructor(options = {}) {
                super(options);

                this.options.eyes = 10;
            }
        }

        // no overwrites ... testing if its correctly falling back to extended values
        class TestExtended2 extends TestExtended {}

        const testExtended = new TestExtended();
        const testExtended2 = new TestExtended2();

        // testing if testExtended2 options correctly falls back to testExtended
        it('testExtended.getEyesCount() should return 10', function () {
            const testExtendedEye = testExtended.getEyesCount();

            expect(testExtendedEye).toEqual(10);
        });

        // testing if testExtended2 options correctly falls back to testExtended
        it('testExtended2.getEyesCount() should return 10', function () {
            const testExtended2Eye = testExtended2.getEyesCount();

            expect(testExtended2Eye).toEqual(10);
        });

        it('initTest being called', function () {
            const methodSpy = jasmine.createSpy('methodSpy');

            class InitTest extends ZapClass {
                static defaultOptions = {
                    eyes: 4,
                };

                constructor(options = {}) {
                    super(options);

                    this.initTest();
                }

                initTest() {
                    methodSpy();
                }
            }

            new InitTest();

            expect(methodSpy).toHaveBeenCalled();
        });

        it('initTest of parent being called', function () {
            const methodSpy = jasmine.createSpy('methodSpy');

            class InitTest extends ZapClass {
                static defaultOptions = {
                    eyes: 4,
                };

                constructor(options = {}) {
                    super(options);

                    this.initTest();
                }

                initTest() {
                    methodSpy();
                }
            }

            class InitTestExtended extends InitTest {}

            new InitTestExtended();

            expect(methodSpy).toHaveBeenCalled();
        });

        it('initTest of parents parent being called', function () {
            const methodSpy = jasmine.createSpy('methodSpy');

            class InitTest extends ZapClass {
                static defaultOptions = {
                    eyes: 4,
                };

                constructor(options = {}) {
                    super(options);

                    this.initTest();
                }

                initTest() {
                    methodSpy();
                }
            }

            class InitTestExtended extends InitTest {
                initTest() {
                    super.initTest();
                }
            }

            class InitTestExtended2 extends InitTestExtended {}

            new InitTestExtended2();

            expect(methodSpy).toHaveBeenCalled();
        });
    });

    describe('testing inheritance (three level - fallback to first level)', function () {
        class AnimalExtended extends Animal {
            static defaultOptions = {
                eyes: 4,
            };

            makeSound(sound) {
                const parentSound = super.makeSound('parentSound1');

                return parentSound + ' - ' + sound;
            }
        }

        // no overwrites ... testing if its correctly falling back to extended values
        class AnimalExtended2 extends AnimalExtended {}

        class AnimalExtended3 extends AnimalExtended2 {
            makeSound(sound) {
                const parentSound = super.makeSound('parentSound2');

                return parentSound + ' - ' + sound;
            }
        }

        const animalExtended = new AnimalExtended();
        const animalExtended2 = new AnimalExtended2();
        const animalExtended3 = new AnimalExtended3();

        // testing if testExtended2 options correctly falls back to testExtended
        it('testExtended2.getEyesCount() should return 4', function () {
            const testExtended2Eye = animalExtended2.getEyesCount();

            expect(testExtended2Eye).toEqual(4);
        });

        it('testExtended.makeSound(\'abc\') -> \'parentSound1 - abc\'', function () {
            const testExtendedSound = animalExtended.makeSound('abc');

            expect(testExtendedSound).toEqual('parentSound1 - abc');
        });

        // testing if testExtended2.makeSound correctly falls back to testExtended.makeSound
        it('testExtended2.makeSound(\'xyz\') -> \'parentSound1 - xyz\'', function () {
            const testExtended2Sound = animalExtended2.makeSound('xyz');

            expect(testExtended2Sound).toEqual('parentSound1 - xyz');
        });

        // testing if testExtended3.makeSound correctly falls back to testExtended.makeSound
        it('testExtended3.makeSound(\'xxx\') -> \'parentSound1 - xxx\'', function () {
            const testExtended3Sound = animalExtended3.makeSound('xxx');

            expect(testExtended3Sound).toEqual('parentSound1 - parentSound2 - xxx');
        });
    });
});
