import React from "react";
import TextField from "../../fields/text-field";
import css from "./HomePage.module.scss";

export default function HomePage() {
    return (
        <div className={css["container"]}>
            <div className={css["box"]}>
                <h1 className="h1" style={{ paddingBottom: "20px" }}>
                    First ONE
                </h1>
                <TextField name="Your name:" fullWidth />
            </div>
        </div>
    );
}
