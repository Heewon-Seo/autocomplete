var ApiCache = /** @class */ (function () {
    function ApiCache() {
        var _this = this;
        this.cache = [];
        this.set = function (url, result, body) {
            if (!_this.recordExists(url, body)) {
                _this.cache.push({
                    url: url,
                    body: body,
                    result: result
                });
            }
        };
        this.get = function (url, body) {
            var cacheRecord = _this.cache.find(function (x) {
                if (body) {
                    return x.url === url && x.body === body;
                }
                return x.url === url;
            });
            if (cacheRecord) {
                return cacheRecord.result;
            }
            return null;
        };
        this.recordExists = function (url, body) {
            return !!_this.get(url, body);
        };
        if (!!ApiCache.instance) {
            return ApiCache.instance;
        }
        ApiCache.instance = this;
        return this;
    }
    return ApiCache;
}());
export { ApiCache };
