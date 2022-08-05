import React from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from '@mui/material/styles';

export const CInput = styled((props) => (
    <InputBase {...props} />
))(() => ({
    height: 45,
    borderRadius: 6,
    border: '1px solid rgb(118, 118, 118)',
    padding: 12,
}))