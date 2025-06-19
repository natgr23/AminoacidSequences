import { proteinColors } from "./CompareSequencesResult";
import { Box, Typography } from "@mui/material";

export function ColorScheme() {

    const proteinExamples = ["C", "A", "G", "D", "K", "S", "wrong"];
    const proteinToGroupName: Record<string, string> = {
        C: "Цистеин",
        A: "Гидрофобные аминокислоты",
        G: "Глицин",
        D: "Отрицательно заряженные аминокислоты",
        K: "Положительно заряженные аминокислоты",
        S: "Полярные заряженные аминокислоты",
        wrong: "Аминокислота из второй последовательности не совпадает с аминокислотой из первой последовательности"
    }

    return (<Box sx={{ display: "flex", flexDirection: "column", gap: "3px", wordWrap: "break-word"  }}>
        <Typography variant={"h3"} sx={{ mb: 3}}>
            Цветовая схема выравнивания аминокислот
        </Typography>

        {proteinExamples.map((protein, idx) => <Box key={idx}  sx={{ display: "flex", alignItems: "center"}}>
            <Box sx={{
                backgroundColor: protein === "wrong"? "red" : proteinColors[protein],
                borderRadius: 1,
                minWidth: 15,
                minHeight: 15,
                my: 1,
                mr: 1,
            }}
            ></Box>
            <Typography sx={{wordBreak: "break-all"}}>
                {proteinToGroupName[protein]}
            </Typography>
        </Box>

        )}


    </Box>)

}