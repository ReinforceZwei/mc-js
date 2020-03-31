'use strict';

class Entity {
    static CalculateDistance(l1, l2) {
        return Math.sqrt(Math.pow((l2.X - l1.X), 2) + Math.pow((l2.Y - l1.Y), 2) + Math.pow((l2.Z - l1.Z), 2));
    }
}

class Location {
    constructor(X, Y, Z) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
    }
}

module.exports = { Entity, Location }