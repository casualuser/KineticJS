/**
 * Collection constructor.  Collection extends
 *  Array.  This class is used in conjunction with get()
 * @constructor
 */
Kinetic.Collection = function() {
    var args = [].slice.call( arguments ), 
        length = args.length, i = 0;

    this.length = length;
    for (; i < length; i++ ) {
        this[ i ] = args[ i ];
    }
    return this;
}
Kinetic.Collection.prototype = new Array();
/**
 * apply a method to all nodes in the array
 * @name apply
 * @methodOf Kinetic.Collection.prototype
 * @param {String} method
 * @param val
 */
 Kinetic.Collection.prototype.apply = function(method) {
     args = [].slice.call(arguments);
     args.shift();
     for (var n=0; n<this.length; n++) {
         if(Kinetic.Type._isFunction(this[n][method])) {
             this[n][method].apply(this[n],args);
         }
     }
 };
/**
 * iterate through node array
 * @name each
 * @methodOf Kinetic.Collection.prototype
 * @param {Function} func
 */
Kinetic.Collection.prototype.each = function(func) {
	for (var n=0; n<this.length; n++) {
		func.call(this[n],n,this[n]);
	}
};