import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { useFetchData } from "./useFetchData";

import Button from "./components/Button";
import Details from "./components/Details";
import Quote from "./components/Quote";
import Time from "./components/Time";


function App() {
  const [openDetails, setOpenDetails] = useState(false);
  const [jumpHeight, setJumpHeight] = useState(0);

  const data = useFetchData();

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => {
    setOpenDetails(false);
    getJumpHeight();
  }, [isDesktop, isMobile])

  function getJumpHeight() {
    if (isMobile) return setJumpHeight(-150);
    if (isDesktop) return setJumpHeight(-350);
    return setJumpHeight(-320);
  }

  return (
    <main className="App" style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ), url(desktop/bg-image-${data[2] ? "daytime" : "nighttime"}.jpg)`
      }}>
      <motion.div
        className="App_main"
        animate={{
          y: openDetails ? [0, jumpHeight] : [jumpHeight, 0]
        }}
      >
        {data.length > 0 ? <>
          <Quote
            quote={data[1]}
            refresh={data[3]}
            setRefresh={data[4]}
            openDetail={openDetails}
          />
          <div className="App_main_bottom">
            <Time
              time={data[0]}
              day={data[2]}
              openDetails={openDetails}
            />
            <Button
              onClick={() => setOpenDetails(!openDetails)}
              openDetails={openDetails}
            />
          </div>
        </>
        :
        <span>loading...</span>}
      </motion.div>
      <Details
        time={data[0]}
        day={data[2]}
        openDetails={openDetails}
      />
    </main>
  )
}

export default App
