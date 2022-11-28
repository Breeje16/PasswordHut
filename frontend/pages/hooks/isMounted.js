import { useEffect, useState } from "react"

export function isMounted () {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, []);

  return mounted;
}
