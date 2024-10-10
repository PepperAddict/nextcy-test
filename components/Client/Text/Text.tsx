import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Countdown from './countdown'
export const Text = () => {
    const [startDate, setStartDate] = useState(new Date() as any);
    return (<>
    
    <Countdown />
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></>)
}