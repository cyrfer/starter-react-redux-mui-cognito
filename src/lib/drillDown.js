
function drill(accum, key) {
    if (typeof accum === 'undefined' || accum === null) {
        return undefined;
    }

    return accum[key];
}

export default (parent, descendents) => {
    return (descendents || []).reduce(drill, parent);
};
