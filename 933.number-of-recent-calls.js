var RecentCounter = function () {
    this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.queue.push(t);
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }
    return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

var obj = new RecentCounter();
console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(3001));
console.log(obj.ping(3002));
