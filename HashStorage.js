"use strict"
class HashStorage {
    constructor() { 
    }
    checkValue(key) {
        if (key in this) {
            return true
        } else {
            return false
        }
    }
    addValue(key,value) {
        this[key] = value;
        return this;
    }
    getValue(key) {
        if (key in this) {
            return this[key]
        } else {
            return 'нет информации'
        }
    }
    deleteValue(key) {
        if (key in this) {
            delete this[key];
            return true
        } else {
            return false
        }
    }
    getKeys() {
        for ( let k in this) {
            console.log(k + ';')
        }
    }
};




