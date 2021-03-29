import styled from 'styled-components'

export const Container = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 23vh;

    h1 {
        font-size: 32px;
        letter-spacing: 1px;
        margin: 20px 0;
        color: white;
        text-align: center;
    }

    button {
        display: block;
        min-width: 120px;
        border: none;
        background-color: #143642;
        color: white;
        border-radius: 25px;
        margin: auto;
        padding: 7px;

        animation: move 400ms;
        animation-delay: 250ms;
        animation-fill-mode: backwards;
    }

    small {
        color: red;
        font-weight: bold;
    }

    form {
        margin: 20px 0;
        background-color: white;
        padding: 30px 25px;
        border-radius: 5px;
        overflow: hidden;
        animation: fade 0.2s;

        input {
            width: 100%;
            display: block;
            margin: .5em auto .5em auto;
            padding: 7px;
            font-size: 16px;
            color: #143642;
            border-radius: 2px;
            border: 1px solid #ccddef;
            outline-color: #143642;
            animation: move 400ms;
            animation-delay: 100ms;
            animation-fill-mode: backwards;
        }
        
        label {
            font-size: 14px;
            color: #143642;
            animation-name: move;
            animation-duration: 1000ms;
        }
    }

    .form-hide {
        animation: down 500ms;
        animation-fill-mode: forwards;
    }

    .validate-error {
        animation: nono 200ms;
        animation-iteration-count: 2;
    }

    .message-error {
        margin-bottom: 0.6em;
    }

    // ######################## ANIMATION AREA ######################## 
    @keyframes fade {
        from {
            opacity: 0;
            transform: scale(0.85);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes move {
        from {
            opacity: 0;
            transform: translateX(-35%);
        }
        to {
            opacity: 1;
            transform: translateX(0%);
        }
    }

    @keyframes down {
        from {
            transform: translateY(0)
        }
        to {
            transform: translateY(100vh)
        }
    }

    @keyframes nono {
        0%, 100%{
            transform:translateX(0)
        }
        35%{
            transform:translateX(-15%)
            
        }
        70%{
            transform:translateX(15%)
        }
    }
`;

