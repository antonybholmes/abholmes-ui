const SPLIT_REGEX = /\s+/;
function _cn(args, classes) {
    if (!args) {
        return;
    }
    const t = typeof args;
    if (t === "object") {
        if (Array.isArray(args)) {
            if (typeof args[0] === "boolean") {
                switch (args.length) {
                    case 2:
                        if (args[0]) {
                            _cn(args[1], classes);
                        }
                        break;
                    case 3:
                        args[0] ? _cn(args[1], classes) : _cn(args[2], classes);
                        break;
                    default:
                        break;
                }
            }
            else {
                args.forEach(arg => _cn(arg, classes));
            }
        }
        else {
            // add keys whose values evaluate to true
            for (const [key, value] of Object.entries(args)) {
                if (value) {
                    _cn(key, classes);
                }
            }
        }
    }
    else {
        args
            .toString()
            .split(SPLIT_REGEX)
            .filter(c => c.length > 0)
            .forEach(c => classes.add(c));
    }
}
/**
 * Concatenates strings of class names together to form a class name string.
 * Useful for breaking up long tailwind class strings.
 * Also adds conditional rendering. [condition, 'classes'] will only add the
 * classes if condition is true. [condition, 'classes1', 'classes2'] adds
 * classes1 or classes2 conditionally. Also supports recursive conditionals.
 * [condition1, [condition2, 'classes1', 'classes2'], 'classes3'].
 *
 * @param args string or array of strings of classnames. Also supports condition c
 * @returns a space separated string of class names.
 */
export default function cn(...args) {
    const used = new Set();
    const classes = new Set();
    _cn(args, classes);
    // join all the pieces into one then split on space
    // and remove duplicates
    const ret = Array.from(classes).sort().join(" ");
    if (ret.length > 0) {
        return ret;
    }
    else {
        return undefined;
    }
    // .split(" ")
    // .filter(c => {
    //   // keep track of tokens already seen
    //   const ret = !used.has(c)
    //   used.add(c)
    //   return ret
    // })
    // .join(" ")
}
//# sourceMappingURL=class-names.js.map