
interface Array<T> {
    // tslint:disable-next-line:ban-types
    filterIf: (checker: boolean | Object, condition: (a: T) => boolean) => T[]
}

Array.prototype.filterIf = function (checker, condition) {
    if (checker) {
        return this.filter(condition)
    }
    return this
}

type Query = {
    name: string
    gpa: number
}

type Student = {
    name: string
    gpa: number
}

const datas = [
    { name: "wk1", gpa: 3.1 },
    { name: "wk2", gpa: 3.2 },
    { name: "wk3", gpa: 3.3 },
]

const query = {
    name: "wk",
    gpa: 3.3
}

const s1 = datas
    .filterIf(query.name, x => x.name.startsWith(query.name))
    .filterIf(query.gpa, x => x.gpa >= query.gpa)

const s2 = datas
    .filterIf(query.name, x => x.name !== query.name)

const s3 = datas
    .filterIf(query.gpa, x => x.gpa === query.gpa)

console.log(s1)
console.log(s2)
console.log(s3)
