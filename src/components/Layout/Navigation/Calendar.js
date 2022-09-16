import axios from "axios";
import React, { useState, useEffect } from "react";

const Calendar = () => {
    const [tableInfo, setTableInfo] = useState([]);

    useEffect(() => {
        axios.get(`/api/view_table`).then((res) => {
            const table_generated = res.data;
            setTableInfo(table_generated);
        });
    }, []);

    return (
        <>
            <h1>Calendar</h1>
            <p>{tableInfo}</p>
        </>
    );
};

export default Calendar;
