var RecentCounter = function() {
    this.requests = [];
};
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t)

    for(let i = 0; i < this.requests.length;){
      this.requests[i] < t - 3000 ? this.requests.shift() : i++;
    }
    // console.log(this.requets);
    return this.requests.length;
};

let ins = new RecentCounter();
ins.ping(5)

var combinationSum = function(candidates, target) {
    function buscarTarget(i, aSumas, target) {
        if (target == 0) respuesta.push(aSumas.slice());
        if (i == largo) return;
        if (target <= 0) return;

        aSumas.push(candidates[i]);
        buscarTarget(i, aSumas, target - candidates[i]);
        aSumas.pop();
        buscarTarget(i + 1, aSumas, target);
    }
    var largo = candidates.length;
    var respuesta = [];
    buscarTarget(0, [], target);
    return respuesta;
};
