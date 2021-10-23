import styled from "styled-components";

export const Container = styled.div`

    
    p {
        font-size: 13px;
        color: #000;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    label {
        font-size: 13px;
        display: block;
        margin-bottom: 20px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 400px;
            padding: 20px 10px;
            border: 2px solid #a9a9a9;
            border-radius: 10px;
            color: #000;
            outline: 0;
            font-size: 15px;
            background-color: #eeeeee;
            
        }
    }

    button {
        background-color: #0000ff;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #0000ff;
    }
`;