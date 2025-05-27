import { useState } from "react";
import { Button, TextField } from "@equinor/eds-core-react";

function App() {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");

    return (
        <>
            <TextField
                label={"Name 1"}
                id={"name1"}
                value={name1}
                onChange={(e: any) => setName1(e.target.value)}
            />
            <TextField
                label={"Name 2"}
                id={"name2"}
                value={name2}
                onChange={(e: any) => setName2(e.target.value)}
            />
            <div>
                <Button
                    onClick={() =>
                        console.log(
                            `calculating compatibility for ${name1} and ${name2}`
                        )
                    }
                >
                    Calculate
                </Button>
            </div>
        </>
    );
}

export default App;
