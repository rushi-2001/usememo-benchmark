import { useState } from "react";
import { HomeUseEffect } from "./components/HomeUseEffect";
import { HomeUseMemo } from "./components/HomeUseMemo";

function App() {
  const [tab, setTab] = useState<"useMemo" | "useEffect">("useEffect");
  const isMemoSelected = tab === "useMemo";
  return (
    <div style={{ padding: "100px" }}>
      <div>
        <button
          style={{
            borderRadius: "30px",
            paddingBlock: "15px",
            paddingInline: "30px",
            backgroundColor: isMemoSelected ? "#e1cef5" : "#440e7e",
            color: !isMemoSelected ? "#e1cef5" : "#440e7e",
            fontSize: !isMemoSelected ? "24px" : "20px",
            margin: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setTab("useEffect")}
        >
          useEffect
        </button>
        <button
          style={{
            borderRadius: "30px",
            paddingBlock: "15px",
            paddingInline: "30px",
            backgroundColor: !isMemoSelected ? "#e1cef5" : "#440e7e",
            color: isMemoSelected ? "#e1cef5" : "#440e7e",
            fontSize: isMemoSelected ? "24px" : "20px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setTab("useMemo")}
        >
          useMemo
        </button>
      </div>
      {tab === "useEffect" && <HomeUseEffect />}
      {tab === "useMemo" && <HomeUseMemo />}
    </div>
  );
}

export default App;
