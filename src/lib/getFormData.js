
const getFormData = (form) => {
    return Array.prototype.slice.call(form.elements, 0, -1).reduce((accum, el) => {
        return {...accum, ...{[el.name]: el.value}}
    }, {})
}

export default getFormData;
