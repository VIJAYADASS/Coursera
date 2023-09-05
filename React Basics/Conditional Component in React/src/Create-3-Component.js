/* Task

Create 3 components: 

1. Discount - Should display the message "Congrats, a 30% discount will be applied
at checkout!"
2. OfferDiscount - Should display the message "Provide your email for a 30% discount!"
3. DiscountHeader - Receives a prop called "discountApplied". Should display
Discount component OR OfferDiscount component, depending on whether discountApplied is true or false. 

 */

function  DiscountHeader(props){
    if(props.isDiscountApplied){
      return <Discount />
    } else {
      return <OfferDiscount />
    }
  }
  
  function Discount(){
    return <button>"Congrats, a 30% discount will be applied
    at checkout!"</button>
  }
  
  function OfferDiscount(){
    return <button>"Provide your email for a 30% discount!"</button>
  }
  
  function App() { 
    return (
      <DiscountHeader isDiscountApplied={false} /> 
    ) 
  }; 
  
  export default App;