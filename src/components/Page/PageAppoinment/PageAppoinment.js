import React, { useState } from "react";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import AvailAppoinment from "./AvailAppoinment";

const PageAppoinment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <Header></Header>
            <div className="container-md py-5">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="calander w-50 mx-auto">
                            <DayPicker
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img">
                            <img className="img-fluid" src={chair} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <AvailAppoinment date={selected}></AvailAppoinment>

            <Footer></Footer>
        </div>
    );
};

export default PageAppoinment;
