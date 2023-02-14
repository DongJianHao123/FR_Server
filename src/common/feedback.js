const feedBack = (result, res, err) => {
    let data = {}
    if (!err) {
        data.result = result;
        data.errcode = 200;
    } else {
        data.errcode = err.code;
        data.errmsg = err.errmsg;
    }
    res.send(JSON.stringify(data, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value // return everything else unchanged
    ));
}

export default feedBack;