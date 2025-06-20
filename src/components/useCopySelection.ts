import { useEffect, useState } from "react";

export function useCopySelection(ref: React.RefObject<HTMLElement|null>) {
    

    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const handleMouseUp = () => {
            const selectedText = window.getSelection();
            if (!ref.current || !selectedText) return;
            if (selectedText.toString().length > 0 && ref.current.contains(selectedText.anchorNode)) {
                navigator.clipboard.writeText(selectedText?.toString())
                    .then(_ => {
                        setIsCopied(true);
                        setTimeout(() => setIsCopied(false), 5000)
                    })
                    .catch(err => console.log("Ошибка:", err));
            }
        };

        document.addEventListener("mouseup", handleMouseUp);

        return () => document.removeEventListener("mouseup", handleMouseUp);

    }, []);

    return isCopied;
}
