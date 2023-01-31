import {
  Body,
  Container,
  Password,
  BuildContainer,
  Button,
  Strengh,
} from "./style.styled";
import { useState,useRef } from "react";
import Checkbox from "./Components/Checkbox";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./Components/Characters";
import { FiCopy } from "react-icons/fi";
import {FaArrowRight} from"react-icons/fa"
import PasswordChercker from "./Components/PasswordChercker";

function App() {
  
  const ref = useRef(null);
  
  //the state of all the input
  const [slider, setSlider] = useState(0);
  const [password, setPassword] = useState("");
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [strength,setStrength] = useState('')

  const handleGeneratePassword = (e) => {
    //if none of the checkboxs are checked show a msg
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify("You must Select atleast one option", true);
    }

    let characterList = "";

    if (includeLowercase) {
      characterList += lowerCaseLetters;
    }

    if (includeUppercase) {
      characterList += upperCaseLetters;
    }

    if (includeNumbers) {
      characterList += numbers;
    }

    if (includeSymbols) {
      characterList += specialCharacters;
    }

    setPassword(createPassword(characterList));
  };

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < slider; i++) {
      password += characterList.charAt(
        Math.round(Math.random() * characterListLength)
      );
    }
    return password;
  };





    const notify = (message, hasError = false) => {
      if (hasError) {
        toast.error(message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success(message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };

      const copyToClipboard = () => {
        ref.current.select();
        document.execCommand("copy");
      };

          const handleCopyPassword = () => {
          const COPY_SUCCESS = "Copied to clipboard";
          if (password === "") {
            notify("Nothing To Copy", true);
          } else {
            copyToClipboard();
            notify(COPY_SUCCESS);
          }
        };

     const CheckStrength = ()=>{
        if(password.length < 7 && LowerRegex.test(password)==true){
          setStrength('very weak')
        }
     }   




  return (
    <Body>
      <h1>Password Generator</h1>
      <Container>
        <Password>
          <input ref={ref} type="text" defaultValue={password} />
          <FiCopy onClick={handleCopyPassword} />
        </Password>
        <BuildContainer>
          <div className="textbox">
            <p className="sub_text">Character Length</p>
            <p className="sub_value">{slider}</p>
          </div>
          <input
            className="slider"
            type="range"
            value={slider}
            min="0"
            max="12"
            onChange={(e) => setSlider(e.target.value)}
          />
          <div>
            <Checkbox
              id="1"
              label="Include Uppercase Letters"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            <Checkbox
              id="2"
              label="Include LowerCase Letters"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
            <Checkbox
              id="3"
              label="Include Number"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <Checkbox
              id="4"
              label="Include Symbol"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>
        </BuildContainer>
        <Strengh>
          <PasswordChercker password={password}/>
        </Strengh>
        <Button>
          <button type="submit" onClick={handleGeneratePassword}>
            GENERATE
            <FaArrowRight />
          </button>
        </Button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </Body>
  );
}

export default App;
