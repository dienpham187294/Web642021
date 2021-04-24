import React, { useState, useEffect } from "react";
import Giaotiep800cau from "./800cau"
function Giaotiepcoban800cau({ socket, message, setMessage }) {
    useEffect(() => {
        console.log(Giaotiep800cau())
    }, [])

    return (
        <div>
            "800 cau giao tiep co  ban"
        </div >

    );
}

export default Giaotiepcoban800cau;