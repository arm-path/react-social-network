export const required = (value) => {
    if (!value) return 'Поле обязательно для заполнения!'
    return undefined
}

export const minLengthCreator = (minValue) => {
    return (value) => {
        if (value.length < minValue) return `Минимальная допустимая длина символов ${minValue}`
        return undefined
    }
}

export const maxLengthCreator = (maxValue) => {
    return (value) => {
        if (value.length > maxValue) return `Максимальная допустимая длина символов ${maxValue}`
        return undefined
    }
}

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Не корректный электронный адрес!' : undefined

export const url = value =>{
    if (!value) return undefined
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i')
    return !pattern.test(value) ? 'Не корректный url адрес': undefined
}
