import { useState } from "react";
import { Button, TextField, Typography } from "@equinor/eds-core-react";
import axios from "axios";

function App() {
    async function getUser() {
        try {
            const response = await axios.get("/flames-game", {
                params: {
                    name_one: name1,
                    name_two: name2,
                },
            });
            setComp(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [comp, setComp] = useState<string | undefined>(undefined);

    return (
        <div style={{ width: "20%" }}>
            <TextField
                label={"Name 1"}
                id={"name1"}
                value={name1}
                onChange={(e: any) => setName1(e.target.value)}
                style={{ marginBottom: "1rem" }}
            />
            <TextField
                label={"Name 2"}
                id={"name2"}
                value={name2}
                onChange={(e: any) => setName2(e.target.value)}
                style={{ marginBottom: "1rem" }}
            />
            <Button
                onClick={() => {
                    getUser();
                }}
            >
                Calculate
            </Button>
            {comp && <Typography>{comp}</Typography>}
        </div>
    );
}

export default App;
