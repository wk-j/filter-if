interface String {
    includesI: (part: string) => string;
}

String.prototype.includesI = function (part) {
    return new RegExp(part, "i").test(this);
}

export const f1 = () => {
    const a = "Hello, world!"
    console.log("f1", a.includes("Hello"));
}

export const f2 = (w) => {
    const full = "Hello, world!"
    console.log("f2", new RegExp(w, "i").test(full));
}

f1()
f2("Hello")
f2("hello")
f2("wtf sss")

console.log("Hello, world!".includesI("W"));

