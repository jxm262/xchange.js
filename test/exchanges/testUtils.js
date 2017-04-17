export function success(expected, done) {
    return function (resp) {
        resp.should.deep.equal(expected);
        done();
    }
}

export function failure(done) {
    return function (err) {
        err.should.deep.equal(testErrMsg);
        done();
    }
}

export const testErrMsg = {msg: "test-error"};
