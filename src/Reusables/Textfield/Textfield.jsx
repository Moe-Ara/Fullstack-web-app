import React from 'react'
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import './Textfield.css'
const STYLES = ['txtfld--primary', 'txtfld--outline'];
const SIZES = ['txtfld--medium', 'txtfld--large'];

export const Textfield = ({
    label,
    TextFiledStyle,
    TextFieldSize,
    placeHolderText,
    type,
    onChangetxt,
    val,
    name,
    children

}) => {
    const checkType = type === 'password' ? 'password' : 'text';
    const checkStyle = STYLES.includes(TextFiledStyle) ? TextFiledStyle : STYLES[0];
    const checkSize = SIZES.includes(TextFieldSize) ? TextFieldSize : SIZES[0];
    const checkplaceHolderText = placeHolderText === '' ? '' : placeHolderText;
    return (
        <div className='txtfld-container'>
            <input className={`txtfld ${checkStyle} ${checkSize}`} type={checkType} placeholder={checkplaceHolderText} onChange={onChangetxt} value={val} name={name} autoComplete="off"  />
            <label className='label--primary'>{label}</label>
        </div>
    );
}