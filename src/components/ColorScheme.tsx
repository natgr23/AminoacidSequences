import { group2color, GROUPS, proteinToGroupName } from "../domain/groups";
import { Box, Typography } from "@mui/material";


export function ColorScheme() {
    return (<Box sx={{ display: "flex", flexDirection: "column", gap: "3px", wordWrap: "break-word" }}>
        <Typography variant={"h3"} sx={{ mb: 3 }}>
            Цветовая схема выравнивания аминокислот
        </Typography>

        {GROUPS.map((group) => <Box key={group} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{
                backgroundColor: group2color[group],
                borderRadius: 1,
                minWidth: 15,
                minHeight: 15,
                my: 1,
                mr: 1,
            }}
            ></Box>
            <Typography sx={{ wordBreak: "break-all" }}>
                {proteinToGroupName[group]}
            </Typography>
        </Box>

        )}


    </Box>)

}