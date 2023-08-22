import { useEffect, useRef } from "react";
export default function useOutsideListener(show, callback) {
    var ref = useRef(null);
    useEffect(function () {
        function onClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                //console.log("You clicked outside of me!", ref.current)
                document.removeEventListener("mousedown", onClick);
                document.removeEventListener("touchstart", onClick);
                callback();
            }
        }
        // function onKeyDown(event: any) {
        //   if (ref.current ) {
        //     console.log(event)
        //     console.log(ref.current)
        //   }
        // }
        if (show) {
            document.addEventListener("mousedown", onClick);
            document.addEventListener("touchstart", onClick);
            //document.addEventListener("keydown", onKeyDown)
        }
        else {
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("touchstart", onClick);
        }
        return function () {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("touchstart", onClick);
            //document.removeEventListener("keydown", onKeyDown)
        };
    }, [callback, ref, show]);
    return ref;
}
//# sourceMappingURL=use-outside-listener.js.map