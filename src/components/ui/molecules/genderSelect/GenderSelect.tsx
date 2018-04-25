import * as React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import * as s from "./GenderSelect.styl";

interface IProps {
    value: string;
    error?: string;
    onChange;
}

interface IState {
}

const maleSrc = require("../../../../assets/img/male.svg");
const maleCheckSrc = require("../../../../assets/img/check-male.png");
const femaleSrc = require("../../../../assets/img/female.svg");
const femaleCheckSrc = require("../../../../assets/img/check-female.png");

class GenderSelect extends Component<IProps, IState> {

    render() {
        const {
            value = undefined,
            error = "",
            onChange = null
        } = this.props;
        return (
            <div>
                <div className={s.base}>
                    <div className={`${s.item} ${value === "female" ? s.selected : s.unselected}`}
                         onClick={() => onChange("female")}>
                        <img src={femaleSrc} alt="female" className={s.img}/>
                        For women
                        <img src={femaleCheckSrc} alt="female check" className={s.check}/>
                    </div>
                    <div className={`${s.item} ${value === "male" ? s.selected : s.unselected}`}
                         onClick={() => onChange("male")}>
                        <img src={maleSrc} alt="male" className={s.img}/>
                        For men
                        <img src={maleCheckSrc} alt="male check" className={s.check}/>
                    </div>
                </div>
                {error && <div className={s.error}>{error}</div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(GenderSelect);
