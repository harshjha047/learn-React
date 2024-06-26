//fir sa karna hai; not completed;

import { useState } from 'react'
import {InputBox} from "./components"
import {useMoney} from "./hooks/useMoney"



function App() {
const [amount,setAmount]=useState(0)
const [from,setFrom]=useState("usd")
const [to,setTo]=useState("inr")
// const [convertrdAmount,setConvertedAmount]=useState(0)
const currencyInfo = useMoney(from)
const options = Object.keys(currencyInfo)

// const convert=()=>{setConvertedAmount(amount * currencyInfo(to))}

  const [convertedAmount, setConvertedAmount] = useState(0);
  // const options = Object.keys(currencyInfo);

  const convert = () => {
      if (currencyInfo && currencyInfo[to]) {
          setConvertedAmount(amount * currencyInfo[to]);   
      }
  };
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            onAmountChange={(amount) => setAmount(amount)}
                            selectCurrency={from}
                        />
                    </div>
                    <div className="w-full mt-1 mb-4">
                           <InputBox
                              label="To"
                              // convertrdAmount={amount}
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>{setTo(currency)}}
                              selectCurrency={to}
                              amountDisable
                          />
                    
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                </form>
            </div>
        </div>
    </div>
);

  // return (
//       <div
//           className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          
//       >
//           <div className="w-full">
//               <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                   <form
//                       onSubmit={(e) => {
//                           e.preventDefault();
//                           convert();
                         
//                       }}
//                   >

//                       <div className="w-full mb-1">
//                           <InputBox
//                               label="From"
//                               amount={amount}
//                               currencyOptions={options}
//                               onCurrencyChange={(currency)=>{setAmount(amount)}}
//                               onAmountChange={(amount)=>{setAmount(amount )}}
//                               selectCurrency={from}
//                           />
//                       </div>


//                   </form>
//               </div>
//           </div>
//       </div>
//   );

// }
// export default App





}

export default App;

