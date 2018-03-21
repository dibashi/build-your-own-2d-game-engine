/* File: GameObjectSet.js 
 *
 * Support for working with a set of GameObjects
 */

/*jslint node: true, vars: true */
/*global  */
/* find out more about jslint: http://www.jslint.com/help.html */

'use strict'  // Operate in Strict mode such that variables must be declared before used!


function GameObjectSet() {
    this.mSet = []
}

GameObjectSet.prototype.size = function () { return this.mSet.length }

GameObjectSet.prototype.getObjectAt = function (index) {
    return this.mSet[index]
}

GameObjectSet.prototype.addToSet = function (obj) {
    this.mSet.push(obj)
}

GameObjectSet.prototype.update = function (aCamera) {
    var i
    for (i = 0; i < this.mSet.length; i++) {
        this.mSet[i].update(aCamera)
    }
}

//GameObjectSet.prototype.

GameObjectSet.prototype.draw = function (aCamera) {
    var i
    for (i = 0; i < this.mSet.length; i++) {
        this.mSet[i].draw(aCamera)
    }
}

//just generate a new GameObjectSet but not change the origin
GameObjectSet.prototype.concat = function (otherSet){
    let obj = new GameObjectSet()
    obj.mSet = obj.mSet.concat(this.mSet)
    obj.mSet = obj.mSet.concat(otherSet.mSet)
    return obj
}