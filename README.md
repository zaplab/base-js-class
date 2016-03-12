# zap-base-js-class [![Build Status](https://travis-ci.org/zaplab/base-js-class.svg?branch=master)](https://travis-ci.org/zaplab/base-js-class)

just translating (and testing) some old code to ES7,
nothing to see here ;-)
(originally inspired by MooTools Class)

## Install
```
$ npm install zap-base-js-class
```

## Usage
```js
import {
    ZapClass,
} from 'zap-base-js-class';

class Animal extends ZapClass {
    static defaultOptions = {
        legs: 4,
        onJump: () => {
            console.log('jumping');
        },
    };

    getLegsCount() {
        return this.options.legs;
    }

    jump() {
        this.fireEvent('jump');
    }
}

const cat = new Animal();
cat.getLegsCount(); // 4

const spider = new Animal({
    legs: 8,
});
spider.getLegsCount(); // 8

class Monkey extends Animal {
    static defaultOptions = Object.assign({}, Animal.defaultOptions, {
        legs: 2,
    });
}

const baboon = new Monkey({
    onJump: () => {
        console.log('jumping and showing butt');
    },
});
baboon.getLegsCount(); // 2
baboon.jump(); // console.log('jumping and showing butt');
```

