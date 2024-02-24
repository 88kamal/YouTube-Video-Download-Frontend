import { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";

const App = () => {
  // Url Value State 
  const [urlValue, setUrlValue] = useState("");

  // Data State 
  const [data, setData] = useState(null);

  // Loading State 
  const [loading, setLoading] = useState(false);

  // handleDownload Function 
  const handleDownload = async () => {
    // Validation 
    if(!urlValue){
      return alert('Please Enter a URL')
    }
    setLoading(true);
    try {
      const res = await fetch(`https://you-tube-video-downloder-backend.vercel.app/download?url=${urlValue}`);
      const data = await res.json();
      // console.log(data)
      setData(data);
      setUrlValue("");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  };
  return (
    <div className=" ">
      <Input
        urlValue={urlValue}
        setUrlValue={setUrlValue}
        handleDownload={handleDownload}
      />
      <Output
        data={data}
        loading={loading}
      />
    </div>
  );
}

export default App;
