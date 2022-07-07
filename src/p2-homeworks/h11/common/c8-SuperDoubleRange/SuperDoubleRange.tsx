import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useEffect, useState} from 'react'
import s from "./SuperDoubleRange.module.css"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    values?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        type, value, values, onChange, onChangeRange,
        min, max, disabled,
        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки

    const initMin = min ? min : 0;
    const initMax = max ? max : 100;
    const initMinValue = values ? values[0] : initMin;
    const initMaxValue = values ? values[1] : initMax;

    const [minValue, setMinValue] = useState(initMinValue);
    const [maxValue, setMaxValue] = useState(initMaxValue);

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = Math.min( e.currentTarget.valueAsNumber, +maxValue)
        setMinValue(currentValue)
        onChangeRange && onChangeRange([currentValue, +maxValue])
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = Math.max( e.currentTarget.valueAsNumber, +minValue)
        setMaxValue(currentValue)
        onChangeRange && onChangeRange([+minValue, currentValue])
    }

    useEffect(() => {
        if (initMinValue <= maxValue && !disabled) setMinValue(initMinValue);
    }, [initMinValue, maxValue, disabled]);


    return (
        <div className={s.doubleRange}>
            <div className={s.doubleRangeTrack}/>
            <input
                type={"range"}
                className={s.doubleRangeThumb}
                value={minValue}
                onChange={onChangeMinValue}
                min={initMin}
                max={initMax}
                style={{zIndex: minValue === maxValue && minValue !== 0 ? 1 : 0}}
                disabled={disabled}
                {...restProps}
            />
            <input
                type={"range"}
                className={`${s.doubleRangeThumb} ${s.doubleRangeRightThumb}`}
                value={maxValue}
                onChange={onChangeMaxValue}
                min={initMin}
                max={initMax}
                disabled={disabled}
                {...restProps}
            />
        </div>
    )
}

export default SuperDoubleRange
