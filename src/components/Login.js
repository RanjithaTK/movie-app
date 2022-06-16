import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import styled from "styled-components";

function Login() {
    // const navigate = useNavigate();
    // const [email, setEmail] = useState("");
    // const [password, setpassword] = useState("");

    // const signin = (e) => {
    //     e.preventDefault();
    //     //firebase
    //     auth
    //       .signInWithEmailAndPassword(email, password)
    
    //       .then((auth) => {
    //         console.log(auth.user.auth);
    //         navigate("/");
    //       })
    //       .catch((error) => alert(error.message));
    //   };
    //   const register = (e) => {
    //     e.preventDefault();
    //     //firebase
    //     auth
    //       .createUserWithEmailAndPassword(email, password)
    //       .then((auth) => {
    //         //creates a new user with email and password
    //         console.log(auth);
    //         if (auth) {
    //           navigate("/"); //once created ac moves to homepage
    //         }
    //       })
    //       .catch((error) => alert(error.message));
    //   };
      

  return <Container>
      <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg"/>
          <SignUp>
              GET ALL THERE
          </SignUp>
          <Description>
              Get premier access with subscription
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png"/>

      </CTA>
  </Container>;
}

export default Login;
const Container = styled.div`
position:relative;
height:100vh;
align-items:top;
display:flex;
justify-content:center;

&:before{
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    background-image:url("/images/login-background.jpg");
    position:absolute;
    top:0;
    bottom:0;
    content:"";
    left:0;
    right:0;
    z-index:-1;
    opacity:0.7;

}
`;
const CTA=styled.div`
max-width:650px;
padding:80px 40px;
width:90%;
display:flex;
flex-direction:column;
margin-top:100px;
align-items:center;


`
const CTALogoOne=styled.img``
const SignUp=styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
border-radius:4px;
text-align:center;
font-size:18px;
cursor:pointer;
transition:all 250ms;
letter-spacing:1.5px;
margin-top:8px;
margin-bottom:12px;


&:hover{
    background:#0483ee;

}


`
const Description=styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;

`
const CTALogoTwo=styled.img`
width:90%;

`
// import React from "react";
// import styled from "styled-components";
// function Login() {
//   return <Container>
//       <CTA>
//           <CTALogoOne src="/images/cta-logo-one.svg"/>
//           <SignUp>
//               GET ALL THERE
//           </SignUp>
//           <Description>
//               Get premier access with subscription
//           </Description>
//           <CTALogoTwo src="/images/cta-logo-two.png"/>

//       </CTA>
//   </Container>;
// }

// export default Login;
// const Container = styled.div`
// position:relative;
// height:100vh;
// align-items:top;
// display:flex;
// justify-content:center;

// &:before{
//     background-position:top;
//     background-size:cover;
//     background-repeat:no-repeat;
//     background-image:url("/images/login-background.jpg");
//     position:absolute;
//     top:0;
//     bottom:0;
//     content:"";
//     left:0;
//     right:0;
//     z-index:-1;
//     opacity:0.7;

// }
// `;
// const CTA=styled.div`
// max-width:650px;
// padding:80px 40px;
// width:90%;
// display:flex;
// flex-direction:column;
// margin-top:100px;
// align-items:center;


// `
// const CTALogoOne=styled.img``
// const SignUp=styled.a`
// width:100%;
// background-color:#0063e5;
// font-weight:bold;
// padding:17px 0;
// color:#f9f9f9;
// border-radius:4px;
// text-align:center;
// font-size:18px;
// cursor:pointer;
// transition:all 250ms;
// letter-spacing:1.5px;
// margin-top:8px;
// margin-bottom:12px;


// &:hover{
//     background:#0483ee;

// }


// `
// const Description=styled.p`
// font-size:11px;
// letter-spacing:1.5px;
// text-align:center;
// line-height:1.5;

// `
// const CTALogoTwo=styled.img`
// width:90%;

// `