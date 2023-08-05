import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body{
    background:${({theme})=>theme.background};
    color:${({theme})=> theme.textColor};
    transition: all 0.25s linear;
}

.container{
    display:grid;
    min-height:100vh;
    grid-auto-flow:row;
    grid-template-rows: auto 1fr auto;
    gap:2rem;
    padding:2rem;
    width: 100vw;
    align-items:center;
    text-align:center;
}

.type-box{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 1000px;
    height:300px;
    margin-right:auto;
    margin-left:auto;
    margin-top : 1.5rem;
    overflow:hidden;

}

.words{
    display:flex;
    flex-wrap:wrap;
    font-size: 1.8rem;
    color: ${({theme})=> theme.typeBoxText};
}

.word{
    margin:.35rem;
    padding-right:2px;
}

.hidden-input{
    opacity:0;
}
.current{
    border-left: 2px solid black;
    animation : blinking 2s infinite;
    animation-timing-function : ease ;
    @keyframes blinking {
        0% {border-left-color: ${({theme})=>theme.textColor}}
        25% {border-left-color: ${({theme})=>theme.background}}  
        50% {border-left-color: ${({theme})=>theme.textColor}}
        75% {border-left-color:${({theme})=>theme.background}}
        100% { border-left-color:${({theme})=>theme.textColor}}
    }
}
.current-right{
    border-right: 2px solid black;
    animation : blinking-right 2s infinite;
    animation-timing-function : ease ;
    @keyframes blinking-right {
        0% {border-right-color:${({theme})=>theme.textColor} }
        25% {border-right-color: ${({theme})=>theme.background}}
        50% {border-right-color: ${({theme})=>theme.textColor}}
        75% {border-right-color:${({theme})=>theme.background}}
        100% { border-right-color:${({theme})=>theme.textColor}}
    }
}
.correct{
    color: green;
}
.incorrect{
    color: red;
}
.upper-menu{
    display:flex;
    justify-content:space-between;
    width:1000px;
    margin-left:auto;
    margin-right:auto;
    font-size:1.35rem;
    padding: 0.5rem;
}
.modes{
    display:flex;
    gap: 1rem;
}
.time-mode:hover{
    color:green;
    cursor:pointer;
}
.icon-logout-div{
    display : flex;
    gap : 1.7rem;
}
.footer{
    display: flex;
    width : 1000px;
    margin-left: auto;
    margin-right : auto;
    justify-content : space-between;
}
.links{
    display : flex;
    gap : 1.5rem;
}
.links a{
    color : inherit;
    text-decoration : none;
}
.statsContainer{
    display: flex;
    width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto; 
}
.stats-left{
    width: 28%;
    padding: 20px;
}
.stats-right{
    width: 65%; 
}
.reload-btn{
    display : flex;
    justify-content : center;
    align-items : center;
    margin-top : 2rem;
    border : 2px solid;
    border-radius : 10%;
    width : 30%;
    padding : 0.3rem;
}
.title{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    justify-content:space-between;
}
.title-item{
    font-size: 20px;
    color: ${({theme})=>theme.typeBoxText };
}
.title-subitem{
    font-size: 30px;
}
.header{
    display : flex;
    width : 1000px;
    margin-left : auto;
    margin-right : auto;
    justify-content : space-between;
    position: relative;
    
}
.logo-img{
    position:absolute;
    top:-2.2rem;
}
.buttons-parent{
    width: 30%;
    text-align: center;
    margin-left: 6rem;
    margin-top: 1rem;   
}
.buttons-grouped{
    display: flex;
    justify-content: space-evenly;
    
}
.user-profile{
    width : 50rem;
    margin : auto;
    display : flex;
    height : 15rem;
    background : ${({theme})=> theme.typeBoxText};
    color : ${({theme})=> theme.background};
    border-radius : 20px;
    padding : 1rem;
    justify-content : center;
    align-text : center;
}
.user{
    width : 50%;
    display : flex;
    margin-top : 30px;
    margin-bottom : 30px;
    font-size : 1.5rem;
    padding : 1rem;
    border-right : 2px solid;
}
.info{
    width : 60%;
    padding : 1rem;
    margin-top : 1rem;
    background-color: ${({theme})=> theme.textColor};;
}
.picture{
    width : 40%;
}

.total-tests{
    width : 50%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    font-size : 2rem;
}
.graph-div, .table{
    margin-left: auto;
    margin-right : auto;
    width : 1000px;
}
.loading-div{
    display : flex;
    min-height : 100vh;
    justify-content : center;
    align-items : center;

}
@media screen and (max-width: 768px){
    .type-box{
        max-width : 50%;
        height : auto;
    }
    .header{
        max-width : 50%;
    }
    .footer{
        max-width : 50%;
    }
    .upper-menu{
        max-width : 50%;
    }
    .stats-box{
        max-width : 50%;
    }
    .graph-div, .table{
        max-width : 50%;
    }
}

@media screen and (max-width: 1200px){
    .type-box{
        max-width : 70%;
        height : auto;
    }
    .header{
        max-width : 70%;
    }
    .footer{
        max-width : 70%;
    }
    .upper-menu{
        max-width : 70%;
    }
    .stats-box{
        max-width : 70%;
    }
    .graph-div, .table{
        max-width : 70%;
    }
}
`
