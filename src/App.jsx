import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { useFetchData } from "./useFetchData";
import { DataContext } from "./dataContext";

import Button from "./components/Button";
import Details from "./components/Details";
import Quote from "./components/Quote";
import Time from "./components/Time";
import Loading from "./components/Loading";

function App() {
  const [openDetails, setOpenDetails] = useState(false);
  const [jumpHeight, setJumpHeight] = useState(0);
  const [loading, setLoading] = useState(true);

  const data = useFetchData();
  if (Object.keys(data).length > 0) {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }
  
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const variants = {
    y: openDetails ? [0, jumpHeight] : [jumpHeight, 0]
  }
  
  function getJumpHeight() {
    if (isMobile) return setJumpHeight(-150);
    if (isDesktop) return setJumpHeight(-350);
    return setJumpHeight(-320);
  }
  
  useEffect(() => {
    setOpenDetails(false);
    getJumpHeight();
  }, [isDesktop, isMobile])

  return (
    <DataContext.Provider value={data}>
      <main
        className="App"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.4), 
            rgba(0, 0, 0, 0.4)
          ), url(desktop/bg-image-${data.day ? "daytime" : "nighttime"}.jpg)`
        }}
      >
        <motion.div
          className="App_main"
          animate={variants}
        >
          <Quote openDetail={openDetails} />

          <div className="App_main_bottom">
            <Time openDetails={openDetails} />
            <Button
              onClick={() => setOpenDetails(!openDetails)}
              openDetails={openDetails}
            />
          </div>
        </motion.div>

        <Details openDetails={openDetails} />
      </main>
      
      <Loading loading={loading} />
    </DataContext.Provider>
  )
}

export default App
