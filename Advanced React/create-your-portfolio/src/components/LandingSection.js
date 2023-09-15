import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, I am Jack!"; 
const bio1 = "A frontend developer"; 
const bio2 = "specialized in React"; 
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365" 
 > 
   <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1694763491~exp=1694764091~hmac=b6bad2455a9db6c23c414ac954a102da68027e2574a07ddc65811a716d6f7a7b" 
         size="2xl" 
         name="Your Name" 
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
         Hello, I'm Jack!
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         Frontend  developer
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
       specialized in React 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;