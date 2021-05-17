import React, { useState } from "react";

export default function TitleHead ({getQuery}) {
    return (
        <form onSubmit = {(e) => getQuery(e)}>
            <label>
                <input type ="text" name ="text" />
            </label>
            <button>Поиск</button>
        </form>
    )
}