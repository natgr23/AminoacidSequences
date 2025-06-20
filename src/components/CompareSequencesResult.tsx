import { Box, FormGroup, Switch, Typography } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect, useRef, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useCopySelection } from "./useCopySelection";
import { aminoacid2group, type AminoAcid } from "../domain/AminoAcid";
import { group2color } from "../domain/groups";

interface CompareSequenceResultProps {
    firstSequence: string,
    secondSequence: string,

}


export function CompareSequenceResult({ firstSequence, secondSequence }: CompareSequenceResultProps) {

    const letter = useRef<HTMLDivElement>(null);
    const sequencesForCopy = useRef <HTMLDivElement>(null);
    const [letterWidth, setLetterWidth] = useState(0);
    const [letterHeight, setLetterHeight] = useState(0);
    const [showFirstSequence, setShowFirstSequence] = useState(true);
    const [showSecondSequence, setShowSecondSequence] = useState(true);


    useEffect(() => {
        
        if (letter.current !== null) {
            const letterRefCurrent = letter.current!;
            setLetterWidth(letterRefCurrent.offsetWidth); 
            setLetterHeight(letterRefCurrent.offsetHeight)
            console.log("длина", letterRefCurrent.offsetWidth, letterRefCurrent.offsetHeight);
        }



    }, [])


    const isCopied = useCopySelection(sequencesForCopy); 
    const smallScreen = useMediaQuery('(max-width:320px)');


    const firstSequenceLetters = firstSequence.split("") as AminoAcid[];


    return (<div>

        <FormGroup>
            <FormControlLabel
                control={<Switch checked={showFirstSequence}
                    onChange={() => setShowFirstSequence(prev => !prev)} />}
                label={smallScreen ? "Первая" : "Отображать первую последовательность"}
            />
            <FormControlLabel
                control={<Switch checked={showSecondSequence}
                    onChange={() => setShowSecondSequence(prev => !prev)} />}
                label={smallScreen ? "Вторая" : "Отображать вторую последовательность"}
            />
        </FormGroup>


        <Box ref={sequencesForCopy} sx={{ fontFamily: "monospace", fontSize: 50, letterSpacing: "0.25em", wordBreak: "break-all", position: "relative", lineHeight: "2em", cursor: "text" }}>
            <div style={{ visibility: "hidden", position: "absolute" }} ref={letter}>Q</div>
            <Box sx={{ display: "block", mb: 10, zIndex: 1, position: "relative", visibility: showFirstSequence ? "visible" : "hidden" }}>
                {firstSequence}
            </Box>
            <Box sx={{ display: "block", position: "absolute", top: "1em", zIndex: 1, visibility: showSecondSequence ? "visible" : "hidden" }}>
                {secondSequence}
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", position: "absolute", top: 0, gap: "1px", visibility: showFirstSequence ? "visible" : "hidden" }}>
                {firstSequenceLetters.map((letter, i) =>
                    <Box key={i} sx={{
                        backgroundColor: group2color[aminoacid2group[letter]],
                        borderRadius: 1,
                        width: letterWidth - 1,
                        height: letterHeight / 2 - 3,
                        mt: `${letterHeight / 4 - 1 + 3}px`,
                        mb: `${letterHeight / 4}px`,
                        transform: "translateX(-0.1em)",
                    }}></Box>
                )}
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", position: "absolute", top: "1em", gap: "1px", visibility: showSecondSequence ? "visible" : "hidden" }}>
                {secondSequence.split("").map((protein2, i) =>
                    <Box key={i} sx={{
                        backgroundColor: protein2 !== firstSequence[i]? group2color.mismatchWarning : undefined,
                        borderRadius: 1,
                        width: letterWidth-1,
                        height: letterHeight / 2 - 2,
                        mt: `${letterHeight / 4 - 1}px`,
                        mb: `${letterHeight / 4 + 2}px`,
                        transform: "translateX(-0.1em)",
                    }}></Box>
                )}
            </Box>

            <Typography sx={{
                display: "block",
                p: 2,
                borderRadius: 2,
                background: "rgb(0, 0, 0, 0.9)",
                color: "white",
                position: "fixed",
                bottom: "20%",
                left: "50%",
                transform: "translateX(-50%)",
                opacity: isCopied ? 1 : 0,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                zIndex: 10,
                pointerEvents: "none",
            }}>
                Скопировано!
            </Typography>


        </Box>


    </div>)
}



