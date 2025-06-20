import { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
import warning from "./icons/warning.svg"; 
import { ColorScheme } from "./ColorScheme";
import { CompareSequenceResult } from "./CompareSequencesResult";

export function SequencesForm() {
    const [firstSequence, setFirstSequence] = useState<string>("");
    const [secondSequence, setSecondSequence] = useState<string>("");
    const [includesUnacceptedSymbols, setIncludesUnacceptedSymbols] = useState(false);
    const [displayCompare, setDisplayCompare] = useState(false);

    const acceptedSymbols = ["A", "R", "N", "D", "C", "E", "Q", "G", "H", "I", "L", "K", "M", "F", "P", "S", "T", "W", "Y", "V", "-"];

    const bigScreen = useMediaQuery('(min-width:400px)');

    const areLengthsEqual = firstSequence.length === secondSequence.length;

    const isLengthError = !areLengthsEqual && secondSequence.length > 0 && firstSequence.length > 0;



    function setInput(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setSequence: React.Dispatch<React.SetStateAction<string>>) {
        if (displayCompare) {
            setDisplayCompare(false);
        }
        setIncludesUnacceptedSymbols(false);
        if (event.target.value === "") {
            setSequence(event.target.value);
            return;
        }

        const values = event.target.value.toUpperCase();

        if (values.split("").every(symbol => acceptedSymbols.includes(symbol))) {
            setSequence(values);
        } else {
            setIncludesUnacceptedSymbols(true);
        }
    }



    return (
        <Container
            sx={{
                bgcolor: "white",
                py: 5,
                borderRadius: "5px",
                wordWrap: "break-word"
            }}>

            <Typography variant={bigScreen ? "h1" : "h3"} sx={{ mb: 3, }}>
                Выравнивание аминокислотных последовательностей 🧪🧬
            </Typography>

            <Typography sx={{ bc: "#f2f2f2" }}>
                В области вычислительной биологии и биоинформатики одним из важнейших методов анализа белковых последовательностей является их выравнивание. Это позволяет определить сходство и различия между множеством последовательностей, исследовать функцию белков и их связи с другими белками.
                Введите две последовательности для сравнения.
            </Typography>

            <Typography sx={{ my: 5, backgroundColor: "#f2f2f2", p: 3, borderRadius: 2 }}>
                Допустимые для ввода аминокислоты:
                A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V и символ -.
            </Typography>

            {includesUnacceptedSymbols && <Box sx={{ display: "flex", gap: 1, my: 3 }}>
                <img src={warning} />
                <Typography sx={{ color: "red" }}>
                    Попытка ввести недопустимые символы.
                </Typography>

            </Box>}

            <form onSubmit={(event) => {
                event.preventDefault();
                setDisplayCompare(true)

            }
            }>
                <TextField
                    error={isLengthError}
                    helperText={isLengthError && `Разные длины последовательностей. Длина: ${firstSequence.length}`}
                    label="Первая последовательность"
                    fullWidth
                    margin="normal"
                    value={firstSequence}
                    onChange={(event) => setInput(event, setFirstSequence)}
                />

                <TextField
                    error={isLengthError}
                    helperText={isLengthError && `Разные длины последовательностей. Длина: ${secondSequence.length}`}
                    label="Вторая последовательность"
                    fullWidth
                    margin="normal"
                    value={secondSequence}
                    onChange={(event) => setInput(event, setSecondSequence)}
                />

                <Button
                    variant="contained"
                    size={bigScreen ? "large" : "small"}
                    disableElevation
                    disabled={isLengthError || firstSequence.length === 0 || secondSequence.length === 0}
                    sx={{ mx: "auto", display: "block", my: 2, fontWeight: 600 }}
                    type="submit"
                >
                    Сравнить
                </Button>
            </form>

            {displayCompare && <CompareSequenceResult
                firstSequence={firstSequence}
                secondSequence={secondSequence}
            />}


            <ColorScheme />
        </Container>
    )
}